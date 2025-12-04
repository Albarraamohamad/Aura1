import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredProducts = [
  { 
    id: 1, 
    name: "ENSEMBLE CANAILLE: CHEMISE BOY", 
    price: 190, 
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop"
  },
  { 
    id: 2, 
    name: "JUPE HORTENSIA", 
    price: 260, 
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop"
  },
  { 
    id: 3, 
    name: "ROBE DEBBIE", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
  },
  { 
    id: 4, 
    name: "CHEMISE RAYÉE", 
    price: 220, 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=800&fit=crop"
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(30px)';
      titleRef.current.style.transition = 'all 0.8s ease-out';
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 2;
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-2 tracking-wide">
            Nos pièces emblématiques
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {featuredProducts.slice(0, 3).map((product) => (
            <Link 
              key={product.id} 
              to={`/products`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-200 aspect-[3/4] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-light mb-3 tracking-widest uppercase text-gray-700">
                  {product.name}
                </h3>
                <p className="text-2xl font-light">{product.price} TND</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <Link to={`/products`} className="block">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-200 aspect-[3/4] mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-sm font-light mb-3 tracking-widest uppercase text-gray-700">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-light">{product.price} TND</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-black w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}