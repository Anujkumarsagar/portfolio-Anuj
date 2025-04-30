import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Anuj Kumar | Full-stack Developer",
  description: "Portfolio of Anuj Kumar, a full-stack developer with 5 years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>{children}</body>
    </html>
  )
}


import './globals.css'