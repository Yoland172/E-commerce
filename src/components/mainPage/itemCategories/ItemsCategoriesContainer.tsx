import React, { useEffect } from 'react'
import ItemsCategories from './ItemsCategories'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setItemsCategoriesThunk } from './itemsCategoriesSlice';

const ItemsCategoriesContainer = () => {

  const dispatch = useAppDispatch();

  const {itemsCategories, isFetching} = useAppSelector((state) => state.itemsCategoriesState);
  useEffect(() => {
    dispatch(setItemsCategoriesThunk());
  },[])

  return (
    <ItemsCategories items={itemsCategories}/>
  )
}

export default ItemsCategoriesContainer
