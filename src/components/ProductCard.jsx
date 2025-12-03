import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  if (!item) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-4" />
      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
      <p className="text-gray-700 mb-4">${item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
