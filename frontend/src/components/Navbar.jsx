
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    closeMenu();
    navigate("/login");
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-logo">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="LearnHub logo"
            >
              <path d="M32 5 60 18 32 31 4 18 32 5Z" fill="#A78BFA" />
              <path d="M12 23v9l20 10 20-10v-9L32 35 12 23Z" fill="#7C3AED" />
              <path d="M9 36c8-4 16-2 23 4v18C23 52 16 50 9 54V36Z" fill="#C4B5FD" />
              <path d="M55 36c-8-4-16-2-23 4v18c9-6 16-8 23-4V36Z" fill="#8B5CF6" />
              <path d="M32 40v18" stroke="#FFFFFF" strokeWidth="2" />
              <path d="M56 20v13" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
              <circle cx="56" cy="36" r="3" fill="#FBBF24" />
            </svg>
          </span>

          <span className="brand-name">
            <span className="brand-title">
              Learn<span>Hub</span>
            </span>
            <small>LEARN • GROW • SUCCEED</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/courses" onClick={closeMenu}>
            Courses
          </NavLink>

          {token && (
            <NavLink to="/dashboard" onClick={closeMenu}>
              Dashboard
            </NavLink>
          )}

          {!token ? (
            <>
              <Link to="/login" className="login-link" onClick={closeMenu}>
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-small"
                onClick={closeMenu}
              >
                Get Started ↗
              </Link>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-small"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
