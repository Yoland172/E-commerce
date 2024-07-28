import React, { useEffect } from "react";
import Checkout from "./Checkout";
import { useAppDispatch, useAppSelector } from "@store/index";
import { getUserCartFromStorage } from "@lib/helpers/CartHelper";
import {
  getUserCartThunk,
} from "@store/sharedSlice/CartSlice";

const CheckoutContainer = () => {
  const dispatch = useAppDispatch();

  const { id } = useAppSelector((state) => state.profileState);
  const { products, discountedTotal, productsQuantityAndId } = useAppSelector(
    (state) => state.cartState
  );

  useEffect(() => {
    dispatch(getUserCartThunk(id));
  }, []);

  return (
    <Checkout products={products} discountedTotal={discountedTotal || 0} />
  );
};

export default CheckoutContainer;
