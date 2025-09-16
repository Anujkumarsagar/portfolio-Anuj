"use client"


import { motion } from "framer-motion";

import { Github, Instagram, Linkedin, Mail, TextIcon as Telegram } from "lucide-react";
import Link from "next/link";
import ThreeDContact from "../cards/3DContact";

export default function Footer(){
    return  <div className="max-w-7xl mx-auto">
    <motion.section
          id="contacts"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 section-gradient"
        >
          <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">Contact</h2>
          <ThreeDContact />

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
              <div className="  mb-6">
                <nav className="  flex-wrap flex gap-2 font-bungee scale-90 md:scale-105 text-stone-400">
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Main
                  </Link>
                  <Link href="#about" className=" hover:text-gray-300 transition-colors">
                    About
                  </Link>
                  <Link href="#projects" className="hover:text-gray-300 transition-colors">
                    Projects
                  </Link>
                  <Link href="/articles" className="hover:text-gray-300 transition-colors">
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
        </motion.section>
    </div>
}