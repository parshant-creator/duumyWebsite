import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import NoProducts from "./NoProducts";

import products from "../data/products";
import categories from "../data/categories";

export default function SearchPage() {
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const keyword = query.get("q") || "";

  // Search Filter
  const filteredProducts = products.filter((item) => {
    const searchValue = keyword.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue)
    );
  });

  // Category Filter
  const categoryFilteredProducts =
    selectedCategory === "All"
      ? filteredProducts
      : filteredProducts.filter(
          (item) => item.category === selectedCategory
        );

  // Sort
  const sortedProducts = [...categoryFilteredProducts];

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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Search Results for
            <span className="text-orange-500"> "{keyword}"</span>
          </h2>

          {/* Desktop Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="hidden lg:block border rounded-lg px-4 py-2 outline-none"
          >
            <option value="default">Default</option>
            <option value="low-high">Price : Low → High</option>
            <option value="high-low">Price : High → Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Mobile Top */}
        <div className="flex lg:hidden justify-between items-center mb-5">

          <button
            onClick={() => setShowFilter(true)}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg"
          >
            Filter
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-2 outline-none"
          >
            <option value="default">Default</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
            <option value="rating">Rating</option>
          </select>

        </div>

        {/* Mobile Filter Drawer */}
        {showFilter && (
          <div className="fixed inset-0 z-[999] bg-white flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">

              <h2 className="text-xl font-bold">
                Filters
              </h2>

              <button
                onClick={() => setShowFilter(false)}
                className="text-3xl"
              >
                ×
              </button>

            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5">

              <h3 className="text-lg font-semibold mb-4">
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
                      checked={selectedCategory === item.name}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === item.name
                            ? "All"
                            : item.name
                        )
                      }
                      className="accent-orange-500 w-5 h-5"
                    />

                    <span>{item.name}</span>
                  </label>
                ))}
                            </div>

            {/* Bottom Buttons */}
            <div className="border-t p-4 flex gap-3">

              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSortBy("default");
                }}
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

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 bg-white border rounded-xl shadow-sm p-5 h-fit">

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
                      checked={selectedCategory === item.name}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === item.name
                            ? "All"
                            : item.name
                        )
                      }
                      className="accent-orange-500"
                    />

                    <span>{item.name}</span>
                  </label>
                ))}

            </div>

          </div>

          {/* Products */}
          <div className="flex-1">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">

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