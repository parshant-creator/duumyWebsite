import { Star, Heart, ShoppingCart} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function ProductCard({ product }) {

  const [wishList, setWishList] = useState(false);
  const {cartItems}= useSelector((state)=>state.cart)
  console.log(cartItems)
  const dispatch = useDispatch()
  const handleWishList = (e) => {
    e.preventDefault();
    setWishList((prev) => !prev);
  };
  const handleAddToCart = (e)=>{
    e.preventDefault()
    e.stopPropagation();
    dispatch(
        addToCart({
    ...product,
   })
    )

  }
  return (
    <div
      className="bg-gray-100 p-3 md:p-4 relative min-w-[200px] max-w-[240px] md:min-w-0 rounded-lg flex flex-col h-full hover:shadow-lg
hover:-translate-y-1
transition-all
duration-300"
    >
      <button
        onClick={handleWishList}
        className="cursor-pointer p-1.5 md:p-2 rounded-full bg-white shadow-md absolute top-2 right-2 z-50"
      >
        <Heart
          size={18}
          className={`md:w-5 md:h-5 transition-all duration-200 hover:scale-110 text-red-500 ${wishList ? "fill-red-500" : "fill-red-50"}`}
        />
      </button>

      <div className="relative h-36 sm:h-40 md:h-48 flex justify-center items-center overflow-hidden">
        {product.discount > 0 &&(
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-1 rounded">{product.discount}%OFF</span>
        )}
        <img
          src={product.image}
          className="h-full w-full object-contain"
          alt="img"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1 text-gray-600">
        <h4 className="h-8 md:h-10 text-sm md:text-base font-medium line-clamp-2 hover:text-black hover:underline">
          {product.name}
        </h4>
        <span className="flex items-center gap-1 text-xs md:text-sm">
          <Star
            className="fill-yellow-400 text-yellow-400  md:w-4 md:h-4"
            size={14}
          />
          {product.rating}
        </span>
        <p className="text-xs md:text-sm">{product.category}</p>
        <span className="font-bold text-sm md:text-lg text-black">
          {product.price}
        </span>
       <span
  className={`flex items-center gap-1 text-[11px] md:text-xs font-medium ${
    product.inStock ? "text-green-600" : "text-red-600"
  }`}
>
  <span
    className={`w-2 h-2 rounded-full ${
      product.inStock ? "bg-green-600" : "bg-red-600"
    }`}
  ></span>

  {product.inStock ? "In Stock" : "Out of Stock"}
</span>
      </div>
      <button
      onClick={handleAddToCart}
        disabled={!product.inStock}
        className={`h-9 md:h-10 text-xs md:text-sm mt-auto w-full rounded-md flex items-center justify-center gap-2 text-white transition ${
          product.inStock
            ? "bg-orange-400 hover:bg-orange-500 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        <ShoppingCart size={16} className="md:w-[18px] md:h-[18px]" />
        {product.inStock ? "Add To Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
