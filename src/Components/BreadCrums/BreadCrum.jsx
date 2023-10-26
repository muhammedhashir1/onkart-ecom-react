import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import styles from "./BreadCrum.module.css";

const BreadCrum = (props) => {
  const { product } = props;

  // // Check if product exists before accessing its properties
  // if (!product) {
  //   return null; // Or provide some default behavior
  // }

  return (
    <div className={styles.breadcrum}>
      HOME <img src={arrow_icon} alt="arrow_icon" />
      SHOP <img src={arrow_icon} alt="arrow_icon" />
      {product.category} <img src={arrow_icon} alt="arrow_icon" /> {product.name}
    </div>
  );
};

export default BreadCrum;
