import React from "react";
import styles from "./itemsCategories.module.scss";

interface ItemsCategoriesProps {
    items:string[]
}

const ItemsCategories = ({items} :ItemsCategoriesProps) => {
    return (
        <div className={styles.main}>
            <h1>categories</h1>
            <div className={styles.categoriesContainer}>
            {items.map ((el,index) => (
                <h3 key={index}>{el}</h3>
            ))

            }
            </div>
        </div>
    )
}

export default ItemsCategories