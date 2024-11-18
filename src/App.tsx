import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.module.css";
import { routes } from "./routers";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter(routes)} />
    </React.StrictMode>
  );
}

export default App;
