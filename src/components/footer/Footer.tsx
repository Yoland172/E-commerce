import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sectionLine}></div>
      <ul className={styles.socialsContainer}>
        <li className={styles.social}>Tiktok</li>
        <li className={styles.social}>Instagram</li>
        <li className={styles.social}>Facebook</li>
        <li className={styles.social}>X</li>
        <li className={styles.social}>Pinterest</li>
        <li className={styles.social}>Youtube</li>
      </ul>

      <div className={styles.infoContainer}>
        <ul className={styles.infoSection}>
          <li className={styles.title}> Help</li>
          <li className={styles.info}>Shiping</li>
          <li className={styles.info}>Payment and invoices</li>
          <li className={styles.info}>Exchanges, returns and refunds</li>
        </ul>
        <ul className={styles.infoSection}>
          <li className={styles.title}>Company</li>
          <li className={styles.info}>About us</li>
          <li className={styles.info}>Join life</li>
          <li className={styles.info}>Stores</li>
        </ul>
        <ul className={styles.infoSection}>
          <li className={styles.title}>Policies</li>
          <li className={styles.info}>Privacy Policy</li>
          <li className={styles.info}>Purchase condition</li>
        </ul>
      </div>
      <div className={styles.privacyContainer}>
        <div className={styles.languageContainer}>
        <p>Ukrainian</p>
        <div></div>
        <p>English</p>
        </div>
        <h3>© All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
