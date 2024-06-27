import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import {
  currentUserToken,
  getCartOfUser,
  login as loginAPI,
  putChangedQuantityProduct,
} from "../../api/request";
import { Axios, AxiosError } from "axios";
import { CartItem, extractedProductsList } from "../../types/types";
import { setUserCartTotorage } from "../../lib/helpers/cartHelper";

interface CartState {
  id: number | null;
  products: CartItem[];
  total: number | null;
  discountedTotal: number | null;
  totalProducts: number | null;
  totalQuantity: number | null;
  isFetching: boolean;
}

const initialState: CartState = {
  id: null,
  products: [],
  total: null,
  discountedTotal: null,
  totalProducts: null,
  totalQuantity: null,
  isFetching: false,
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
    deleteCart: (state, action: PayloadAction<number>) => {
      console.log("delete");
      const editedArray = state.products;
      editedArray.splice(action.payload, 1);
      state.products = editedArray;
    },
    // setChangedQuantityProduct: (
    //   state,
    //   action: PayloadAction<{ productId: number; quantity: number }>
    // ) => {
    //   const product = state.products.find(el => el.id == action.payload.productId);
    //   if (!product) return; // Якщо продукт не знайдено, вийти з функції
  
    //   // Вирахування змін у кількості
    //   const quantityDelta = action.payload.quantity - product.quantity;
  
    //   // Оновлення загальних значень до перерахунку продукту
    //  if(state.total != null) state.total -= product.total;
    //  if(state.discountedTotal != null) state.discountedTotal -= product.discountedTotal;
  
    //   // Перерахунок полів для конкретного продукту
    //   product.quantity =action.payload.quantity;
    //   product.total = product.price * action.payload.quantity;
    //   product.discountedTotal = product.total * (1 - product.discountPercentage / 100);
  
    //   // Додавання нових значень до загальних полів замовлення
    //   if(state.total != null) state.total += product.total;
    //   if(state.discountedTotal != null) state.discountedTotal += product.discountedTotal;
    //   if(state.totalQuantity != null) state.totalQuantity += quantityDelta;

    //   state.isFetching = false;
    // },
  },
});

export const getUserCartThunk = (id: number): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await getCartOfUser(id);
      if (res) {
        dispatch(setCart(res));
        setUserCartTotorage(res);
      }
    } catch (err: AxiosError | any) {}
  };
};

export const putChangedQuantityProductThunk = (
  userId: number,
  changeQuantity: extractedProductsList[]
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await putChangedQuantityProduct(userId,changeQuantity);
      console.log(res);
      if (res) {
        dispatch(setCart(res))
        setUserCartTotorage(res);
      }
    } catch (err: AxiosError | any) {}
  };
};

export const { setCart, setIsFetching, deleteCart } =
  cartSlice.actions;
export default cartSlice.reducer;
