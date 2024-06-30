import React, { useEffect, useState } from "react";
import styles from "./addToCart.module.scss";
import CancelCross from "../../ui/icon/CancelCross";
import QunatityCounter from "../../ui/qunatityCounter/QunatityCounter";
import { getQunatityProductByIdFromStorage, updateQuantityProduct } from "../../../lib/helpers/cartHelper";

interface AddToCartProps {
  id: number;
  title: string;
  price: number;
  quantity: number | null;
  discountPercentage: number ;
  thumbnail: string;
  closWindow: (status: boolean) => void;
}

const AddToCart = ({
  id,
  title,
  price,
  quantity,
  discountPercentage,
  thumbnail,
  closWindow,
}: AddToCartProps) => {
  const [newQuantity, setNewQuantity] = useState<any>(
    getQunatityProductByIdFromStorage(id) ? getQunatityProductByIdFromStorage(id) : 1
  );

  useEffect(() => {
    console.log(newQuantity);
  }, [newQuantity]);
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <h1>Add to cart</h1>
        <button
          onClick={() => {
            closWindow(false);
          }}
        >
          <CancelCross width={20} height={20} />
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
          Math.round(newQuantity * (price - (price * discountPercentage) / 100)).toFixed(2)}
          $
        </h3>
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.cancelButton}>Cancel</button>
        <button onClick={() => {updateQuantityProduct(id,newQuantity, price,discountPercentage )}}>Add</button>
      </div>
    </div>
  );
};

export default AddToCart;
