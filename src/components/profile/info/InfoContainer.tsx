import React from "react";
import { useAppDispatch, useAppSelector } from "@store/index";
import Info from "./Info";
import { UserDataType } from "@lib/types/Types";
import { setNewEmail, setNewPhone, setNewUserName } from "@store/sharedSlice/ProfileSlice";

const InfoContainer = () => {
  const userInfo = useAppSelector((state) => state.profileState);
  const dispatch = useAppDispatch();

    const handleChangeUserInfo = (data:string, dataType:UserDataType) => {
      console.log(data,dataType)
      switch (dataType) {
        case UserDataType.Username:
        dispatch(setNewUserName(data));
        break;
        case UserDataType.Email:
          dispatch(setNewEmail(data));
          break;
        case UserDataType.Phone:
          dispatch(setNewPhone(data));
          break;
          default:{
            console.error("nothing found:(")
          }
      }
    }


  return <Info userInfo={userInfo} changeUserInfo={handleChangeUserInfo}/>;
};

export default InfoContainer;
