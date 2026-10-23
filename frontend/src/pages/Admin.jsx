
import { Link, Navigate } from "react-router-dom";

const courses = [
  { id: 1, title: "Full Stack Web Development", category: "Web Development", price: 1999 },
  { id: 2, title: "Python Programming", category: "Programming", price: 999 },
  { id: 3, title: "Java Programming", category: "Programming", price: 1499 },
  { id: 4, title: "UI/UX Design", category: "Design", price: 1299 },
  { id: 5, title: "Data Analytics", category: "Data", price: 1799 },
  { id: 6, title: "Cybersecurity Fundamentals", category: "Security", price: 1599 },
];

export default function Admin() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="container section">
      <div className="section-heading">
        <span className="eyebrow">ADMIN PANEL</span>
        <h1>Manage Courses</h1>
        <p>View the courses available on LearnHub.</p>
      </div>

      <div className="admin-summary">
        <div className="admin-stat">
          <span>Total Courses</span>
          <h2>{courses.length}</h2>
        </div>

        <div className="admin-stat">
          <span>Course Categories</span>
          <h2>{new Set(courses.map((course) => course.category)).size}</h2>
        </div>
      </div>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.category}</td>
                <td>₹{course.price}</td>
                <td>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-link"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="admin-note">
        Note: This is a demo admin page. Real admin permissions and course
        management will be connected to the backend later.
      </p>
    </section>
  );
}
