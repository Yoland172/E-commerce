import React from "react";
import styles from "./itemsCategories.module.scss";
import { ItemCategory } from "../../../types/types";



interface ItemsCategoriesProps {
  items: ItemCategory[];
}

const ItemsCategories = ({ items }: ItemsCategoriesProps) => {
  return (
    <div className={styles.main}>
      <h1>categories</h1>
      <div className={styles.categoriesContainer}>
        {items && items.map((el, index) => (
          <h3 key={index}>{el.name}</h3>
        )) } 
      </div>
    </div>
  );
};

export default ItemsCategories;
