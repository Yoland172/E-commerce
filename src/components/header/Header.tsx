import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.mainLogo}>
          <h1>Commercy</h1>
        </div>
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput}/>
            <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.navBarContainer}>    
        <h3>Liked</h3>
        <h3>Profile</h3>
        </div>
      </div>
      <div className={styles.dividingLine}></div>
    </div>
  );
};

export default Header;