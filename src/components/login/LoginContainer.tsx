import React, { useEffect } from "react";
import { login} from "../../store/sharedSlice/authSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import Login from "./Login";
import { setTokenToStorage } from "../../lib/helpers/authenticateHelper";
import { useNavigate } from "react-router-dom";
import { getredirectAfterLoginURL, setredirectAfterLoginURL } from "../../lib/helpers/redirectHelpers";

const LoginContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const redireactAfterLogin = () => {
        const path = getredirectAfterLoginURL();
        navigate(path);
        setredirectAfterLoginURL("")
    }

    const authenticate = async(username:string, password:string) => {
        dispatch( login(username,password,redireactAfterLogin));
    }

    return <Login setLogin={authenticate}/>
}

export default LoginContainer;