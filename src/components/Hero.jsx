import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from './Navbar'
export default function AuraHero() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate hero title
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate shop button
    tl.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar/>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white text-center mb-8 md:mb-12 tracking-wide leading-tight"
        >
          Made with passion, Worn with pride
        </h1>

        <button
          ref={buttonRef}
          className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wide"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
