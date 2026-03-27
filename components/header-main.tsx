
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
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
import Image from 'next/image';
import Link from 'next/link';
import useRouterHook from '@/hooks/use-router';
// import { sleep } from '@/app/[website]/articles/page';


export default function MainHeader({className}:{
    className:string
}) {
    const { navigateTo, navigateBack, prefetchRoute } = useRouterHook()
    const circleRef = useRef<HTMLDivElement | null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [showLinks, setShowLinks] = useState<boolean>(false);

    // useEffect(() => {
    //     sleep(500);
    // }, []);

    function handleMobileNav() {
        if (!circleRef.current) return;

        setIsAnimating((prev) => {
            const newState = !prev;
            
            if (newState) {
                // Opening animation
                circleRef.current?.classList.remove("circle-animate-closing");
                circleRef.current?.classList.add("circle-animate");
                setTimeout(() => {
                    setShowLinks(true);
                }, 1000);
            } else {
                // Closing animation
                circleRef.current?.classList.remove("circle-animate");
                circleRef.current?.classList.add("circle-animate-closing");
                setShowLinks(false);
            }

            return newState;
        });
    }
    return (
        <header className={`relative  ${className}  flex justify-between items-center mb-10`}>
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
                                        navigateTo("/articles")
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
    )
}
