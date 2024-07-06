import React from "react";
import { ProductItem } from "@api/types";
import BannerItem from "./bannerItem/BannerItem";
import styles from "./banner.module.scss";

interface BannerProps {
  products: ProductItem[];
}

const Banner = ({ products }: BannerProps) => {
  return (
    <div className={styles.main}>
      <h1>TOP PRODUCTS</h1>
      <div className={styles.productsContainer}>
        {products.map((el) => (
          <BannerItem id={el.id} price={el.price} thumbnail={el.thumbnail} title={el.title}/>
        ))}
      </div>
    </div>
  );
};

export default Banner;
