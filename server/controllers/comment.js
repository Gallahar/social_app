import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => {
  const query = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId = ?
    ORDER BY c.created DESC`;
  db.query(query, [req.query.postId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data);
  });
};

export const createComment = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is required");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query =
      "INSERT INTO comments (`description`,`created`,`userId`,`postId`) VALUES (?)";
    const values = [
      req.body.description,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      data.id,
      req.body.postId,
    ];
    db.query(query, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("comment has been created!");
    });
  });
};

export const deleteComment = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = "DELETE FROM comments WHERE `userId` = ? AND `id` = ?";
    db.query(query, [data.id, req.query.id], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("Comment was deleted!");
    });
  });
};
