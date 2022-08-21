import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
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
