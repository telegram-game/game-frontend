import { isRejectedWithValue } from "@reduxjs/toolkit";

/**
 * Log a warning and show a toast!
 */
const errorLoggingMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error({ message: action.payload });
  }

  return next(action);
};

export { errorLoggingMiddleware };
