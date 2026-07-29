import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import Header from "./Header";
import { MapPin, Star, Van } from "lucide-react";
import { useState } from "react";
import NoProducts from "../components/NoProducts";
import ProductCard from "./ProductCard";
export default function ProductDescription() {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <NoProducts />;
  }
  const relatedProduct = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        <p className="flex gap-1 text-xs lg:text-sm">
          Home /<span className="text-gray-500">{product.category}</span> /
          <span className="text-black font-medium">{product.name}</span>
        </p>
      </div>
      <div className="max-w-7xl  mx-auto lg:h-187.5 grid lg:grid-cols-2 p-4 lg:p-8">
        <div className="p-4 lg:p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 lg:h-full object-contain"
          />
        </div>
        <div className="flex flex-col min-h-0 p-4 lg:p-8">
          <div className=" flex-1 lg:overflow-y-auto min-h-0 hider-scrollbar ">
            <h4 className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
              {product.brand}
            </h4>
            <h1 className="text-2xl lg:text-3xl font-bold mt-2">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600 leading-7 text-[15px]">
              {showMore
                ? product.description
                : product.description.slice(0, 180)}
            </p>
            {!showMore && (
              <span
                className="text-blue-600 font-medium mt-1"
                onClick={() => setShowMore((showMore) => !showMore)}
              >
                ...more
              </span>
            )}

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-600 text-white px-2 py-1 rounded-md w-fit">
                <Star size={14} className="fill-white" />
                <span className="text-sm">{product.rating}</span>
              </div>

              <span className="text-sm text-gray-500">1.2k Ratings</span>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-orange-500">
                ₹{product.price}
              </h2>

              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                {product.discount}% OFF
              </span>
            </div>
            <div className="mt-6 rounded-xl border bg-gray-50 p-3 lg:p-4 space-y-3">
              <h4 className="font-semibold text-lg">Delivery Details</h4>
              <p className="flex gap-1 items-baseline-last">
                <span>
                  <MapPin className="text-orange-500" size={16} />
                </span>
                <span>Location not set</span>
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <Van className="text-orange-500" size={16} />
                </span>
                <span>delivered by ...</span>
              </p>
            </div>
          </div>
          <div className="lg:sticky lg:bottom-0 pt-5 flex justify-between  gap-3">
            <button className="flex-1 rounded-lg border border-orange-500 py-3 font-semibold text-orange-500 hover:bg-orange-50 cursor-pointer">
              Add to Cart
            </button>
            <button className="flex-1 rounded-lg border border-orange-500 py-3 font-semibold bg-orange-500 text-white hover:bg-orange-600 cursor-pointer">
              Buy Now • ₹{product.price}
            </button>
          </div>
        </div>
      </div>
     
     <div className="w-full mt-12 px-4 py-6 bg-blue-50">
  <h2 className="text-2xl font-bold mb-6">Similar Products</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 border-blue-500">
    {relatedProduct.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <ProductCard product={product} />
      </Link>
    ))}
  </div>
</div></div>
  );
}
