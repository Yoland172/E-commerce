import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useAppDispatch, useAppSelector } from "@store/index";
import { clearRecProducts, setRecProductThunk } from "./serachSlice";

const SearchBarContainer = () => {
  const dispatch = useAppDispatch();
  const { recProducts, isFetching } = useAppSelector(
    (state) => state.searchState
  );

  useEffect(() => {
    console.log(recProducts);
  }, [recProducts]);

  return (
    <SearchBar
      searchAction={(serachValue: string) => {
        dispatch(setRecProductThunk(serachValue));
      }}
      recProducts={recProducts}
      clearRecProducts = {() => {dispatch(clearRecProducts())}}
    />
  );
};

export default SearchBarContainer;
