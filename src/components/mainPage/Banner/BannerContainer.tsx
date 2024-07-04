import React, { useEffect } from 'react'
import Banner from './Banner'
import { useAppDispatch, useAppSelector } from '../../../store';
import { setProductsThunk } from './banerSlice';

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
