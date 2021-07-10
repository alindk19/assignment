import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./PostJob.module.scss";

const PostJob = () => {
  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    location: "",
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    const { token } = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    axios
      .post("https://jobs-api.squareboat.info/api/v1/jobs/", postDetails, {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        if (data.code === 201) {
          alert("Job post created");
          history.push("/home");
        } else {
          alert("Some error occurred");
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
          <span className={styles.heading}>Post a Job</span>

          <div className={styles.inputField}>
            <label htmlFor="jobTitle">Job title*</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              required
              value={postDetails.title}
              onChange={(e) =>
                setPostDetails({ ...postDetails, title: e.target.value })
              }
            />
          </div>
          <div className={`${styles.inputField} ${styles.description}`}>
            <label htmlFor="description">Description*</label>
            <textarea
              type="text"
              name="description"
              placeholder="Enter job description"
              required
              value={postDetails.description}
              onChange={(e) =>
                setPostDetails({ ...postDetails, description: e.target.value })
              }
              rows={10}
            />
          </div>
          <div className={styles.inputField}>
            <div className={styles.passwordHeading}>
              <label htmlFor="location">Location</label>
            </div>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
              value={postDetails.location}
              onChange={(e) =>
                setPostDetails({
                  ...postDetails,
                  location: e.target.value,
                })
              }
              required
            />
            <span className={styles.error}>All fields are mandatory.</span>
          </div>
          <button className={styles.submitBtn} type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
