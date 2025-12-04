import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar1 from "../components/Navbar1";
import { ArrowLeft, Minus, Plus } from "lucide-react";

// This would normally come from your database or API
const allProducts = [
  { 
    id: 1, 
    name: "Ensemble canaille: Chemise Boy", 
    price: 190, 
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    type: "ensemble",
    color: "bleu",
    description: "Un ensemble élégant et confortable, parfait pour un style décontracté chic. Fabriqué avec des matériaux de haute qualité pour un confort optimal.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  { 
    id: 2, 
    name: "Jupe Hortensia", 
    price: 260, 
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
    type: "jupe",
    color: "vert",
    description: "Jupe fluide et élégante qui apporte une touche de fraîcheur à votre garde-robe. Parfaite pour toutes les occasions.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  { 
    id: 3, 
    name: "Robe Debbie", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    type: "robe",
    color: "bleu",
    description: "Robe sophistiquée avec une coupe moderne. Idéale pour les événements spéciaux ou les sorties élégantes.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  { 
    id: 4, 
    name: "Chemise Rayée", 
    price: 220, 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop",
    type: "chemise",
    color: "blanc",
    description: "Chemise classique à rayures, un incontournable de la garde-robe. Facile à assortir et toujours élégante.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    
    addToCart({
      ...product,
      size: selectedSize,
      quantity: quantity
    });
    
    alert("Product added to cart!");
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <>
      <Navbar1 />
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-light">Back</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 sticky top-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl lg:text-4xl font-light mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-normal mb-6">
                  {product.price} TND
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-light mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 rounded-full transition-all duration-300 ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="text-lg font-light mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-2xl font-light w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-light"
              >
                Add to Cart
              </button>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-8 space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-light">Type</span>
                  <span className="font-light capitalize">{product.type}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-light">Color</span>
                  <span className="font-light capitalize">{product.color}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}