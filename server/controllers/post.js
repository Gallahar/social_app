import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
    ORDER BY p.created DESC`;
    db.query(query, [data.id, data.id], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json(data);
    });
  });
};
export const createPost = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query =
      "INSERT INTO posts (`description`,`img`,`created`,`userId`) VALUES (?)";
    const values = [
      req.body.description,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      data.id,
    ];
    db.query(query, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(201).json("post has been created!");
    });
  });
};

export const deletePost = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = "DELETE FROM posts WHERE `userId` = ? AND `id` = ?";
    db.query(query, [data.id, req.query.id], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("Post was deleted!");
    });
  });
};
