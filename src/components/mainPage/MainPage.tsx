import React from "react";
import styles from "./mainPage.module.scss";
import { ProductItem } from "../../api/types";
import { ItemCategory } from "../../types/types";
import ItemsCategoriesContainer from "./itemCategories/ItemsCategoriesContainer";
import BannerContainer from "./Banner/BannerContainer";

const MainPage = () => {
  return (
    <div className={styles.main}>
       <ItemsCategoriesContainer /> 
       <BannerContainer /> 
    </div>
  );
};

export default MainPage;
