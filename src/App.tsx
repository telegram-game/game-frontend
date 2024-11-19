import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.module.css";
import { useAppDispatch, useAppSelector } from "./modules/redux/hook";
import { requestAppInformation } from "./modules/redux/slices/app.slice";
import { requestSignIn } from "./modules/redux/slices/auth.slice";
import { routes } from "./routers";

function App() {
  const dispatch = useAppDispatch();
  const { auth, app } = useAppSelector((state) => state);

  useEffect(() => {
    !app.appInformation && dispatch(requestAppInformation());
    !auth.accessToken &&
      dispatch(
        requestSignIn({
          provider: "TELEGRAM",
          code: "cm3jncaux0001akyagxhavaex",
        })
      );
  }, []);
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
