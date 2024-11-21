import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../../constants";
import { SignInRequest } from "../../../interfaces";
import { Post } from "../../http-client/http.fetch";
import { getAppCode, persistAccessToken, setAppCode } from "../storages";
import { requestGameProfile, requestGetHero, requestGetMe } from "./app.slice";

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
  async (payload: SignInRequest, { dispatch }) => {
    let code = await getAppCode();

    if (!code) {
      code = crypto.randomUUID().replace(/-/g, "");
      await setAppCode(code);
    }
    return Post(
      API_ENDPOINTS.AUTH.SIGN_IN,
      {
        ...payload,
        // code: "user=%7B%22id%22%3A850598904%2C%22first_name%22%3A%22Phan%22%2C%22last_name%22%3A%22Th%E1%BB%8D%22%2C%22username%22%3A%22tthophan%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FyLz996VM9qOJ-aw-wr2dHVy92ELZHvJejC1XqJVohYI.svg%22%7D&chat_instance=3339665609949499161&chat_type=channel&auth_date=1732179731&signature=U15eDA2ECxvzzcydkys68HEMnmYeItdN3CLM98GRaK_yH_0-DJ-z7R7zBtRNZIHqQxFOehLEl-WgRHpUY8-ZAg&hash=7fc011046c73e1e8ecf16311dfe5f7a1e0d4a6b353c58cf8c1c02f5a9b286ecb",
        referralCode: "referralCode",
      },
      { skipHandleError: true }
    ).then((res: any) => {
      if (!res?.accessToken) return initialState;

      persistAccessToken(res.accessToken);
      dispatch(requestGameProfile());
      dispatch(requestGetHero());
      dispatch(requestGetMe());

      return {
        ...initialState,
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      };
    });
  }
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
