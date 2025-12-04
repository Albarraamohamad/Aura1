// About.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "/src/assets/img1.webp";        // TOP IMAGE
import img2 from "/src/assets/img2.webp";      // EXTRA IMAGE 1
import img3 from "/src/assets/img3.webp";      // EXTRA IMAGE 2
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero text animation
    gsap.from(heroTextRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      delay: 0.5
    });

    // About section text - slide from left
    gsap.from(aboutTextRef.current, {
      scrollTrigger: {
        trigger: aboutTextRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out"
    });

    // Images - scale and fade in with rotation
    gsap.from(img1Ref.current, {
      scrollTrigger: {
        trigger: img1Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      scale: 0.8,
      rotation: -5,
      duration: 1,
      ease: "back.out(1.7)"
    });

    gsap.from(img2Ref.current, {
      scrollTrigger: {
        trigger: img2Ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      scale: 0.8,
      rotation: 5,
      duration: 1,
      delay: 0.2,
      ease: "back.out(1.7)"
    });

    // Mission section - slide from bottom
    gsap.from(missionRef.current, {
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out"
    });

    // Values section - slide from bottom with delay
    gsap.from(valuesRef.current, {
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 80,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    // Values list items - stagger animation
    gsap.from(valuesRef.current.querySelectorAll('li'), {
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.5
    });

    // CTA section - scale and fade
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)"
    });

    // Parallax effect on hero background
    gsap.to(".hero-bg", {
      scrollTrigger: {
        trigger: ".hero-bg",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 200,
      ease: "none"
    });

  }, []);

  return (
    <div className="w-full bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="hero-bg w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />

        {/* Centered text on hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-4">
          <div ref={heroTextRef}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4">
              Our Story
            </h1>
            <p className="max-w-xl text-gray-200">
              Discover who we are, what we believe in, and why we do what we do.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION WITH IMAGES */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* TEXT BLOCK */}
          <div ref={aboutTextRef} className="space-y-6">
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
              ref={img1Ref}
              src={img2}
              alt="about-img-1"
              className="w-full h-64 object-cover rounded-xl"
            />

            <img
              ref={img2Ref}
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
          <div ref={missionRef} className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver high-quality streetwear that combines comfort,
              durability, and unique style — without compromising affordability.
            </p>
          </div>

          <div ref={valuesRef} className="space-y-4">
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
        <div ref={ctaRef}>
          <h3 className="text-2xl font-semibold mb-4">
            Want to explore our collection?
          </h3>

          <a
            href="/allproducts"
            className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}