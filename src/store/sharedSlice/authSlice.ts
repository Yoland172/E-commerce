import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import { currentUserToken, login as loginAPI } from "../../api/request";
import { setTokenToStorage } from "../../lib/helpers/authenticateHelper";

interface authState {
  token: string;
  IsAuthenticated: boolean;
}

const initialState: authState = {
  token: "",
  IsAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setSuccesLogin: (state, action: PayloadAction<string>) => {
      (state.token = action.payload), (state.IsAuthenticated = true);
    },
    clearToken: (state) => {
      (state.token = ""), (state.IsAuthenticated = false);
      console.log("checkToken")
    },
  },
});

export const login = (username: string, password: string, redirectAfterLogin: () =>void): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        dispatch(setSuccesLogin(res.token));
        setTokenToStorage(res.token);
        redirectAfterLogin()
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkToken = (token: string): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await currentUserToken(token);
      console.log(res);
      if (res.name === "TokenExpiredError") {
        dispatch(clearToken());
      } else {

      }
    } catch (err) {}
  };
};

export const { setSuccesLogin, clearToken } = authSlice.actions;
export default authSlice.reducer;
