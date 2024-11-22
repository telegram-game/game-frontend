import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./components/loader";
import PopupComponent from "./components/popup/popup.component";
import styles from "./index.module.css";
import { LoaderProvider } from "./modules/loader/loader.provider";
import { PopupProvider } from "./modules/popup/popup.provider";
import { ReduxProviders } from "./modules/redux/provider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className={styles.container}>
    <LoaderProvider>
      <PopupProvider>
        <ReduxProviders>
          <PopupComponent />
          <Loader />
          <App />
        </ReduxProviders>
      </PopupProvider>
    </LoaderProvider>
  </div>
  //   <React.StrictMode>
  //  </React.StrictMode>
);

reportWebVitals();
