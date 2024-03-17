import React from "react";
import ProfileNavBar from "./ProfileNavBar";
import { useParams } from "react-router-dom";
import InfoContainer from "./info/InfoContainer";
import SettingsContainer from "./settings/SettingsContainer";
import styles from "./profile.module.scss";

const ProfilePageRouting = () => {
  const tab = useParams().tab;
  const renderUserUI = () => {
    switch (tab) {
      case "info":
        return <InfoContainer />;
      case "settings":
        return <SettingsContainer />;

      case "wishlist":
        return <p>sdnj</p>;

      default:
        null
        break;
    }
  };
  return (
    <>
      <ProfileNavBar tab={tab} />
      <div className={styles.tabContainer}>
      {renderUserUI()}
      </div>
    </>
  );
};

export default ProfilePageRouting;
