import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 && <p className="text-gray-600">No items in cart.</p>}

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow-sm">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">Qty: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">${item.price * item.quantity}</p>
              <button
                className="mt-2 text-red-600 hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <div className="text-xl font-bold">Total: ${total}</div>
          <Link to="/checkout" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
