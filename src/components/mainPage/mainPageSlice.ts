import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getBannerProducts, getItemCategories } from "../../api/request";
import { AppThunk } from "../../store";
import { ProductItem } from "../../api/types";

interface MainPageState {
  itemsCategories: string[];
  products: ProductItem[];
  isProductsFetching: boolean;
  errors: string[];
}

const initialState: MainPageState = {
  itemsCategories: [],
  products: [],
  isProductsFetching: false,
  errors: [],
};

const mainPageSlice = createSlice({
  name: "mainPageSlice",
  initialState,
  reducers: {
    setItemCategories: (state, action: PayloadAction<string[]>) => {
      state.itemsCategories = action.payload;
    },
    setBannerFetching: (state) => {
      state.isProductsFetching = true;
    },
    setBannerProducts: (state, action: PayloadAction<ProductItem[]>) => {
      state.products = action.payload;
      state.isProductsFetching = false;
    },
  },
});

export const setItemCategoriesThunk = (): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await getItemCategories();
      res && dispatch(setItemCategories(res));
    } catch (error) {}
  };
};

export const setBannerProductsThunk = (): AppThunk => {
  return async (dispatch) => {
    try {
      setBannerFetching();
      const res = await getBannerProducts();
      if (res) {
        dispatch(setBannerProducts(res.products));
      }
    } catch (error) {}
  };
};

export const { setItemCategories, setBannerFetching, setBannerProducts } =
  mainPageSlice.actions;
export default mainPageSlice.reducer;
