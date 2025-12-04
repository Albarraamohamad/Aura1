import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './Navbar';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function AuraHero() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial setup - hide elements
    gsap.set([titleRef.current, buttonRef.current, scrollIndicatorRef.current], { 
      opacity: 0 
    });

    // Background zoom in effect
    tl.fromTo(
      bgRef.current,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Overlay fade in
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=1.5"
    );

    // Split title into words for stagger effect
    const titleWords = titleRef.current.innerText.split(' ');
    titleRef.current.innerHTML = titleWords
      .map(word => `<span class="inline-block" style="opacity: 0;">${word}</span>`)
      .join(' ');

    const wordSpans = titleRef.current.querySelectorAll('span');

    // Animate title words with stagger
    tl.to(
      wordSpans,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Animate button with scale and rotation
    tl.fromTo(
      buttonRef.current,
      { 
        scale: 0.8, 
        opacity: 0,
        rotationX: -90 
      },
      { 
        scale: 1, 
        opacity: 1,
        rotationX: 0,
        duration: 1,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    );

    // Scroll indicator floating animation
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    // Continuous floating animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Button hover pulse effect
    const button = buttonRef.current;
    
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    // Parallax scroll effect
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(bgRef.current, {
          scale: 1 + progress * 0.3,
          opacity: 1 - progress * 0.5,
          ease: "none"
        });
        gsap.to([titleRef.current, buttonRef.current], {
          y: progress * 100,
          opacity: 1 - progress * 2,
          ease: "none"
        });
      }
    });

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      gsap.to(bgRef.current, {
        x: xPercent * 20,
        y: yPercent * 20,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(titleRef.current, {
        x: xPercent * -15,
        y: yPercent * -15,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <Navbar/>
      
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80')",
          width: '110%',
          height: '110%',
          left: '-5%',
          top: '-5%'
        }}
      >
        {/* Overlay for better text readability */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white text-center mb-8 md:mb-12 tracking-wide leading-tight will-change-transform"
        >
          Made with passion, Worn with pride
        </h1>

        <Link to='/allproducts'>
          <button
            ref={buttonRef}
            className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wide relative overflow-hidden group"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </Link>

        {/* Scroll Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-white"
        >
          <span className="text-sm tracking-widest font-light">SCROLL</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      {/* Decorative animated elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}