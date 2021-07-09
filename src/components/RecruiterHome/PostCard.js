import React from "react";
import styles from "./PostCard.module.scss";

const PostCard = ({ post }) => {
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.heading}>{post.title}</h3>
      <p className={styles.description}>{post.description}</p>
      <div className={styles.footer}>
        <span className={styles.location}>{post.location}</span>
        <button>View Application</button>
      </div>
    </div>
  );
};

export default PostCard;
