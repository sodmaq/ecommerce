import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [
    {
      id: 1,
      name: "Velvet Sneaker",
      price: 18.0,
      image: "https://readymadeui.com/images/product14.webp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch Timex",
      price: 90.0,
      image: "https://readymadeui.com/images/watch5.webp",
      quantity: 1,
    },
    {
      id: 3,
      name: "Sun Glass",
      price: 30.0,
      image: "https://readymadeui.com/images/sunglass1.webp",
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.cart.push({
        ...newItem,
        unitPrice: newItem.price, // Use the price from payload as unitPrice
        totalPrice: newItem.price * newItem.quantity, // Compute totalPrice
      });
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1; // Default quantity to 1 if undefined
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      // if (item.quantity <= 0) {
      //   state.cart = state.cart.filter(
      //     (item) => item.id !== action.payload,
      //   );
      // }
      // instead of doing it above. we can use this below

      if (item.quantity <= 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
      // state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
};

export const getCurrentQuantityById = (id) => (state) => {
  const item = state.cart.cart.find((item) => item.id === id);
  return item ? item.quantity : 0;
};
