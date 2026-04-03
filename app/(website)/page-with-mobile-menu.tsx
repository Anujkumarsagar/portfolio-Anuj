"use client"

import { useState } from "react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="bg-black text-white min-h-screen">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="max-w-7xl mx-auto">
        {/* Header with mobile menu button */}
        <header className="flex justify-between items-center p-6">
          <div>
            <h2 className="font-mono">
              Anuj
              <br />
              Kumar
            </h2>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/articles" className="hover:text-gray-300 transition-colors">
              Articles
            </Link>
            <Link href="#contacts" className="hover:text-gray-300 transition-colors">
              Contacts
            </Link>
            <Link href="/links" className="hover:text-gray-300 transition-colors">
              Links
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <span>En</span>
            <button className="hidden md:block border border-gray-700 rounded-full px-2 py-1 text-xs">Ge</button>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
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
          </div>
        </header>

      </div>
    </main>
  )
}
