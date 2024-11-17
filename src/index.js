import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import styles from "./index.module.css";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={styles.container}>
      <App />
    </div>
  </React.StrictMode>
);
