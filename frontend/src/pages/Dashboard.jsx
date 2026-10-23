
import { Link, Navigate } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="container section">
      <div className="dashboard-welcome">
        <span className="eyebrow">STUDENT DASHBOARD</span>
        <h1>Welcome, {user.name}! 👋</h1>
        <p>Continue learning and build your skills step by step.</p>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <div className="feature-icon">📚</div>
          <h3>Explore Courses</h3>
          <p>Discover courses in programming, design, and technology.</p>
          <Link to="/courses" className="btn">
            Browse Courses
          </Link>
        </article>

        <article className="dashboard-card">
          <div className="feature-icon">👤</div>
          <h3>My Profile</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </article>

        <article className="dashboard-card">
          <div className="feature-icon">🎯</div>
          <h3>My Learning</h3>
          <p>Your learning dashboard is ready. Enrolled courses will appear here after enrollment is connected.</p>
          <Link to="/courses" className="text-link">
            Find a Course →
          </Link>
        </article>
      </div>
    </section>
  );
}
