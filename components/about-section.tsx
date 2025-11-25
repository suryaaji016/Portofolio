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
import { motion } from "framer-motion";

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
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-background"
    >
      {/* Grid pattern */}
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
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-1 h-8 bg-foreground"></div>
            <h3 className="text-3xl font-bold text-foreground">Skills</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="group p-6 rounded-lg glass border-2 border-border hover:border-foreground/70 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-foreground group-hover:text-muted-foreground transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-1 h-8 bg-foreground"></div>
            <h3 className="text-3xl font-bold text-foreground">Experience</h3>
          </motion.div>

          <div className="space-y-6">
            {experience.map((job, idx) => (
              <motion.div
                key={idx}
                className="group relative pl-8 pb-8 border-l-2 border-border hover:border-foreground/70 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background shadow-md"></div>

                <div className="glass p-6 rounded-lg border-2 border-border group-hover:border-foreground/50 group-hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {job.role}
                  </h4>
                  <div className="text-muted-foreground font-medium mb-2">
                    {job.company}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3 font-mono">
                    {job.period}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
