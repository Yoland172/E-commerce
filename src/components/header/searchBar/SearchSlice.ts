import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppThunk } from "@store/index";
import { getRecProductsBySearch } from "@api/Request";
import { RecProductItem } from "@lib/types/Types";

interface SearchState {
  recProducts: RecProductItem[], 
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
    setRecProducts: (state, action: PayloadAction<RecProductItem[]>) => {
      state.recProducts = action.payload;
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
      dispatch(setRecProducts(res.products))
    } catch (arr: AxiosError | any) {}
  };
};

export const { setRecProducts,setIsFetching,clearRecProducts } =
  searchSlice.actions;
export default searchSlice.reducer;
