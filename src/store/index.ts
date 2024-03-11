import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authSlice from "./sharedSlice/authSlice";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import mainPageSlice from "../components/mainPage/mainPageSlice";
import profileSlice from "./sharedSlice/profileSlice";

const store = configureStore({
  reducer: {
    authState: authSlice,
    mainPageState:mainPageSlice,
    profileState:profileSlice
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
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
