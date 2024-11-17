import storage from "../storage";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

const persistAccessToken = async (token) => {
  storage.setItem(ACCESS_TOKEN_KEY, token);
};

const readAccessToken = async () => {
  return (await storage.getItem(ACCESS_TOKEN_KEY)) || "";
};

const persistRefreshToken = async (token) => {
  storage.setItem(REFRESH_TOKEN_KEY, token);
};

const readRefreshToken = async () => {
  return (await storage.getItem(REFRESH_TOKEN_KEY)) || "";
};

const deleteToken = async () => {
  storage.removeItem(ACCESS_TOKEN_KEY);
  storage.removeItem(REFRESH_TOKEN_KEY);
};

export {
  persistAccessToken,
  persistRefreshToken,
  readAccessToken,
  readRefreshToken,
  deleteToken,
};
