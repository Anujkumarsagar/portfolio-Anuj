import type React from "react"
import Link from "next/link"
import Image from "next/image"
import MainHeader from "@/components/header-main"



export default function LinkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto overflow-hidden bg-black relative text-white">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>

      <MainHeader className="p-6 md:p-10 " />

      <div className="  w-full m-auto">{children}</div> 
    </div>
  )
}
