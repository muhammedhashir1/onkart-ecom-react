import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <img src={footer_logo} alt="footer_logo" />
        <p>OnKart</p>
      </div>
      <ul className={styles.footer_links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.footer_social_icon}>
        <div className={styles.footer_icons_container}>
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className={styles.footer_icons_container}>
          <img src={pintrest_icon} alt="pintrest_icon" />
        </div>
        <div className={styles.footer_icons_container}>
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <hr />
        <p>Copyright@2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
