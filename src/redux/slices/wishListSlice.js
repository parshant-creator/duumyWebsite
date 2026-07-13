import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      wishlistItems :[]
}
   
export const wishListSlice =createSlice ({
    name:"wishList",
    initialState,
    reducers:{
        addToWishList:(state, action)=>{
            const product = state.wishlistItems.find(
              (item)=> item.id === action.payload.id
            )
            if(product){
                state.wishlistItems =state.wishlistItems.filter(
                   (item)=> item.id !== action.payload.id
                )
            }else{
                state.wishlistItems.push({
                   ...action.payload,
                })
            }
        },
        clearWishList:(state)=>{
           state.wishlistItems=[];
        }
}})
export const { addToWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;