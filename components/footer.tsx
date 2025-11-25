"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/suryaaji016",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/surya-pri-atmaji-6781a7178/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:suryaaji016@gmail.com",
      label: "Email",
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      href: "https://wa.me/6281296232396",
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative py-16 overflow-hidden bg-background border-t-2 border-border"
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Surya Pri Atmaji S
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer
            </p>
            <p className="text-muted-foreground text-sm">
              West Java, Indonesia
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              <span className="text-foreground font-mono">
                AVAILABLE FOR WORK
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-foreground"></div>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Contact"].map((link, idx) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-foreground"></div>
              Follow Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg glass border-2 border-border hover:border-foreground hover:shadow-lg text-muted-foreground hover:text-foreground transition-all"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Surya Pri Atmaji S.{" "}
            <span className="text-foreground">All rights reserved.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="text-foreground font-semibold">Next.js</span>
            {" & "}
            <span className="text-foreground font-semibold">Framer Motion</span>
          </p>
        </motion.div>

        {/* Animated corner borders */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-foreground/20 animate-glow-pulse"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-foreground/20 animate-glow-pulse"></div>
      </div>
    </footer>
  );
}
