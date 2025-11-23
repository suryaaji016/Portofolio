"use client";

import {
  FaReact,
  FaJs,
  FaVuejs,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaRobot,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpo,
  SiRedux,
  SiApollographql,
  SiSequelize,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiDaisyui,
} from "react-icons/si";
import { MdToken } from "react-icons/md";

export default function AboutSection() {
  const skills = [
    { name: "React JS", icon: <FaReact className="text-2xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-2xl" /> },
    { name: "Vue", icon: <FaVuejs className="text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
    { name: "Expo", icon: <SiExpo className="text-2xl" /> },
    { name: "Redux", icon: <SiRedux className="text-2xl" /> },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-2xl" /> },
    { name: "React Native", icon: <FaReact className="text-2xl" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-2xl" /> },
    { name: "Apollo Client", icon: <SiApollographql className="text-2xl" /> },
    { name: "Sequelize", icon: <SiSequelize className="text-2xl" /> },
    { name: "Express", icon: <SiExpress className="text-2xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-2xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-2xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-2xl" /> },
    { name: "JWT", icon: <MdToken className="text-2xl" /> },
    { name: "AI Integration", icon: <FaRobot className="text-2xl" /> },
  ];
  const experience = [
    {
      role: "Admin Staff",
      company: "PT. Kinaro Logistics Indonesia",
      period: "February 2025 – July 2025",
      description:
        "Operated logistics and monitoring software (internal WMS) to track daily shipments and created daily operational reports while coordinating with external vendors.",
    },
    {
      role: "Operator Data Entry",
      company: "PT. Reycom Document Solusi",
      period: "July 2023 – November 2024",
      description:
        "Checked and validated 1,000+ documents per day, ensuring data accuracy and preparing both physical and digital documents while resolving data discrepancies.",
    },
    {
      role: "Finance Staff",
      company: "PT. Sawerandah Workerpreneur Indonesia",
      period: "October 2022 – May 2024",
      description:
        "Prepared monthly financial reports, managed daily administrative documentation, and coordinated with internal departments for timely finance-related submissions.",
    },
    {
      role: "Web Developer Intern",
      company: "PT. Emsada Cipta Lestari",
      period: "August 2021 – September 2021",
      description:
        "Developed the company profile website using HTML, CSS, and JavaScript to support marketing and branding initiatives, collaborating closely with internal teams.",
    },
  ];
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          About Me
        </h2>
        <p className="text-white/70 mb-12  leading-relaxed">
          Full-Stack JavaScript developer with hands-on experience building
          modern, scalable web applications using React, Node.js, Express, and
          PostgreSQL. Strong understanding of APIs, authentication, and
          deployment workflows. I transitioned into IT after discovering how
          technology can automate work and solve real business problems. My
          previous experience in operations helped me develop precision,
          problem-solving, and fast learning abilities, which now strengthen my
          engineering approach. Passionate about creating impactful digital
          products and continuously learning new tools to deliver high-quality
          solutions.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="text-white/90">{skill.icon}</div>
                  <div className="text-white/80 text-lg">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-zinc-900 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-white/90 font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-white/60 mb-3">{exp.period}</p>
                  <p className="text-white/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
