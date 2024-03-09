import React from "react";
import styles from "./banner.module.scss";
import { ProductItem } from "../../../api/types";
import HeartIcon from "../../ui/icon/HeartIcon";

interface BannerProps {
    products:ProductItem[]
}

const Banner = ({products}:BannerProps) => {

    return <div className={styles.main}>
        <h1>TOP PRODUCTS</h1>
        <div className={styles.productsContainer}>
            {products.map((el, index) => (
                <div className={styles.productContainer}>
                    <img src={el.thumbnail} alt="product"/>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productName}>{el.title}</h3>
                        <h3 className={styles.price}>{el.price} $</h3>
                        <div className={styles.saveContainer}>
                        <HeartIcon width={10} height={10}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Banner;