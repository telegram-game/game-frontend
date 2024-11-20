import storage from "../storage";
export const APP_CODE = "APP_CODE";

export const setAppCode = async (code: string): Promise<void> => {
  await storage.setItem(APP_CODE, code);
};

export const removeAppCode = async (): Promise<void> => {
  await storage.removeItem(APP_CODE);
};

export const getAppCode = async (): Promise<string> => {
  return (await storage.getItem(APP_CODE)) || "";
};
