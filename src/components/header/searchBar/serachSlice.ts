import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppThunk } from "@store/index";
import { getRecProductsBySearch } from "@api/request";

interface SearchState {
  recProducts: any[], //what type?!!!
  isFetching:boolean,

}

const initialState: SearchState = {
    recProducts:[],
    isFetching:false
};

const searchSlice= createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setRecProducts: (state, action: PayloadAction<any>) => {
      state.recProducts = action.payload.products;
      state.isFetching = false;
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
    clearRecProducts: (state) => {
      state.recProducts = [];
    }
  },
});



export const setRecProductThunk = (searchValue:string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await getRecProductsBySearch(searchValue);
      dispatch(setRecProducts(res))
    } catch (arr: AxiosError | any) {}
  };
};

export const { setRecProducts,setIsFetching,clearRecProducts } =
  searchSlice.actions;
export default searchSlice.reducer;
