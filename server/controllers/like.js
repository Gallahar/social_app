import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const query = "SELECT userId FROM likes WHERE postId = ?";
  db.query(query, [req.query.postId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

export const setLike = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
    const values = [data.id, req.body.postId];
    db.query(query, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("post has been liked!");
    });
  });
};

export const deleteLike = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";
    db.query(query, [data.id, req.query.postId], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("Post was unliked!");
    });
  });
};
