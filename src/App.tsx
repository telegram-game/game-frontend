import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.module.css";
import { useLoader } from "./modules/loader/loader.provider";
import { useAppDispatch, useAppSelector } from "./modules/redux/hook";
import { requestAppInformation } from "./modules/redux/slices/app.slice";
import { requestSignIn } from "./modules/redux/slices/auth.slice";
import { routes } from "./routers";

function App() {
  const dispatch = useAppDispatch();
  const { auth, app } = useAppSelector((state) => state);
  const loader = useLoader();

  useEffect(() => {
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
      dispatch(
        requestSignIn({
          provider: "TELEGRAM",
          code: "cm3jncaux0001akyagxhavaex",
        })
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
