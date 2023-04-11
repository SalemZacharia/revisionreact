import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import products from "../reducers/products";

const reducer = combineReducers({
  // here we will be adding reducers
  products,
});
const store = configureStore(
  {
    reducer,
  },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
