import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import Navbar1 from "../components/Navbar1";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    id: 1, 
    name: "Ensemble canaille: Chemise Boy", 
    price: 190, 
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    type: "ensemble",
    color: "bleu"
  },
  { 
    id: 2, 
    name: "Jupe Hortensia", 
    price: 260, 
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop",
    type: "jupe",
    color: "vert"
  },
  { 
    id: 3, 
    name: "Robe Debbie", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    type: "robe",
    color: "bleu"
  },
  { 
    id: 4, 
    name: "Chemise Rayée", 
    price: 220, 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop",
    type: "chemise",
    color: "blanc"
  },
  { 
    id: 5, 
    name: "Pantalon Casual", 
    price: 240, 
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
    type: "pantalon",
    color: "blanc"
  },
  { 
    id: 6, 
    name: "Short d'été", 
    price: 180, 
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    type: "short",
    color: "bleu"
  },
  { 
    id: 7, 
    name: "Robe Rouge Élégante", 
    price: 320, 
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
    type: "robe",
    color: "rouge"
  },
  { 
    id: 8, 
    name: "Ensemble Gris", 
    price: 290, 
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    type: "ensemble",
    color: "argent"
  },
];

export default function Products() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarRef = useRef(null);
  const filterButtonsRef = useRef([]);
  const productsGridRef = useRef(null);
  const productCardsRef = useRef([]);

  const types = ["robe", "jupe", "chemise", "ensemble", "pantalon", "short"];
  const colors = ["vert", "rouge", "bleu", "blanc", "argent"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  useEffect(() => {
    // Only animate on large screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Sidebar slide in from left
      if (sidebarRef.current) {
        gsap.from(sidebarRef.current, {
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      }

      // Product cards scroll animation
      productCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      });
    });

    // Mobile filter buttons (always animate)
    filterButtonsRef.current.forEach((button, index) => {
      if (button) {
        gsap.from(button, {
          y: -20,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)"
        });
      }
    });

    return () => mm.revert();
  }, []);

  // Re-animate products when filters change (only on large screens)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      productCardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6,
              ease: "power2.out"
            }
          );
        }
      });
    });

    return () => mm.revert();
  }, [selectedTypes, selectedColors, selectedSizes]);

  const toggleFilter = (value, filterType) => {
    if (filterType === 'type') {
      setSelectedTypes(prev => 
        prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
      );
    } else if (filterType === 'color') {
      setSelectedColors(prev => 
        prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
      );
    } else {
      setSelectedSizes(prev => 
        prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
      );
    }
  };

  const filteredProducts = products.filter(product => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    return typeMatch && colorMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar1/>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* MOBILE FILTER BUTTONS */}
        <div className="lg:hidden mb-6 flex gap-4 overflow-x-auto pb-2">
          <button 
            ref={el => filterButtonsRef.current[0] = el}
            onClick={() => setOpenDropdown('type')}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 bg-white"
          >
            TYPE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button 
            ref={el => filterButtonsRef.current[1] = el}
            onClick={() => setOpenDropdown('color')}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 bg-white"
          >
            COLOR
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button 
            ref={el => filterButtonsRef.current[2] = el}
            onClick={() => setOpenDropdown('size')}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 bg-white"
          >
            SIZE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Filter Popup - TYPE */}
        {openDropdown === 'type' && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setOpenDropdown(null)}>
            <div 
              className="bg-white rounded-t-3xl w-full max-h-[70vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light">Type</h3>
                <button onClick={() => setOpenDropdown(null)} className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {types.map(type => (
                  <label key={type} className="flex items-center gap-4 cursor-pointer py-3 border-b border-gray-100">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleFilter(type, 'type')}
                      className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer accent-black"
                    />
                    <span className="text-gray-900 font-light capitalize text-lg flex-1">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Filter Popup - COLOR */}
        {openDropdown === 'color' && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setOpenDropdown(null)}>
            <div 
              className="bg-white rounded-t-3xl w-full max-h-[70vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light">Color</h3>
                <button onClick={() => setOpenDropdown(null)} className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {colors.map(color => (
                  <label key={color} className="flex items-center gap-4 cursor-pointer py-3 border-b border-gray-100">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleFilter(color, 'color')}
                      className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer accent-black"
                    />
                    <span className="text-gray-900 font-light capitalize text-lg flex-1">
                      {color}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Filter Popup - SIZE */}
        {openDropdown === 'size' && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setOpenDropdown(null)}>
            <div 
              className="bg-white rounded-t-3xl w-full max-h-[70vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light">Size</h3>
                <button onClick={() => setOpenDropdown(null)} className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {sizes.map(size => (
                  <label key={size} className="flex items-center gap-4 cursor-pointer py-3 border-b border-gray-100">
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => toggleFilter(size, 'size')}
                      className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer accent-black"
                    />
                    <span className="text-gray-900 font-light text-lg flex-1">
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SIDEBAR + GRID LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* DESKTOP SIDEBAR FILTERS */}
          <div ref={sidebarRef} className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-white sticky top-8">

              {/* TYPE FILTER */}
              <div className="mb-8">
                <h3 className="text-lg font-light mb-4 text-gray-700">Type</h3>
                <div className="space-y-3">
                  {types.map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleFilter(type, 'type')}
                        className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                      />
                      <span className="text-gray-700 font-light capitalize group-hover:text-black transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* COLOR FILTER */}
              <div>
                <h3 className="text-lg font-light mb-4 text-gray-700">Color</h3>
                <div className="space-y-3">
                  {colors.map(color => (
                    <label key={color} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleFilter(color, 'color')}
                        className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                      />
                      <span className="text-gray-700 font-light capitalize group-hover:text-black transition-colors">
                        {color}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="flex-1">

            {/* Desktop count */}
            <div className="mb-6 hidden lg:block">
              <p className="text-gray-600 font-light">
                {filteredProducts.length} product{filteredProducts.length !== 1 && 's'}
              </p>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={product.id} ref={el => productCardsRef.current[index] = el}>
                  <ProductCard item={product} />
                </div>
              ))}
            </div>

            {/* MOBILE GRID - 2 COLUMNS */}
            <div className="grid lg:hidden grid-cols-2 gap-4">
              {filteredProducts.map((product, index) => (
                <div key={product.id} ref={el => productCardsRef.current[index] = el}>
                  <ProductCard item={product} />
                </div>
              ))}
            </div>

            {/* EMPTY STATE */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg font-light">
                  No products match your filters
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}