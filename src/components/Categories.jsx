import { useState } from "react";
import categories from "../data/categories";
import products from "../data/products";
import ProductCard from "./ProductCard";
import NoProducts from "./NoProducts";
import SkeletonCard from "./SkeletonCard";
import { LayoutGrid } from "lucide-react";
export default function Categories({ searchTerm }) {
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
  const filteredProducts = categoryProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="mt-2 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 px-2 py-3">
           <div className="flex items-center gap-2">
    <LayoutGrid size={22} className="text-orange-500" />
  </div>
        </div>
        <div className="sticky top-16 bg-white z-40 shadow-sm">
        <ul className=" flex py-4 px-2 gap-6 overflow-x-auto whitespace-nowrap hider-scrollbar border-t border-gray-400 border-b">
          {categories.map((item, index) => (
            <li
              onClick={() => handleClick(item)}
              key={index}
              className={`cursor-pointer  transition-all duration-300 ${activeTab === item ? "underline decoration-yellow-500 font-semibold" : "text-gray-600"}`}
            >
              {item}
            </li>
          ))}
        </ul></div>
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div
            className={` gap-4 p-4 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4
    lg:grid-cols-5   transition-all duration-300 ${loading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
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
