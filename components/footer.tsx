"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/6281296232396",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      href: "https://github.com/suryaaji016",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/surya-pri-atmaji-6781a7178/",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:suryaaji016@gmail.com",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-black text-white py-12 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Surya Pri Atmaji S</h3>
            <p className="text-white/70">Full Stack Developer</p>
            <p className="text-white/70">West Java, Indonesia</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-white/70 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-white/70 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Surya Pri Atmaji S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
