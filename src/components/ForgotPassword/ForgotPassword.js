import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [userDetails, setUserDetails] = useState({
    type: "",
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    skills: "",
  });
  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <form>
          <span className={styles.heading}>Forgot your password?</span>
          <p>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <div className={styles.inputField}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            {/* <span className={styles.error}>This field is mandatory.</span> */}
          </div>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
