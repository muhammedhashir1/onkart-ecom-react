import React from "react";
import styles from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={styles.descriptionbox}>
      <div className={styles.descriptionbox_navigator}>
        <div className={styles.descriptionbox_nav_box}>Description</div>
        <div className={`${styles.descriptionbox_nav_box} ${styles.descriptionbox_nav_box_fade}`}>Reviews (122)</div>
      </div>
      <div className={styles.descriptionbox_description}>
        <p>
          E-commerce, short for electronic commerce, refers to the buying and selling of goods and services using the
          internet and digital technologies. It has revolutionized the way businesses operate and how consumers shop.
        </p>
        <p>
          Online Shopping: E-commerce allows consumers to shop for products and services from the comfort of their homes
          or on the go, using websites, mobile apps, and online marketplaces.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
