import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles.hero_hand_icon}>
            <p>New</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.hero_latest_btn}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
      <div className={styles.hero_right}>
        <img src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
