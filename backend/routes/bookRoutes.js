import express from "express";
import { findAll } from "../controllers/booksController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, findAll);
// router.route("/create").post();

export default router;
