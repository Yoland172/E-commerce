import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setItemsCategoriesThunk } from "./ItemsCategoriesSlice";
import ItemsCategories from "./ItemsCategories";

const ItemsCategoriesContainer = () => {
  const dispatch = useAppDispatch();

  const { itemsCategories, isFetching } = useAppSelector(
    (state) => state.itemsCategoriesState
  );
  useEffect(() => {
    dispatch(setItemsCategoriesThunk());
  }, []);

  return <ItemsCategories items={itemsCategories} />;
};

export default ItemsCategoriesContainer;
