const initialState = {
  products: [],
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "ADD_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: payload,
      };
    case "ADD_PRODUCTS_FAILED":
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
