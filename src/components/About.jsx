// About.jsx
import React from "react";
import bg from "/src/assets/img1.webp";        // TOP IMAGE
import img2 from "/src/assets/img2.webp";      // EXTRA IMAGE 1
import img3 from "/src/assets/img3.webp";      // EXTRA IMAGE 2
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="w-full bg-black text-white">

      {/* HERO SECTION */}
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />

        {/* Centered text on hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4">
            Our Story
          </h1>
          <p className="max-w-xl text-gray-200">
            Discover who we are, what we believe in, and why we do what we do.
          </p>
        </div>
      </div>

      {/* ABOUT SECTION WITH IMAGES */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* TEXT BLOCK */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Who we are</h2>

            <p className="text-gray-300 leading-relaxed">
              We are a passionate team committed to delivering modern streetwear
              fashion with authenticity and quality. Our journey started with a
              simple vision: create clothing that blends style, comfort, and
              attitude — for everyone.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We believe in honesty, originality, and community. Every piece is
              crafted with attention, and every decision is made with purpose.
            </p>
          </div>

          {/* TWO SIDE IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img2}
              alt="about-img-1"
              className="w-full h-64 object-cover rounded-xl"
            />

            <img
              src={img3}
              alt="about-img-2"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 px-6 md:px-16 bg-zinc-900">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver high-quality streetwear that combines comfort,
              durability, and unique style — without compromising affordability.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Values</h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Authenticity & originality</li>
              <li>Sustainability & ethical sourcing</li>
              <li>Community & inclusivity</li>
              <li>Quality & attention to detail</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Want to explore our collection?
        </h3>

        <a
          href="/allproducts"
          className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-300 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
}
