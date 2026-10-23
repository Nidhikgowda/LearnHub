
import { Link, useParams } from "react-router-dom";
import "./CourseDetails.css";

const courses = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and APIs.",
    price: 1999,
    icon: "🌐",
    duration: "12 Weeks",
    level: "Beginner",
    topics: ["HTML and CSS", "JavaScript", "React.js", "Node.js and Express"],
  },
  {
    id: "2",
    title: "Python Programming",
    description: "Learn Python basics and develop useful programs.",
    price: 999,
    icon: "🐍",
    duration: "6 Weeks",
    level: "Beginner",
    topics: ["Python Basics", "Variables and Data Types", "Functions", "Mini Projects"],
  },
  {
    id: "3",
    title: "Java Programming",
    description: "Learn Java and object-oriented programming.",
    price: 1499,
    icon: "☕",
    duration: "8 Weeks",
    level: "Beginner",
    topics: ["Java Basics", "Classes and Objects", "Inheritance", "Exception Handling"],
  },
  {
    id: "4",
    title: "UI/UX Design",
    description: "Learn design principles and user-friendly interfaces.",
    price: 1299,
    icon: "🎨",
    duration: "6 Weeks",
    level: "Beginner",
    topics: ["Design Principles", "Wireframes", "Prototyping", "User Experience"],
  },
  {
    id: "5",
    title: "Data Analytics",
    description: "Explore data analysis and visualization.",
    price: 1799,
    icon: "📊",
    duration: "10 Weeks",
    level: "Intermediate",
    topics: ["Data Basics", "Data Cleaning", "Data Analysis", "Visualization"],
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description: "Learn security concepts and safe practices.",
    price: 1599,
    icon: "🔐",
    duration: "6 Weeks",
    level: "Beginner",
    topics: ["Security Basics", "Common Threats", "Network Security", "Safe Practices"],
  },
];

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <section className="container section course-details-page">
        <h1>Course Not Found</h1>
        <Link to="/courses" className="btn">
          Back to Courses
        </Link>
      </section>
    );
  }

  return (
    <section className="container section course-details-page">
      <div className="details-card">
        <div className="details-icon">{course.icon}</div>
        <span className="eyebrow">COURSE DETAILS</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>

        <div className="details-info">
          <div>
            <strong>Level</strong>
            <span>{course.level}</span>
          </div>
          <div>
            <strong>Duration</strong>
            <span>{course.duration}</span>
          </div>
          <div>
            <strong>Price</strong>
            <span>₹{course.price}</span>
          </div>
        </div>

        <h2>What You Will Learn</h2>
        <ul className="topic-list">
          {course.topics.map((topic) => (
            <li key={topic}>✓ {topic}</li>
          ))}
        </ul>

        <Link to="/register" className="btn">
          Enroll Now →
        </Link>
        <Link to="/courses" className="back-link">
          Back to Courses
        </Link>
      </div>
    </section>
  );
}
