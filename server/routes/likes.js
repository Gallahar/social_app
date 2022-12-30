import express from "express";
import { getLikes, setLike, deleteLike } from "../controllers/like.js";

const router = express.Router();
router.get("/", getLikes);
router.post("/", setLike);
router.delete("/", deleteLike);

export default router;
