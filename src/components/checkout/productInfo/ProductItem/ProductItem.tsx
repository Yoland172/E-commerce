import React from "react";
import styles from "./ProductItem.module.scss";

interface ProductItemProps {
  img: string;
  title: string;
  quantity: number;
}

const ProductItem = ({img, title,quantity}:ProductItemProps) => {
  return <div className={styles.container}>
    <img src={img} alt="" />
    <h3 className={styles.title}>{title}</h3>
    <h3 className={styles.quantity}>{quantity}</h3>
  </div>;
};

export default ProductItem;
