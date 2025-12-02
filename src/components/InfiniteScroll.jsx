import React from 'react';

export default function InfiniteScroll() {
  const items = [
    "BY aura.",
    "READY TO WEAR",
    "BY aura.",
    "READY TO WEAR",
    "BY aura.",
    "READY TO WEAR",
    "BY aura.",
    "READY TO WEAR"
  ];

  return (
    <div className="relative  from-gray-50 to-gray-100 py-5 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32  from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32  from-gray-100 to-transparent z-10"></div>

      {/* Infinite scroll container */}
      <div className="flex whitespace-nowrap animate-scroll">
        {/* First set */}
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="inline-flex items-center mx-8"
          >
            <span className={`text-6xl md:text-8xl font-light tracking-wider ${
              item.includes('aura') 
                ? 'font-serif text-gray-800' 
                : 'text-gray-400 text-4xl md:text-5xl'
            }`}>
              {item}
            </span>
            {!item.includes('WEAR') && (
              <span className="mx-8 text-4xl text-gray-300">✦</span>
            )}
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="inline-flex items-center mx-8"
          >
            <span className={`text-6xl md:text-8xl font-light tracking-wider ${
              item.includes('aura') 
                ? 'font-serif text-gray-800' 
                : 'text-gray-400 text-4xl md:text-5xl'
            }`}>
              {item}
            </span>
            {!item.includes('WEAR') && (
              <span className="mx-8 text-4xl text-gray-300">✦</span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 5s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}