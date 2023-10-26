import React from "react";
import new_collection from "../Assets/new_collections";
import styles from "./NewCollections.module.css";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className={styles.new_collections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={styles.collections}>
        {new_collection.map((item) => (
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

export default NewCollections;
