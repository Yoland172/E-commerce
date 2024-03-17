import React from "react";
import styles from "./profile.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface ProfileNavBarProps {
  tab: any;
}

const ProfileNavBar = ({ tab }: ProfileNavBarProps) => {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navBar}>
        <Link to={"/profile/wishlist"}>
          <li className={classNames(styles.navBarItem, tab =="wishlist" && styles.active)}>Favourities</li>
        </Link>
        <Link to={"/profile/info"}>
          <li className={classNames(styles.navBarItem, tab =="info" && styles.active)}>Info</li>
        </Link>
        <Link to={"/profile/settings"}>
          <li className={classNames(styles.navBarItem, tab =="settings" && styles.active)}>Setting</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileNavBar;
