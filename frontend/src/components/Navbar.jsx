import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Hinglish Sentiment AI</h2>

      {/* ✅ ADD THIS CLASS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/analytics">Analytics</Link>
        <span className="btn">Try Another</span>
      </div>
    </div>
  );
}