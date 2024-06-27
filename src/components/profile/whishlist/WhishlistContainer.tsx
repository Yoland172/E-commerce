import React, { useEffect } from "react";
import Wishlist from "./Whishlist";
import { getUserCartFromStorage } from "../../../lib/helpers/cartHelper";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  deleteCart,
  getUserCartThunk,
  putChangedQuantityProductThunk,
  setCart,
} from "../../../store/sharedSlice/cartSlice";
import { extractedProductsList } from "../../../types/types";

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
     if (cartfromStorage == null && userId) {
       dispatch(getUserCartThunk(userId));
     
     } else {
       dispatch(setCart(cartfromStorage));

     }
   }, []);

   const handleChangeQuantity = (changeQuantity: extractedProductsList[]) => {
    console.log('ffdg');
    if (userId) {
  
      dispatch(putChangedQuantityProductThunk(userId,  changeQuantity));
    } else {
      console.warn("No user ID provided, cannot change quantity");
    }
    console.log(changeQuantity);
  };


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
      increaseProductQuantity={handleChangeQuantity}
    />
  );
};

export default WishlistContainer;
