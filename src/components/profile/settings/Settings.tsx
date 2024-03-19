import React from "react";
import { Link } from "react-router-dom";
import styles from "./settings.module.scss";
import ArrowIcon from "../../ui/icon/ArrowIcon";

const Settings = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <Link to={"*"} className={styles.container}>
          <div className={styles.articleContainer}>
            <h2>Cookies settings</h2>
            <p>Configure your privacy preferences</p>
          </div>
          <ArrowIcon width={50} height={50} />
        </Link>
        <Link to={"*"} className={styles.container}>
          <div className={styles.articleContainer}>
            <h2>Newsletter</h2>
            <p>
              Select your interests and receive the latest news and trends each
              week.
            </p>
          </div>
          <ArrowIcon width={50} height={50} />
        </Link>
        <Link to={"*"} className={styles.container}>
          <div className={styles.articleContainer}>
            <h2>Topic</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              blan.
            </p>
          </div>
          <ArrowIcon width={50} height={50} />
        </Link>
      </div>
    </div>
  );
};

export default Settings;
