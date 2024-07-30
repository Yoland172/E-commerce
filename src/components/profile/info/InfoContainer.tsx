import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/index';
import Info from './Info';
import { UserDataType } from '@lib/types/Types';
import {
    removeAllData as removeAllDataFromProfileSlice,
    setNewEmail,
    setNewPhone,
    setNewUserName,
} from '@store/sharedSlice/ProfileSlice';
import { deleteUserCartToStorage } from '@lib/helpers/CartHelper';
import { deleteTokenFromStorage } from '@lib/helpers/AuthenticateHelper';
import { removeAllData as removeAllDataFromCartSlice } from '@store/sharedSlice/CartSlice';
import { removeAllData as removeAllDataFromAuthSlice } from '@store/sharedSlice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { setRedirectAfterLoginURL } from '@lib/helpers/RedirectHelpers';

const InfoContainer = () => {
    const userInfo = useAppSelector((state) => state.profileState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const token = useAppSelector(state => state.authState.token);

    useEffect(()=>{
      if(!token) {
        navigate('/login');
        setRedirectAfterLoginURL("/profile/info");
      }
    },[token])

    const handleChangeUserInfo = (data: string, dataType: UserDataType) => {
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
            default: {
                console.error('nothing found:(');
            }
        }
    };

    const exit = () => {
        dispatch(removeAllDataFromProfileSlice());
        dispatch(removeAllDataFromCartSlice());
        dispatch(removeAllDataFromAuthSlice());
        deleteUserCartToStorage();
        deleteTokenFromStorage();
        navigate('/mainPage');
    };

    return <Info userInfo={userInfo} changeUserInfo={handleChangeUserInfo} exit={exit} />;
};

export default InfoContainer;
