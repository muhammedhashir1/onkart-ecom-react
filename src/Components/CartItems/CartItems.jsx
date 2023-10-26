import React, { useContext } from "react";
import styles from "./CartItems.module.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalcartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(getTotalcartAmount);
  return (
    <div className={styles.cartitems}>
      <div className={styles.cartItems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className={`${styles.cartitems_format} ${styles.cartItems_format_main}`}>
                <img src={e.image} alt="image" className={styles.carticon_product_icon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.cartitems_quantity}>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className={styles.cartitems_remove_icon}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="remove_icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles.cartitems_down}>
        <div className={styles.cartitems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartitems_total_item}>
              <p>Subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartitems_total_item}>
              <h3>Total</h3>
              <h3>${getTotalcartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.cartitems_promocode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={styles.cartitems_promobox}>
            <input type="text" placeholder="Enter Code Here" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
