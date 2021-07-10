import React, { useState } from "react";
import Modal from "../../modal";
import styles from "./PostCard.module.scss";

const PostCard = ({ post }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.cardWrapper}>
        <h3 className={styles.heading}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.footer}>
          <span className={styles.location}>{post.location}</span>
          <button onClick={() => setOpen(true)}>View Application</button>
        </div>
      </div>
      {open && <Modal setOpen={setOpen} />}
    </>
  );
};

export default PostCard;
