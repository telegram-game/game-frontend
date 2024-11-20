import storage from "../storage";
export const SET_LOADING = "LOADING";

export const setLoading = async (): Promise<void> => {
  await storage.setItem(SET_LOADING, `true`);
};

export const clearLoading = async (): Promise<void> => {
  await storage.removeItem(SET_LOADING);
};

export const readLoading = async (): Promise<string> => {
  return (await storage.getItem(SET_LOADING)) || "";
};
