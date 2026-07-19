import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import NoProducts from "./NoProducts";
import { ShoppingCart, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/slices/cartSlice";
import {useDispatch, useSelector} from "react-redux"
import SearchPage from "./SearchPage";
export default function ProductDetail() {
  const dispatch = useDispatch()
 
const { cartItems } = useSelector(state => state.cart);

console.log(cartItems);
  const { id } = useParams();
  console.log(id);
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <NoProducts />;
  }
  const relatedProduct = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  const handleAddToCart = ()=>{
    dispatch(  addToCart({
      ...product,
    }))
 
  }
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 md:py-8">
        <SearchPage />
        <div className="flex w-full md:w-1/2 flex-col mb-6 md:flex-row  gap-10 items-center justify-center border rounded-md shadow-md border-gray-200 px-6 py-2 ">
          <div className="w-full md:w-96 h-52 md:h-72 bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-contain hover:scale-105 transition duration-300"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="flex w-full flex-col gap-1 sm:gap-2">
            <div className="flex justify-between ">
              <h4 className="md:text-2xl text-xl font-bold">{product.name}</h4>
              <span className="flex items-center gap-1 text-xs md:text-sm">
                <Star
                  className="fill-yellow-400 text-yellow-400  md:w-4 md:h-4"
                  size={14}
                />
                {product.rating}
              </span>
            </div>

            <h3 className="text-lg font-semibold mt-6">Description</h3>

            <p className="text-gray-600 leading-7">{product.description}</p>
            <h2 className="text-2xl font-bold text-orange-500">
              ₹{product.price}
            </h2>
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
           
            <button onClick={handleAddToCart} className="w-full bg-orange-500 text-white py-3 rounded-md flex items-center justify-center hover:bg-orange-600 transition">
             <ShoppingCart size={20} className="mr-2" />  Add To Cart
            </button>

          </div>
        </div>   <h2 className="text-2xl font-bold mb-4">
  Related Products
</h2>
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 hider-scrollbar">
       
          {relatedProduct.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
