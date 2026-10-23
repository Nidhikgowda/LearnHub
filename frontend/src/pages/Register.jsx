
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const savedUser = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(savedUser));
    alert("Registration successful! Please log in.");
    navigate("/login");
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <span className="eyebrow">START LEARNING</span>
        <h1>Create an Account</h1>
        <p>Join LearnHub and explore new skills.</p>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password (minimum 6 characters)"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </section>
  );
}
