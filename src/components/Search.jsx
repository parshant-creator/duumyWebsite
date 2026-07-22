import Header from "./Header";
import products from "../data/products";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import NoProducts from "./NoProducts";
// import NoProducts from "./NoProducts";
export default function Search() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");
  console.log(keyword);
  const filterProduct = products.filter((item) =>
    item.name.toLowerCase().includes(keyword?.toLowerCase()),
  );
  const allCategories = filterProduct.map((item) => item.category);
  console.log(allCategories);
  const uniqueCategories = [...new Set(allCategories)];
  console.log(uniqueCategories);
  const finalProducts =
    selectedCategory === ""
      ? filterProduct
      : filterProduct.filter(
          (product) => product.category === selectedCategory,
        );
  const handleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
  };
  const priceProducts =
    selectedPrice === ""
      ? finalProducts
      : finalProducts.filter((product) => {
          if (selectedPrice === "under1000") {
            return product.price < 1000;
          }
          if (selectedPrice === "1000-5000") {
            return product.price >= 1000 && product.price <= 5000;
          }

          if (selectedPrice === "above5000") {
            return product.price > 5000;
          }

          return true;
        });
  return (
    <>
      <Header />
      <div className="p-4 min-h-screen">
        <div className="flex justify-between">
          <div className="min-w-[360px] h-fit sticky top-20 shadow-lg p-5">
              <div className="flex justify-between items-center gap-6 py-4">
                <h4 className="py-2 text-xl font-semibold">Filters</h4>
                <button
                  onClick={() => {
                    (setSelectedCategory(""), setSelectedPrice(""));
                  }}
                  className="w-full text-sm font-semibold text-blue-600"
                >
                  Clear All
                </button>
              </div>
              <hr className="text-gray-400" />
              <h4 className="text-sm font-semibold uppercase py-4">
                Categories
              </h4>
              <div className="flex flex-col gap-3 ">
              {uniqueCategories.map((category) => (
                <label key={category}  className="flex items-center gap-3 cursor-pointer">
                  <input
                    className="w-4 h-4 accent-orange-500"
                    type="checkbox"
                    onChange={() => handleCategory(category)}
                    checked={selectedCategory === category}
                  />
                  <span className="text-gray-600 text-sm">{category}</span>
                </label>
              ))}</div>
            <hr className="my-5 border-gray-200" />
            <h4 className="py-4 text-sm font-semibold uppercase">Price</h4>
            <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                value={"under1000"}
                checked={selectedPrice === "under1000"}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
              Under ₹1000
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                value="1000-5000"
                checked={selectedPrice === "1000-5000"}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
              ₹1000 - ₹5000
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                value="above5000"
                checked={selectedPrice === "above5000"}
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
              Above ₹5000
            </label>
            </div>
          </div>
          <div className="flex-1 px-8">
            <div
              className="gap-6 p-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3
    lg:grid-cols-4  "
            >
              {priceProducts.length > 0 ? (priceProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))):(
                <NoProducts />
              )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
