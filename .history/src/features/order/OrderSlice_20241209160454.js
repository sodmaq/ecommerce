import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // Store past orders
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload); // Add the new order
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;

// Selector to get all orders
export const getOrders = (state) => state.orders.orders;
