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
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ArticlesCard } from "@/components/cards/ArticalsCard";
import ArticlesSlider from "@/components/cards/ArticlesSlider";
import { title } from "process";

export default function Home() {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showLinks, setShowLinks] = useState<boolean>(false);

  function handleMobileNav() {
    if (!circleRef.current) return;

    setIsAnimating((prev) => {
      const newState = !prev;
      circleRef.current?.classList.add("fixed");
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
    <main className=" text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Section */}
        <section className="main-section relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

          <header className="relative flex justify-between items-center mb-10">
            <div>
              <h2 className="font-mono text-lg border border-white px-3 py-1 rounded-full">
                Anuj.Kumar
              </h2>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-gray-300 transition-colors">
                Projects
              </Link>
              <Link href="#articles" className="hover:text-gray-300 transition-colors">
                Articles
              </Link>
              <Link href="#contacts" className="hover:text-gray-300 transition-colors">
                Contacts
              </Link>
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
              <div ref={circleRef} className="circle-mobile-nav sm:hidden md:hidden">
                {showLinks && (
                  <div className="flex items-center justify-center h-full w-full bg-black">
                    <nav className="flex flex-col items-center">
                      <Link href="#about" className="text-white mb-2">About</Link>
                      <Link href="#projects" className="text-white mb-2">Projects</Link>
                      <Link href="#articles" className="text-white mb-2">Articles</Link>
                      <Link href="#contacts" className="text-white">Contacts</Link>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Hero  */}
          <div className=" hero bg-black lg:grid lg:grid-cols-2 lg:gap-10">
            <div className="">
              <h1 className="text-5xl md:text-6xl font-mono mb-9">
                <p>Full-stack</p>
                <p>Developer</p>
              </h1>

              <p className="text-gray-500 text-lg mb-6">
                My goal is to{" "}
                <span className="font-medium text-gray-100 italic">
                  write maintainable, clean and understandable code
                </span>{" "}
                to process development was enjoyable.
              </p>
              <div className="mb-8 flex">
                <Link
                  href="#projects"
                  className="inline-flex items-center bg-white text-black rounded-full px-16 py-6 font-medium text-lg"
                >
                  Projects
                </Link>
                <Download size={36} color="#0000" className="bg-white" />
              </div>
              <div className="flex space-x-4 mb-10">
                <Link href="https://github.com/Anujkumarsagar" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com/in/Anujkumarsagar" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="mailto:anujkumarsagar62@gmail.com" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
                <Link href="https://t.me/SoftwareEngineer6" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Telegram className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/2_._anuj_._2/" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>


              </div>
            </div>

          </div>
          <Image
            src="../assets/png/image.png"
            alt="Developer photo"
            width={800}
            height={800}
            className="absolute md:absolute top-20 left-30 "
          />
          <Image
            src="./assets/png/14.png"
            alt="Developer photo"
            width={800}
            height={800}
            className="rounded-3xl  z-0 filter-blur-xl md:absolute top-20   animate-spin right-0 m-auto "
          />
        </section>

        {/* Articles Slider Section */}
        <section className="p-6 md:p-10 section-gradient">
          <ArticlesSlider />
        </section>

        {/* About Me Section */}
        <section id="about" className="p-6 md:p-10 section-gradient">
          {/* <h3 className="text-gray-400 mb-4">... /About me ...</h3> */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
            <h2 className="text-5xl md:text-6xl font-mono mb-10 text-right">About</h2>
              <p className="mb-4">
                Hello! <span className="font-bold italic">I'm Anuj</span>, I'm a <span className="font-bold italic">full-stack developer</span>.<br />
                With Expertise <span className="font-medium">Many other fields</span>.
              </p>

              <div className="mt-8 mb-6">
                <div className="bg-gray-900 rounded-3xl p-4 mb-4">
                  <h4 className="font-medium mb-2">Front-end</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span>TypeScript</span> / <span>React</span> /{" "}
                    <span>Redux Toolkit</span> / <span>NextJs</span> / <span>Flask</span> / <span>Jest</span> /{" "}
                    <span>GraphQL</span> / <span>Recoil</span> / <span>Python</span>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-4 mb-4">
                  <h4 className="font-medium mb-2">Styles</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span>CSS</span> / <span>Tailwind CSS</span> / <span>PostCSS</span>
                  </div>
                  {/* <div className="flex items-center justify-end mt-2">
                    <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
                    <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                  </div> */}
                </div>

                <div className="bg-gray-900 rounded-3xl p-4 mb-4">
                  <h4 className="font-medium mb-2">Back-end</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span>Prisma</span> / <span>PostgreSQL</span> /{" "}
                    <span>MySQL</span> / <span>MongoDB</span> / <span>gRPC</span> / <span>Redis</span> /{" "}
                    <span>Kafka</span> / <span>Node</span> / <span>Nest</span> / <span>TypeORM</span> /{" "}
                    <span>Microservices</span>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium mb-2">DevOps</h4>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                        <span>Nginx</span> / <span>Ansible</span> / <span>Docker</span> / <span>(CI/CD)</span> /{" "}
                        <span>k8s</span> / <span>Bash</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Some of my favorite technologies, topics, or tools that I worked with
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="relative w-full md:top-10 aspect-square max-w-[400px] mx-auto">
                <Image
                    src="../assets/projects/personal.png"
                  alt="Developer photo"
                  width={400}
                  height={400}
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="p-6 md:p-10 section-gradient">
          <h2 className="text-5xl md:text-6xl font-mono mb-10">Work</h2>

          <div className="border-y border-gray-800">
            <div className="py-4 grid grid-cols-[1fr_1fr_1fr] gap-4">
              <div>
                <p className="text-sm">2024 - present</p>
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
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-6 md:p-10 section-gradient">
          <h2 className="text-5xl md:text-6xl font-mono mb-10 text-right">Projects</h2>


          {/* Recipe Sharing App Project */}
          <div className="mb-16 bg-black/15">
            <div className="mb-4">
              <h3 className="font-medium underline pb- md:text-lg mb-2">Recipe Sharing App</h3>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                <span className="bg-gray-900 px-2 py-1 rounded-full">MongoDB</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">TypeScript</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">React Js</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">Express</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">Redux</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">Tailwind Css</span>
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
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>

            </div>

            <div className="flex justify-center">
              <div className="bg-gray-900 p-2 rounded-full">
                <ChevronRight href="https://recipe-sharing-app-6b5v.onrender.com/" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* TeraMovies Project */}
          <div className="mb-16">
            <div className="mb-4">
              <h3 className="font-medium mb-2 underline">Tera Movies</h3>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-4">
                <span className="bg-gray-900 px-2 py-1 rounded-full">TypeScript</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">NextJs</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">Redux Toolkit</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">Firebase </span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">Postgres</span>
                <span className="bg-gray-900 px-2 py-1 rounded-full">TMDB API</span>
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
                  height={150}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <Image
                  src="../assets/projects/teramovies4.png"
                  alt="Kana Master project screenshot"
                  width={150}
                  height={150}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <div className="relative">
                  <Image
                    src="../assets/projects/teramovies5.png"
                    alt="Kana Master project screenshot"
                    width={150}
                    height={150}
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
            </div>
          </div>


        </section>

        {/* Articles Section */}
        <section id="articles" className="p-6 md:p-10 section-gradient">
          <h2 className="text-5xl md:text-6xl font-mono mb-10">Articles</h2>


          <div className="grid md:grid-cols-2 gap-6">

            <ArticlesSlider />

          </div>

        </section>

        {/* Contacts Section */}
        <section id="contacts" className="p-6 md:p-10 section-gradient">
          <h2 className="text-5xl md:text-6xl font-mono mb-10 text-right">Contact</h2>

          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-mono mb-4">
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
                <Link href="https://github.com/Anujkumarsagar" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com/in/Anujkumarsagar" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="mailto:anujkumarsagar62@gmail.com" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
                <Link href="https://t.me/SoftwareEngineer6" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Telegram className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/2_._anuj_._2/" className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <div className="flex justify-end mb-6">
                <nav className="flex space-x-6">
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Main
                  </Link>
                  <Link href="#about" className="hover:text-gray-300 transition-colors">
                    About
                  </Link>
                  <Link href="#projects" className="hover:text-gray-300 transition-colors">
                    Projects
                  </Link>
                  <Link href="#articles" className="hover:text-gray-300 transition-colors">
                    Articles
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
        </section>
      </div>
    </main>
  );
}
