import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/toDo">
        <span>To Do List</span>
      </Link>
      <Link to="/">
        <span className="homeSpan">Home</span>
      </Link>
    </div>
  );
}
