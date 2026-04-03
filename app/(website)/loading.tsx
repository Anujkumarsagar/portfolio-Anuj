"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
export default function Loading() {
  const tunnelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tunnelRef.current) return

    const rings = tunnelRef.current.querySelectorAll(".tunnel-ring")
    const tl = gsap.timeline({ repeat: -1 })

    rings.forEach((ring, index) => {
      tl.fromTo(
        ring,
        {
          scale: 0,
          opacity: 0,
          z: -1000,
        },
        {
          scale: 2,
          opacity: 1,
          z: 100,
          duration: 2,
          ease: "power2.out",
        },
        index * 0.2,
      ).to(
        ring,
        {
          scale: 3,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        index * 0.2 + 1.5,
      )
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={tunnelRef}
      className="relative w-80 m-auto md:h-screen h-80 flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="tunnel-ring absolute border-4 rounded-full"
          style={{
            width: "50px",
            height: "50px",
            borderColor: `hsl(${i * 36}, 70%, 60%)`,
            boxShadow: `0 0 20px hsl(${i * 36}, 70%, 60%)`,
          }}
        />
      ))}
    </div>
  )
}
