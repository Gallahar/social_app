import express from "express";
import {
  getSearchUser,
  getUser,
  getUserByName,
  patchUser,
} from "../controllers/user.js";

const router = express.Router();
router.get("/find/:userId", getUser);
router.put("/", patchUser);
router.get("/:userId", getSearchUser);
router.get("/name/:name", getUserByName);
export default router;
