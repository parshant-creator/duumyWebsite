import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import  wishlistReducer from './slices/wishListSlice'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    wishlist:wishlistReducer
  },
})

