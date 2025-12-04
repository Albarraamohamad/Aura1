import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const products = [
  { 
    id: 1, 
    name: "Ensemble canaille: Chemise Boy", 
    price: 190, 
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop"
  },
  { 
    id: 2, 
    name: "Jupe Hortensia", 
    price: 260, 
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop"
  },
  { 
    id: 3, 
    name: "Robe Debbie", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop"
  },
  { 
    id: 4, 
    name: "Chemise Rayée", 
    price: 220, 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop"
  }
];

export default function Products() {
  return (
    <>
      <div className="min-h-screen bg-white pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light tracking-wide">Our Collection</h1>
            <p className="text-gray-500 mt-2">Carefully selected pieces, crafted with elegance</p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>

          {/* Mobile Grid - 2 columns */}
          <div className="grid lg:hidden grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white block">
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center px-1">
                  <h3 className="text-sm font-light mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-lg font-medium">{product.price} TND</p>
                  <div className="mt-3 flex justify-center space-x-2">
                   
                    <Link 
                      to="/allproducts"
                      className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm hover:bg-gray-300 transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shop Now Button */}
          <div className="text-center mt-12">
            <Link
              to="/allproducts"
              className="inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-light text-lg"
            >
              Shop Now
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
