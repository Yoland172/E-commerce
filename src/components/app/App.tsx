import React, { useEffect } from "react";
import "./app.module.scss";
import LoginContainer from "../login/LoginContainer";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { getTokenFromStorage } from "../../lib/helpers/authenticateHelper";
import { setSuccesLogin } from "../../store/sharedSlice/authSlice";
import StartPage from "../startPage/StartPage";
import Header from "../header/Header";

const App = () => {
  const { token, IsAuthenticated } = useSelector(
    (state: RootState) => state.authState
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      console.log("sdcnjk");
      dispatch(setSuccesLogin(getTokenFromStorage()));
    }
  }, []);

  return (
    <div>
      {token ? (
        <>
          <Header />
          <StartPage />
        </>
      ) : (
        <>
          <LoginContainer />
        </>
      )}
    </div>
  );
};

export default App;
