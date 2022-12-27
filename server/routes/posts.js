import express from "express";
import { createPost, getPosts, deletePost } from "../controllers/post.js";

const router = express.Router();
router.get("/", getPosts);
router.post("/", createPost);
router.delete("/", deletePost);
export default router;
