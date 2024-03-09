import React from "react";
import styles from "./banner.module.scss";
import { ProductItem } from "../../../api/types";
import HeartIcon from "../../ui/icon/HeartIcon";
import { Link } from "react-router-dom";

interface BannerProps {
  products: ProductItem[];
}

const Banner = ({ products }: BannerProps) => {
  return (
    <div className={styles.main}>
      <h1>TOP PRODUCTS</h1>
      <div className={styles.productsContainer}>
        {products.map((el, index) => (
          <div className={styles.productContainer} key={el.id}>
            <Link to={`/product/${el.id}`}>
              <img src={el.thumbnail} alt="product" />
            </Link>
            <div className={styles.productInfo}>
              <Link to={`/product/${el.id}`}  className={styles.productName}>
                {el.title}
              </Link>
              <h3 className={styles.price}>{el.price} $</h3>
              <div className={styles.saveContainer}>
                <HeartIcon width={10} height={10} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
