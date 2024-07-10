import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { currentUserToken, login as loginAPI } from "@api/Request";
import { setTokenToStorage } from "@lib/helpers/AuthenticateHelper1";
import { AppThunk } from "..";

interface AuthState {
  token: string;
  IsAuthenticated: boolean;
  isFetching: boolean;
  error: string;
}

const initialState: AuthState = {
  token: "",
  IsAuthenticated: false,
  isFetching: false,
  error: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setSuccesLogin: (state, action: PayloadAction<string>) => {
      (state.token = action.payload),
        (state.IsAuthenticated = true),
        (state.isFetching = false),
        (state.error = "");
    },
    clearToken: (state) => {
      (state.token = ""), (state.IsAuthenticated = false);
    },
    setIsFetching: (state) => {
      state.isFetching = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      (state.token = ""),
        (state.IsAuthenticated = false),
        (state.isFetching = false),
        (state.error = action.payload);
    },
  },
});

export const login = (
  username: string,
  password: string,
  redirectAfterLogin: () => void
): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching());
      const res = await loginAPI(username, password);
      if (res) {
        dispatch(setSuccesLogin(res.token));
        setTokenToStorage(res.token);
        redirectAfterLogin();
      }
    } catch (err: AxiosError | any) {
      switch (err.code) {
        case "ERR_NETWORK":
          dispatch(setError("Network error"));
          break;
        case "ERR_BAD_REQUEST":
          dispatch(setError("Username or password are incorrect"));
          break;
        default:
          dispatch(setError("Server Error"));
          break;
      }
    }
  };
};

export const checkToken = (token: string): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await currentUserToken(token);
      if (res.name === "TokenExpiredError") {
        dispatch(clearToken());
      } else {
      }
    } catch (err) {}
  };
};

export const { setSuccesLogin, clearToken, setIsFetching, setError } =
  authSlice.actions;
export default authSlice.reducer;
