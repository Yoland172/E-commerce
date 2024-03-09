import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "../../store";
import {
  setBannerProductsThunk,
  setItemCategoriesThunk,
} from "./mainPageSlice";
import { useSelector } from "react-redux";
import MainPage from "./MainPage";

const MainPageContainer = () => {
  const dispatch = useAppDispatch();
  const itemsCategories = useSelector(
    (state: RootState) => state.mainPageState.itemsCategories
  );
  const products = useSelector(
    (state: RootState) => state.mainPageState.products
  );
  useEffect(() => {
    console.log(products);
  },[products])

  
  useEffect(() => {
    dispatch(setItemCategoriesThunk());
    dispatch(setBannerProductsThunk());
  }, []);

  return <MainPage itemsCategories={itemsCategories} products={products}/>;
};

export default MainPageContainer;
