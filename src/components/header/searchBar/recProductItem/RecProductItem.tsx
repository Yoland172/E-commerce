import React from "react";
import styles from "./RecProductItem.module.scss";
import { Link } from "react-router-dom";

interface RecProductItemProps {
  id: number;
  title: string;
  thumbnail: string;
  action: () => void;
}

const RecProductItem = ({
  id,
  title,
  thumbnail,
  action,
}: RecProductItemProps) => {
  return (
    <Link to={`/product/${id}`} onClick={action}>
      <div className={styles.itemContainer}>
        <img src={thumbnail} alt="productImage" />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default RecProductItem;
