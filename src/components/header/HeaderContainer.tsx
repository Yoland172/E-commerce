import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/index";
import { getProfileInfo } from "@store/sharedSlice/ProfileSlice";
import { setRedirectAfterLoginURL } from "@lib/helpers/RedirectHelpers1";
import { getTokenFromStorage } from "@lib/helpers/AuthenticateHelper1";
import Header from "./Header";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const IsAuthenticated = useAppSelector(
    (state) => state.authState.IsAuthenticated
  );
  const token =
    useAppSelector((state) => state.authState.token) || getTokenFromStorage();

  const username = useAppSelector((state) => state.profileState.username);
  useEffect(() => {
    token && dispatch(getProfileInfo(token));
  }, []);

  const onProfileClick = () => {
    if (IsAuthenticated) {
      navigate("/profile/info");
    } else {
      navigate("/login");
      setRedirectAfterLoginURL("/profile/info");
    }
  };

  return (
    <Header IsAuthenticated={IsAuthenticated} onProfileClick={onProfileClick} username={username}/>
  );
};

export default HeaderContainer;
