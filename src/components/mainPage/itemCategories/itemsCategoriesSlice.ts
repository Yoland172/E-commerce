import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemCategory } from "@lib/types/Types";
import { AppThunk } from "@store/index";
import { getItemsCategories } from "@api/Request";

interface MainPageState {
  itemsCategories: ItemCategory[];
  isFetching: boolean;
  errors: string[];
}

const initialState: MainPageState = {
  itemsCategories: [],
  isFetching: false,
  errors: [],
};

const itemsCategoriesSlice = createSlice({
  name: "itemsCategoriesSlice",
  initialState,
  reducers: {
    setItemCategories: (state, action: PayloadAction<ItemCategory[]>) => {
      state.itemsCategories = action.payload;
      state.isFetching = false;
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
  },
});

export const setItemsCategoriesThunk = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await getItemsCategories();
      res && dispatch(setItemCategories(res));
    } catch (error) {}
  };
};

export const { setItemCategories, setIsFetching } =
  itemsCategoriesSlice.actions;
export default itemsCategoriesSlice.reducer;
