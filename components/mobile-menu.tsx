"use client"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 p-6">
      <div className="flex justify-end mb-10">
        <button onClick={onClose} className="p-2">
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex flex-col space-y-6 text-xl">
        <Link href="#" onClick={onClose} className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="#about" onClick={onClose} className="hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link href="#projects" onClick={onClose} className="hover:text-gray-300 transition-colors">
          Projects
        </Link>
        <Link href="#articles" onClick={onClose} className="hover:text-gray-300 transition-colors">
          Articles
        </Link>
        <Link href="#contacts" onClick={onClose} className="hover:text-gray-300 transition-colors">
          Contacts
        </Link>
      </nav>
    </div>
  )
}
