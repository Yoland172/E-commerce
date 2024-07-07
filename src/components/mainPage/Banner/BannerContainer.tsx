import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "@store/index";
import { setProductsThunk } from './BanerSlice';
import Banner from './Banner'

function BannerContainer() {
    const dispatch = useAppDispatch();
    const {products, isFetching} = useAppSelector((state) => state.bannerState);

    useEffect(() => {
        dispatch(setProductsThunk());
    },[])
  return (
    <Banner products={products}/>
  )
}

export default BannerContainer
