import React, { useEffect } from "react";
import "./app.module.scss";
import LoginContainer from "../login/LoginContainer";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { getTokenFromStorage } from "../../lib/helpers/authenticateHelper";
import { setSuccesLogin } from "../../store/sharedSlice/authSlice";
import Header from "../header/Header";
import { HashRouter as  BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPageContainer from "../mainPage/MainPageContainer";
import Footer from "../footer/Footer";
import { loginByToken } from "../../store/sharedSlice/profileSlice";
import HeaderContainer from "../header/HeaderContainer";
const App = () => {
  const { token, IsAuthenticated } = useSelector(
    (state: RootState) => state.authState
  );
  const dispatch = useAppDispatch();
  const localStorageToken = getTokenFromStorage();
  useEffect(() => {
    if (!token && localStorageToken) {
      console.log(localStorageToken);
      dispatch(loginByToken(localStorageToken));
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
                <HeaderContainer />
                <MainPageContainer />
                <Footer/>
              </>
            }
          />
          <Route path="/product/:id" element={<></>}/>
          <Route path="/profile" element={<>gigi</>}/>

          <Route path="/login" element={<LoginContainer />} />
          <Route path="*" element={<Navigate to={"/mainPage"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
