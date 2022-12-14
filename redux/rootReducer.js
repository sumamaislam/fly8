import { combineReducers } from "@reduxjs/toolkit";
import product from "./product";
import home from "./home"
import global from "../redux/global";
import order from "./order"

export const combinedReducer = () =>
  combineReducers({
    product,
    home,
    order,
    global
  });
