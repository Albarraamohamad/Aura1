import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import Navbar1 from "../components/Navbar1";

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const [form, setForm] = useState({ 
    email: "", 
    phone: "", 
    firstName: "", 
    lastName: "", 
    address: "", 
    apartment: "",
    postalCode: "",
    city: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems.length) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you ${form.firstName}! Order placed.`);
    clearCart();
    setForm({ 
      email: "", 
      phone: "", 
      firstName: "", 
      lastName: "", 
      address: "", 
      apartment: "",
      postalCode: "",
      city: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar1/>
      <div className="max-w-7xl mx-auto py-20 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-light mb-6">Contact information</h2>
                
                <div className="space-y-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Numéro de téléphone"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-2xl font-light mb-6">Shipping address</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Nom"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Prénom"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Adresse"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                    <input
                      type="text"
                      name="apartment"
                      value={form.apartment}
                      onChange={handleChange}
                      placeholder="appartement, suite, etc"
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="Code Postal"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Ville"
                      required
                      className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition-colors font-light"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors font-light text-lg"
              >
                Confirmer la commande
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="lg:sticky lg:top-8">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg font-light">No items in cart.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Cart Items */}
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                      <div className="flex gap-4 p-4">
                        {/* Product Image */}
                        <div className="relative w-32 h-40 bg-gray-100 rounded-lg flex-shrink-0">
                          {item.image && (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          )}
                          <button className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                            <X size={14} />
                          </button>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-light text-lg mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-600 font-light">
                              Price: {item.price} TND
                            </p>
                            {item.size && (
                              <p className="text-sm text-gray-600 font-light">
                                Taille: {item.size}
                              </p>
                            )}
                            <p className="text-sm text-gray-600 font-light">
                              Quantités: {item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-3 bg-white">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-light text-gray-600">Total:</span>
                          <span className="font-medium">{(item.price * item.quantity).toFixed(1)} TND</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Grand Total */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-light">Total:</span>
                      <span className="font-medium">{total.toFixed(1)} TND</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}