import { combineReducers } from "@reduxjs/toolkit";
import product from "./product";
import home from "./home"
import global from "../redux/global";

export const combinedReducer = () =>
  combineReducers({
    product,
    home,
    global
  });
