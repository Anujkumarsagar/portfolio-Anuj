import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import Footer from "@/components/Footer/FooterSec"


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
  description: "A Full Stack Developer with Experience 2 years and worked with many startups , open to opportunity",
  generator: 'NextJS '
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">

      <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>
        {children}
        <Footer />
      </body>



    </html>
  )
}
