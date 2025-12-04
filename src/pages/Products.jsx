import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

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
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const productsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Title animation with split text effect
    const titleText = titleRef.current.innerText;
    const letters = titleText.split('');
    titleRef.current.innerHTML = letters
      .map(letter => `<span class="inline-block opacity-0">${letter === ' ' ? '&nbsp;' : letter}</span>`)
      .join('');

    const letterSpans = titleRef.current.querySelectorAll('span');

    // Animate title letters
    gsap.to(letterSpans, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Subtitle fade in
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Products stagger animation with 3D effect
    productsRef.current.forEach((product, index) => {
      if (product) {
        gsap.from(product, {
          scrollTrigger: {
            trigger: product,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 80,
          rotationX: -15,
          scale: 0.9,
          duration: 1,
          delay: index * 0.1,
          ease: "back.out(1.7)"
        });

        // Image hover parallax effect
        const image = product.querySelector('img');
        if (image) {
          product.addEventListener('mousemove', (e) => {
            const rect = product.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;

            gsap.to(image, {
              x: percentX * 10,
              y: percentY * 10,
              scale: 1.05,
              duration: 0.5,
              ease: "power2.out"
            });
          });

          product.addEventListener('mouseleave', () => {
            gsap.to(image, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          });
        }
      }
    });

    // Shop Now button animation
    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    });

    // Button hover animation
    const button = buttonRef.current;
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        duration: 0.3,
        ease: "power2.out"
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out"
      });
    });

  }, []);

  return (
    <>
      <div className="min-h-screen bg-white pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 
              ref={titleRef}
              className="text-3xl font-light tracking-wide mb-2"
            >
              Our Collection
            </h1>
            <p 
              ref={subtitleRef}
              className="text-gray-500 mt-2"
            >
              Carefully selected pieces, crafted with elegance
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-10">
            {products.map((product, index) => (
              <div 
                key={product.id}
                ref={el => productsRef.current[index] = el}
              >
                <ProductCard item={product} />
              </div>
            ))}
          </div>

          {/* Mobile Grid - 2 columns */}
          <div className="grid lg:hidden grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                ref={el => productsRef.current[index] = el}
                className="bg-white block"
              >
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm mb-3 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300"
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
              ref={buttonRef}
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