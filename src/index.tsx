import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./components/loader";
import styles from "./index.module.css";
import { LoaderProvider } from "./modules/loader/loader.provider";
import { ReduxProviders } from "./modules/redux/provider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className={styles.container}>
    <LoaderProvider>
      <ReduxProviders>
        <Loader />
        <App />
      </ReduxProviders>
    </LoaderProvider>
  </div>
  //   <React.StrictMode>
  //  </React.StrictMode>
);

reportWebVitals();
