import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import Footer from "@/components/Footer/FooterSec"
import { Toaster } from "@/components/ui/toaster"
import LoaderOfLink from '@/components/LoaderOfLink'
import LenisProvider from '@/components/lenis-provider'


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
  generator: 'Next.js',
  applicationName: 'Anuj Kumar Portfolio',
  keywords: ['Anuj Kumar', 'Full-stack Developer', 'React Developer', 'Next.js', 'Portfolio', 'Web Developer', 'Software Engineer'],
  authors: [{ name: 'Anuj Kumar', url: 'https://github.com/Anujkumarsagar' }],
  creator: 'Anuj Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cvanuj.vercel.app/', 
    title: 'Anuj Kumar | Full-stack Developer',
    description: 'A Full Stack Developer with Experience 2 years and worked with many startups , open to opportunity',
    siteName: 'Anuj Kumar Portfolio',
    images: [
      {
        url: '/assets/projects/personal.png',
        width: 1200,
        height: 630,
        alt: 'Anuj Kumar - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuj Kumar | Full-stack Developer',
    description: 'A Full Stack Developer with Experience 2 years and worked with many startups , open to opportunity',
    images: ['/assets/projects/personal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/favicon.ico',
      },
    ],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pwxbZpcd3lbu3KgM9OSVCHo_ozdQKW0IoJHl_XIAosY" />
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans w-full `}>
        <style dangerouslySetInnerHTML={{
          __html: `
          .btn-primary {
            display: flex;
            place-items: center;
            justify-content: center;
            border-radius: 0.75em;
            text-decoration: none;
            transition: all 0.25s ease-in-out;
            box-shadow: inset 0 0 0 1px black, 0 0 0 2px #3a3d40,
              0 0 0 4px rgba(0, 0, 0, 0.25), 0 11px 27px -5px rgba(0, 0, 0, 0.53),
              0 25px 25px -4px rgba(0, 0, 0, 0.35);
            background-image: radial-gradient(227.71% 180.23% at 90.64% 130.38%, rgb(17, 20, 23) 0%, rgb(55, 59, 63) 100%),
              radial-gradient(207.84% 121.69% at -5.69% 111.39%, rgb(17, 20, 23) 0%, rgb(55, 59, 63) 100%),
              linear-gradient(206deg, rgba(123, 134, 151, 0.2) 0%, rgba(25, 27, 30, 0.2) 100%),
              linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
          }
          .btn-primary span {
            background-image: linear-gradient(69deg, #d1d1d1 0%, #828282 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 400;
            text-shadow: 0 2px 1px rgba(0, 0, 0, 0.125);
            transition: all 0.25s ease-in-out;
          }
          .btn-primary:active {
            transform: translateY(2px);
            box-shadow: inset 0 0 0 1px black, 0 0 0 2px #3a3d40,
              0 0 0 4px rgba(0, 0, 0, 0.25), 0 4px 12px -5px rgba(0, 0, 0, 0.53),
              0 6px 6px -4px rgba(0, 0, 0, 0.35);
          }
          .btn-primary:active span, .btn-primary:hover span {
            background-image: linear-gradient(69deg, #dbd56e 0%, #edeab5 100%);
          }
        `}} />
        <LenisProvider>
          <LoaderOfLink footer={<Footer />} toaster={<Toaster />}>
            {children}
          </LoaderOfLink>
        </LenisProvider>
      </body>



    </html>
  )
}
