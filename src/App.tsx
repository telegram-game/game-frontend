import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.module.css";
import { useLoader } from "./modules/loader/loader.provider";
import { useAppDispatch, useAppSelector } from "./modules/redux/hook";
import { requestAppInformation } from "./modules/redux/slices/app.slice";
import { requestSignIn } from "./modules/redux/slices/auth.slice";
import { routes } from "./routers";

import { backButton, miniApp } from "@telegram-apps/sdk";
type TelegramKeyPair =
  | "#tgWebAppData"
  | "tgWebAppPlatform"
  | "#tgWebAppThemeParams"
  | "tgWebAppVersion";
function App() {
  const dispatch = useAppDispatch();
  const { auth, app } = useAppSelector((state) => state);
  const loader = useLoader();

  useEffect(() => {
    // if (!miniApp.isSupported()) {
    //   if (window.location.pathname !== "/unsupport") {
    //     window.location.href = "./unsupport";
    //     window.location.reload();
    //   }
    //   return;
    // }

    // Check if all required components are supported.
    // if (!backButton.isSupported() || !miniApp.isSupported()) {
    //   throw new Error("ERR_NOT_SUPPORTED");
    // }
    miniApp.mount();
    miniApp.bindCssVars();

    const telegramInfo = new URLSearchParams(window.location.hash);
    const data: Record<TelegramKeyPair, any> = {} as any;

    telegramInfo.forEach((value, key) => {
      data[key as TelegramKeyPair] = value;
    });

    if (!data || !data["#tgWebAppData"]) {
      throw new Error("Telegram user data not found");
    }

    loader.start({
      backgroundColor: "#1d2b4e",
    });
    Promise.all([
      dispatch(requestAppInformation()).unwrap(),
      dispatch(
        requestSignIn({
          provider: "TELEGRAM",
          code: String(data["#tgWebAppData"]),
        })
      ).unwrap(),
    ]).then(() => {
      loader.stop();
      miniApp.ready();
    });
  }, []);

  return (
    <>
      {app.appInformation && auth.accessToken && (
        <RouterProvider router={createBrowserRouter(routes)} />
      )}
    </>
  );
}

export default App;
