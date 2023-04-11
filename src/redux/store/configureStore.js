import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import products from "../slices/productsSlice";

const reducer = combineReducers({
  // here we will be adding reducers
  products,
});
const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
