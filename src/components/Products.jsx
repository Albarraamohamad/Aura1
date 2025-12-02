import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProductsSection() {
  const headingRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate each product card with stagger
    gsap.fromTo(productRefs.current, 
      { opacity: 0, y: 80 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: productRefs.current[0], // Trigger on the first product
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const products = [
    {
      id: 1,
      name: 'CANAILLE OUTFIT: BOY SHIRT',
      price: '190 EGP',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80'
    },
    {
      id: 2,
      name: 'HORTENSIA SKIRT',
      price: '260 EGP',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80'
    },
    {
      id: 3,
      name: 'DEBBIE DRESS',
      price: '280 EGP',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 ref={headingRef} className="text-5xl md:text-6xl text-center mb-16 text-gray-800 font-light tracking-wide">
          Our Most Beautiful New Arrivals
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className="group cursor-pointer"
            >
              {/* Product Image - Fixed Height */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-6 h-96 md:h-28 lg:h-32">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-sm md:text-base text-gray-600 mb-3 tracking-wider uppercase font-light">
                  {product.name}
                </h3>
                <p className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
