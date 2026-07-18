import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity || 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity:action.payload.quantity || 1,
        });
      }
      state.totalQuantity++;
    },

    decrementCartQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (product && product.quantity > 1) {
        product.quantity--;
        state.totalQuantity--;
      }
    },
    removeFromCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (product) {
      state.totalQuantity -= product.quantity,
      state.cartItems =state.cartItems.filter(
        (item)=> item.id !== action.payload.id
      )
      }
    },
  },
});

export const { addToCart, decrementCartQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
