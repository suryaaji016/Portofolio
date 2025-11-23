"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

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
      link: "https://oncloudstore.vercel.app/",
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
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-white/60 mb-16 max-w-2xl">
          Here are some of my highlighted projects showcasing full-stack,
          backend, and modern front-end development capabilities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
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
    <Card className="group overflow-hidden bg-zinc-900 border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-white/60 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: any) => (
            <span
              key={tag}
              className="bg-teal-900/30 text-teal-400 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTONS - Centered at bottom */}
        <div className="flex items-center justify-center gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition"
            >
              <FaGithub className="text-lg" />
              Github
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
