import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Nadhif Triyudo — Fullstack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Nadhif Triyudo, a fresh-graduate frontend & web developer skilled in React, Next.js, Tailwind CSS, and Supabase.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <AnimatedBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
