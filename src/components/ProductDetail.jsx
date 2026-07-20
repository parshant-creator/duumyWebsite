import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import NoProducts from "./NoProducts";
import { Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
export default function ProductDetail() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  const { id } = useParams();
  console.log(id);
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <NoProducts />;
  }
  const relatedProduct = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
      }),
    );
  };
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          Home / {product.category} /{" "}
          <span className="text-black font-medium">{product.name}</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-xl shadow p-6">
          {/* Image */}
          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="h-80 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <div className="flex items-center gap-2 mt-3">
              <Star className="fill-yellow-400 text-yellow-400" size={18} />

              <span className="font-medium">{product.rating}</span>
            </div>

            <h2 className="text-4xl font-bold text-orange-500 mt-6">
              ₹{product.price}
            </h2>

            <span
              className={`mt-3 font-medium ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>

            <p className="text-gray-600 leading-7 mt-6">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Add To Cart
              </button>

              <button className="flex-1 border border-orange-500 text-orange-500 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition">
                Buy Now
              </button>
            </div>

            {/* Delivery */}
            <div className="mt-8 border rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-3">
                Delivery Information
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>🚚 Free Delivery</li>

                <li>🔄 7 Days Replacement</li>

                <li>💳 Cash On Delivery Available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>

          <p className="text-gray-600 leading-8">{product.description}</p>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">You May Also Like</h2>

          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
            {relatedProduct.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
