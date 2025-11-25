"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "KarirKit – AI Career Assistant",
      description:
        "Full-stack platform that analyzes job descriptions and employment contracts with AI, featuring Google OAuth, contract upload, clause detection, salary benchmarks, and a responsive dashboard.",
      image: [
        "/projects/karirkit1.png",
        "/projects/karirkit2.png",
        "/projects/karirkit3.png",
      ],
      tags: [
        "Next.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "Shadcn",
        "JWT",
        "AI",
      ],
      link: "https://karrerkit.vercel.app/",
      github: "https://github.com/Final-Project-HCK-88/KarirKit",
    },
    {
      title: "Vinnojaya Biro Jasa – Vehicle Admin Platform",
      description:
        "Full-stack platform for STNK renewal, Balik Nama, BPKB updates, and license plate processing. Includes multi-step forms, document upload, order tracking, and admin API access.",
      image: [
        "/projects/vinnojaya1.png",
        "/projects/vinnojaya2.png",
        "/projects/vinnojaya3.png",
      ],
      tags: ["React.js", "Express", "PostgreSQL", "Bootstrap"],
      link: "https://vinnojaya.co.id/",
      github: "https://github.com/suryaaji016/Birojasa",
    },
    {
      title: "On Cloud E-Commerce",
      description:
        "Modern e-commerce platform featuring product listings, dynamic categories, search overlay, and responsive UI aligned with On Cloud branding.",
      image: [
        "/projects/oncloud1.png",
        "/projects/oncloud2.png",
        "/projects/oncloud3.png",
        "/projects/oncloud4.png",
        "/projects/oncloud5.png",
      ],
      tags: ["Next.js", "Tailwind CSS", "DaisyUI", "MongoDB"],
      link: "https://gc2-ooncloud.vercel.app/",
      github: "https://github.com/suryaaji016/on-cloud-ecommerce",
    },
    {
      title: "LinkedIn-Themed Social Media App",
      description:
        "Full-stack social media platform with profiles, posts, reactions, comments, real-time updates, JWT auth, and Redis caching. Includes React Native mobile client.",
      image: "/projects/linkedin.png",
      tags: ["React Native", "Expo", "Express.js", "MongoDB", "Redis", "JWT"],
      github: "https://github.com/H8-FSJS-P3S7/h8-fsjs-p3s7-gc01-suryaaji016",
    },
    {
      title: "Tic-Tac-Toe Realtime Multiplayer",
      description:
        "Real-time multiplayer Tic-Tac-Toe with synchronized game state using WebSocket and backend logic built with Express and PostgreSQL.",
      image: ["/projects/tictatoe1.png", "/projects/tictatoe2.png"],
      tags: [
        "React.js",
        "Express.js",
        "PostgreSQL",
        "Socket.io",
        "Jest",
        "AWS",
      ],
      github: "https://github.com/suryaaji016/tictactoe-realtime",
      link: "",
    },
    {
      title: "Spotipy – AI Music Recommender",
      description:
        "AI-powered playlist generator using Google Gemini and Spotify APIs, featuring mood analysis and JWT authentication.",
      image: [
        "/projects/spotipy1.png",
        "/projects/spotipy2.png",
        "/projects/spotipy3.png",
        "/projects/spotipy4.png",
      ],
      tags: ["React Native", "Expo", "Redux", "Gemini API", "Spotify API"],
      github: "https://github.com/suryaaji016/Spotipy",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beberapa projek yang saya sorot, menampilkan kemampuan full-stack,
            backend, dan pengembangan front-end modern.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden rounded-2xl border-2 border-border flex flex-col h-full glass hover:border-foreground/50 hover:shadow-xl transition-all duration-300">
        {/* IMAGE with 3D transform */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[currentIndex]}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* Subtle scanline effect on hover only */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/3 to-transparent animate-scan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          {/* Corner accents - more subtle */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-foreground/20"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-foreground/20"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-foreground/20"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-foreground/20"></div>
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col grow">
          <motion.h3
            className="text-xl font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium glass border-2 border-border text-foreground hover:border-foreground/70 hover:shadow-md transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTONS - Centered at bottom */}
          <div className="flex items-center justify-center gap-4 mt-auto">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border-2 border-border hover:border-foreground hover:shadow-md text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg" />
                <span>Github</span>
              </motion.a>
            )}

            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background border-2 border-foreground hover:bg-muted-foreground hover:shadow-lg text-sm font-medium transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
