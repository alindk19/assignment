import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.title}>
          My<span>Jobs</span>
        </div>
        <Link to="/login">
          <button className={styles.loginBtn}>Login/Signup</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
