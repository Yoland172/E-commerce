import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  deleteProductFromCart,
  getUserCartThunk,
  putChangedQuantityProductThunk,
} from "@store/sharedSlice/CartSlice";
import Cart from "./Cart";

const CartContainer = () => {
  const dispatch = useAppDispatch();
  const { id: userId, isFetching: isFetchingP } = useAppSelector(
    (state) => state.profileState
  );
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
      dispatch(getUserCartThunk(userId));
  }, []);

  return (
    <Cart
      id={id}
      products={products}
      total={total}
      discountedTotal={discountedTotal}
      totalProducts={totalProducts}
      totalQuantity={totalQuantity}
      isFetching={isFetching}
      changeProductQuantity={(productId: number, quantity: number) =>
        dispatch(putChangedQuantityProductThunk(userId ? userId : 1, productId, quantity))
      }
      deleteItem={(productId: number) => {
        dispatch(deleteProductFromCart(userId ? userId : 0, productId));
      }}
    />
  );
};

export default CartContainer;
