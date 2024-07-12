import React from "react";
import LinkElement from "@components/ui/linkElement/LinkElement";
import styles from "./Footer.module.scss";

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
        {socilas.map((el, index) => {
       return <LinkElement title={el} link="/" fontSize="0.8em" key={index}/>;
        })}
      </ul>

      <div className={styles.infoContainer}>
        <ul className={styles.infoSection}>
          <li className={styles.title}> Help</li>
          {helpContainer.map((el, index) => {
          return <LinkElement title={el} link="/" fontSize="0.8em" key={index}/>;
          })}
        </ul>
        <ul className={styles.infoSection}>
          <li className={styles.title}>Company</li>
          {companyContainer.map((el, index) => {
             return <LinkElement title={el} link="/" fontSize="0.8em" key={index}/>;
          })}
        </ul>
        <ul className={styles.infoSection}>
          <li className={styles.title}>Policies</li>
          {policiesContainer.map((el, index) => {
            return <LinkElement title={el} link="/" fontSize="0.8em" key={index}/>;
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
