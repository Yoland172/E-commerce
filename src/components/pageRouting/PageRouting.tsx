import React from "react";
import HeaderContainer from "../header/HeaderContainer";
import MainPageContainer from "../mainPage/MainPageContainer";
import Footer from "../footer/Footer";
import { Route, Routes } from "react-router-dom";

const PageRouting = () => {
  return (
    <>
      <Routes>
        <HeaderContainer />

        <Route path="mainPage" element={<MainPageContainer />} />

        <Footer />
      </Routes>
    </>
  );
};

export default PageRouting;
