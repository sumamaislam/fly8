import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { combinedReducer } from "../redux/rootReducer";

export const store = configureStore({ reducer: combinedReducer });

export const initStore = () => {
  return configureStore({
    reducer: combinedReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export const wrapper = createWrapper(initStore, {
  debug: true,
});