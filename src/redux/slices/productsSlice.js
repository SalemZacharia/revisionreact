import { createSlice } from "@reduxjs/toolkit";
import { getallProducts } from "../../api";
let initialState = {
  products: [],
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;

const { fetchProducts, setErrors } = productsSlice.actions;

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const response = await getallProducts();
    dispatch(fetchProducts(response.data));
  } catch (err) {
    dispatch(setErrors(err));
  }
};
