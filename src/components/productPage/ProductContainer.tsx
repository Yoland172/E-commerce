import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/index";
import { putChangedQuantityProductThunk } from "@store/sharedSlice/cartSlice";
import Product from "./Product";
import { clearProductInfo, getProductThunk } from "./productSlice";

const ProductContainer = () => {
  const id = useParams().id;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getProductThunk(id));
    }
    return () => {
      dispatch(clearProductInfo());
    };
  }, [id]);

  const {
    id: productId,
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
    isFetching,
  } = useAppSelector((state) => state.productState);

  const userId = useAppSelector((state) => state.profileState.id) || 1; //fix soon...
  const productsQuantityAndId = useAppSelector(
    (state) => state.cartState.productsQuantityAndId
  );

  useEffect(() => {
    if (productId != null) {
      getQuantityOfProduct();
    }
  }, []);
  const getQuantityOfProduct = () => {
    const findedElement = productsQuantityAndId.find(
      (el) => el.id === productId
    );
    return findedElement ? findedElement.quantity : null;
  };

  return (
    <Product
      id={productId}
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
      changedQuantityProduct={(quantity: number) => {
        dispatch(putChangedQuantityProductThunk(userId, productId, quantity));
      }}
      qunatityForAddToCart={getQuantityOfProduct()}
    />
  );
};

export default ProductContainer;
