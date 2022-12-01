import { combineReducers } from "@reduxjs/toolkit";
import product from "./product";

export const combinedReducer = () =>
  combineReducers({
    product
  });
