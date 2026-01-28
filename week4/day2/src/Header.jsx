import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2>TechBlog</h2>
      </div>

      <nav className="header-right">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}
