import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

interface HeaderProps {
  IsAuthenticated: boolean,
  onProfileClick: () => void,
  username?:string
}

const Header = ({ onProfileClick,username }: HeaderProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.mainLogo}>
        <Link to={"/mainPage"}><h1>Commercy</h1></Link>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.navBarContainer}>
          <h3>Liked</h3>
            <h3 onClick={onProfileClick}>{username ? username : "Profile"}</h3>
        </div>
      </div>
      <div className={styles.dividingLine}></div>
    </div>
  );
};

export default Header;
