import { configureStore } from "@reduxjs/toolkit";
import { default as transactions } from "./slice/transactions";
import { Logger } from "./logger";

export const store = configureStore({
  reducer: {
    transactions
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger)
});