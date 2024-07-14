import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserCartFromStorage } from "@lib/helpers/CartHelper";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  deleteProductFromCart,
  getUserCartThunk,
  putChangedQuantityProductThunk,
  setCart,
  setProductsQuantityAndId,
} from "@store/sharedSlice/CartSlice";
import Cart from "./Cart";

const CartContainer = () => {
  const dispatch = useAppDispatch();
  const { id: userId, isFetching: isFetchingP } = useAppSelector(
    (state) => state.profileState
  );
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
    if (cartfromStorage == null && userId != null) {
      dispatch(getUserCartThunk(userId));
    } else  {
      dispatch(setCart(cartfromStorage.res));
      dispatch(setProductsQuantityAndId(cartfromStorage.productsQuantityAndId));
    }
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
