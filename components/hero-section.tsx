"use client";

import Image from "next/image";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left - Text Content */}
        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-muted-foreground text-sm font-mono tracking-widest uppercase">
              &lt; Hello World /&gt;
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-foreground">I'm </span>
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Surya Pri
            </span>
            <br />
            <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
              Atmaji S
            </span>
          </motion.h1>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-foreground"></div>
            <p className="text-xl md:text-2xl text-muted-foreground pl-4">
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Membangun aplikasi web modern dengan teknologi terkini. Spesialis
            dalam React, Next.js, dan pengembangan full-stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="/porto.pdf"
              download
              className="relative group px-8 py-4 bg-foreground text-background font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-lg" />
              Download CV
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.a>

            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass border-2 border-border hover:border-foreground text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-secondary hover:shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-lg" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-foreground/20 -translate-x-4 -translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-foreground/20 translate-x-4 translate-y-4"></div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-foreground/10 animate-ping-slow"></div>
            <div className="absolute inset-0 rounded-full border-2 border-foreground/5 animate-ping-slower"></div>

            {/* Image container with border */}
            <div className="relative rounded-full overflow-hidden border-4 border-foreground/30 hover:border-foreground/60 transition-all duration-500 shadow-2xl">
              <div className="relative aspect-square">
                <Image
                  src="/11-removebg-preview.png"
                  alt="Surya Pri Atmaji S"
                  fill
                  className="object-cover object-[center_30%] scale-105 transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-transparent animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Floating geometric shapes */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 border-2 border-foreground/20 rounded-lg"
              animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-foreground/20"
              animate={{ y: [0, 20, 0], rotate: [0, -90, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
