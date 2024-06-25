import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import {
  currentUserToken,
  getCartOfUser,
  login as loginAPI,
} from "../../api/request";
import { AxiosError } from "axios";
import { CartItem } from "../../types/types";
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
      state.isFetching = true
    },
    deleteCart: (state, action: PayloadAction <number>) => {
      console.log('delete');
      const editedArray = state.products;
      editedArray.splice(action.payload,1);
      state.products=editedArray;
    }
  },
});

export const getUserCartThunk = (id: number): AppThunk => {
  return async (dispatch) => {
    console.log(id);
    try {
      dispatch(setIsFetching())
      const res = await getCartOfUser(id);
      if (res) {
        console.log(res);
        dispatch(setCart(res));
        setUserCartTotorage(res);
      }
    } catch (err: AxiosError | any) {}
  };
};


export const { setCart,setIsFetching,deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
