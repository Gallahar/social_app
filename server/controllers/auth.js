import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [req.body.username], (error, data) => {
    if (error) return res.status(500).json(error);
    if (data.length) return res.status(409).json("user already exist");

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
    const dataArr = [
      req.body.username,
      req.body.email,
      hashPassword,
      req.body.name,
    ];
    db.query(query, [dataArr], (error, data) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(201).json("User has been created!");
    });
  });
};

export const login = (req, res) => {
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [req.body.username], (error, data) => {
    if (error) {
      return res.status(500).json(error);
    }
    if (data.length === 0) {
      return res.status(404).json("user not found");
    }
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword) {
      return res.status(400).json("wrong username/password");
    }
    const jwtToken = jwt.sign({ id: data[0].id }, "key");
    const { password, ...rest } = data[0];
    res
      .cookie("accessToken", jwtToken, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("user successfully logout");
};
