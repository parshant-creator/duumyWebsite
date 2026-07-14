import { useState } from "react";
import categories from "../data/categories";
import products from "../data/products";
import ProductCard from "./ProductCard";
export default function Categories() {
  const [activeTab, setActiveTab] = useState("For You");
  const [loading, setLoading] = useState(false);
  const handleClick = (category) => {
    setLoading(true);

    
    setTimeout(() => {
      setActiveTab(category);
      setLoading(false);
    }, 300);
  };
  const filterProducts =
    activeTab === "For You"
      ? products
      : products.filter((product) => product.category === activeTab);
  return (
    <section className=" mt-12 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ul className="flex gap-6 overflow-x-auto whitespace-nowrap hider-scrollbar">
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
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 p-4 items-stretch gap-4 transition-all duration-300 ${loading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          {filterProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        )}
        
      </div>
    </section>
  );
}
