import React, { useState } from "react";
import styles from "./Navbar.module.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalcartItems } = useContext(ShopContext);
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/">
          <p>OnKart</p>
        </Link>
      </div>
      <div className={styles.nav_menu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </div>
      <div className={styles.nav_login_cart}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className={styles.nav_cart_count}>{getTotalcartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
