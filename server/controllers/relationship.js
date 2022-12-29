import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getFollow = (req, res) => {
  const query =
    "SELECT followerUserId FROM relationships WHERE followedUserId = ?";
  db.query(query, [req.query.followedUserId], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(200).json(data.map((follow) => follow.followerUserId));
  });
};

export const setFollow = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query =
      "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)";
    const values = [data.id, req.body.userId];
    db.query(query, [values], (error) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("You successfully follow");
    });
  });
};

export const deleteFollow = (req, res) => {
  const jwtToken = req.cookies.accessToken;
  if (!jwtToken) return res.status(401).json("Authorization is requried");
  jwt.verify(jwtToken, "key", (error, data) => {
    if (error)
      return res.status(403).json("Authorization is not valid/expired");
    const query =
      "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";
    db.query(query, [data.id, req.query.userId], (error) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("You successfully unfollowed user");
    });
  });
};
