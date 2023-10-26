import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import styles from "./Offers.module.css";

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Sellers Product</p>
        <button>Check Now</button>
      </div>
      <div className={styles.offers_right}>
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
};

export default Offers;
