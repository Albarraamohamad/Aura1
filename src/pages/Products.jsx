import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "Ensemble canaille: Chemise Boy", price: 190, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop", type: "ensemble", color: "bleu", category: "New Arrival" },
  { id: 2, name: "Jupe Hortensia", price: 260, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop", type: "jupe", color: "vert", category: "Best Seller" },
  { id: 3, name: "Robe Debbie", price: 280, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", type: "robe", color: "bleu", category: "Featured" },
  { id: 4, name: "Chemise Rayée", price: 220, image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop", type: "chemise", color: "blanc", category: "New Arrival" },
  { id: 5, name: "Pantalon Casual", price: 240, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop", type: "pantalon", color: "blanc", category: "Best Seller" },
  { id: 6, name: "Short d'été", price: 180, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop", type: "short", color: "bleu", category: "New Arrival" },
  { id: 7, name: "Robe Rouge Élégante", price: 320, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop", type: "robe", color: "rouge", category: "Featured" },
  { id: 8, name: "Ensemble Gris", price: 290, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop", type: "ensemble", color: "argent", category: "New Arrival" },
];

export default function ProductsSection() {
  const titleRef = useRef(null);
  const productsRef = useRef(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleFilter = (value, filterType) => {
    if (filterType === "type") {
      setSelectedTypes(prev =>
        prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
      );
    } else {
      setSelectedColors(prev =>
        prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
      );
    }
  };

  const filteredProducts = products.filter(product => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    return typeMatch && colorMatch;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
      titleRef.current.style.transition = "all 0.8s ease-out";
      observer.observe(titleRef.current);
    }

    if (productsRef.current) {
      const cards = productsRef.current.querySelectorAll(".product-card");
      cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-xs tracking-widest font-light uppercase text-gray-500">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Featured Products
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of minimalist fashion pieces
            designed for the modern individual
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-30">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card group block cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-light">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="text-center py-4 px-2">
                <h3 className="text-lg font-light mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-normal text-gray-900">{product.price} TND</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/allproducts"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 group font-light text-lg"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
