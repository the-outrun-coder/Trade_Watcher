import { configureStore } from "@reduxjs/toolkit";

import { default as transactions } from "./slice/transactions";

export const store = configureStore({
  reducer: {
    transactions
  }
});