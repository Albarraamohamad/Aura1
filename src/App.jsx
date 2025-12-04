import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CartSidebar from "./components/CartSidebar";
import About from "./components/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import News from "./components/News";
import Allproducts from './pages/Allproducts';
import ScrollToTop from "./components/Scrolltop";
import ProductDetails from "./pages/Productdetails";

export default function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Add CSS smooth scroll as fallback
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize Lenis Smooth Scroll
    let lenis = null;

    const initLenis = async () => {
      try {
        // Check if lenis is installed
        const lenisModule = await import('lenis');
        const Lenis = lenisModule.default;
        
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        lenisRef.current = lenis;

        // Request animation frame loop
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        console.log('✅ Lenis smooth scroll activated');
      } catch (error) {
        console.log('ℹ️ Lenis not installed. Using CSS smooth scroll. To install Lenis run: npm install lenis');
      }
    };

    initLenis();

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <CartSidebar />
      <ScrollToTop/>
      <main>
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