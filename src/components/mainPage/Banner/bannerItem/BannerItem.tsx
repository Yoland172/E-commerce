import React from "react";
import styles from "./bannerItem.module.scss";
import { Link } from "react-router-dom";
import HeartIcon from "../../../ui/icon/HeartIcon";

interface BannerItemProps {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
}

function BannerItem({ id, thumbnail, price, title }: BannerItemProps) {
  return (
    <div className={styles.productContainer} key={id}>
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt="product" />
      </Link>
      <div className={styles.productInfo}>
        <Link to={`/product/${id}`} className={styles.productName}>
          {title}
        </Link>
        <h3 className={styles.price}>{price} $</h3>
        <div className={styles.saveContainer}>
          <HeartIcon width={10} height={10} />
        </div>
      </div>
    </div>
  );
}

export default BannerItem;
