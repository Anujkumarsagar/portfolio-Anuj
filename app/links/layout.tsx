import type React from "react"
import Link from "next/link"

export default function LinkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black  text-white">
      <header className="relative container m-auto mt-10 pl-5  flex justify-between items-center mb-10">
        <Link href={"/"} className="cursor-cell">
          <h2 className="font-mono  text-lg border border-white px-3 py-1 rounded-full">
            Anuj.Kumar
          </h2>
        </Link>
      </header>
      <div className="  w-full m-auto">{children}</div>
    </div>
  )
}
