import Header from "./Header";
import products from "../data/products";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
export default function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");
  console.log(keyword);
  const filterProduct = products.filter((item) =>
    item.name.toLowerCase().includes(keyword?.toLowerCase()),
  );
  const allCategories = products.map((item)=>item.category)
  console.log(allCategories)
  const uniqueCategories = [...new Set(allCategories)]
  console.log(uniqueCategories)
  return (
    <div>
      <Header />
      <div className="p-4 bg-blue-300 min-h-screen">
        <div className="flex justify-between">
          <div className="min-w-[250px] flex flex-col gap-4 p-4 h-full bg-amber-200">
            <h4 className="py-2 text-xl font-semibold">Filters</h4>
            <hr className="text-gray-400" />
            {uniqueCategories.map((category) => (
              <label key={category}>
                <input type="checkbox" />
                <span>{category}</span>
              </label>
            ))}
            <button className="w-full bg-red-700"></button>
          </div>
          <div className="flex-1 bg-amber-600 px-8">
            <div
              className="gap-4 p-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3
    lg:grid-cols-4  "
            >
              {filterProduct.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard key={product.id} product={product} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
