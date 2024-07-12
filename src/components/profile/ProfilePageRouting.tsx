import React from "react";
import { useParams } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";
import InfoContainer from "./info/InfoContainer";
import SettingsContainer from "./settings/SettingsContainer";
import styles from "./Profile.module.scss";

const ProfilePageRouting = () => {
  const tab = useParams().tab;
  const renderUserUI = () => {
    switch (tab) {
      case "info":
        return <InfoContainer />;
      case "settings":
        return <SettingsContainer />;

      case "wishlist":
        return <></>;

      default:
        null;
        break;
    }
  };
  return (
    <>
      <ProfileNavBar tab={tab} />
      <div className={styles.tabContainer}>{renderUserUI()}</div>
    </>
  );
};

export default ProfilePageRouting;
