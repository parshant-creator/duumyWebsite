import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import NoProducts from "./NoProducts";
import products from "../data/products";
import categories from "../data/categories";
export default function SearchPage() {
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const keyword = query.get("q") || "";

  // Search
  const filteredProducts = products.filter((item) => {
    const searchValue = keyword.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue)
    );
  });

  // Sort
  const sortedProducts = [...filteredProducts];

  if (sortBy === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
  <>
    <Header />

    <div className="max-w-7xl mx-auto p-4">

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Search Results for "{keyword}"
        </h2>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-2 mt-3 sm:mt-0"
        >
          <option value="default">Default</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
       <div className="w-full lg:w-64 border rounded-xl shadow-sm p-5 bg-white h-fit">
  <h3 className="text-xl font-semibold border-b pb-3">
    Filters
  </h3>

  <div className="mt-5">
    <h4 className="font-semibold mb-3">
      Category
    </h4>

    {categories
      .filter((item) => item.name !== "For You")
      .map((item) => (
        <label
          key={item.name}
          className="flex items-center gap-2 py-2 cursor-pointer hover:text-orange-500"
        >
          <input
            type="checkbox"
            className="accent-orange-500"
          />

          <span>{item.name}</span>
        </label>
      ))}
  </div>
</div>

        {/* Products */}
        <div className="flex-1">

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                >
                  <ProductCard product={product} />
                </Link>
              ))
            ) : (
              <div className="col-span-full">
                <NoProducts />
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  </>
  );
}
