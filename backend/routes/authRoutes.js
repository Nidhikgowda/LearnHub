import { Router } from "express";
import {
  register,
  login,
  getMe
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

// Register a new student
router.post("/register", register);

// Log in
router.post("/login", login);

// Get the logged-in user's profile
router.get("/me", protect, getMe);

export default router;
