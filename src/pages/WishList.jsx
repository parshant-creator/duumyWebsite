import {useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { getWishlist } from "../api/wishlistApi";
import { setWishlist } from "../redux/slices/wishListSlice";

export default function WishList() {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishListItems);
  useEffect(()=>{
    const fetchWishList = async()=>{
      try{
        const response = await getWishlist();
        dispatch(setWishlist(response.data.wishlistItems))
        console.log(response.data.wishlistItems)
      }catch(error){
        console.log(error)
      }
    }
    fetchWishList()
  },[dispatch])
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Wishlist</h1>
        <p className="mt-1 text-sm text-gray-500">
          {wishListItems.length} {wishListItems.length === 1 ? "item" : "items"}{" "}
          saved
        </p>
      </div>
      {wishListItems.length === 0 ? (
        <div className="min-h-[400px] flex flex-col items-center justify-center">
           <h2 className="text-xl font-semibold text-gray-800">
            Your Wishlist is Empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Save your favorite products here and find them easily later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {wishListItems.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
