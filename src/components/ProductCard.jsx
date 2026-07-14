import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
export default function ProductCard({ product }) {
  const [wishList, setWishList] = useState(false);
  // const handleWishList = ()=>{
  //   if(wishList===true){
  //     setWishList(false)
  //   }else{
  //     setWishList(true)
  //   }
  // }
  const handleWishList = () => {
    setWishList((prev) => !prev);
  };
  return (
    <div
      className="bg-gray-100 p-4 relative rounded-sm flex flex-col h-full hover:shadow-lg
hover:-translate-y-1
transition-all
duration-300"
    >
      <button
        onClick={handleWishList}
        className="cursor-pointer p-2 rounded-full bg-white shadow-md absolute top-2 right-2"
      >
        <Heart
          className={`transition-all duration-200 hover:scale-110 text-red-500 ${wishList ? "fill-red-500" : "fill-red-50"}`}
        />
      </button>

      <div className="h-48 flex justify-center items-center">
        <img className="h-full w-full object-contain" alt="img" />
      </div>
      <div className="flex flex-col gap-2 flex-1 text-gray-600">
        <h4 className="h-12 font-medium hover:text-black hover:underline">
          {product.name}
        </h4>
        <span className="flex gap-2">
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          {product.rating}
        </span>
        <p>{product.category}</p>
        <span className="font-bold text-black">{product.price}</span>
      </div>
      <button
        onClick={() => console.log(product.name)}
        className="h-10  flex justify-center items-center gap-2 text-white transition hover:bg-orange-500 cursor-pointer  mt-auto w-full rounded-md bg-orange-400"
      >
        <ShoppingCart size={18} />
        Add To Cart
      </button>
    </div>
  );
}
