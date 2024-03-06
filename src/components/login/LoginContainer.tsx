import React, { useEffect } from "react";
import { login} from "../../store/sharedSlice/authSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import Login from "./Login";
import { setTokenToStorage } from "../../lib/helpers/authenticateHelper";

const LoginContainer = () => {
    const {token, IsAuthenticated} = useSelector((state: RootState) => state.authState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(token);
        console.log(IsAuthenticated);
    },[token, IsAuthenticated])
    
    const authenticate = async(username:string, password:string) => {
        dispatch( login(username,password));
    }

    return <Login setLogin={authenticate}/>
}

export default LoginContainer;