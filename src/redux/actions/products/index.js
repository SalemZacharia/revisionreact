// import axios from "axios";
// import { getallProducts, addProduct } from "../../../api";

// export const getProducts = () => async (dispatch) => {
//   const response = await getallProducts();
//   console.log(response.data);
//   dispatch({ type: "GET_PRODUCTS", payload: response.data });
// };

// export const ajoutProduct = (product) => async (dispatch) => {
//   try {
//     const response = await addProduct(product);
//     console.log(response.data);
//     dispatch({ type: "ADD_PRODUCTS_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "ADD_PRODUCTS_FAILED", payload: error.response });
//   }
// };
