import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "@store/index";
import { getProducts } from "@api/request";
import { ProductItem } from "@api/types";

interface MainPageState {
  products: ProductItem[];
  isFetching: boolean;
  errors: string[];
}

const initialState: MainPageState = {
  products: [],
  isFetching: false,
  errors: [],
};

const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductItem[]>) => {
      state.products = action.payload;
      state.isFetching = false;
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
  },
});

export const setProductsThunk = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await getProducts(15);
      res && dispatch(setProducts(res.products));
    } catch (error) {}
  };
};

export const { setProducts, setIsFetching } = bannerSlice.actions;
export default bannerSlice.reducer;
