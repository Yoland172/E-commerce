import React from "react";
import {
  HashRouter as BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LoginContainer from "@components/login/LoginContainer";
import ProfilePageRouting from "@components/profile/ProfilePageRouting";
import ProductContainer from "@components/productPage/ProductContainer";
import MainPage from "@components/mainPage/MainPage";
import CartContainer from "@components/cart/CartContainer";
import "./App.module.scss";
import CheckoutContainer from "@components/checkout/CheckoutContainer";
import RoutingLayout from "@components/routingLayout/RoutingLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<RoutingLayout />}>
            <Route path="mainPage" element={<MainPage />} />
            <Route path="profile/:tab" element={<ProfilePageRouting />} />
            <Route path="product/:id" element={<ProductContainer />} />
            <Route path="cart" element={<CartContainer />} />
            <Route path="cart/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<Navigate to="/mainPage" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
