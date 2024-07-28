import CartContainer from "@components/cart/CartContainer";
import CheckoutContainer from "@components/checkout/CheckoutContainer";
import MainPage from "@components/mainPage/MainPage";
import ProductContainer from "@components/productPage/ProductContainer";
import ProfilePageRouting from "@components/profile/ProfilePageRouting";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const RoutePagination = () => {
  return (
    <>
      <Routes>
        <Route path="profile/:tab" element={<ProfilePageRouting />} />
        <Route path="mainPage" element={<MainPage />} />
        <Route path="product/:id" element={<ProductContainer />} />
        <Route path="cart" element={<CartContainer />} />
        <Route path="cart/checkout" element={<CheckoutContainer />} />
        <Route path="*" element={<Navigate to={"/mainPage"} />} />
      </Routes>
    </>
  );
};

export default RoutePagination;
