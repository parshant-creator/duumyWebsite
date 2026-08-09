import { useSelector } from "react-redux"

export default function WishList() {
    const wishListItems = useSelector((state)=>state.wishlist.wishlistItems)
    console.log(wishListItems)
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 lg:px-8">
        <div className="mb-6 bg-red-300">
            <h1>My Wishlist</h1>
        <p>{wishListItems.length}{" "}{wishListItems.length ===1? "item":"items"}saved</p></div>
    </div>
  )
}
