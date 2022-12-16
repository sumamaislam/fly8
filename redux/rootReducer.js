import { combineReducers } from "@reduxjs/toolkit";
import product from "./product";
import home from "./home"

export const combinedReducer = () =>
  combineReducers({
    product,
    home
  });
