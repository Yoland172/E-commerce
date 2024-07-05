import React from "react";
import { HashRouter as BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginContainer from "../login/LoginContainer";
import Footer from "../footer/Footer";
import HeaderContainer from "../header/HeaderContainer";
import ProfilePageRouting from "../profile/ProfilePageRouting";
import "./app.module.scss";
import ProductContainer from "../productPage/ProductContainer";
import { useAppSelector } from "../../store";
import MainPage from "@components/mainPage/MainPage";

const App = () => {

  const userId = useAppSelector((state) => state.profileState.id);
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
          <Route path="/login" element={<LoginContainer />} />

          {/* <Route path="*" element={<Navigate to={"/mainPage"} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
