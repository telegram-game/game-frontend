import storage from "../storage";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export const persistAccessToken = async (token: string): Promise<void> => {
  storage.setItem(ACCESS_TOKEN_KEY, token);
};

export const readAccessToken = async (): Promise<string> => {
  return (await storage.getItem(ACCESS_TOKEN_KEY)) || "";
};

export const persistRefreshToken = async (token: string): Promise<void> => {
  storage.setItem(REFRESH_TOKEN_KEY, token);
};

export const readRefreshToken = async (): Promise<string> => {
  return (await storage.getItem(REFRESH_TOKEN_KEY)) ?? "";
};

export const deleteToken = async (): Promise<void> => {
  storage.removeItem(ACCESS_TOKEN_KEY);
  storage.removeItem(REFRESH_TOKEN_KEY);
};
