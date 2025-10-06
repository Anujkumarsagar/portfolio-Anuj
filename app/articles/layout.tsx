

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import MainHeader from "@/components/header-main"



export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen  max-w-7xl mx-auto bg-black  text-white main-section relative rounded-3xl overflow-hidden section-gradient">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800/20 blur-3xl -z-10"></div>
      <MainHeader  className=" p-6 md:p-10 " />
      <div className="  container m-auto ">{children}</div>
    </div>
  )
}
