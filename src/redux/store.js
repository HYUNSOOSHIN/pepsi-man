import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // localStorage
// import storageSession from "redux-persist/lib/storage/session" // sessionStorage
import rootReducer from "./modules"

const persistConfig = {
  key: "root",
  storage: storage,
}

const enhancedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ reducer: enhancedReducer, middleware: [] })

export const persistor = persistStore(store)
