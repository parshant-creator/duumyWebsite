import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartItem from "../components/CartItem";
import Search from "../components/Search";
import ProductDescription from "../components/ProductDescription";
import ScrollToTop from "../components/ScrollToTop";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
