// / Improved code
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  return (
    <div className="navbar" id={isExpanded ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink exact activeClassName="active" to="/">
          Home{" "}
        </NavLink>
        <NavLink exact activeClassName="active" to="/projects">
          Projects{" "}
        </NavLink>
        <NavLink exact activeClassName="active" to="/experience">
          Experience{" "}
        </NavLink>
        <NavLink exact activeClassName="active" to="/achievements">
          Achievements{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

// Improvement tips:
// 1. Avoid using "expandNavbar" as a variable name, use a more descriptive name such as "isExpanded"
// 2. Use arrow functions for callbacks when possible, such as onClick={() => setIsExpanded((prev) => !prev)}
