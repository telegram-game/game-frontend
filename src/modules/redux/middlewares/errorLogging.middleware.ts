import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";

export const errorLoggingMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error({ message: action.payload });
  }

  return next(action);
};
