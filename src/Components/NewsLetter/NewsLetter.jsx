import React from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
