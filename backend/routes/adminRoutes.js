import { Router } from "express";
import {
  getDashboardStats,
  getAllUsers,
  getAllEnrollments
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = Router();

// All routes require admin access
router.use(protect, adminOnly);

// Dashboard statistics
router.get("/stats", getDashboardStats);

// View all users
router.get("/users", getAllUsers);

// View all enrollments
router.get("/enrollments", getAllEnrollments);

export default router;
