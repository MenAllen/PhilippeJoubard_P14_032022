import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import employeeReducer from "./features/employeeSlice";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, employeeReducer)

/* Creating a store with the reducer. */
export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
	devTools: true
});

export const persistor = persistStore(store)
