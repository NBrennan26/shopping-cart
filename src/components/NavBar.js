import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav id="navbar">
      <ul className="nav-links">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
