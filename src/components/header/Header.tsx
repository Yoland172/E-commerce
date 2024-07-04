import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import LinkElement from "../ui/linkElement/LinkElement";
interface HeaderProps {
  IsAuthenticated: boolean;
  onProfileClick: () => void;
  username?: string;
}

const Header = ({ onProfileClick, username }: HeaderProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.mainLogo}>
          <Link to={"/mainPage"}>
            <h1>Commercy</h1>
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.navBarContainer}>
          <LinkElement title="Liked" fontSize="1em" link="/"/>
          <div onClick={onProfileClick}><LinkElement title={username || "Profile"} link="*" fontSize="1em"/></div>
        </div>
      </div>
      <div className={styles.dividingLine}></div>
    </div>
  );
};

export default Header;
