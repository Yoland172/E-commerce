import React from "react";
import styles from "./wishlist.module.scss";
import { CartItem } from "../../../types/types";
import CancelCross from "../../ui/icon/CancelCross";
import { Link } from "react-router-dom";

interface WhishlistProp {
  id: number | null;
  products: CartItem[];
  total: number | null;
  discountedTotal: number | null;
  totalProducts: number | null;
  totalQuantity: number | null;
  isFetching: boolean;
  deleleteCart: (index:number) => void
}

const Wishlist = ({ products,deleleteCart }: WhishlistProp) => {
  return (
    <div className={styles.main}>
      <div className={styles.whishlistContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.name}>Name</h2>
          <h2 className={styles.unit}>Unit Price</h2>
          <h2 className={styles.stock}>Stock status</h2>
          <h2 className={styles.action}>Actions</h2>
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.whishlist}>
          {products.length > 0 &&
            products.map((el, index) => {
              return (
                <>
                  <div className={styles.whishlistItem} key={index}>
                    <div className={styles.deleteItemContainer}>
                      <button onClick={() => {deleleteCart(index)}}><CancelCross width={25} height={25}/></button>
                    </div>
                    <div className={styles.productPhotoContainer}>
                      <img src={el.thumbnail} alt="" />
                    </div>
                   <Link to={`/product/${el.id}`}><h3 className={styles.productName}>{el.title}</h3></Link>
                    <div className={styles.porductPriceContainer}>
                     <h4>{el.discountedPrice}$</h4>
                      <h3 className={styles.porductPrice}>{el.price}$</h3>
                    </div>
                    <h3 className={styles.productStock}>{el.quantity}</h3>
                    <h3 className={styles.action}></h3>
                  </div>
                  <div className={styles.sectionLine}></div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
