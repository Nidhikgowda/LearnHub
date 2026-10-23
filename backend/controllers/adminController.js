import User from "../models/User.js";
import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";

export async function getDashboardStats(req, res, next) {
  try {
    const [totalUsers, totalCourses, totalEnrollments] =
      await Promise.all([
        User.countDocuments({ role: "student" }),
        Course.countDocuments(),
        Enrollment.countDocuments()
      ]);

    res.json({
      stats: {
        totalUsers,
        totalCourses,
        totalEnrollments
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllUsers(req, res, next) {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({ users });
  } catch (error) {
    next(error);
  }
}

export async function getAllEnrollments(req, res, next) {
  try {
    const enrollments = await Enrollment.find()
      .populate("student", "name email")
      .populate("course", "title price")
      .sort({ createdAt: -1 });

    res.json({ enrollments });
  } catch (error) {
    next(error);
  }
}
