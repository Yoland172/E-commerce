import React from "react";
import styles from "./mainPage.module.scss";
import ItemsCategories from "./itemCategories/ItemCategories";
import Banner from "./Banner/Banner";
import { ProductItem } from "../../api/types";
import { ItemCategory } from "../../types/types";

interface MainPageProps {
  itemsCategories: ItemCategory[];
  products: ProductItem[];
}

const MainPage = ({ itemsCategories, products }: MainPageProps) => {
  return (
    <div className={styles.main}>
       <ItemsCategories items={itemsCategories} /> 
       <Banner products={products} /> 
    </div>
  );
};

export default MainPage;
