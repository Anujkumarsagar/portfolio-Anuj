'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Download,
  Redo,
} from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { CarViewer } from '@/components/3d/car-viewer';

export function HeroAnimated() {
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const carContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate title letters
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('span');
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }

    // Animate description
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
        }
      );
    }

    // Animate car container
    if (carContainerRef.current) {
      gsap.fromTo(
        carContainerRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.6,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section className="relative p-6 md:p-10 rounded-3xl overflow-hidden section-gradient min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl -z-10"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left Content */}
        <div>
          {/* Title */}
          <div ref={titleRef} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-mono font-bold">
              <span className="inline-block">Full-stack</span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            My goal is to{' '}
            <span className="font-semibold text-white">
              write maintainable, clean and understandable code
            </span>{' '}
            to make development enjoyable.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-4 mb-12 flex-wrap"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-3 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Projects
            </Link>

            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1l1jppJO8peB3spozXwFwxpzFWG0LnhSO/view?usp=sharing"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-8 py-3 font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download size={20} className="mr-2" />
              Resume
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            {[
              { icon: Github, href: 'https://github.com/Anujkumarsagar' },
              { icon: Linkedin, href: 'https://linkedin.com/in/Anujkumarsagar' },
              { icon: Mail, href: 'mailto:anujkumarsagar62@gmail.com' },
              { icon: Instagram, href: 'https://www.instagram.com/2_._anuj_._2/' },
            ].map((social, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-inset-1.5 blur-sm"></div>
                  <div className="relative bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-all duration-200">
                    <social.icon size={20} className="text-white" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right - 3D Car Viewer */}
        <div
          ref={carContainerRef}
          className="hidden lg:block h-[500px] rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-2xl"
        >
          <CarViewer autoRotate={true} />
        </div>
      </div>

      {/* Mobile Car Viewer - Below Content */}
      <div className="lg:hidden w-full h-96 rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-2xl mt-10">
        <CarViewer autoRotate={true} />
      </div>
    </section>
  );
}
