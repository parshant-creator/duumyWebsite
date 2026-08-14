import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartItem from "../components/CartItem";
import Search from "../components/Search";
import ProductDescription from "../components/ProductDescription";
import ScrollToTop from "../components/ScrollToTop";
import Register from "../pages/Register";
import Login from "../pages/Login";

import MainLayout from "../components/layouts/MainLayout";
import UserProfile from "../pages/UserProfile";
import ProtectedRoute from "../components/ProtectedRoute";
import WishList from "../pages/WishList"
import MyOrder from "../pages/MyOrder";
import Checkout from "../pages/Checkout";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProtectedRoute ><UserProfile /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/order" element={<MyOrder />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
