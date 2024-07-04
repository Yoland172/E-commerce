import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import logger from "redux-logger";
import authSlice from "./sharedSlice/authSlice";
import profileSlice from "./sharedSlice/profileSlice";
import productSlice from "../components/productPage/productSlice";
import cartSlice from "./sharedSlice/cartSlice";
import itemsCategoriesSlice from "../components/mainPage/itemCategories/itemsCategoriesSlice";
import banerSlice from "../components/mainPage/Banner/banerSlice";


const store = configureStore({
  reducer: {
    authState: authSlice,
    itemsCategoriesState:itemsCategoriesSlice,
    bannerState: banerSlice,
    profileState: profileSlice,
    productState:productSlice,
    cartState:cartSlice
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
