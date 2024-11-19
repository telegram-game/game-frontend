import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../../constants";
import { SignInRequest } from "../../../interfaces";
import { Post } from "../../http-client/http.fetch";
import { persistAccessToken } from "../storages";
import { requestGameProfile, requestGetHero } from "./app.slice";

export interface AuthState {
  accessToken?: string;
  refreshToken?: string;
}

const initialState: AuthState = {
  accessToken: undefined,
  refreshToken: undefined,
};

export const requestSignIn = createAsyncThunk(
  "auth/signIn",
  async (payload: SignInRequest, { dispatch }) =>
    Post(API_ENDPOINTS.AUTH.SIGN_IN, payload, { skipHandleError: true }).then(
      (res: any) => {
        if (!res?.accessToken) return initialState;

        persistAccessToken(res.accessToken);
        dispatch(requestGameProfile());
        dispatch(requestGetHero());

        return {
          ...initialState,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        };
      }
    )
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestSignIn.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default authSlice.reducer;
