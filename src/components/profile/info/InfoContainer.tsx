import React from "react";
import Info from "./Info";
import { useAppSelector } from "../../../store";

const InfoContainer = () => {
    const userInfo = useAppSelector(state => state.profileState);
    return (
        <Info userInfo={userInfo}/>
    )
}

export default InfoContainer;