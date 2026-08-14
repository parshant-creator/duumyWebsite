import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
    buyNowItem: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.totalQuantity++;
    },

    decrementCartQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );
      if (product && product.quantity > 1) {
        product.quantity--;
        state.totalQuantity--;
      }
    },
    removeFromCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );
      if (product) {
        ((state.totalQuantity -= product.quantity),
          (state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id,
          )));
      }
    },
    buyNow: (state, action) => {
      state.buyNowItem = {
        ...action.payload,
        quantity: 1,
      };
    },

    clearBuyNow: (state) => {
      state.buyNowItem = null;
    },
  },
});

export const {
  addToCart,
  decrementCartQuantity,
  removeFromCart,
  buyNow,
  clearBuyNow,
} = cartSlice.actions;

export default cartSlice.reducer;
