import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";
import authReducers from "./auth/authReducers";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducers),
  },
});
export const persistor = persistStore(store);
