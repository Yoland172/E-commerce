import React from "react";
import styles from "./profileNavBar.module.scss";
import { Link } from "react-router-dom";

const ProfileNavBar = () => {
    return (
        <div className={styles.main}>
            <ul className={styles.navBar}>
                <Link to={"/profile/wishlist"}><li className={styles.navBarItem}>Favourities</li></Link>
                <Link to={"/profile/info"}><li className={styles.navBarItem}>Info</li></Link>
                <Link to={"/profile/settings"}><li className={styles.navBarItem}>Setting</li></Link>
            </ul>
        </div>
    )
}

export default ProfileNavBar;