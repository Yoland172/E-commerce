import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "@store/index";
import { getProduct } from "@api/Request";

interface ProductState {
  id: number;
  title: string;
  description: string;
  price: number | null;
  discountPercentage: number | null;
  rating: number | null;
  stock: number | null;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isFetching: boolean;
}

const initialState: ProductState = {
  id: 0,
  title: "",
  description: "",
  price: null,
  discountPercentage: null,
  rating: null,
  stock: null,
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
  isFetching: false,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductInfo: (state, action: PayloadAction<ProductState>) => {
      (state.id = action.payload.id),
        (state.title = action.payload.title),
        (state.description = action.payload.description),
        (state.price = action.payload.price),
        (state.discountPercentage = action.payload.discountPercentage),
        (state.rating = action.payload.rating),
        (state.stock = action.payload.stock),
        (state.brand = action.payload.brand),
        (state.category = action.payload.category),
        (state.thumbnail = action.payload.thumbnail),
        (state.images = action.payload.images),
        (state.isFetching = false);
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
    clearProductInfo: (state) => {
      (state.title = ""),
        (state.description = ""),
        (state.price = null),
        (state.discountPercentage = null),
        (state.rating = null),
        (state.stock = null),
        (state.brand = ""),
        (state.category = ""),
        (state.thumbnail = ""),
        (state.images = []),
        (state.isFetching = false);
    },
  },
});

export const getProductThunk = (id: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await getProduct(id);
      if (res) {
        dispatch(setProductInfo(res));
      }
    } catch (err) {
      //error
    }
  };
};

export const { setProductInfo, setIsFetching, clearProductInfo } =
  productSlice.actions;
export default productSlice.reducer;
