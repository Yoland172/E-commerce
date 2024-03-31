import React, { useEffect } from "react";
import Wishlist from "./Whishlist";
import { getUserCartFromStorage } from "../../../lib/helpers/cartHelper";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getUserCartThunk, setCart } from "../../../store/sharedSlice/cartSlice";

const WishlistContainer = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profileState.id);
  const cartfromStorage = getUserCartFromStorage();
  const cartfromCartState = useAppSelector((state) => state.cartState);
  useEffect(() => {
    if (!cartfromStorage && userId) {
      dispatch(getUserCartThunk(userId));
    } else {
      dispatch(setCart(cartfromStorage));
    }
  }, []);

  return <Wishlist />;
};

export default WishlistContainer;
