import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";

export async function enrollInCourse(req, res, next) {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        message: "Course ID is required."
      });
    }

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    const existingEnrollment = await Enrollment.findOne({
      student: req.user._id,
      course: courseId
    });

    if (existingEnrollment) {
      return res.status(409).json({
        message: "You are already enrolled in this course."
      });
    }

    const enrollment = await Enrollment.create({
      student: req.user._id,
      course: courseId
    });

    res.status(201).json({
      message: "Successfully enrolled in the course.",
      enrollment
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "You are already enrolled in this course."
      });
    }

    next(error);
  }
}

export async function getMyEnrollments(req, res, next) {
  try {
    const enrollments = await Enrollment.find({
      student: req.user._id
    })
      .populate("course")
      .sort({ createdAt: -1 });

    res.json({ enrollments });
  } catch (error) {
    next(error);
  }
}

export async function updateProgress(req, res, next) {
  try {
    const { progress } = req.body;

    if (
      typeof progress !== "number" ||
      progress < 0 ||
      progress > 100
    ) {
      return res.status(400).json({
        message: "Progress must be a number between 0 and 100."
      });
    }

    const enrollment = await Enrollment.findOne({
      _id: req.params.id,
      student: req.user._id
    });

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found."
      });
    }

    enrollment.progress = progress;

    if (progress === 100) {
      enrollment.status = "completed";
    } else {
      enrollment.status = "active";
    }

    await enrollment.save();

    res.json({
      message: "Progress updated successfully.",
      enrollment
    });
  } catch (error) {
    next(error);
  }
}
