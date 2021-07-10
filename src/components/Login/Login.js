import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.scss";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    }
    //eslint-disable-next-line
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://jobs-api.squareboat.info/api/v1/auth/login", {
        email,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", JSON.stringify(data.data));
        setError(false);
        history.push("/home");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <form onSubmit={handleSubmit}>
          <span className={styles.heading}>Login</span>
          <div className={styles.inputField}>
            <label htmlFor="login">Email address</label>
            <input
              type="email"
              name="login"
              id="login"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputField}>
            <div className={styles.passwordHeading}>
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <span className={styles.error}>
                Invalid email address or password.
              </span>
            )}
          </div>
          <button className={styles.submitBtn} type="submit">
            Login
          </button>
        </form>
        <span className={styles.loginFooter}>
          New to MyJobs? <Link to="/signup">Create an account</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
