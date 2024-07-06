import React, { useState } from "react";
import CancelCrossIcon from "@components/ui/icon/CancelCrossIcon";
import QunatityCounter from "@components/ui/qunatityCounter/QunatityCounter";
import styles from "./addToCart.module.scss";

interface AddToCartProps {
  id: number;
  title: string;
  price: number;
  quantity: number | null;
  discountPercentage: number;
  thumbnail: string;
  closWindow: (status: boolean) => void;
  changedQuantityProduct: (quantity: number) => void;
  quntityForUserCart: number | null;
}

const AddToCart = ({
  id,
  title,
  price,
  quantity,
  discountPercentage,
  thumbnail,
  closWindow,
  changedQuantityProduct,
  quntityForUserCart,
}: AddToCartProps) => {
  const [newQuantity, setNewQuantity] = useState<any>(
    quntityForUserCart ? quntityForUserCart : 1
  );

  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <h1>Add to cart</h1>
        <button
          onClick={() => {
            closWindow(false);
          }}
        >
          <CancelCrossIcon width={20} height={20} />
        </button>
      </div>
      <div className={styles.sectionLine}></div>
      <div className={styles.productInfoContainer}>
        <img src={thumbnail} alt="product" />
        <h3>{title}</h3>
        {newQuantity && (
          <QunatityCounter
            quantity={newQuantity}
            isFetching={false}
            increment={() => {
              setNewQuantity(newQuantity + 1);
            }}
            decrement={() => {
              setNewQuantity(newQuantity - 1);
            }}
          />
        )}
        <h3>
          {price &&
            discountPercentage &&
            Math.round(
              newQuantity * (price - (price * discountPercentage) / 100)
            ).toFixed(2)}
          $
        </h3>
      </div>
      <div className={styles.submitContainer}>
        <button
          className={styles.cancelButton}
          onClick={() => {
            closWindow(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            changedQuantityProduct(newQuantity);
            closWindow(false);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
