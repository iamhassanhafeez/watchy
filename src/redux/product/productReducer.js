import { GET_PRODUCT } from "./productTypes";

const initialState = {
  allProducts: 5,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts - 1,
      };
    default:
      return state;
  }
};
export default productReducer;
