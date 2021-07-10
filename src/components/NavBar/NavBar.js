import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import { Link, useHistory } from "react-router-dom";
const NavBar = () => {
  const [token, setToken] = useState(null);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const history = useHistory();
  useEffect(() => {
    !token && setToken(JSON.parse(localStorage.getItem("token")));
  }, [token]);
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setToken(null);
    history.push("/");
  };
  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.title}>
          My<span>Jobs</span>
        </div>
        {token ? (
          <div className={styles.login}>
            <Link to="/post">
              <span className={styles.post}>Post a Job</span>
            </Link>
            <div>
              <div
                onClick={() => setLogoutOpen(true)}
                className={styles.profile}
              >
                <span>{token.name[0]}</span>
              </div>
              {logoutOpen && (
                <span onClick={logout} className={styles.logout}>
                  Logout
                </span>
              )}
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className={styles.loginBtn}>Login/Signup</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
