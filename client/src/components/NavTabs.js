import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/About"
          className={
            location.pathname === "/About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Login"
          className={
            location.pathname === "/Login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/Signup"
          className={
            location.pathname === "/Signup" ? "nav-link active" : "nav-link"
          }
        >
          Signup
        </Link>
      </li>
      <li>
        <Link
          to="/Admin"
          className={
            location.pathname === "/Admin" ? "nav-link active" : "nav-link"
          }
        >
          Admin
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
