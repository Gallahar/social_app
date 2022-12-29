import express from "express";
import {
  setFollow,
  deleteFollow,
  getFollow,
} from "../controllers/relationship.js";

const router = express.Router();
router.get("/", getFollow);
router.post("/", setFollow);
router.delete("/", deleteFollow);

export default router;
