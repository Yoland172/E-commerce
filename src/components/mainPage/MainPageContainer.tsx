import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setBannerProductsThunk,
  setItemCategoriesThunk,
} from "./mainPageSlice";
import MainPage from "./MainPage";

const MainPageContainer = () => {
  const dispatch = useAppDispatch();
  const itemsCategories = useAppSelector(
    (state) => state.mainPageState.itemsCategories
  );
  const products = useAppSelector((state) => state.mainPageState.products);
  useEffect(() => {
    dispatch(setItemCategoriesThunk());
    dispatch(setBannerProductsThunk());
    console.log(itemsCategories)
  }, []);

  useEffect(() => {
    console.log(itemsCategories);
  }, [itemsCategories])

  return <MainPage itemsCategories={itemsCategories} products={products} />;
};

export default MainPageContainer;
