import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import { currentUserToken, login as loginAPI } from "../../api/request";
import { setTokenToStorage } from "../../lib/helpers/authenticateHelper";
import { clearToken, setSuccesLogin } from "./authSlice";

interface profileState {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
}

const initialState: profileState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  image: "",
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<profileState>) => {
      (state.id = action.payload.id),
        (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName),
        (state.email = action.payload.email),
        (state.username = action.payload.username),
        (state.image = action.payload.image);
    },
  },
});

export const loginByToken = (token: string): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await currentUserToken(token);
      if (res) {
        dispatch(setProfileInfo(res));
        dispatch(setSuccesLogin(token));
        setTokenToStorage(token);
      }
    } catch (err) {
      console.log(err);
      dispatch(clearToken());
      setTokenToStorage("");
    }
  };
};

export const { setProfileInfo } = profileSlice.actions;
export default profileSlice.reducer;
