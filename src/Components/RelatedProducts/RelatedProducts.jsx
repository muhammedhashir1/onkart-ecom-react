import React from "react";
import data_product from "../Assets/data";
import styles from "./RelatedProducts.module.css";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className={styles.relatedproducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles.relatedproducts_item}>
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
