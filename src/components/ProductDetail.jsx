import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import NoProducts from "./NoProducts";
import { Star } from "lucide-react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  console.log(id);
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <NoProducts />;
  }
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex w-full flex-col  md:flex-row gap-10 items-start border rounded-md shadow-md border-gray-200 p-4 ">
          <div className="w-full md:w-96 h-72 bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex  gap-4">
              <h4>{product.name}</h4>
              <span className="flex items-center gap-1 text-xs md:text-sm">
                <Star
                  className="fill-yellow-400 text-yellow-400  md:w-4 md:h-4"
                  size={14}
                />
                {product.rating}
              </span>
            </div>

            <p>Description</p>
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
            <div className="flex items-center w-fit border rounded-md overflow-hidden">
              <button
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                onClick={decreaseQuantity}
              >
                -
              </button>

              <span className="px-5">{quantity}</span>

              <button
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-orange-400 rounded-md text-white">
              Add To Cart
            </button>
            <button className="bg-orange-400 rounded-md text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
