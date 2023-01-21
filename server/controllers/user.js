import jwt from "jsonwebtoken";
import { db } from "../connect.js";

export const getUser = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is required");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = `SELECT * from users WHERE id = ? `;
    db.query(query, [req.params.userId], (error, data) => {
      if (error) return res.status(500).json(error);
      if (data.length) {
        const { password, ...rest } = data[0];
        return res.status(200).json(rest);
      } else {
        return res.status(404).json("User not found");
      }
    });
  });
};

export const patchUser = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is required");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query =
      "UPDATE users SET `name`=?,`backgroundPic`=?,`profilePic`=?,`location`=?,`website`=? WHERE id=? ";
    db.query(
      query,
      [
        req.body.name,
        req.body.backgroundPic,
        req.body.profilePic,
        req.body.location,
        req.body.website,
        data.id,
      ],
      (error) => {
        if (error) return res.status(500).json(error);
        return res.status(200).json("user parameters was updated!");
      }
    );
  });
};

export const getSearchUser = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is required");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = `SELECT * from users WHERE id != ? `;
    db.query(query, [req.params.userId], (error, data) => {
      const [...rest] = data;
      if (error) return res.status(500).json(error);
      return res.status(200).json(rest.filter((obj) => delete obj.password));
    });
  });
};

export const getUserByName = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is required");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = `SELECT * from users WHERE name LIKE '%' ? '%' `;
    db.query(query, [req.params.name], (error, data) => {
      if (!data.length) return res.status(404).json("User not found");
      if (error) return res.status(500).json(error);
      return res.status(200).json(data.map(({ password, ...data }) => data));
    });
  });
};
