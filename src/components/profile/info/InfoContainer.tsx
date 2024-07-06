import React from "react";
import { useAppSelector } from "@store/index";
import Info from "./Info";

const InfoContainer = () => {
  const userInfo = useAppSelector((state) => state.profileState);
  return <Info userInfo={userInfo} />;
};

export default InfoContainer;
