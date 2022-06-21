import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        exist.qty++;
      } else {
        state.push({ ...product, qty: 1 });
      }
    },
    deleteItem: (state, action) => {
      const product = action.payload;
      state.splice(state.findIndex((item) => item.id === product.id));
    },
    increaseItem: (state, action) => {
      const product = action.payload;
      const currProduct = state.find((item) => item.id === product.id);
      currProduct.qty++;
    },
    decreaseItem: (state, action) => {
      const product = action.payload;
      const currProduct = state.find((item) => item.id === product.id);
      if(currProduct.qty === 1) {
        state.splice(state.findIndex((item) => item.id === product.id), 1);
      } else {
        currProduct.qty--;
      }
    },
  },
});
