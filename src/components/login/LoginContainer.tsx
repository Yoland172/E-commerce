import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@store/sharedSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  getredirectAfterLoginURL,
  setredirectAfterLoginURL,
} from "@lib/helpers/redirectHelpers";
import Login from "./Login";

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const redirectAfterLogin = () => {
    const path = getredirectAfterLoginURL();
    navigate(path);
    setredirectAfterLoginURL("");
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
