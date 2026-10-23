
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO LEARNHUB</span>

          <h1>
            Learn New Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Discover online courses, improve your skills, and
            take the next step toward your dream career.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="btn">
              Explore Courses →
            </Link>

            <Link to="/register" className="btn btn-outline">
              Join for Free
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Learn</strong>
              <span>New skills</span>
            </div>

            <div>
              <strong>Practice</strong>
              <span>Build knowledge</span>
            </div>

            <div>
              <strong>Grow</strong>
              <span>Your career</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/src/assets/hero.png"
            alt="Online learning"
          />
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">WHY LEARNHUB?</span>
          <h2>Learning Made Simple</h2>
          <p>Everything you need to start learning online.</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Learn at Your Pace</h3>
            <p>
              Learn anytime and improve your knowledge step by step.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Practical Skills</h3>
            <p>
              Explore programming, web development, and technology.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Achieve Your Goals</h3>
            <p>
              Develop useful skills for your education and career.
            </p>
          </article>
        </div>

        <div className="center-action">
          <Link to="/courses" className="btn">
            Browse All Courses
          </Link>
        </div>
      </section>
    </>
  );
}
