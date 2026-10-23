import { Router } from "express";
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = Router();

// Get all courses
router.get("/", getCourses);

// Get one course
router.get("/:id", getCourseById);

// Admin-only course management
router.post("/", protect, adminOnly, createCourse);
router.put("/:id", protect, adminOnly, updateCourse);
router.delete("/:id", protect, adminOnly, deleteCourse);

export default router;
