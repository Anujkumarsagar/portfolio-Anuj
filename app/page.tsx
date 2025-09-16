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
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ArticlesSlider from "@/components/cards/ArticlesSlider";
import { motion } from "framer-motion";
import { sleep } from "./articles/page";
import { skills, tags } from "@/data/tags";
import useRouterHook from "@/hooks/use-router";



export default function Home() {
  const { navigateTo, navigateBack, prefetchRoute } = useRouterHook()
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
    <main className=" text-white min-h-screen ovevrflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="main-section relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

          <header className="relative flex justify-between items-center mb-10">
            <div onClick={() => navigateTo("/")} className="cursor-cell">
              <h2 className=" h-fit md:scale-110  font-bungee text-lg border flex border-white px-3 py-1 rounded-full">
                <Image src={"favicon.ico"} width={36} height={36} alt="Logo" />
                <div className="h-fit pt-2">
                  NUJ
                </div>
              </h2>
            </div>
            <nav className="hidden md:flex space-x-6">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link
                  href="#about"
                  className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded"
                >
                  About
                </Link>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500  rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link
                  href="#project"
                  className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded"
                >
                  Project
                </Link>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <div
                  onClick={() => navigateTo("/articles")}
                  className="relative inline-flex  cursor-pointer items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded"
                >
                  Articles
                </div>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <div
                  onClick={() => navigateTo("/links")}
                  className="relative inline-flex cursor-pointer items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded"
                >
                  Links
                </div>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link
                  href="#contacts"
                  className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded"
                >
                  Contacts
                </Link>
              </div>
            </nav>
            <div className="z-20 flex items-center space-x-2">
              <span>En</span>
              <button className="hidden z-20 md:block border border-gray-700 rounded-full px-2 py-1 text-xs">
                Ge
              </button>
              <button
                onClick={handleMobileNav}
                className="mobile-nav md:hidden z-20"
                aria-label="Toggle mobile navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
              <div
                ref={circleRef}
                className="circle-mobile-nav relative sm:hidden md:hidden"
              ></div>
              {showLinks && (
                <div className="fixed font-bungee fade-in inset-0 bg-[#010101] z-30 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out">
                  <button
                    onClick={handleMobileNav}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <nav className="bg-gray-900 p-24 rounded-3xl flex flex-col space-y-4 transition-all duration-500 ease-in-out transform">
                    <Link
                      href="#about"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        1. About
                      </span>
                    </Link>
                    <Link
                      href="#projects"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        2. Projects
                      </span>
                    </Link>
                    <div
                      onClick={() => {

                        handleMobileNav()
                        navigateTo("/aritcles")
                      }}
                      className="relative inline-flex cursor-pointer group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        3. Articles
                      </span>
                    </div>
                    <Link
                      href="#contacts"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        4. Contacts
                      </span>
                    </Link>
                    <div
                      onClick={() => {

                        handleMobileNav()
                        navigateTo("/links")
                      }}
                      className="relative inline-flex group cursor-pointer w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        4. Links
                      </span>
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </header>

          {/* Hero  */}
          <div className=" hero bg-black-[80%] lg:grid lg:grid-cols-2 lg:gap-10">
            <Image
              src="../assets/png/image.png"
              alt="Developer photo"
              width={800}
              height={800}
              loading="eager"
              className="absolute  md:absolute top-20 left-0 "
            />

            <div className="">
              <h1 className="text-5xl font-bungee md:text-6xl font-mono mb-9">
                <p>Full-stack</p>
                <p>Developer</p>
              </h1>

              <p className=" relative text-opacity-5 text-lg mb-6">
                My goal is to{" "}
                <span className="font-medium animate-pulse text-white italic">
                  write maintainable, clean and understandable code
                </span>{" "}
                to process development was enjoyable.
              </p>
              <div className="mb-8 flex gap-4 relative items-center">
                <Link
                  href="#projects"
                  className=" cursor-cell items-center bg-white text-black rounded-full px-16 py-6 font-medium text-lg hover:bg-gray-100 transition-colors"
                >
                  Projects
                </Link>

                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1-iLwm1sKPPEbjgonn-_8A9_H6LTYGdn-/view?usp=sharing"
                  download="Anujkumar_Resume_FullStack_2025.pdf"
                >
                  <Download
                    size={30}
                    color="black"
                    className="bg-white rounded-full scale-150  cursor-cell p-2"
                  />
                </Link>
              </div>
              <span className="absolute z-10 top-[45%] right-10 inline-flex item-center justify-center flex-col md:fixed md:bottom-24 md:scale-125 md:left-8 md:top-auto md:right-auto mb-10">
                <Link
                  href="https://github.com/Anujkumarsagar"
                  className="relative inline-flex group mb-4"
                >
                  <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                  <Github className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link
                  href="https://linkedin.com/in/Anujkumarsagar"
                  className="relative inline-flex group mb-4"
                >
                  <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                  <Linkedin className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link
                  href="mailto:anujkumarsagar62@gmail.com"
                  className="relative inline-flex group mb-4"
                >
                  <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                  <Mail className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link
                  href="https://t.me/SoftwareEngineer6"
                  className="relative inline-flex group mb-4"
                >
                  <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                  <Telegram className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link
                  href="https://www.instagram.com/2_._anuj_._2/"
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                  <Instagram className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
              </span>
            </div>
          </div>

          <div className="my-4 md:hidden w-fit flex items-end justify-between  h-32 relative">
            <h1 className="text-7xl font-bungee">Link</h1>
            <Redo
              size={100}
              className="absolute -rotate-0 -right-[37%] top-[2%]  bottom-0"
            />
          </div>

          <Image
            src="./assets/png/14.png"
            alt="Developer photo"
            width={800}
            height={800}
            loading="eager"
            className="rounded-3xl  -z-1 filter-blur-xl md:absolute top-20   animate-spin right-0 m-auto "
          />
        </motion.section>

        <div className="bg-black">
          {/* Articles Slider Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-10 section-gradient"
          >
            <ArticlesSlider />
          </motion.section>

          {/* About Me Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-10 section-gradient"
          >
            <div className="lg:grid lg:grid-cols-2 items-center  justify-center lg:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">
                  About
                </h2>
                <p className="mb-4">
                  Hello!{" "}
                  <span className="font-bold font-bungee">I'm Anuj</span>, I'm
                  a{" "}
                  <span className="font-bold italic">
                    full-stack developer
                  </span>
                  .<br />
                  With Expertise{" "}
                  <span className="font-medium">Many other fields</span>.
                </p>

                <div className="mt-8 mb-6">
                  {
                    skills.map((skill, index) => (

                      <div key={index} className="bg-gray-900 rounded-3xl p-4 mb-4">
                        <h4 className="font-medium font-bungee mb-2">{skill.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {
                            skill.skills.map((skill, index) => (

                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative inline-flex group cursor-pointer"
                              >
                                <motion.button whileTap={{ scale: 0.85 }}>
                                  <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">
                                    {skill}
                                  </span>
                                </motion.button>
                              </motion.span>
                            ))
                          }

                        </div>
                      </div>
                    ))
                  }
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 lg:mt-0"
              >
                <div className="relative w-full   max-w-[400px] mx-auto group rounded-3xl overflow-hidden">
                  {/* Glow Background */}
                  <motion.button whileTap={{ scale: 0.85 }}>
                    <div className="absolute inset-0  rounded-3xl bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] drop-shadow-xl transition-all duration-500 "></div>


                    {/* Actual Photo */}
                    <Image
                      src="../assets/projects/personal.png"
                      alt="Developer photo"
                      width={400}
                      height={450}
                      loading="lazy"
                      className=" md:opacity-70 cursor-pointer transition-all duration-200  group-hover:opacity-100 p-1 relative w-full object-cover rounded-3xl"
                    />
                  </motion.button>
                </div>
              </motion.div>
            </div>


          </motion.section>
        </div>

        {/* Work Experience Section */}
        <motion.section
          id="work"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 section-gradient"
        >
          <h2 className="text-5xl md:text-6xl font-bungee mb-10">Work</h2>

          <div className="border-y border-gray-800">
            <div className="py-4 grid grid-cols-[1fr_1fr_1fr] gap-4">
              <div>
                <p className="text-sm">July 2025 - Present</p>
                <p className="text-xs text-gray-500"> Working</p>
              </div>
              <div>
                <h3 className="font-medium">Intellect Sprouts</h3>
                <p className="text-sm text-gray-400">
                  Junior Web Developer Intern
                </p>
              </div>
              <div>
                <h3 className="font-medium">Visit</h3>
                <a
                  href="https://www.linkedin.com/company/intellect-sprouts/posts/?feedView=all"
                  className="text-sm text-blue-400 gap-3 flex animate-in"
                >
                  LinkedIn
                  <ArrowRight
                    color="black"
                    className="  bg-white rounded-full"
                  />
                </a>
              </div>
            </div>
            <div className="py-4 grid grid-cols-[1fr_1fr_1fr] gap-4">
              <div>
                <p className="text-sm">Nov 2024 - Apr 2025</p>
                <p className="text-xs text-gray-500"> 6 months</p>
              </div>
              <div>
                <h3 className="font-medium">Zeptik</h3>
                <p className="text-sm text-gray-400">
                  Frontend developer | React & Vue
                </p>
              </div>
              <div>
                <h3 className="font-medium">Visit</h3>
                <a
                  href="https://www.zeptik.com"
                  className="text-sm text-blue-400 gap-3 flex animate-in"
                >
                  Zeptik.com
                  <ArrowRight
                    color="black"
                    className="  bg-white rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="text-right mt-4">
            <p className="text-gray-400">Proffesional Work experience</p>
            <p className="font-medium">8 months</p>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 section-gradient"
        >
          <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">
            Projects
          </h2>

          {/* Recipe Sharing App Project */}
          <div className="mb-16 gap-4 bg-black/20 backdrop-blur-sm rounded-2xl p-1 relative overflow-hidden group border border-gray-800/30">
            {/* Subtle floating orbs - darker theme */}
            <motion.div
              className="absolute top-4 right-8 w-16 h-16 bg-gradient-to-r from-gray-700/10 to-gray-600/10 rounded-full blur-xl"
              animate={{
                y: [-8, 8, -8],
                x: [-3, 3, -3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute bottom-8 left-12 w-12 h-12 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-full blur-xl"
              animate={{
                y: [6, -6, 6],
                x: [3, -3, 3],
                scale: [1.05, 1, 1.05],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />

            <div className="m-4 relative z-10">
              {/* Enhanced Title - maintaining original font and style */}
              <motion.div
                className="relative group/title mb-3"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.h3
                  className="font-medium font-bungee underline md:text-xl mb-2 text-white relative"
                  initial={{ opacity: 0, y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Recipe Sharing App

                  {/* Subtle animated underline enhancement */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gray-400/50 via-white/30 to-gray-400/50 opacity-0 group-hover/title:opacity-100"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.h3>
              </motion.div>

              {/* Enhanced Tags - maintaining original gradient colors */}
              <motion.div
                className="flex flex-wrap gap-3 text-xs text-white mb-4"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {tags?.movie.map((item, key) => (
                  <motion.span
                    key={key}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 10 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          damping: 20,
                          stiffness: 300
                        }
                      }
                    }}
                    className="relative inline-flex group/tag cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Original gradient border with subtle animation */}
                    <motion.div
                      className="absolute shadow-lg -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover/tag:opacity-100 group-hover/tag:-inset-1"
                    />

                    <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full group-hover/tag:bg-gray-800 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced Description - keeping original styling */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2 mb-4"
              >
                <motion.p
                  className="text-sm text-gray-400 mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.span
                    className="font-medium text-white hover:border p-2 rounded-full transition-all duration-300 cursor-default"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    Recipe Sharing App
                  </motion.span>{" "}
                  is a multi-page multi functional Application where{" "}
                  <motion.span
                    className="font-medium text-white hover:border p-2 rounded-full transition-all duration-300 cursor-default"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    Top Notch Recipes
                  </motion.span>{" "}
                  can be listed.
                </motion.p>

                <motion.p
                  className="text-sm text-gray-100 mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  This project contains several key microservices, each contributing to its overall functionality and cohesion.
                </motion.p>
              </motion.div>
            </div>

            {/* Enhanced Image Grid - maintaining original layout */}
            <motion.div
              className="grid grid-row-2 grid-cols-3 gap-4 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <motion.div
                className="col-span-2 relative group/image"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="./assets/projects/recipe.png"
                  alt="Gostat project screenshot"
                  width={400}
                  height={100}
                  loading="lazy"
                  className="rounded-xl object-cover w-full p-2 h-auto group-hover/image:scale-[1.01] transition-transform duration-500"
                />

                {/* Enhanced floating button */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-gray-900 p-2 rounded-full border border-gray-700/50 group-hover/image:border-gray-500/70 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(75, 85, 99, 0.9)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-4 h-4 text-white group-hover/image:text-gray-200 transition-colors duration-300" />
                </motion.div>
              </motion.div>

              <motion.div
                className="relative row-span-2 group/image2"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.1
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="./assets/projects/recipe2.png"
                  alt="Gostat project screenshot"
                  width={600}
                  height={300}
                  loading="lazy"
                  className="rounded-xl object-cover w-full h-auto group-hover/image2:scale-[1.01] transition-transform duration-500"
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Action Buttons - keeping original styling */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="bg-gray-900 p-2 rounded-full mr-2 border border-gray-700/50 group/btn"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(156, 163, 175, 0.7)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="https://recipe-sharing-app-6b5v.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ChevronRight className="cursor-pointer w-4 h-4 text-white group-hover/btn:text-gray-200 transition-colors duration-300" />
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-2 rounded-full border border-gray-700/50 group/btn2"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(156, 163, 175, 0.7)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="https://github.com/Anujkumarsagar/Recipe-Sharing-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GithubIcon className="cursor-pointer w-4 h-4 text-white group-hover/btn2:text-gray-200 transition-colors duration-300" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>


          {/* TeraMovies Project */}
          <div className="mb-16 bg-black/10 border-gray-800/30 border rounded-xl p-1 relative overflow-hidden group">
            {/* Subtle floating elements - very muted */}
            <motion.div
              className="absolute top-8 right-12 w-12 h-12 bg-gray-800/5 rounded-full blur-xl"
              animate={{
                y: [-6, 6, -6],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="mb-4 m-4 relative z-10">
              {/* Enhanced Title - maintaining original style */}
              <motion.div
                className="relative group/title"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.h3
                  className="font-medium font-bungee mb-2 underline text-white"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Tera Movies
                </motion.h3>
              </motion.div>

              {/* Enhanced Tags - keeping original gradient and styling */}
              <motion.div
                className="flex flex-wrap gap-2 text-xs text-white mb-4"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {tags?.movie.map((item, key) => (
                  <motion.span
                    key={key}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }
                    }}
                    className="relative inline-flex group/tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Original gradient border - keeping exact styling */}
                    <motion.div
                      className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover/tag:opacity-100 group-hover/tag:-inset-1"
                    />

                    <span className="relative text-xs text-white cursor-[url('/cursor.png'),_auto] px-3 py-1 bg-gray-900 rounded-full group-hover/tag:bg-gray-800 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced Description - maintaining original text styling */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.p
                  className="text-sm text-gray-400 mb-2"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <motion.span
                    className="font-medium text-white transition-all duration-200"
                    whileHover={{ scale: 1.01 }}
                  >
                    TeraMovies
                  </motion.span> is
                  an{" "}
                  <motion.span
                    className="font-medium text-white transition-all duration-200"
                    whileHover={{ scale: 1.01 }}
                  >
                    NextJs Web Application
                  </motion.span>{" "}
                  designed for Watching Movies in Free of Cost. It includes
                  Movies, WebSeries and Short Movies that able to save your
                  money to give anywhere.
                </motion.p>

                <motion.p
                  className="text-sm text-white mb-4"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  The application uses{" "}
                  <motion.span
                    className="font-medium text-white transition-all duration-200"
                    whileHover={{ scale: 1.01 }}
                  >
                    High Quality videos links
                  </motion.span>{" "}
                  and Sessions could be include if any.
                </motion.p>
              </motion.div>
            </div>

            {/* Enhanced Image Grid - maintaining original layout */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.15
                  }
                }
              }}
            >
              {/* Main Large Image */}
              <motion.div
                className="relative group/main"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="../assets/projects/teramovies1.png"
                  alt="Kana Master project screenshot"
                  width={300}
                  loading="lazy"
                  height={300}
                  className="rounded-xl object-cover w-full h-auto group-hover/main:scale-[1.01] transition-transform duration-400"
                />
              </motion.div>

              {/* Grid of Smaller Images */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {[
                  { src: "../assets/projects/teramovies2.png" },
                  { src: "../assets/projects/teramovies3.png" },
                  { src: "../assets/projects/teramovies4.png" },
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative group/grid"
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Image
                      src={image.src}
                      alt="Kana Master project screenshot"
                      width={150}
                      height={150}
                      loading="lazy"
                      className="rounded-xl object-cover w-full h-auto group-hover/grid:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}

                {/* Special Last Image with Overlay - maintaining original styling */}
                <motion.div
                  className="relative group/special"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image
                    src="../assets/projects/teramovies5.png"
                    alt="Kana Master project screenshot"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="rounded-xl object-cover w-full h-auto"
                  />

                  {/* Original overlay styling maintained */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl group-hover/special:bg-black/40 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 15,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Action Buttons - maintaining original styling */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="bg-gray-900 p-2 rounded-full mr-2"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(75, 85, 99)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="https://oneteramovies.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-2 rounded-full"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(75, 85, 99)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="https://github.com/Anujkumarsagar/TeraMovies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>


        </motion.section>

        {/* Articles Section */}
        <motion.section
          id="articles"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 section-gradient"
        >
          <h2 className="text-5xl md:text-6xl font-bungee mb-10">Articles</h2>

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
      </div >
    </main >
  );
}
