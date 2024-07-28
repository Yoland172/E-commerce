import Footer from "@components/footer/Footer";
import HeaderContainer from "@components/header/HeaderContainer";
import React from "react";
import { Outlet } from "react-router-dom";

const RoutingLayout = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default RoutingLayout;
