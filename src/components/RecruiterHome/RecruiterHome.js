import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./RecruiterHome.module.scss";
import { useHistory } from "react-router";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

const LoginHome = () => {
  const [posts, setPosts] = useState({
    data: [],
    metadata: {},
  });
  const history = useHistory();
  useEffect(() => {
    fetchPosts();
    //eslint-disable-next-line
  }, []);

  const fetchPosts = () => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    if (!token) {
      history.push("/");
      return;
    }
    axios
      .get("https://jobs-api.squareboat.info/api/v1/recruiters/jobs", {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        if (data.code === 200) {
          setPosts(data.data);
        }
      });
  };
  return (
    <div className={styles.homeWrapper}>
      <h2>Jobs posted by you</h2>
      {/* <PostCard></PostCard> */}
      {posts?.data.length ? (
        <div className={styles.postsWrapper}>
          {posts?.data.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      ) : (
        <div className={styles.noPostWrapper}>
          <h3>Your posted jobs will show here!</h3>
          <Link to="/post">
            <button>Post a Job</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginHome;
