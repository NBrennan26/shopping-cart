import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <li>
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/cart">Check Out</NavLink>
        </li>
        |
        <li>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
