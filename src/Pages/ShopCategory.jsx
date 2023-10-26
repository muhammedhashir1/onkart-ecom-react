import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import styles from "./css/ShopCategory.module.css";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={styles.shop_category}>
      <img className={styles.shopcategory_banner} src={props.banner} alt="banner" />
      <div className={styles.shopcategory_indexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className={styles.shopcategory_sort}>
          sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className={styles.shopcategory_products}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            // Make sure to return the Item component
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.shopcategory_loadmore}>Explore More.</div>
    </div>
  );
};

export default ShopCategory;
