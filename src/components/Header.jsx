import { ShoppingCart, Search, UserRound, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItem, setMenuItem] = useState(false);

  const navigate = useNavigate();

  const { totalQuantity } = useSelector((state) => state.cart);

  const handleMenuItem = () => {
    setMenuItem(!menuItem);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
    }
  };

  return (
    <nav className="bg-gray-100 w-full shadow-md sticky top-0 z-50">
      <div className="flex h-16 max-w-7xl mx-auto px-4 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          🛍 ShopKart
        </Link>

        {/* Desktop Search */}
        <div className="hidden sm:flex w-96 items-center px-3 py-2 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-orange-400 bg-white">
          <Search className="text-gray-500" size={18} />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search Products..."
            className="w-full outline-none px-3 bg-transparent"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 hover:text-orange-500"
          >
            <ShoppingCart />

            {totalQuantity > 0 && (
              <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalQuantity}
              </span>
            )}

            <span className="hidden sm:block">Cart</span>
          </Link>

          {/* User */}
          <button
            onClick={handleMenuItem}
            className="bg-orange-400 p-2 rounded-xl text-white hover:bg-orange-500 transition"
          >
            {menuItem ? <X /> : <UserRound />}
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {menuItem && (
        <div className="absolute top-16 right-4 w-44 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <ul className="text-gray-700">
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Account
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Orders
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Wishlist
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Customer Care
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Settings
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-3">
        <div className="flex items-center border border-gray-300 bg-white rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
          <Search className="text-gray-500" size={18} />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search Products..."
            className="w-full outline-none px-3 bg-transparent"
          />
        </div>
      </div>
    </nav>
  );
}