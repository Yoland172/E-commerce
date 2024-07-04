import React from "react";
import styles from "./itemsCategories.module.scss";
import { ItemCategory } from "../../../types/types";
import LinkElement from "../../ui/linkElement/LinkElement";



interface ItemsCategoriesProps {
  items: ItemCategory[];
}

const ItemsCategories = ({ items }: ItemsCategoriesProps) => {
  return (
    <div className={styles.main}>
      <h1>categories</h1>
      <div className={styles.categoriesContainer}>
        {items && items.map((el) => (
         <LinkElement link="/" title={el.name} fontSize="1.1em"/>
        )) } 
      </div>
    </div>
  );
};

export default ItemsCategories;
