import React, { EffectCallback, useEffect } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { clearProductInfo, getProductThunk } from "./productSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const ProductContainer = () => {
  const id = useParams().id;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getProductThunk(id));
    };
    return () => {
      dispatch(clearProductInfo());
    };
  }, [id]);

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
    isFetching
  } = useAppSelector((state) => state.productState);
  return (
    <Product
      title={title}
      description={description}
      price={price}
      discountPercentage={discountPercentage}
      rating={rating}
      stock={stock}
      brand={brand}
      category={category}
      thumbnail={thumbnail}
      images={images}
      isFetching={isFetching}
    />
  );
};

export default ProductContainer;
