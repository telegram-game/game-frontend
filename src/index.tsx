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
  <div className={styles.container}>
    <ReduxProviders>
      <App />
    </ReduxProviders>
  </div>
//   <React.StrictMode>
//  </React.StrictMode>
);

reportWebVitals();
