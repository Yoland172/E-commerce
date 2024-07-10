import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import logger from "redux-logger";
import productSlice from "@components/productPage/ProductSlice";
import itemsCategoriesSlice from "@components/mainPage/itemCategories/ItemsCategoriesSlice";
import banerSlice from "@components/mainPage/Banner/BanerSlice";
import cartSlice from "./sharedSlice/CartSlice1";
import authSlice from "./sharedSlice/AuthSlice1";
import profileSlice from "./sharedSlice/ProfileSlice1";
import serachSlice from "@components/header/searchBar/SearchSlice";

const store = configureStore({
  reducer: {
    authState: authSlice,
    itemsCategoriesState: itemsCategoriesSlice,
    bannerState: banerSlice,
    profileState: profileSlice,
    productState: productSlice,
    cartState: cartSlice,
    searchState: serachSlice,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "production"
      ? getDefaultMiddleware()
      : getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
