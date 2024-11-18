import { persistReducer } from "redux-persist";

import storage from "../storage";
import authReducer from "./auth.slice";

// Define reducers with persistence
const globalReducer = {
  auth: persistReducer(
    {
      key: "auth",
      storage,
    },
    authReducer
  ),
};

export default globalReducer;
