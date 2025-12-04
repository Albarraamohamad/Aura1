import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const blogArticles = [
  {
    id: 1,
    title: "L'équipe d'Aura vous prépare de jolies choses !",
    author: "Ahmed Amine Ben Salah",
    excerpt: "Notre équipe travaille sans relâche pour vous proposer des créations exceptionnelles. Découvrez notre nouvelle collection qui allie élégance et modernité.",
    content: "Nous sommes ravis de vous annoncer que notre équipe prépare actuellement une toute nouvelle collection qui saura vous séduire. Chaque pièce a été pensée avec soin, en tenant compte de vos attentes et des dernières tendances de la mode. Des matériaux de qualité, des coupes modernes et un style intemporel caractérisent cette nouvelle gamme."
  },
  {
    id: 2,
    title: "Nouvelle Collection Printemps-Été 2025",
    author: "Sarah Mansouri",
    excerpt: "Découvrez notre collection printemps-été qui célèbre la légèreté et les couleurs vibrantes de la saison.",
    content: "Cette saison, nous avons créé une collection qui capture l'essence même du printemps. Des tons pastel aux motifs floraux délicats, chaque pièce raconte une histoire. Nos designers ont travaillé sur des coupes fluides et confortables, parfaites pour les journées ensoleillées."
  },
  {
    id: 3,
    title: "L'Art de la Mode Minimaliste",
    author: "Karim Ben Ali",
    excerpt: "Le minimalisme n'est pas seulement un style, c'est une philosophie qui guide chacune de nos créations.",
    content: "Chez Aura, nous croyons en la beauté de la simplicité. Nos designs épurés mettent en valeur la qualité des matériaux et la perfection des coupes. Moins, c'est plus - une devise qui inspire chaque collection que nous créons."
  }
];

const BlogPage = () => {
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    // Logo animation
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out"
    });

    // Content animation
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out"
    });

  }, []);

  // Animate when article changes
  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.6,
      ease: "power2.out"
    });
  }, [currentArticle]);

  const goToPrevious = () => {
    setCurrentArticle((prev) => (prev === 0 ? blogArticles.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentArticle((prev) => (prev === blogArticles.length - 1 ? 0 : prev + 1));
  };

  const article = blogArticles[currentArticle];

  return (
    <div className="min-h-screen bg-white">
      <Navbar1/>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 min-h-screen">
          {/* Logo Section */}
          <div 
            ref={logoRef}
            className="lg:sticky lg:top-32 text-center lg:text-left"
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
            className="flex-1 space-y-8 w-full text-center lg:text-left"
          >
            {/* Decorative Line */}
            <div className="w-64 h-px bg-black mx-auto lg:mx-0"></div>

            {/* Article Content */}
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg text-gray-600">
                By {article.author}
              </p>

              <div className="pt-8 space-y-6">
                <p className="text-xl leading-relaxed text-gray-800 font-light">
                  {article.excerpt}
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  {article.content}
                </p>
                
                <a 
                  href="#" 
                  className="inline-block text-lg underline hover:no-underline transition-all duration-300 hover:translate-x-2"
                >
                  Lire l'article complet
                </a>
              </div>
            </div>

            {/* Pagination */}
            <div className="pt-16">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={goToPrevious}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex gap-2">
                  {blogArticles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentArticle(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-colors duration-300 ${
                        index === currentArticle 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                >
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