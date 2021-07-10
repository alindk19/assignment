import React, { useState } from "react";
import styles from "./ForgotPassword.module.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://jobs-api.squareboat.info/api/v1/auth/resetpassword", {
        params: {
          email,
        },
      })
      .then(({ data: { data } }) => {
        history.push({
          pathname: "/reset-password",
          state: {
            token: data.token,
          },
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
