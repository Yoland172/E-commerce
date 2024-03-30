import React from "react";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "../login/LoginContainer";
import MainPageContainer from "../mainPage/MainPageContainer";
import Footer from "../footer/Footer";
import HeaderContainer from "../header/HeaderContainer";
import ProfilePageRouting from "../profile/ProfilePageRouting";
import "./app.module.scss";
import ProductContainer from "../productPage/ProductContainer";

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
                <MainPageContainer />
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
          <Route path="/login" element={<LoginContainer />} />

          {/* <Route path="*" element={<Navigate to={"/mainPage"} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
