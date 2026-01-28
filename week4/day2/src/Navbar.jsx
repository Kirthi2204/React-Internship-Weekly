import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const { isAuth, logout } = useAuth();

  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/admin">Admin</Link>

      {isAuth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
