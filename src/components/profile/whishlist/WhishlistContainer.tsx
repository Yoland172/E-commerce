import React, { useEffect } from "react";
import Wishlist from "./Whishlist";
import { getUserCartFromStorage } from "../../../lib/helpers/cartHelper";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  deleteItem,
  deleteProductFromCart,
  getUserCartThunk,
  putChangedQuantityProductThunk,
  setCart,
  setProductsQuantityAndId,
} from "../../../store/sharedSlice/cartSlice";
import { useNavigate } from "react-router-dom";
import { setredirectAfterLoginURL } from "../../../lib/helpers/redirectHelpers";

const WishlistContainer = () => {
  const dispatch = useAppDispatch();
  const {id:userId, isFetching:isFetchingP } = useAppSelector((state) => state.profileState);
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
    } else if(userId != null) {
      dispatch(setCart(cartfromStorage.res));
      dispatch(setProductsQuantityAndId(cartfromStorage.productsQuantityAndId));
    } else if (isFetchingP == false && userId == null){
      navigate("/login");
      setredirectAfterLoginURL("/profile/wishlist")
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
