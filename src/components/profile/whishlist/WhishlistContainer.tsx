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
import { setRedirectAfterLoginURL } from "@lib/helpers/RedirectHelpers";
import Wishlist from "./Whishlist";

const WishlistContainer = () => {
  const dispatch = useAppDispatch();
  const { id: userId, isFetching: isFetchingP } = useAppSelector(
    (state) => state.profileState
  );
  const navigate = useNavigate();
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
    } else if (userId != null) {
      dispatch(setCart(cartfromStorage.res));
      dispatch(setProductsQuantityAndId(cartfromStorage.productsQuantityAndId));
    } else if (isFetchingP == false && userId == null) {
      navigate("/login");
      setRedirectAfterLoginURL("/profile/wishlist");
    }
  }, []);

  const handleChangeQuantity = (productId: number, quantity: number) => {
    if (userId) {
      dispatch(putChangedQuantityProductThunk(userId, productId, quantity));
    } else {
      console.warn("No user ID provided, cannot change quantity");
    }
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
      changeProductQuantity={(productId: number, quantity: number) =>
        handleChangeQuantity(productId, quantity)
      }
      deleteItem={(productId: number) => {
        dispatch(deleteProductFromCart(userId ? userId : 0, productId));
      }}
    />
  );
};

export default WishlistContainer;
