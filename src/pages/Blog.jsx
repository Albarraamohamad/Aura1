import React, { useEffect, useRef } from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer'

const BlogPage = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    // Lenis Smooth Scroll (simulated with CSS)
    document.documentElement.style.scrollBehavior = 'smooth';

    // GSAP-like animations using Web Animations API
    const animateElement = (element, keyframes, options) => {
      if (element) {
        element.animate(keyframes, options);
      }
    };

    // Animate logo
    if (logoRef.current) {
      animateElement(
        logoRef.current,
        [
          { opacity: 0, transform: 'translateY(-30px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 1000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' }
      );
    }

    // Animate content
    if (contentRef.current) {
      animateElement(
        contentRef.current,
        [
          { opacity: 0, transform: 'translateY(50px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 1200, delay: 300, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' }
      );
    }

    // Animate pagination
    if (paginationRef.current) {
      animateElement(
        paginationRef.current,
        [
          { opacity: 0, transform: 'translateY(30px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 1000, delay: 600, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', fill: 'forwards' }
      );
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
        <Navbar1/>
      {/* Header */}
     

      {/* Main Content */}
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 min-h-screen">
          {/* Logo Section */}
          <div 
            ref={logoRef}
            className="lg:sticky lg:top-32 opacity-0 text-center lg:text-left"
          >
            <div className="space-y-2">
              <div className="text-xs tracking-widest font-light">BY</div>
              <div className="text-8xl lg:text-9xl font-bold tracking-tight">
                aura.
              </div>
              <div className="text-xs tracking-widest font-light mt-4">
                READY TO WEAR
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            ref={contentRef}
            className="flex-1 space-y-8 opacity-0 w-full text-center lg:text-left"
          >
            {/* Decorative Line */}
            <div className="w-64 h-px bg-black mx-auto lg:mx-0"></div>

            {/* Article Content */}
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                L'équipe d'Aura vous prépare de jolies choses !
              </h1>
              
              <p className="text-lg text-gray-600">
                By Ahmed Amine Ben Salah
              </p>

              <div className="pt-8 space-y-6">
                <p className="text-xl leading-relaxed text-gray-800">
                  L'équipe d'Aura vous prépare de jolies choses !
                </p>
                
                <a 
                  href="#" 
                  className="inline-block text-lg underline hover:no-underline transition-all duration-300 hover:translate-x-2"
                >
                  Lire l'article
                </a>
              </div>
            </div>

            {/* Pagination */}
            <div 
              ref={paginationRef}
              className="pt-16 opacity-0"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                  1
                </div>
                
                <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
      
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
      </div>

     
    </div>
  );
};

export default BlogPage;