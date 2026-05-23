
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
import { navItems } from '@/lib/data';
// import { sleep } from '@/app/[website]/articles/page';


export default function MainHeader({ className }: {
    className: string
}) {
    const { navigateTo, navigateBack, prefetchRoute } = useRouterHook()
    const circleRef = useRef<HTMLDivElement | null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [showLinks, setShowLinks] = useState<boolean>(false);
    const [currentLang, setCurrentLang] = useState<string>('en');
    
    useEffect(() => {
        // Parse the googtrans cookie to find the active language on load
        const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]{2,5})/);
        if (match && match[1]) {
            setCurrentLang(match[1]);
        } else {
            setCurrentLang('en');
        }

        if (document.getElementById('google-translate-script')) return;

        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        // Hide the default Google Translate UI frames and tooltips to keep your app looking clean
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame { display: none !important; }
            body { top: 0 !important; }
            .skiptranslate { display: none !important; }
        `;
        document.head.appendChild(style);

        // @ts-ignore
        window.googleTranslateElementInit = () => {
            // @ts-ignore
            new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
        };
    }, []);

    const changeLanguage = (lang: string) => {
        // Using 'de' here for German. If 'Ge' stands for Georgian, change 'de' to 'ka' below.
        const targetLang = lang === 'en' ? '' : `/en/${lang}`;
        document.cookie = `googtrans=${targetLang}; path=/`;
        document.cookie = `googtrans=${targetLang}; domain=${window.location.hostname}; path=/`;
        window.location.reload();
    };
    

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
        <header className={`relative  ${className} z-10 flex justify-between items-center mb-10`}>
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            <Link href="/" className="cursor-cell block" aria-label="Home">
                <h2 className=" h-fit md:scale-110  font-bungee text-lg border flex border-white px-3 py-1 rounded-full">
                    <Image src="/favicon.ico" width={36} height={36} alt="Anuj Kumar Portfolio Logo" />
                    <div className="h-fit pt-2">
                        NUJ
                    </div>
                </h2>
            </Link>
            <nav className="hidden md:flex space-x-6">

                {
                    navItems.map((item) => (
                        <Link key={item.id} href={item.link} className="btn-primary px-6 py-2.5">
                            <span className="text-sm font-bold tracking-wide">{item.label}</span>
                        </Link>
                    ))
                }
            </nav>
            <div className="z-20 flex items-center space-x-2">
                <button
                    onClick={() => changeLanguage("en")}
                    className={`z-20 border rounded-full px-2 py-1 text-xs transition-colors ${currentLang === 'en' ? 'bg-white text-black border-white' : 'border-gray-700 hover:bg-white hover:text-black'}`}
                >
                    En
                </button>
                <button 
                    onClick={() => changeLanguage("de")}
                    className={`hidden z-20 md:block border rounded-full px-2 py-1 text-xs transition-colors ${currentLang === 'de' ? 'bg-white text-black border-white' : 'border-gray-700 hover:bg-white hover:text-black'}`}
                >
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
                    className="circle-mobile-nav  relative sm:hidden md:hidden"
                ></div>
                {showLinks && (
                    <div className="fixed font-bungee fade-in inset-0 bg-[#010101] z-30 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out">
                        <button
                            onClick={handleMobileNav}
                            className="absolute bg-gray-900 rounded-full p-2 top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <nav className="bg-gray-900 p-24 rounded-3xl flex flex-col space-y-4 transition-all duration-500 ease-in-out transform">
                            {/* <Link
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
                            </div> */}
                            {
                                navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={handleMobileNav}
                                        className="relative inline-flex group w-full"
                                    >
                                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                                        <span className="relative text-white hover:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg px-4 py-2 bg-gray-900 rounded-xl w-full text-center">
                                            {item.label}
                                        </span>
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>
                )}

            </div>
        </header>
    )
}