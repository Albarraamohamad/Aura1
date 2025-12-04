import React, { useRef, useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo2 from '/src/assets/logo2.png'
export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();
  const totalQty = cartItems.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    tl.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="relative flex items-center justify-between py-6 px-6 md:px-12 z-30 bg-transparent"
      >
        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover:opacity-80 transition-opacity z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Left Links */}
        <div className="hidden md:flex gap-8 lg:gap-12 z-50 text-white">
          <Link to="/" className="hover:text-gray-300 transition">Clothes</Link>
          <Link to="/allproducts" className="hover:text-gray-300 transition">All Products</Link>
        </div>

        {/* Center Logo */}
        <Link to='/'>
          <div
            ref={logoRef}
            className="absolute left-1/2 -translate-x-1/2 text-center z-30 text-white"
          >
           <img src={logo2} alt="" className="w-52 " />
          </div>
        </Link>

        {/* Desktop Right Links */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-center z-30 text-white">
          <Link to="/about" className="hover:text-gray-300 transition">About us</Link>
          <Link to="/blog" className="hover:text-gray-300 transition">Blog</Link>
          <button
            className="relative hover:text-gray-300 transition"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Cart Icon */}
        <button
          className="md:hidden hover:text-gray-300 transition z-30 relative text-white"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart size={24} />
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </button>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu - Slides from Left */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black text-white z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <img src={logo2} alt="" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-80 transition-opacity"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 flex flex-col py-8 px-6 space-y-6">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg hover:text-gray-300 transition-colors py-2 border-b border-gray-800"
            >
              Home
            </Link>
            <Link 
              to="/allproducts" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg hover:text-gray-300 transition-colors py-2 border-b border-gray-800"
            >
              All Products
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg hover:text-gray-300 transition-colors py-2 border-b border-gray-800"
            >
              About us
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg hover:text-gray-300 transition-colors py-2 border-b border-gray-800"
            >
              Blog
            </Link>
          </div>

          {/* Cart Button at Bottom */}
          <div className="p-6 border-t border-gray-700">
            <button
              className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              onClick={() => { 
                setIsCartOpen(true); 
                setIsMenuOpen(false); 
              }}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {totalQty > 0 && (
                <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}