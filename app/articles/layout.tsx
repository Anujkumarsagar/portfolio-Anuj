

import type React from "react"
import Link from "next/link"
import Image from "next/image"


export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-black  text-white">
      <header className="relative container m-auto mt-10 ml-5  flex justify-between items-center mb-10">
        <Link href={"/"} className="cursor-cell">
          <h2 className=" h-fit md:scale-110  font-bungee text-lg border flex border-white px-3 py-1 rounded-full">
            <Image src={"favicon.png"} width={36} height={36} alt="Logo" />
            <div className="h-fit pt-2">
              NUJ
            </div>
          </h2>
        </Link>
      </header>
      <div className="  container m-auto bg-red-200">{children}</div>
    </div>
  )
}
