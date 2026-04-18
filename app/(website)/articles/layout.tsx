

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
     
      <MainHeader  className=" p-6 md:p-10 " />
      <div className="  container m-auto ">{children}</div>
    </div>
  )
}
