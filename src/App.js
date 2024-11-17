import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NotFound from "./pages/404";
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
