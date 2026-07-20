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
  const [showFilter,setShowFilter] = useState(false)
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
        <h2 className="text-lg sm:text-xl lg:text-2xl">
          Search Results for "{keyword}"
        </h2>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="hidden lg:block border rounded-lg px-4 py-2 mt-3 sm:mt-0"
        >
          <option value="default">Default</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
<div className="flex lg:hidden justify-between mb-4">
    <button
  onClick={() => setShowFilter(true)}
  className="px-5 py-2 bg-orange-500 text-white rounded-lg"
>
  Filter
</button>
{showFilter && (
  <div className="fixed inset-0 z-50 bg-white flex flex-col">

    {/* Header */}
    <div className="flex items-center justify-between p-4 border-b">
      <h2 className="text-xl font-bold">Filters</h2>

      <button
        onClick={() => setShowFilter(false)}
        className="text-3xl font-light"
      >
        ×
      </button>
    </div>

    {/* Body */}
    <div className="flex-1 overflow-y-auto p-5">

      {/* Category */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Category
        </h3>

        {categories
          .filter((item) => item.name !== "For You")
          .map((item) => (
            <label
              key={item.name}
              className="flex items-center gap-3 py-2"
            >
              <input
                type="checkbox"
                className="accent-orange-500 w-5 h-5"
              />

              <span>{item.name}</span>
            </label>
          ))}
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Price
        </h3>

        <label className="flex gap-3 py-2">
          <input type="radio" name="price" />
          Under ₹500
        </label>

        <label className="flex gap-3 py-2">
          <input type="radio" name="price" />
          ₹500 - ₹1000
        </label>

        <label className="flex gap-3 py-2">
          <input type="radio" name="price" />
          Above ₹1000
        </label>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-lg mb-4">
          Rating
        </h3>

        <label className="flex gap-3 py-2">
          <input type="radio" name="rating" />
          4★ & Above
        </label>

        <label className="flex gap-3 py-2">
          <input type="radio" name="rating" />
          3★ & Above
        </label>
      </div>

    </div>

    {/* Bottom Buttons */}
    <div className="border-t p-4 flex gap-3">

      <button
        className="flex-1 border border-gray-300 py-3 rounded-lg"
      >
        Reset
      </button>

      <button
        onClick={() => setShowFilter(false)}
        className="flex-1 bg-orange-500 text-white py-3 rounded-lg"
      >
        Apply Filter
      </button>

    </div>

  </div>
)}
       <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="border rounded-lg px-3 py-2"
>
  <option value="default">Default</option>
  <option value="low-high">Low → High</option>
  <option value="high-low">High → Low</option>
  <option value="rating">Rating</option>
</select>
</div>
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
       <div className="hidden lg:block w-64 border rounded-xl shadow-sm p-5 bg-white h-fit">
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

          <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

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
