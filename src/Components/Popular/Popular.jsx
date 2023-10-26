import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import styles from "./Popular.module.css";

const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles.popular_item}>
        {data_product.map((item) => (
          <Item
            key={item.id} // Use the item's unique identifier as the key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
