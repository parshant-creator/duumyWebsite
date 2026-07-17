import { useEffect, useRef, useState } from "react";
import categories from "../data/categories";
import products from "../data/products";
import ProductCard from "./ProductCard";
import NoProducts from "./NoProducts";
import SkeletonCard from "./SkeletonCard";
export default function Categories({ searchTerm }) {
  const [activeTab, setActiveTab] = useState("For You");
  const [loading, setLoading] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
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
  const lastScrollY = useRef(0);
  useEffect(() => {
    const scroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setShowIcons(false);
      } else {
        setShowIcons(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <section className="mt-2 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="sticky py-4 px-4 top-16 bg-white z-40 shadow-sm border-t border-gray-400">
          <ul className="flex gap-6 overflow-x-auto whitespace-nowrap hider-scrollbar">
            {categories.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item.name)}
                className="flex flex-col items-center gap-2 min-w-[90px] cursor-pointer"
              >
                <img
                  className={`h-8 w-10 transition-all duration-300 overflow-hidden ${
                    showIcons ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  src={item.img}
                  alt={item.name}
                />

                <span
                  className={`transition-all duration-300 ${
                    activeTab === item.name
                      ? "underline underline-offset-4 decoration-2 decoration-orange-500 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
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
