import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 50,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    decreaseValue: (state) => {
      state.value -= 1;
    },
  },
});

export const { getAllProducts, decreaseValue } = productSlice.actions;
export default productSlice.reducer;
