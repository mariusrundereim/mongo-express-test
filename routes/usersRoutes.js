import express from "express";
import { getUser, createUser } from "../controllers/usersController.js";

const router = express.Router();
router.get("/", getUser);
router.post("/", createUser);

export default router;
