
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    instructor: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    duration: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ""
    },
    topics: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
