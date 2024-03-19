import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import { currentUserToken } from "../../api/request";
import { setTokenToStorage } from "../../lib/helpers/authenticateHelper";
import { clearToken, setSuccesLogin } from "./authSlice";

interface ProfileState {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
}

const initialState: ProfileState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  phone: "",
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<ProfileState>) => {
      state.id = action.payload.id,
      state.firstName = action.payload.firstName,
      state.lastName = action.payload.lastName,
      state.email = action.payload.email,
      state.username = action.payload.username,
      state.phone = action.payload.phone;
    },
  },
});

export const getProfileInfo = (token: string): AppThunk => {
  return async (dispatch) => {
    try {
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

export const { setProfileInfo } = profileSlice.actions;
export default profileSlice.reducer;
