import React, { useEffect } from "react";
import Checkout from "./Checkout";
import { useAppDispatch, useAppSelector } from "@store/index";
import { getUserCartFromStorage } from "@lib/helpers/CartHelper";
import {
  getUserCartThunk,
  setCart,
  setProductsQuantityAndId,
} from "@store/sharedSlice/CartSlice";

const CheckoutContainer = () => {
  const dispatch = useAppDispatch();

  const { id } = useAppSelector((state) => state.profileState);
  const cartfromStorage = getUserCartFromStorage();
  const { products, discountedTotal, productsQuantityAndId } = useAppSelector(
    (state) => state.cartState
  );

  useEffect(() => {
    if (cartfromStorage == null) {
      dispatch(getUserCartThunk(id ? id : 1));
    } else {
      dispatch(setCart(cartfromStorage.res));
      dispatch(setProductsQuantityAndId(cartfromStorage.productsQuantityAndId));
    }
  }, []);

  return (
    <Checkout products={products} discountedTotal={discountedTotal || 0} />
  );
};

export default CheckoutContainer;
