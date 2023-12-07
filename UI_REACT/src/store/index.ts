import { configureStore } from "@reduxjs/toolkit";
import { default as users } from "./slice/users";
import { default as transactions } from "./slice/transactions";
import { Logger } from "./logger";

export const store = configureStore({
	reducer: {
		users,
    transactions
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger)
});