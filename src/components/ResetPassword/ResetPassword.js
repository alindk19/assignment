import React, { useEffect, useState } from "react";
import styles from "./ResetPassword.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const ResetPassword = (props) => {
  const [userDetails, setUserDetails] = useState({
    password: "",
    confirmPassword: "",
  });
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    verifyToken();
    //eslint-disable-next-line
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jobs-api.squareboat.info/api/v1/auth/resetpassword", {
        ...userDetails,
        token: location.state.token,
      })
      .then(({ data: { data } }) => {
        localStorage.setItem("token", JSON.stringify(data));
        history.push("/login");
      });
  };
  const verifyToken = () => {
    const verificationToken = location?.state?.token;
    axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/auth/resetpassword/${verificationToken}`
      )
      .then((res) => {})
      .catch((err) => {
        alert(err);
        history.push("/");
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <form onSubmit={handleSubmit}>
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
              value={userDetails.confirmPassword}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
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
