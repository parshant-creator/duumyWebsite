import { useLocation } from 'react-router-dom'
import products from '../data/products'
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import NoProducts from './NoProducts';
export default function SearchPage() {
    const {search} = useLocation()
    const query = new URLSearchParams(search);
    const keyword = query.get("q") || ""
    const filteredProducts = products.filter((item)=>(
        item.name.toLowerCase()
        .includes(keyword.toLowerCase())
    ))
   return (
  <>
    <Header />

    <div className="max-w-7xl mx-auto p-4">

      <h2 className="text-2xl font-bold mb-6">
        Search Results for "{keyword}"
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
{filteredProducts.length > 0 ? (

  filteredProducts.map((product) => (
    <Link key={product.id} to={`/product/${product.id}`}>
      <ProductCard product={product} />
    </Link>
  ))

) : (

  <NoProducts />

)}

      </div>

    </div>
  </>
);
}
