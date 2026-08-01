import { Heart } from "lucide-react";
import { useState } from "react";

export default function SearchProductCard({ product }) {
  const [wishList, setWishList] = useState(false);
  const handleWishList = (e) => {
    e.preventDefault();
    setWishList((prev) => !prev);
  };
  return (
    <div className="w-full flex md:flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <button
          onClick={handleWishList}
          className="cursor-pointer p-1.5 md:p-2 rounded-full z-20 bg-white shadow-md absolute top-2 right-2 "
        >
          <Heart
            size={18}
            className={`md:w-5 md:h-5 transition-all duration-200 hover:scale-110  text-red-500 ${wishList ? "fill-red-500" : "fill-red-50"}`}
          />
        </button>
        {product.discount > 0 && (
          <span className="absolute z-20 top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-1 rounded">
            {product.discount}%OFF
          </span>
        )}

        <div className="relative shrink-0 w-28 h-28 md:w-full md:h-48 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between">
            <h4 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2  hover:text-black hover:underline">{product.name}</h4>
          
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
