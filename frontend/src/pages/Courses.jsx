
import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and APIs.",
    category: "Web Development",
    price: 1999,
    icon: "🌐",
    level: "Beginner",
  },
  {
    id: "2",
    title: "Python Programming",
    description: "Learn Python basics and develop useful programs.",
    category: "Programming",
    price: 999,
    icon: "🐍",
    level: "Beginner",
  },
  {
    id: "3",
    title: "Java Programming",
    description: "Learn Java, classes and object-oriented programming.",
    category: "Programming",
    price: 1499,
    icon: "☕",
    level: "Beginner",
  },
  {
    id: "4",
    title: "UI/UX Design",
    description: "Understand design principles and user-friendly interfaces.",
    category: "Design",
    price: 1299,
    icon: "🎨",
    level: "Beginner",
  },
  {
    id: "5",
    title: "Data Analytics",
    description: "Explore data analysis and visualization basics.",
    category: "Data",
    price: 1799,
    icon: "📊",
    level: "Intermediate",
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description: "Learn security concepts, threats and safe practices.",
    category: "Security",
    price: 1599,
    icon: "🔐",
    level: "Beginner",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section container">
      <div className="section-heading">
        <span className="eyebrow">OUR COURSES</span>
        <h1>Explore Our Courses</h1>
        <p>Choose a course and start learning new skills.</p>
      </div>

      <div className="course-filters">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-icon">{course.icon}</div>

              <span className="course-category">{course.category}</span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-meta">
                <span>{course.level}</span>
                <strong>₹{course.price}</strong>
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="btn course-button"
              >
                View Course →
              </Link>
            </article>
          ))
        ) : (
          <p>No courses found. Try another search.</p>
        )}
      </div>
    </section>
  );
}
