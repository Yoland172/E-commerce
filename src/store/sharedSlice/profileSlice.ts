import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { currentUserToken } from "@api/request";
import { setTokenToStorage } from "@lib/helpers/AuthenticateHelper";
import { AppThunk } from "..";
import { clearToken, setSuccesLogin } from "./AuthSlice";

interface ProfileState {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  isFetching: boolean;
}

const initialState: ProfileState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  phone: "",
  isFetching: false,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<ProfileState>) => {
      (state.id = action.payload.id),
        (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName),
        (state.email = action.payload.email),
        (state.username = action.payload.username),
        (state.phone = action.payload.phone);
      state.isFetching = false;
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
  },
});

export const getProfileInfo = (token: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await currentUserToken(token);
      if (res) {
        dispatch(setProfileInfo(res));
        dispatch(setSuccesLogin(token));
        setTokenToStorage(token);
      }
    } catch (err) {
      dispatch(clearToken());
      setTokenToStorage("");
    }
  };
};

export const { setProfileInfo, setIsFetching } = profileSlice.actions;
export default profileSlice.reducer;
