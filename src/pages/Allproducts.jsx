import React from "react";
import Navbar1 from '../components/Navbar1'
const products = [
  {
    id: 1,
    name: "Ensemble canaille: Chemise Boy",
    price: "190 TND",
    img: "/assets/p1.jpg",
  },
  {
    id: 2,
    name: "Jupe Hortensia",
    price: "260 TND",
    img: "/assets/p2.jpg",
  },
  {
    id: 3,
    name: "Robe Debbie",
    price: "280 TND",
    img: "/assets/p3.jpg",
  },
  // Add your full product list here
];

export default function Clothes() {
  return (
    <div className="w-full min-h-screen bg-white text-black px-6 md:px-12 lg:px-10">
        <Navbar1 />

      {/* Page Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">

        {/* ---------------- Sidebar Filters ---------------- */}
        <aside className="space-y-10">

          {/* Type */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Type</h3>
            <div className="space-y-2 text-gray-700">
              {["robe", "jupe", "chemise", "ensemble", "pantalon", "short"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="capitalize">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Color</h3>
            <div className="space-y-2 text-gray-700">
              {["vert", "rouge", "bleu", "blanc", "argent"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="capitalize">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Size</h3>
            <div className="space-y-2 text-gray-700">
              {["XS", "S", "M", "L", "XL"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

        </aside>

        {/* ---------------- Products Grid ---------------- */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id}>

                {/* Image Box */}
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[420px] object-cover"
                  />
                </div>

                {/* Product Text */}
                <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
