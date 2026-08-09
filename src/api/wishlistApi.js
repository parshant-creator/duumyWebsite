import api from './axios';

export const getWishlist = async()=>{
    const response = await api.get("/wishlist")
    return response
}
export const addWishlist = async(productId)=>{
    const response = await api.post("/wishlist/addwishlist",{
        productId
    });
    return response
}
export const removeWishlist = async(productId)=>{
      const response = await  api.delete(`/wishlist/${productId}`)
      return response
}