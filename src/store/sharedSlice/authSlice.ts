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

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setSuccesLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload, 
      state.IsAuthenticated = true;
    },
  },
});

export const login = (username: string, password: string):AppThunk => {
  return async (dispatch) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        dispatch(setSuccesLogin(res.token));
        setTokenToStorage(res.token);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkToken = (token:string) => {
  return async() => {
    const res = await currentUserToken(token);
    console.log(res);
  }
}

export const { setSuccesLogin } = appSlice.actions;
export default appSlice.reducer;
