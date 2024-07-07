import React from "react";
import ItemsCategoriesContainer from "./itemCategories/ItemsCategoriesContainer";
import BannerContainer from "./Banner/BannerContainer";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.main}>
       <ItemsCategoriesContainer /> 
       <BannerContainer /> 
    </div>
  );
};

export default MainPage;
