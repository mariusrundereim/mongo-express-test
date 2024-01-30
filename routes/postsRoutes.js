import express from "express";
import {
  createPost,
  getAllPosts,
  getPostsByUser,
} from "../controllers/postsController.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/posts", getPostsByUser);

export default router;
