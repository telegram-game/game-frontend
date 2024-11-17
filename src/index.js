import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import styles from "./index.module.css";
import ReduxProviders from "./modules/redux/provider";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <ReduxProviders>
      <div className={styles.container}>
        <App />
      </div>
    </ReduxProviders>
  // </React.StrictMode>
);
