import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const socilas = [
    "Tiktok",
    "Instagram",
    "Facebook",
    "X",
    "Pinterest",
    "Youtube",
  ];

  const helpContainer = [
    "Shiping",
    "Payment and invoices",
    "Exchanges, returns and refunds",
  ];

  const companyContainer = ["About us", "Join life", "Stores"];

  const policiesContainer = ["Privacy Policy", "Purchase condition"];

  return (
    <div className={styles.main}>
      <div className={styles.sectionLine}></div>
      <ul className={styles.socialsContainer}>
        {socilas.map((el) => {
          return <li className={styles.social}>{el}</li>;
        })}
      </ul>

      <div className={styles.infoContainer}>
        <ul className={styles.infoSection}>
          <li className={styles.title}> Help</li>
          {helpContainer.map((el) => {
            return <li className={styles.info}>{el}</li>;
          })}
        </ul>
        <ul className={styles.infoSection}>
          <li className={styles.title}>Company</li>
          {companyContainer.map((el) => {
            return <li className={styles.info}>{el}</li>;
          })}
        </ul>
        <ul className={styles.infoSection}>
          <li className={styles.title}>Policies</li>
          {policiesContainer.map((el) => {
            return <li className={styles.info}>{el}</li>;
          })}
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
