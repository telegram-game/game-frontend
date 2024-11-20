import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.module.css";
import { useLoader } from "./modules/loader/loader.provider";
import { useAppDispatch, useAppSelector } from "./modules/redux/hook";
import { requestAppInformation } from "./modules/redux/slices/app.slice";
import { requestSignIn } from "./modules/redux/slices/auth.slice";
import { routes } from "./routers";

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
    const telegramInfo = new URLSearchParams(window.location.hash);
    const data: Record<TelegramKeyPair, any> = {} as any;

    telegramInfo.forEach((value, key) => {
      if (key === "tgWebAppThemeParams")
        data[key as TelegramKeyPair] = JSON.parse(decodeURIComponent(value));
      else if (key === "#tgWebAppData") {
        new URLSearchParams(decodeURIComponent(value)).forEach(
          (value, childKey) => {
            if (childKey === "user")
              value = JSON.parse(decodeURIComponent(value));
            data[key as TelegramKeyPair] = {
              ...(data[key as TelegramKeyPair] ?? {}),
              [childKey]: value,
            };
          },
        );
      } else data[key as TelegramKeyPair] = decodeURIComponent(value);
    });

    if (!app.appInformation) {
      loader.start();
      dispatch(requestAppInformation())
        .unwrap()
        .finally(() => {
          loader.stop();
        });
    }
    if (!auth.accessToken) {
      loader.start();

      if (!data || !data["#tgWebAppData"]?.user?.id) {
        throw new Error("Telegram user data not found");
      }
      dispatch(
        requestSignIn({
          provider: "TELEGRAM",
          code: String(data["#tgWebAppData"].user.id),
          ...data["#tgWebAppData"],
        }),
      )
        .unwrap()
        .finally(() => {
          loader.stop();
        });
    }
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
