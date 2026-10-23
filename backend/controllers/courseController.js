import Course from "../models/Course.js";

export async function getCourses(req, res, next) {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ courses });
  } catch (error) {
    next(error);
  }
}

export async function getCourseById(req, res, next) {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    res.json({ course });
  } catch (error) {
    next(error);
  }
}

export async function createCourse(req, res, next) {
  try {
    const {
      title,
      description,
      instructor,
      category,
      price,
      duration,
      image,
      topics
    } = req.body;

    if (
      !title ||
      !description ||
      !instructor ||
      !category ||
      price === undefined ||
      !duration
    ) {
      return res.status(400).json({
        message: "Please provide all required course details."
      });
    }

    const course = await Course.create({
      title,
      description,
      instructor,
      category,
      price,
      duration,
      image,
      topics
    });

    res.status(201).json({
      message: "Course created successfully.",
      course
    });
  } catch (error) {
    next(error);
  }
}

export async function updateCourse(req, res, next) {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    res.json({
      message: "Course updated successfully.",
      course
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteCourse(req, res, next) {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found."
      });
    }

    res.json({
      message: "Course deleted successfully."
    });
  } catch (error) {
    next(error);
  }
}
