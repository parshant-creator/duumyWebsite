import { useState } from "react";
import categories from "../data/categories";
import products from "../data/products";
import ProductCard from "./ProductCard";
import NoProducts from "./NoProducts";

export default function Categories({searchTerm}) {
  const [activeTab, setActiveTab] = useState("For You");
  const [loading, setLoading] = useState(false);
  const handleClick = (category) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(category);
      setLoading(false);
    }, 300);
  };
  const categoryProducts =
    activeTab === "For You"
      ? products
      : products.filter((product) => product.category === activeTab);
const filteredProducts = categoryProducts.filter((product)=>
  product.name
.toLowerCase()
.includes(searchTerm.toLowerCase())
)

  return (
    <section className=" mt-12 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ul className="flex py-2 px-2 gap-6 overflow-x-auto whitespace-nowrap hider-scrollbar">
          {categories.map((item, index) => (
            <li
              onClick={() => handleClick(item)}
              key={index}
              className={`cursor-pointer transition-all duration-300 ${activeTab === item ? "underline decoration-yellow-500 font-semibold" : "text-gray-600"}`}
            >
              {item}
            </li>
          ))}
        </ul>
        {loading? (
          <h4 className="flex justify-center items-center">Loading...</h4>
        ):(
        <div
          className={`flex overflow-x-auto hider-scrollbar gap-4 p-4 sm:grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4
    xl:grid-cols-5   transition-all duration-300 ${loading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          {filteredProducts.length > 0 ?(
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))):(
            <div className="col-span-full">
            <NoProducts />
            </div>
          )}
        </div>
        )}
        
      </div>
    </section>
  );
}
