import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  if (!item) return null;

  const handleImageClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card group">
      <div 
        className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] mb-4 cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {item.category && (
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-light">
              {item.category}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="text-center cursor-pointer" onClick={handleImageClick}>
        <h3 className="text-lg font-light mb-2 group-hover:text-gray-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-xl font-normal">{item.price} TND</p>
      </div>

      <button
        onClick={() => addToCart(item)}
        className="w-full mt-4 px-4 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
      >
        Add To Cart
      </button>
    </div>
  );
}