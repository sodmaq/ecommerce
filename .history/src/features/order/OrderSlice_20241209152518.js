// In your cartSlice or a new orderSlice
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    placeOrder(state, action) {
      state.push(action.payload); // Save the order details
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
