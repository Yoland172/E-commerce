import React from "react";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "@components/login/LoginContainer";
import Footer from "@components/footer/Footer";
import HeaderContainer from "@components/header/HeaderContainer";
import ProfilePageRouting from "@components/profile/ProfilePageRouting";
import ProductContainer from "@components/productPage/ProductContainer";
import MainPage from "@components/mainPage/MainPage";
import "./App.module.scss";
import Cart from "@components/cart/Cart";
import CartContainer from "@components/cart/CartContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="profile/:tab"
            element={
              <>
                <HeaderContainer />
                <ProfilePageRouting />
                <Footer />
              </>
            }
          />
          <Route
            path="mainPage"
            element={
              <>
                <HeaderContainer />
                <MainPage />
                <Footer />
              </>
            }
          />

          <Route
            path="product/:id"
            element={
              <>
                <HeaderContainer />
                <ProductContainer />
                <Footer />
              </>
            }
          />

          <Route
            path="cart"
            element={
              <>
                <HeaderContainer />
                <CartContainer />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginContainer />} />

          {/* <Route path="*" element={<Navigate to={"/mainPage"} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
