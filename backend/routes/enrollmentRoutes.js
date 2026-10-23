import { Router } from "express";
import {
  enrollInCourse,
  getMyEnrollments,
  updateProgress
} from "../controllers/enrollmentController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

// Enroll in a course
router.post("/", protect, enrollInCourse);

// View my enrolled courses
router.get("/my-courses", protect, getMyEnrollments);

// Update course progress
router.patch("/:id/progress", protect, updateProgress);

export default router;
