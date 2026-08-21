import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NoProducts from "./NoProducts";
import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";
import SearchProductCard from "./SearchProductCard";
import { getProducts } from "../api/productApi";
import SkeletonCard from "./SkeletonCard";
export default function SearchResult() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBar, setSortBar] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");
  const searchKeyword = keyword?.toLowerCase().trim() || "";
  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fecthData();
  }, []);

  const filterProduct = products.filter((item) => {
    const name = item.name?.toLowerCase() || "";
    const brand = item.brand?.toLowerCase() || "";
    const category = item.category?.toLowerCase() || "";

    // Phone aur Mobile ko same category treat karna
    const isPhoneSearch =
      searchKeyword === "phone" || searchKeyword === "mobile";

    if (isPhoneSearch) {
      return (
        category === "phone" ||
        category === "mobile" ||
        name.includes(searchKeyword) ||
        brand.includes(searchKeyword)
      );
    }

    return (
      name.includes(searchKeyword) ||
      brand.includes(searchKeyword) ||
      category.includes(searchKeyword)
    );
  });
  const allCategories = filterProduct.map((item) => item.category);
  const uniqueCategories = [...new Set(allCategories)];
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
  const allBrands = priceProducts.map((product) => product.brand);
  const uniqueBrand = [...new Set(allBrands)];
  const brandProduct =
    selectedBrand === ""
      ? priceProducts
      : priceProducts.filter((product) => product.brand === selectedBrand);
  const showClearButton = selectedCategory || selectedBrand || selectedPrice;
  const sortedProducts = [...brandProduct];
  if (sortBy === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  const handleClear = () => {
    (setSelectedCategory(""),
      setSelectedBrand(""),
      setSelectedPrice(""),
      setSortBy(""));
  };

  const handleSortBar = () => {
    setFilterDrawer(false);
    setSortBar((sortBar) => !sortBar);
  };
  const handleFilterDrawer = () => {
    setSortBar(false);
    setFilterDrawer((filterDrawer) => !filterDrawer);
  };
  return (
    <>
      <div className="md:hidden w-full sticky top-28 z-30 border-y bg-white border-gray-200">
        <div className="flex justify-between items-center p-4">
          <button onClick={handleSortBar} className="flex gap-1 items-center">
            <ArrowDownWideNarrow />
            <span>Sort</span>
          </button>
          <button
            onClick={handleFilterDrawer}
            className="flex gap-1 items-center"
          >
            <SlidersHorizontal />
            <span>Filter</span>
          </button>
        </div>
      </div>
      {sortBar && (
        <div
          onClick={() => setSortBar(false)}
          className="fixed inset-0 bg-black/40 z-40"
        >
          <div className="flex justify-center py-3">
            <div className="w-12 h-1.5 rounded-full bg-gray-300"></div>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={` bottom-0 fixed w-full bg-white z-50 p-4 border-y transition-transform duration-300 ${sortBar ? "translate-y-0" : "translate-y-full"}`}
          >
            <h4 className="uppercase mb-2 font-semibold">Sort By</h4>
            <div className="flex flex-col gap-4 mt-2 text-gray-800 font-semibold">
              <label className="flex gap-2">
                <span>Price - Low To High</span>
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "lowToHigh"}
                  onChange={() => {
                    setSortBy("lowToHigh");
                    setSortBar(false);
                  }}
                />
              </label>
              <label className="flex gap-2">
                <span>Price - High To Low</span>
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === "highToLow"}
                  onChange={() => {
                    setSortBy("highToLow");
                    setSortBar(false);
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {filterDrawer && (
        <div
          onClick={() => setFilterDrawer(false)}
          className="fixed inset-0 bg-black/40 z-40"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={` bottom-0 fixed w-full bg-white z-50 p-4 border-y transition-transform duration-300 ${filterDrawer ? "translate-y-0" : "translate-y-full"}`}
          >
            <h4 className="uppercase mb-2 font-semibold">Filter</h4>
            <div className="flex flex-col gap-4 mt-2 text-gray-800 font-semibold">
              {uniqueBrand.map((brand) => (
                <label key={brand} className="flex gap-2">
                  <span>{brand}</span>
                  <input
                    key={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setFilterDrawer(false);
                    }}
                    value={brand}
                    type="radio"
                    name="brand"
                    checked={selectedBrand === brand}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="md:p-4 min-h-screen">
        <div className="flex justify-between">
          <div className="hidden md:block min-w-[360px] h-fit sticky top-20 shadow-lg p-5">
            <div className="flex justify-between items-center gap-6 py-4">
              <h4 className="py-2 text-xl font-semibold">Filters</h4>
              {showClearButton && (
                <button
                  onClick={handleClear}
                  className="w-full text-sm font-semibold text-blue-600 cursor-pointer"
                >
                  Clear All
                </button>
              )}
            </div>
            <hr className="text-gray-400" />
            <h4 className="text-sm font-semibold uppercase py-4">Categories</h4>
            <div className="flex flex-col gap-3 py-4">
              {uniqueCategories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    className="w-4 h-4 accent-orange-500"
                    type="checkbox"
                    onChange={() => handleCategory(category)}
                    checked={selectedCategory === category}
                  />
                  <span className="text-gray-600 text-sm">{category}</span>
                </label>
              ))}
            </div>
            <hr className="text-gray-400 py-4" />
            <h4 className="text-sm font-semibold uppercase py-4">Brand</h4>
            <div className="flex flex-col gap-3 ">
              {uniqueBrand.map((brand) => (
                <label
                  key={brand}
                  className="cursor-pointer flex items-center gap-3"
                >
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="accent-orange-500"
                  />
                  <span className="text-sm text-gray-600">{brand}</span>
                </label>
              ))}
            </div>

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

          <div className="flex-1 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 sm:p-4">
              {loading ?(
               
                  Array.from({length:8}).map((_, index)=>(
                    <SkeletonCard key={index} />
                  ))
                
              )
              :sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <Link key={product._id} to={`/product/${product._id}`}>
                    <SearchProductCard product={product} />
                  </Link>
                ))
              ) : (
                <NoProducts />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
