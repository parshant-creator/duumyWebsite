import {  Heart} from "lucide-react";
import { useState } from "react";
import {  useSelector } from "react-redux";

export default function ProductCard({ product }) {

  const [wishList, setWishList] = useState(false);
  const {cartItems}= useSelector((state)=>state.cart)
  const handleWishList = (e) => {
    e.preventDefault();
    setWishList((prev) => !prev);
  };
 
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
        
        <span className="font-bold text-sm md:text-lg text-black">
          ₹{product.price}
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
     
    </div>
  );
}
