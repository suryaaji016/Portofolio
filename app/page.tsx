"use client";

import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
