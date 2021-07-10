import React, { useEffect, useState } from "react";
import styles from "./Signup.module.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    userRole: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: "",
  });
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/home");
    }
    //eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://jobs-api.squareboat.info/api/v1/auth/register",
        userDetails
      )
      .then(({ data }) => {
        if (data.code === 201) {
          localStorage.setItem("token", JSON.stringify(data.data));
          history.push("/homepage");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <form onSubmit={handleSubmit}>
          <span className={styles.heading}>Signup</span>
          <div className={styles.type}>
            <label htmlFor="">I'm a</label>
            <br />
            <input
              className={
                userDetails.userRole === 0
                  ? styles.selected
                  : styles.nonSelected
              }
              onClick={() => setUserDetails({ ...userDetails, userRole: 0 })}
              type="button"
              value="Recruiter"
            />
            <input
              className={
                userDetails.userRole === 1
                  ? styles.selected
                  : styles.nonSelected
              }
              onClick={() => setUserDetails({ ...userDetails, userRole: 1 })}
              type="button"
              value="Candidate"
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
            <span className={styles.error}>This field is mandatory.</span>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="email">Email address*</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  email: e.target.value,
                })
              }
            />
            <span className={styles.error}>This field is mandatory.</span>
          </div>
          <div className={styles.password}>
            <div className={styles.inputField}>
              <div className={styles.passwordHeading}>
                <label htmlFor="password">Create Password*</label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                required
              />
            </div>
            <div className={styles.inputField}>
              <div className={styles.passwordHeading}>
                <label htmlFor="password">Confirm Password*</label>
              </div>
              <input
                type="password"
                name="password"
                id="confirm-password"
                placeholder="Enter your password"
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
              <span className={styles.error}>This field is mandatory.</span>
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.passwordHeading}>
              <label htmlFor="password">Skills</label>
            </div>
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="Enter comma separated skills"
              value={userDetails.skills}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  skills: e.target.value,
                })
              }
              required
            />
            {/* <span className={styles.error}>This field is mandatory.</span> */}
          </div>
          <button className={styles.submitBtn} type="submit">
            Signup
          </button>
        </form>
        <span className={styles.loginFooter}>
          Have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
