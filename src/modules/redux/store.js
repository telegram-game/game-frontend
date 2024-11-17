import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { errorLoggingMiddleware } from "./middlewares/errorLogging.middleware";
import reducer from "./slices/index";

// Create Redux store
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      errorLoggingMiddleware
    ),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
});

// Create persistor for redux-persist
export const persistor = persistStore(store);
