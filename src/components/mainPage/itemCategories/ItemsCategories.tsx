import React from "react";
import { ItemCategory } from "@lib/types/Types";
import LinkElement from "@components/ui/linkElement/LinkElement";
import styles from "./ItemsCategories.module.scss";

interface ItemsCategoriesProps {
  items: ItemCategory[];
}

const ItemsCategories = ({ items }: ItemsCategoriesProps) => {
  return (
    <div className={styles.main}>
      <h1>categories</h1>
      <div className={styles.categoriesContainer}>
        {items &&
          items.map((el) => (
            <LinkElement link="/" title={el.name} fontSize="1.1em" key={el.slug} />
          ))}
      </div>
    </div>
  );
};

export default ItemsCategories;
