import React from "react";
import { Link } from "react-router-dom";
import styles from "./banner.module.scss";
import { ProductItem } from "../../../api/types";
import HeartIcon from "../../ui/icon/HeartIcon";
import BannerItem from "./bannerItem/BannerItem";

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
