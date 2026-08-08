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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
