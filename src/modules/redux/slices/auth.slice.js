import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../../constants/api-endpoint";
import { Post } from "../../httpClient";

// Initial state
const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
};

// Async Thunks
const requestSignIn = createAsyncThunk("auth/signIn", async (payload) =>
  Post(API_ENDPOINTS.AUTH.SIGN_IN, payload, { skipHandleError: true }).then(
    (res) => {
      if (!res?.accessToken) return initialState;

      return {
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      };
    }
  )
);

// Slice
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

export { requestSignIn };
export default authSlice.reducer;
