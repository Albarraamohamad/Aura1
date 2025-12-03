import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar1 from "../components/Navbar1";

const products = [
  { id: 1, name: "Ensemble canaille: Chemise Boy", price: 190,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&fit=crop",
    type: "ensemble", color: "bleu" },
  { id: 2, name: "Jupe Hortensia", price: 260,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&fit=crop",
    type: "jupe", color: "vert" },
  { id: 3, name: "Robe Debbie", price: 280,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&fit=crop",
    type: "robe", color: "bleu" },
  { id: 4, name: "Chemise Rayée", price: 220,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&fit=crop",
    type: "chemise", color: "blanc" },
  { id: 5, name: "Pantalon Casual", price: 240,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&fit=crop",
    type: "pantalon", color: "blanc" },
  { id: 6, name: "Short d'été", price: 180,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&fit=crop",
    type: "short", color: "bleu" },
  { id: 7, name: "Robe Rouge Élégante", price: 320,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&fit=crop",
    type: "robe", color: "rouge" },
  { id: 8, name: "Ensemble Gris", price: 290,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&fit=crop",
    type: "ensemble", color: "argent" },
];

export default function Products() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const types = ["robe", "jupe", "chemise", "ensemble", "pantalon", "short"];
  const colors = ["vert", "rouge", "bleu", "blanc", "argent"];

  const toggleFilter = (value, filterType) => {
    if (filterType === "type") {
      setSelectedTypes(prev =>
        prev.includes(value)
          ? prev.filter(t => t !== value)
          : [...prev, value]
      );
    } else {
      setSelectedColors(prev =>
        prev.includes(value)
          ? prev.filter(c => c !== value)
          : [...prev, value]
      );
    }
  };

  const filteredProducts = products.filter(product => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    return typeMatch && colorMatch;
  });

  return (
    <>
      <Navbar1 />

      <div className="min-h-screen bg-gray-50 pt-12 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* ---------- MOBILE FILTER BUTTONS ---------- */}
          <div className="lg:hidden mb-8 flex gap-3 overflow-x-auto pb-2">
            {["type", "color"].map(filter => (
              <button
                key={filter}
                onClick={() => setOpenDropdown(filter)}
                className="px-6 py-2 border border-gray-300 rounded-full text-sm font-light bg-white shadow-sm hover:bg-gray-100"
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          {/* ---------- MOBILE DROPDOWN ---------- */}
          {openDropdown && (
            <div
              className="lg:hidden fixed inset-0 z-50 flex items-end bg-black/40"
              onClick={() => setOpenDropdown(null)}
            >
              <div
                className="w-full rounded-t-3xl bg-white p-6 max-h-[70vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-light capitalize">{openDropdown}</h3>
                  <button onClick={() => setOpenDropdown(null)}>
                    ✕
                  </button>
                </div>

                {(openDropdown === "type" ? types : colors).map(item => (
                  <label
                    key={item}
                    className="flex items-center gap-4 py-3 border-b border-gray-100"
                  >
                    <input
                      type="checkbox"
                      checked={
                        openDropdown === "type"
                          ? selectedTypes.includes(item)
                          : selectedColors.includes(item)
                      }
                      onChange={() => toggleFilter(item, openDropdown)}
                      className="w-5 h-5 rounded border-gray-300 accent-black"
                    />
                    <span className="capitalize text-gray-800 font-light text-lg">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ---------- DESKTOP LAYOUT ---------- */}
          <div className="flex gap-10">

            {/* ---------- SIDEBAR FILTERS (DESKTOP) ---------- */}
            <aside className="hidden lg:block w-64">
              <div className="bg-white shadow-sm rounded-xl p-6 sticky top-20">

                {/* Type */}
                <h3 className="text-lg font-light text-gray-700 mb-4">Type</h3>
                <div className="space-y-3 mb-8">
                  {types.map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleFilter(type, "type")}
                        className="w-5 h-5 border-gray-300 rounded"
                      />
                      <span className="capitalize text-gray-700 hover:text-black">{type}</span>
                    </label>
                  ))}
                </div>

                {/* Color */}
                <h3 className="text-lg font-light text-gray-700 mb-4">Color</h3>
                <div className="space-y-3">
                  {colors.map(color => (
                    <label key={color} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleFilter(color, "color")}
                        className="w-5 h-5 border-gray-300 rounded"
                      />
                      <span className="capitalize text-gray-700 hover:text-black">{color}</span>
                    </label>
                  ))}
                </div>

                {(selectedColors.length > 0 || selectedTypes.length > 0) && (
                  <button
                    onClick={() => { setSelectedColors([]); setSelectedTypes([]); }}
                    className="mt-6 underline text-sm text-gray-600 hover:text-black"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* ---------- PRODUCTS GRID ---------- */}
            <main className="flex-1">
              <p className="text-gray-600 font-light mb-4 hidden lg:block">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>

              {/* Desktop grid */}
              <div className="hidden lg:grid grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} item={product} />
                ))}
              </div>

              {/* Mobile grid */}
              <div className="grid lg:hidden grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm pb-4">
                    <div className="aspect-[3/4] overflow-hidden rounded-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className="font-light text-gray-800">{product.name}</h3>
                      <p className="text-gray-900 font-medium text-lg">{product.price} TND</p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16 text-gray-400 text-lg">
                  No products match your filters
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
