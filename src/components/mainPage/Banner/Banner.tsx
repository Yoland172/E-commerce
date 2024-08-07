import React from "react";
import { ProductItem } from "@api/Types";
import BannerItem from "./bannerItem/BannerItem";
import styles from "./Banner.module.scss";

interface BannerProps {
  products: ProductItem[];
}

const Banner = ({ products }: BannerProps) => {
  return (
    <div className={styles.main}>
      <h1>TOP PRODUCTS</h1>
      <div className={styles.productsContainer}>
        {products.map((el) => (
          <BannerItem id={el.id} price={el.price} thumbnail={el.thumbnail} title={el.title} key={el.id}/>
        ))}
      </div>
    </div>
  );
};

export default Banner;
