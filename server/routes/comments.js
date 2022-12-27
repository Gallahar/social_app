import express from "express";
import {
  getComments,
  createComment,
  deleteComment,
} from "../controllers/comment.js";

const router = express.Router();
router.get("/", getComments);
router.post("/", createComment);
router.delete("/", deleteComment);

export default router;
