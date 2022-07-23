import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <span>To Do List</span>
      </Link>
      <Link to="/erased">
        <span className="homeSpan">Erase List</span>
      </Link>
    </div>
  );
}
