import React from "react";
import styles from "./Homepage.module.scss";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <h1>
              Welcome to My<span>Jobs</span>
            </h1>
            <button>Get Started</button>
          </div>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <p>Why Us</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardHeading}>Get More Visibility</p>
            <p className={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardHeading}>Get More Visibility</p>
            <p className={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardHeading}>Get More Visibility</p>
            <p className={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.companiesWrapper}>
        <p>Companies Who Trust Us</p>
        <div className={styles.companies}></div>
      </div>
    </div>
  );
};

export default Homepage;
