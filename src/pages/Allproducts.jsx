import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar1 from "../components/Navbar1";

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

  const types = ["robe", "jupe", "chemise", "ensemble", "pantalon", "short"];
  const colors = ["vert", "rouge", "bleu", "blanc", "argent"];
  const sizes = ["XS", "S", "M", "L", "XL"];

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
      <div className="max-w-7xl mx-auto  py-12 px-4 sm:px-6 lg:px-8">

        {/* MOBILE FILTER BUTTONS */}
        <div className="lg:hidden mb-6 flex gap-4 overflow-x-auto pb-2">
          <button 
            onClick={() => setOpenDropdown('type')}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 bg-white"
          >
            TYPE
          </button>

          <button 
            onClick={() => setOpenDropdown('color')}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 bg-white"
          >
            COLOR
          </button>

          <button 
            onClick={() => setOpenDropdown('size')}
            className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light flex items-center gap-2 whitespace-nowrap hover:bg-gray-50 bg-white"
          >
            SIZE
          </button>
        </div>

        {/* SIDEBAR + GRID LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* DESKTOP SIDEBAR FILTERS */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
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
              {filteredProducts.map(product => (
                <ProductCard key={product.id} item={product} />
              ))}
            </div>

            {/* MOBILE GRID — FIXED */}
            <div className="grid lg:hidden grid-cols-1 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} item={product} />
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
