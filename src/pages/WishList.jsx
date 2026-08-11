import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { getWishlist } from "../api/wishlistApi";
import { setWishlist } from "../redux/slices/wishListSlice";

export default function WishList() {
  const dispatch = useDispatch();

  const wishListItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const response = await getWishlist();

        dispatch(setWishlist(response.data.wishlistItems));

        console.log(
          "Wishlist:",
          response.data.wishlistItems
        );
      } catch (error) {
        console.log(
          "Wishlist Error:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchWishList();
  }, [dispatch]);

  return (
    <div className="w-full px-4 md:px-6 py-6">
      <h1 className="text-2xl md:text-3xl font-bold">
        My Wishlist
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        {wishListItems.length}{" "}
        {wishListItems.length === 1 ? "item" : "items"} saved
      </p>

      {wishListItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            Your Wishlist is Empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Save your favorite products here and find them easily later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 mt-6">
          {wishListItems.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}