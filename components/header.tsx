"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b-2 border-border shadow-lg"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group">
          <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            &lt; Surya.dev /&gt;
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative group text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"></div>
            </motion.a>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-10 h-10 rounded-lg glass border-2 border-border hover:border-foreground hover:shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-foreground" />
              ) : (
                <FiMoon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>
          )}

          {/* Status indicator */}
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border-2 border-border shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
            <span className="text-xs text-foreground font-mono">ONLINE</span>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-10 h-10 rounded-lg glass border-2 border-border hover:shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-foreground" />
              ) : (
                <FiMoon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>
          )}

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg glass border-2 border-border hover:border-foreground hover:shadow-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <motion.div
                className="h-0.5 bg-foreground rounded-full"
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              ></motion.div>
              <motion.div
                className="h-0.5 bg-foreground rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              ></motion.div>
              <motion.div
                className="h-0.5 bg-foreground rounded-full"
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              ></motion.div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 glass border-b border-border md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-foreground rounded"></div>
                    {link.label}
                  </span>
                </motion.a>
              ))}

              <motion.div
                className="flex items-center gap-2 px-4 py-2 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
                <span className="text-xs text-foreground font-mono">
                  ONLINE & AVAILABLE
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
