import React, { useEffect } from "react";
import Wishlist from "./Whishlist";
import { getUserCartFromStorage } from "../../../lib/helpers/cartHelper";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  deleteCart,
  getUserCartThunk,
  setCart,
} from "../../../store/sharedSlice/cartSlice";

const WishlistContainer = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profileState.id);
  const cartfromStorage = getUserCartFromStorage();
  const {
    id,
    products,
    total,
    discountedTotal,
    totalProducts,
    totalQuantity,
    isFetching,
  } = useAppSelector((state) => state.cartState);
   useEffect(() => {
    console.log(userId);
     if (cartfromStorage == null && userId) {
      console.log("from server;")
       dispatch(getUserCartThunk(userId));
     
     } else {
      console.log("from storage;")
       dispatch(setCart(cartfromStorage));

     }
   }, []);

  useEffect(() => {
    console.log(cartfromStorage);
  },[cartfromStorage])
  return (
    <Wishlist
      id={id}
      products={products}
      total={total}
      discountedTotal={discountedTotal}
      totalProducts={totalProducts}
      totalQuantity={totalQuantity}
      isFetching={isFetching}
      deleleteCart = {(index:number) => dispatch(deleteCart(index))}
    />
  );
};

export default WishlistContainer;
