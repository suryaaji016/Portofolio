"use client";

import Image from "next/image";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left - Text Content (Posisi 1) */}
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I'm
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-500 mb-6 leading-tight">
            Surya Pri Atmaji S
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 uppercase tracking-[0.3em] font-light">
            FULL STACK DEVELOPER
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/porto.pdf"
              download
              className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaDownload className="text-lg" />
              Download CV
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right - Photo (Posisi 2) */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[400px] h-[500px] lg:w-[450px] lg:h-[600px]">
            <Image
              src="/11-removebg-preview.png"
              alt="Surya Pri Atmaji S"
              fill
              className="object-cover object-[center_30%] scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
