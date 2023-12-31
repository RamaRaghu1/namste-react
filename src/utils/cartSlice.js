import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItemCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    decrementItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, decrementItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
