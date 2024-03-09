import React, { useEffect } from "react";
import "./app.module.scss";
import LoginContainer from "../login/LoginContainer";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { getTokenFromStorage } from "../../lib/helpers/authenticateHelper";
import { setSuccesLogin } from "../../store/sharedSlice/authSlice";
import Header from "../header/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPageContainer from "../mainPage/MainPageContainer";

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/mainPage"
            element={
              <>
                <Header />
                <MainPageContainer />
              </>
            }
          />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="*" element={<Navigate to={"/mainPage"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
