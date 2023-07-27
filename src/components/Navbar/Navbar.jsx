import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navLinkContainer}>
        <li>
          <NavLink to="/">Home</NavLink>
          {/* <Link to="/">Home</Link> class active  */}
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
