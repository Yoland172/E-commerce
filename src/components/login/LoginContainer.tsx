import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@store/sharedSlice/AuthSlice";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  getRedirectAfterLoginURL,
  setRedirectAfterLoginURL,
} from "@lib/helpers/RedirectHelpers1";
import Login from "./Login";

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const redirectAfterLogin = () => {
    const path = getRedirectAfterLoginURL();
    navigate(path);
    setRedirectAfterLoginURL("");
  };

  const { error, isFetching } = useAppSelector((state) => state.authState);

  const authenticate = async (username: string, password: string) => {
    dispatch(login(username, password, redirectAfterLogin));
  };

  return (
    <Login setLogin={authenticate} error={error} isFetching={isFetching} />
  );
};

export default LoginContainer;
