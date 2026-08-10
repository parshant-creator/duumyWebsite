import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      wishlistItems :[]
}
   
export const wishListSlice =createSlice ({
    name:"wishList",
    initialState,
    reducers:{
        addToWishList:(state, action)=>{
            const exists = state.wishlistItems.some(
              (item)=> item._id === action.payload._id
            )
            if(!exists){
                state.wishlistItems.push(action.payload)
              }
        },
        removeWishListItems:(state,action)=>{
          state.wishlistItems = state.wishlistItems.filter(
            (item)=>item.id !==action.payload
          )
        },
        clearWishList:(state)=>{
           state.wishlistItems=[];
        },
         setWishlist: (state, action) => {
    state.wishlistItems = action.payload;
  },
}})
export const { addToWishList,removeWishListItems, clearWishList, setWishlist } =
  wishListSlice.actions;

export default wishListSlice.reducer;