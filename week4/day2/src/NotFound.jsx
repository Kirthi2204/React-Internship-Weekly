import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}
