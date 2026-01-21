import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">E-Commerce Application</h1>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
