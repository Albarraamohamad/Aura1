import React, { useRef, useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function AuraNav() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav
      ref={navRef}
      className="relative flex items-center justify-between px-4 md:px-8 py-6 text-white bg-transparent z-50 pointer-events-auto"
    >
      {/* Mobile Menu Button */}
      <button
        className="md:hidden hover:opacity-80 transition-opacity z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Left Links */}
      <div className="hidden md:flex gap-8 lg:gap-12 z-50">
        <Link to="/" className="hover:opacity-80">Home</Link>
        <Link to="/allproducts" className="hover:opacity-80">All Products</Link>
      </div>

      {/* Logo */}
      <div
        ref={logoRef}
        className="absolute left-1/2 top-1 -translate-x-1/2  z-50"
      >
        <div className="text-xs">BY</div>
        <div className="text-5xl md:text-5xl lg:text-7xl font-serif font-bold">aura.</div>
        <div className="text-xs tracking-widest mt-1 text-center">READY TO WEAR</div>
      </div>

      {/* Desktop Right Links */}
      <div className="hidden md:flex gap-8 lg:gap-12 items-center z-50">
        <Link to="/about" className="hover:opacity-80">About us</Link>
        <Link to="/blog" className="hover:opacity-80">Blog</Link>
        <Link to="/cart" className="hover:opacity-80">
          <ShoppingCart size={24} />
        </Link>
      </div>

      {/* Mobile Cart */}
      <Link to="/cart" className="md:hidden hover:opacity-80 z-50">
        <ShoppingCart size={24} />
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/80 text-white z-40">
          <div className="flex flex-col items-center py-8 space-y-4">
            <Link to="/clothes" onClick={() => setIsMenuOpen(false)}>Clothes</Link>
            <Link to="/accessories" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
