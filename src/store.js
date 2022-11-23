import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";

/* Creating a store with the reducer. */
export const store = configureStore({
	reducer: {
		employee: employeeReducer,
	},
});
