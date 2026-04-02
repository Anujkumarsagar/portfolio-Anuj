"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.css";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  TextIcon as Telegram,
  Mail,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Download,
  X,
  Redo,
  GithubIcon,
  Code2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ArticlesSlider from "@/components/cards/ArticlesSlider";
import { motion } from "framer-motion";
import { sleep } from "./articles/page";
import { skills, tags } from "@/data/tags";
import useRouterHook from "@/hooks/use-router";
import MainHeader from "@/components/header-main";
import WorkExperience from "@/components/home/work-experience";
import AboutMe from "@/components/home/about-me";
import ProjectSection from "@/components/home/project-section";
import { HeroAnimated } from "@/components/home/hero-animated";
import { ProjectsAnimated } from "@/components/home/projects-animated";
import { ParticleBackground } from "@/components/canvas/particle-background";
import { AnimatedSection } from "@/components/sections/animated-section";

export default function Home() {
  const { navigateTo, navigateBack, prefetchRoute } = useRouterHook();
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showLinks, setShowLinks] = useState<boolean>(false);

  useEffect(() => {
    sleep(500);
  }, []);

  function handleMobileNav() {
    if (!circleRef.current) return;

    setIsAnimating((prev) => {
      const newState = !prev;
      circleRef.current?.classList.toggle("fixed", newState);
      circleRef.current?.classList.toggle("circle-animate", newState);

      if (newState) {
        setTimeout(() => {
          setShowLinks(true);
        }, 1500);
      } else {
        setShowLinks(false);
      }

      return newState;
    });
  }

  

  return (
    <main className="text-white min-h-screen overflow-x-hidden relative">
      <ParticleBackground particleCount={40} particleColor="rgba(100, 150, 255, 0.3)" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* New Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MainHeader className="" />
          <HeroAnimated />
        </motion.div>

        {/* Animated Projects Section */}
        <AnimatedSection animation="slideUp" duration={0.8}>
          <ProjectsAnimated />
        </AnimatedSection>

        {/* Articles Slider Section */}
        <AnimatedSection animation="slideUp" duration={0.8}>
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-10 section-gradient"
          >
            <ArticlesSlider />
          </motion.section>
        </AnimatedSection>

        {/* About Me Section */}
        <AnimatedSection animation="slideUp" duration={0.8}>
          <AboutMe />
        </AnimatedSection>

        {/* Work Experience Section */}
        <AnimatedSection animation="slideUp" duration={0.8}>
          <WorkExperience />
        </AnimatedSection>

        {/* Articles Section */}
        <motion.section
          id="articles"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 section-gradient bento-section" 
        >
          <h2 className="  text-5xl md:text-6xl font-bungee mb-10">Articles</h2>

          <div className="w-full">
            <ArticlesSlider />
          </div>
        </motion.section>

        {/* Contacts Section */}
        {/* <motion.section
          id="contacts"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 section-gradient"
        >
          <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">Contact</h2>

          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bungee mb-4">
                Anuj
                <br />
                Kumar
              </h2>
              <p className="text-gray-400 mb-6">
                Full-stack
                <br />
                developer
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="https://github.com/Anujkumarsagar" className="relative inline-flex group mb-4">
                    <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                    <Github className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="https://linkedin.com/in/Anujkumarsagar" className="relative inline-flex group mb-4">
                    <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                    <Linkedin className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="mailto:anujkumarsagar62@gmail.com" className="relative inline-flex group mb-4">
                    <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                    <Mail className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="https://t.me/SoftwareEngineer6" className="relative inline-flex group mb-4">
                    <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                    <Telegram className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="https://www.instagram.com/2_._anuj_._2/" className="relative inline-flex group">
                    <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                    <Instagram className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="flex justify-end mb-6">
                <nav className="flex gap-2 font-bungee">
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Main
                  </Link>
                  <Link href="#about" className=" hover:text-gray-300 transition-colors">
                    About
                  </Link>
                  <Link href="#projects" className="hover:text-gray-300 transition-colors">
                    Projects
                  </Link>
                  <Link href="#articles" className="hover:text-gray-300 transition-colors">
                    Articles
                  </Link>
                  <Link href="/links" className="hover:text-gray-300 transition-colors">
                    Links
                  </Link>
                </nav>
              </div>

              <div className="bg-gray-900 rounded-3xl p-6">
                <h3 className="font-medium mb-4">Site</h3>
                <p className="text-sm text-gray-400 mb-2">Handcrafted by ME /</p>
                <p className="text-sm text-gray-400 mb-2">Designed by Anuj /</p>
                <p className="text-sm text-gray-400">Powered by NextJs</p>
              </div>
            </div>
          </div>
        </motion.section> */}

        {/* <Scene /> */}
      </div>
    </main>
  );
}
