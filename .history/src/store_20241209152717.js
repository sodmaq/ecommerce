import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import orderReducer from "./features/order/OrderSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
