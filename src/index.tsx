import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styles from "./index.module.css";
import { ReduxProviders } from "./modules/redux/provider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReduxProviders>
      <div className={styles.container}>
        <App />
      </div>
    </ReduxProviders>
  </React.StrictMode>
);

reportWebVitals();
