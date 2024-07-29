import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { login as loginAPI, putChangedQuantityProduct } from "@api/Request";
import { CartItem, extractedProductsList } from "@lib/types/Types";
import {
  deleteItemFromCart,
  getUserCartFromStorage,
  mergeStockArray,
  setUserCartToStorage,
} from "@lib/helpers/CartHelper";
import { AppThunk } from "..";

interface CartState {
  id: number | null;
  products: CartItem[];
  total: number | null;
  discountedTotal: number | null;
  totalProducts: number | null;
  totalQuantity: number | null;
  isFetching: boolean;
  productsQuantityAndId: extractedProductsList[];
}

const initialState: CartState = {
  id: null,
  products: [],
  total: null,
  discountedTotal: null,
  totalProducts: null,
  totalQuantity: null,
  isFetching: false,
  productsQuantityAndId: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartState>) => {
      (state.id = action.payload.id),
        (state.products = action.payload.products),
        (state.total = action.payload.total),
        (state.discountedTotal = action.payload.discountedTotal),
        (state.totalQuantity = action.payload.totalQuantity),
        (state.totalProducts = action.payload.totalProducts),
        (state.isFetching = false);
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const editedArray = state.products;
      editedArray.splice(action.payload, 1);
      state.products = editedArray;
    },
    setProductsQuantityAndId: (
      state,
      action: PayloadAction<extractedProductsList[]>
    ) => {
      state.productsQuantityAndId = action.payload;
    },
    removeAllData: () => initialState
  },
});
export const getUserCartThunk = (id: number | null): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const cartfromStorage = getUserCartFromStorage();
      if (cartfromStorage == null && id) {
        const stockProductsQuantityAndId =
          getState().cartState.productsQuantityAndId;
        dispatch(setIsFetching());
        const res = await putChangedQuantityProduct(
          id,
          stockProductsQuantityAndId
        );
        if (res) {
          dispatch(setCart(res));
          setUserCartToStorage({
            res,
            productsQuantityAndId: stockProductsQuantityAndId,
          });
        }
      } else {
        dispatch(setCart(cartfromStorage.res));
        dispatch(
          setProductsQuantityAndId(cartfromStorage.productsQuantityAndId)
        );
      }
    } catch (err: AxiosError | any) {}
  };
};

export const putChangedQuantityProductThunk = (
  userId: number,
  productId: number,
  quantity: number
): AppThunk => {
  return async (dispatch, getState) => {
    try {
      dispatch(setIsFetching());
      const stockProductsQuantityAndId =
        getState().cartState.productsQuantityAndId;
      const extractedArray = mergeStockArray(
        stockProductsQuantityAndId,
        productId,
        quantity
      );
      const res = await putChangedQuantityProduct(userId, extractedArray);
      if (res) {
        dispatch(setCart(res));
        dispatch(setProductsQuantityAndId(extractedArray));
        setUserCartToStorage({ res, productsQuantityAndId: extractedArray });
      }
    } catch (err: AxiosError | any) {}
  };
};

export const deleteProductFromCart = (
  userId: number,
  productId: number
): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const productsQuantityAndId = getState().cartState.productsQuantityAndId;
      const editedProductsQuantityAndId = deleteItemFromCart(
        productsQuantityAndId,
        productId
      );
      const res = await putChangedQuantityProduct(
        userId,
        editedProductsQuantityAndId
      );
      if (res) {
        dispatch(setCart(res));
        dispatch(setProductsQuantityAndId(editedProductsQuantityAndId));
        setUserCartToStorage({
          res,
          productsQuantityAndId: editedProductsQuantityAndId,
        });
      }
    } catch (arr: AxiosError | any) {}
  };
};

export const { setCart, setIsFetching, deleteItem, setProductsQuantityAndId,removeAllData } =
  cartSlice.actions;
export default cartSlice.reducer;
