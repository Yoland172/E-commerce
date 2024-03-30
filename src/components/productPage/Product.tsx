import React from "react";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import classNames from "classnames";
import AddToCartIcon from "../ui/icon/addToCarts";
import styles from "./product.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "./sampleArrow/SampleNextArrow";
import SamplePrevArrow from "./sampleArrow/SamplePrevArrow";

interface SettingForSlider {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  arrows?: boolean;
  pauseOnHover?: boolean;
  autoplaySpeed?: number;
  dotsClass?: string;
  nextArrow?: any;
  prevArrow?: any;
  vertical?: boolean;
  customPaging?: (i: number) => any;
}

interface ProductProps {
  title: string;
  description: string;
  price: number | null;
  discountPercentage: number | null;
  rating: number | null;
  stock: number | null;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isFetching: boolean;

}
const Product = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
  isFetching,
}: ProductProps) => {
  const settingsForSlider: SettingForSlider = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: styles.dotsContainer,
    vertical: true,
    nextArrow: <SampleNextArrow />,
    prevArrow:<SamplePrevArrow/>,
    customPaging: (i) => {
      return (
        <a>
          <img src={images[i]} alt="imageDots" key={i} />
        </a>
      );
    },
  };

  return (
    <div className={styles.main}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {!isFetching && images.length > 0 && (
            <Slider {...settingsForSlider}>
              {images.map((el, index) => {
                return (
                  <img
                    src={el}
                    alt="productImage"
                    key={index}
                    className={styles.sliderImageItem}
                  />
                );
              })}
            </Slider>
          )}
        </div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.productInfoContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.categoryContainer}>
            <h3 className={styles.topicTittle}>Brand</h3>
            <Link to={`*`}>
              <p className={classNames(styles.topicText, styles.link)}>
                {brand}
              </p>
            </Link>
          </div>
          <div className={styles.categoryContainer}>
            <h3 className={styles.topicTittle}>Category</h3>
            <Link to={`/category/${category}`}>
              <p className={classNames(styles.topicText, styles.link)}>
                {category}
              </p>
            </Link>
          </div>
          <div className={styles.reviewsContainer}>
            <h3 className={styles.topicTittle}>Reviews</h3>
            <p className={styles.topicText}>{rating} / 5</p>
          </div>
        </div>
        <div className={styles.buyContainer}>
          <div className={styles.priceContainer}>
            <div>
              <h3 className={styles.topicTittle}>{price} UAH</h3>
              {discountPercentage && price ? (
                <p className={styles.discount}>
                  {Math.round(price + (discountPercentage * price) / 100)} UAH
                </p>
              ) : (
                <></>
              )}
            </div>
            <button className={styles.addToCartsButton}>
              <AddToCartIcon width={35} height={35} />
            </button>
          </div>
          <button className={styles.buyButton}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
