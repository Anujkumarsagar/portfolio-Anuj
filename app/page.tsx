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
import { Suspense, useEffect, useRef, useState } from "react";
import { ArticlesCard } from "@/components/cards/ArticalsCard";
import ArticlesSlider from "@/components/cards/ArticlesSlider";
import { title } from "process";
import { motion } from "framer-motion";
import Loading from "./loading";
import { sleep } from "./articles/page";

export default function Home() {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showLinks, setShowLinks] = useState<boolean>(false);

  useEffect(()=>{
    sleep(500)
  }, [])

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
   <Suspense fallback={<Loading />}>
     <main className=" text-white min-h-screen">
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
            <Link href={"/"} className="cursor-cell">
              <h2 className="font-mono text-lg border border-white px-3 py-1 rounded-full">
                Anuj.Kumar
              </h2>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link href="#about" className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded">
                  About
                </Link>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link href="#project" className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded">
                  Project
                </Link>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link href="/articles" className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded">
                  Articles
                </Link>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link href="/links" className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded">
                  Links
                </Link>
              </div>
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <Link href="#contacts" className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 rounded">
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
              <div ref={circleRef} className="circle-mobile-nav relative sm:hidden md:hidden">
              </div>
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
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        1. About
                      </span>
                    </Link>
                    <Link
                      href="#projects"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        2. Projects
                      </span>
                    </Link>
                    <Link
                      href="/articles"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        3. Articles
                      </span>
                    </Link>
                    <Link
                      href="#contacts"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        4. Contacts
                      </span>
                    </Link>
                    <Link
                      href="/links"
                      onClick={handleMobileNav}
                      className="relative inline-flex group w-full"
                    >
                      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                      <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                        4. Links
                      </span>
                    </Link>
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
              <div className="mb-8 flex gap-4 relative items-center gap-4">
                <Link
                  href="#projects"
                  className=" cursor-cell items-center bg-white text-black rounded-full px-16 py-6 font-medium text-lg hover:bg-gray-100 transition-colors"
                >
                  Projects
                </Link>
                
                <a target="_blank"
                  download
                  onClick="setTimeout(() => window.open(this.href, '_blank'), 100); return true;" href="https://drive.google.com/file/d/1kAfuAcKr56pYBnMMXgMy2fYCZM-2cIlC/view" download="Anujkumar_Resume_FullStack_2025.pdf">
                  <Download size={30} color="black" className="bg-white rounded-full scale-150  cursor-cell p-2" />
                </a>
                
              </div>
              <span className="absolute top-[45%] right-10 inline-flex item-center justify-center flex-col md:fixed md:bottom-24 md:scale-125 md:left-8 md:top-auto md:right-auto mb-10">
                <Link href="https://github.com/Anujkumarsagar" className="relative inline-flex group mb-4">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <Github className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link href="https://linkedin.com/in/Anujkumarsagar" className="relative inline-flex group mb-4">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <Linkedin className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link href="mailto:anujkumarsagar62@gmail.com" className="relative inline-flex group mb-4">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <Mail className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link href="https://t.me/SoftwareEngineer6" className="relative inline-flex group mb-4">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <Telegram className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
                <Link href="https://www.instagram.com/2_._anuj_._2/" className="relative inline-flex group">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <Instagram className="relative bg-gray-900 p-2 w-10 h-10 rounded-full transition-all duration-200 group-hover:bg-gray-800" />
                </Link>
              </span>
            </div>

          </div>

          <div className="my-4 md:hidden flex items-end justify-between  h-32 relative">
            <h1 className="text-7xl font-bungee">Link</h1>
            <Redo size={100} className="absolute -rotate-45 right-[25%] top-[2%]  bottom-0" />
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
            <div className="lg:grid lg:grid-cols-2 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">About</h2>
                <p className="mb-4">
                  Hello! <span className="font-bold font-bungee">I'm Anuj</span>, I'm a <span className="font-bold italic">full-stack developer</span>.<br />
                  With Expertise <span className="font-medium">Many other fields</span>.
                </p>

                <div className="mt-8 mb-6">
                  <div className="bg-gray-900 rounded-3xl p-4 mb-4">
                    <h4 className="font-medium font-bungee mb-2">Front-end</h4>
                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">TypeScript</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">React</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Redux Toolkit</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">NextJs</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Flask</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Jest</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">GraphQL</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Recoil</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Python</span>
                      </motion.span>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-3xl p-4 mb-4">
                    <h4 className="font-medium font-bungee mb-2">Styles</h4>
                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">CSS</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Tailwind CSS</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">PostCSS</span>
                      </motion.span>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-3xl p-4 mb-4">
                    <h4 className="font-medium font-bungee mb-2">Back-end</h4>
                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Prisma</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">PostgreSQL</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">MySQL</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">MongoDB</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">gRPC</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Redis</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Kafka</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Node</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Nest</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.9 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">TypeORM</span>
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 2.1 }}
                        className="relative inline-flex group"
                      >
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                        <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Microservices</span>
                      </motion.span>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-3xl p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium font-bungee mb-2">DevOps</h4>
                        <div className="flex flex-wrap gap-2">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative inline-flex group"
                          >
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Nginx</span>
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative inline-flex group"
                          >
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Ansible</span>
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative inline-flex group"
                          >
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Docker</span>
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="relative inline-flex group"
                          >
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">(CI/CD)</span>
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="relative inline-flex group"
                          >
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">k8s</span>
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="relative inline-flex group"
                          >
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Bash</span>
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 lg:mt-0"
              >
                <div className="relative w-full md:top-10 aspect-square max-w-[400px] mx-auto">
                  <Image
                    src="../assets/projects/personal.png"
                    alt="Developer photo"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="rounded-3xl object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7322701550118719488" height="718" width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
              </div>
            </motion.div> */}
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
                <p className="text-sm">Nov 2024 - Apr 2025</p>
                <p className="text-xs text-gray-500"> 6 months</p>
              </div>
              <div>
                <h3 className="font-medium">Zeptik</h3>
                <p className="text-sm text-gray-400">Frontend developer | React & Vue</p>
              </div>
              <div>
                <h3 className="font-medium">Visit</h3>
                <a href="https://www.zeptik.com" className="text-sm text-blue-400 gap-3 flex animate-in">Zeptik.com

                  <ArrowRight color="black" className="  bg-white rounded-full" />
                </a>
              </div>

            </div>
          </div>



          <div className="text-right mt-4">
            <p className="text-gray-400">Proffesional Work experience</p>
            <p className="font-medium">6 months</p>
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
          <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">Projects</h2>


          {/* Recipe Sharing App Project */}
          <div className="mb-16 bg-black/15">
            <div className="mb-4">
              <h3 className="font-medium font-bungee underline pb- md:text-lg mb-2">Recipe Sharing App</h3>
              <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">MongoDB</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">TypeScript</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">React Js</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Express</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Redux</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Tailwind Css</span>
                </motion.span>
              </div>

              <p className="text-sm  text-gray-400 mb-2">
                <span className="font-medium text-white hover:border p-2 rounded-full">Receipe Sharing App</span> is a multi-page multi functinal Application where   <span className="font-medium text-white hover:border p-2 rounded-full">Top Notch Recipes</span> can be listed.
              </p>
              <p className="text-sm text-gray-100 mb-4">
                This project contains several key microservices, each contributing to its overall functionality and
                cohesion.
              </p>
            </div>

            <div className="grid grid-row-2 grid-cols-3 gap-4 mb-4">
              <div className="col-span-2  relative">
                <Image
                  src="./assets/projects/recipe.png"
                  alt="Gostat project screenshot"
                  width={400}
                  height={100}
                  loading="lazy"
                  className="rounded-xl object-cover w-full p-2 h-auto"
                />
                <div className="absolute bottom-4 right-4 bg-gray-900 p-2 rounded-full">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <div className="relative row-span-2">
                <Image
                  src="./assets/projects/recipe2.png"
                  alt="Gostat project screenshot"
                  width={600}
                  height={300}
                  loading="lazy"
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>

            </div>

            <div className="flex justify-center">
              <div className="bg-gray-900 p-2 rounded-full">
                <ChevronRight href="https://recipe-sharing-app-6b5v.onrender.com/" className="cursor-pointer w-4 h-4" />
              </div>
              <div className="bg-gray-900 p-2 rounded-full">
                
                <GithubIcon className="cursor-pointer w-4 h-4" href="https://github.com/Anujkumarsagar/Recipe-Sharing-app"/>
              </div>
            </div>
          </div>

          {/* TeraMovies Project */}
          <div className="mb-16">
            <div className="mb-4">
              <h3 className="font-medium font-bungee mb-2 underline">Tera Movies</h3>
              <div className="flex flex-wrap gap-2 text-xs text-white mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">TypeScript</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">NextJs</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Redux Toolkit</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Firebase</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">Postgres</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="relative inline-flex group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                  <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">TMDB API</span>
                </motion.span>
              </div>

              <p className="text-sm text-gray-400 mb-2">
                <span className="font-medium text-white">TeraMovies</span> is an{" "}
                <span className="font-medium text-white">NextJs Web Application</span> designed for Watching Movies in Free of Cost. It
                includes Movies, WebSeries and Short Moveis  that able to save your money to give anyehere .
              </p>
              <p className="text-sm  text-white mb-4">
                The application uses <span className="font-medium text-white">High Qualtiy videos links</span> and
                Sessions could be include if any.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <Image
                  src="../assets/projects/teramovies1.png"
                  alt="Kana Master project screenshot"
                  width={300}
                  loading="lazy"
                  height={300}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="../assets/projects/teramovies2.png"
                  alt="Kana Master project screenshot"
                  width={150}
                  height={150}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <Image
                  src="../assets/projects/teramovies3.png"
                  alt="Kana Master project screenshot"
                  width={150}
                  loading="lazy"
                  height={150}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <Image
                  src="../assets/projects/teramovies4.png"
                  alt="Kana Master project screenshot"
                  width={150}
                  loading="lazy"
                  height={150}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <div className="relative">
                  <Image
                    src="../assets/projects/teramovies5.png"
                    alt="Kana Master project screenshot"
                    width={150}
                    height={150}
                    loading="lazy"
                    className="rounded-xl object-cover w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-900 p-2 rounded-full">
                <a href="https://oneteramovies.netlify.app"><ChevronRight className="w-4 h-4" /></a>
              </div>
              <div className="bg-gray-900 p-2 rounded-full">
                <GithubIcon href="https://github.com/Anujkumarsagar/TeraMovies" className="w-4 h-4" />
              </div>
            </div>
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


          <div className="grid md:grid-cols-2 gap-6">

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
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
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
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
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
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
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
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
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
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
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
      </div>
    </main>
   </Suspense>
  );
}
