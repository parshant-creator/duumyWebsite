import { ShoppingCart, Search, UserRound, X, UserCircle2, LogOut, Settings, Heart, Package } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  const location = useLocation();
  const hideLogInButton = location.pathname ==="/register"
  const [searchTerm, setSearchTerm] = useState("");
  const [menuItem, setMenuItem] = useState(false);

  const { totalQuantity } = useSelector((state) => state.cart);

  const handleMenuItem = () => {
    setMenuItem(!menuItem);
  };

  const handleInput = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
    }
  };
  return (
    <nav className="bg-gray-100 w-full shadow-md sticky top-0 z-50">
      <div className="flex h-16 max-w-7xl mx-auto px-4 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl"
        >
          <span className="text-3xl">🛍</span><span className="text-orange-500">ShopKart</span> 
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex w-96 items-center px-3 py-2 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-orange-400 bg-white">
          <Search className="text-gray-500" size={18} />

          <input
            type="text"
            value={searchTerm}
            onKeyDown={handleInput}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Products..."
            className="w-full outline-none px-3 bg-transparent"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-5">
          {!token? <>
          {!hideLogInButton &&(
            <Link to="/login" className=" text-black  font-medium">
            Login
          </Link>
          )}</>:<>
          <button
            onClick={handleMenuItem}
            className="text-black hover:bg-orange-100 p-1 rounded-full transition"
          >
            {menuItem ? <X /> : <UserRound />}
          </button>{" "}</>}

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
        </div>
      </div>

      {/* Dropdown */}
      {menuItem && (
        <div className="absolute top-16 right-4 w-44 bg-gray-900 shadow-lg rounded-lg overflow-hidden z-50">
          <ul className="text-white text-sm">
            <Link className="hover:bg-gray-100 px-4 py-2 border-b cursor-pointer flex items-center  gap-2 hover:text-orange-500"
             to="/profile"><UserCircle2 />My Profile
            </Link>
            <li className="hover:bg-gray-100 px-4 py-3 border-b cursor-pointer flex items-center  gap-2 hover:text-orange-500">
              <Package />Orders
            </li>
            <Link className="hover:bg-gray-100 px-4 py-2 border-b cursor-pointer flex items-center  gap-2 hover:text-orange-500"
             to="/wishlist" >
            <Heart />Wishlist
            </Link>
            <li className="hover:bg-gray-100 px-4 py-2 border-b cursor-pointer flex items-center  gap-2 hover:text-orange-500">
              <Settings /> Settings
            </li>
            <li className="hover:bg-gray-100 px-4 py-2  border-b cursor-pointer flex items-center gap-2 hover:text-orange-500">
            <LogOut />LogOut
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center border border-gray-300 bg-white rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
          <Search className="text-gray-500" size={18} />
          <div>
            <input
              onFocus={() => navigate("/search")}
              type="text"
              placeholder="Search Products..."
              className="w-full outline-none px-3 bg-transparent"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
