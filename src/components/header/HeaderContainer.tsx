import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../../store/sharedSlice/authSlice";
import { setredirectAfterLoginURL } from "../../lib/helpers/redirectHelpers";

const HeaderContainer = () => {
  const { token, IsAuthenticated } = useSelector(
    (state: RootState) => state.authState
  );
  const navigate = useNavigate();
  const onProfileClick = () => {
    if (IsAuthenticated) {
      navigate("/profile");
    } else {
      navigate("/login");
      setredirectAfterLoginURL("/profile");
    }
  };

  return (
    <Header IsAuthenticated={IsAuthenticated} onProfileClick={onProfileClick} />
  );
};

export default HeaderContainer;
