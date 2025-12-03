import React from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const { cartItems, removeFromCart, total, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-96 max-w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-light tracking-wide">Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="hover:opacity-60 transition-opacity"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-400 text-lg">Your cart is empty</p>
            </div>
          )}

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100">
                {/* Product Image */}
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.quantity} × {item.price} TND
                    </p>
                  </div>
                  <button
                    className="text-xs text-red-500 hover:text-red-700 transition-colors self-start"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    {(item.quantity * item.price).toFixed(1)} TND
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Total and Checkout */}
        <div className="border-t border-gray-200 p-6 space-y-4 bg-white">
          <div className="flex justify-between items-center text-lg">
            <span className="font-light">Total:</span>
            <span className="font-medium">{total.toFixed(1)} TND</span>
          </div>

          {cartItems.length > 0 && (
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center px-6 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-light tracking-wide"
            >
              Checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
}