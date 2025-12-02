import React from 'react';
import { Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a3d3d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">ABOUT AURA</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We are a clothing brand designed for tech enthusiasts and gamers who value simplicity. Our products blend comfort with minimalist design, offering a style that celebrates individuality in the digital age.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
            >
              Discover Products <ArrowUpRight size={18} />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Return & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">
              Join For Exclusive Email Offers!
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enter your email to receive the latest offers and new products.
            </p>
            
            <div className="bg-white rounded-lg p-1 flex items-center">
              <input
                type="email"
                placeholder="Enter e..."
                className="flex-1 px-4 py-3 text-gray-800 outline-none bg-transparent"
              />
              <button className="bg-[#1a3d3d] text-white px-6 py-3 rounded-md hover:bg-[#0f2626] transition-colors flex items-center gap-2 whitespace-nowrap">
                Subscribe <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Reviews Badge */}
            <div className="mt-8 flex items-center gap-2">
              <div className="bg-white/10 px-4 py-2 rounded">
                <span className="text-2xl">★</span>
                <span className="ml-2 font-semibold">Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © 2025 RIGHTS RESERVED TO <span className="font-semibold text-white">DXLR</span>
          </p>
          
          {/* Payment Methods */}
          <div className="flex gap-3">
            <div className="bg-white rounded px-3 py-2">
              <span className="text-blue-600 font-bold text-sm">VISA</span>
            </div>
            <div className="bg-white rounded px-3 py-2">
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400 -ml-2"></div>
              </div>
            </div>
            <div className="bg-white rounded px-3 py-2">
              <span className="text-purple-600 font-bold text-sm">D17</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-white text-gray-800 w-12 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      >
        <svg 
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}