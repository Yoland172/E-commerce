import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useAppDispatch, useAppSelector } from "../../store";
import { setredirectAfterLoginURL } from "../../lib/helpers/redirectHelpers";
import { getProfileInfo } from "../../store/sharedSlice/profileSlice";
import { getTokenFromStorage } from "../../lib/helpers/authenticateHelper";

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
      setredirectAfterLoginURL("/profile/info");
    }
  };

  return (
    <Header IsAuthenticated={IsAuthenticated} onProfileClick={onProfileClick} username={username}/>
  );
};

export default HeaderContainer;
