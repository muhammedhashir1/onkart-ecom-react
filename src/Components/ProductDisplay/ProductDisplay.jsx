import React, { useContext } from "react";

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import styles from "./ProductDisplay.module.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);
  return (
    <div className={styles.productdisplay}>
      <div className={styles.productdisplay_left}>
        <div className={styles.productdisplay_img_list}>
          <img src={product.image} alt="image" />
          <img src={product.image} alt="image" />
          <img src={product.image} alt="image" />
          <img src={product.image} alt="image" />
        </div>
        <div className={styles.productdisplay_img}>
          <img className={styles.productdisplay_main_img} src={product.image} alt="image" />
        </div>
      </div>
      <div className={styles.productdisplay_right}>
        <h1>{product.name}</h1>
        <div className={styles.productdisplay_right_stars}>
          <img src={star_icon} alt="staricon" />
          <img src={star_icon} alt="staricon" />
          <img src={star_icon} alt="staricon" />
          <img src={star_icon} alt="staricon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
        <div className={styles.productdisplay_right_price}>
          <div className={styles.productdisplay_right_price_old}>${product.old_price}</div>
          <div className={styles.productdisplay_right_price_new}>${product.new_price}</div>
        </div>
        <div className={styles.productdisplay_right_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem cumque facere repudiandae? Vel quidem modi
          labore sequi, laudantium, ea perspiciatis ullam reiciendis officia velit, ex quisquam eius quasi hic!
        </div>
        <div className={styles.productdisplay_right_size}>
          <h1>Select Size</h1>
          <div className={styles.productdisplay_right_sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addTocart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={styles.productdisplay_right_category}>
          <span>Category : </span>Women , T-Shirt ,Crop Top
        </p>
        <p className={styles.productdisplay_right_category}>
          <span>Tags : </span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
