import React, { useState } from "react";
import styles from "./ResetPassword.module.scss";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [userDetails, setUserDetails] = useState({
    password: "",
    confirm_password: "",
  });

  // const handleSubmit = () => {

  // }
  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <form>
          <span className={styles.heading}>Reset Your Password</span>
          <p>Enter your new password below.</p>
          <div className={styles.inputField}>
            <label htmlFor="email">New password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="email">Confirm new password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={userDetails.confirm_password}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirm_password: e.target.value,
                })
              }
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
