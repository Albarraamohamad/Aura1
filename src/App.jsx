import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CartSidebar from "./components/CartSidebar";
import About from "./components/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import News from "./components/News";
import Allproducts from './pages/Allproducts'
import ScrollToTop from "./components/Scrolltop";
import ProductDetails from "./pages/Productdetails";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CartSidebar />
          <ScrollToTop/>
      <main> {/* to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <News/>
        <Footer/>
      </main>
    </div>
  );
}
