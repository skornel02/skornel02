"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function MainBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wavesRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (wavesRef.current) {
        gsap.to(wavesRef.current, {
          // scale: 1.02,
          x: -10,
          y: 16,
          opacity: 0.6,
          duration: 6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      id="ocean-map-backdrop"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#094d6e] via-[#0b5c82] to-[#083a54]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-25 mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="crispEdges"
      >
        <defs>
          <pattern
            id="bayer-dither-matrix"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            {/* 2x-scaled pixel checkerboard + crosshatch for authentic ordered dithering */}
            <rect x="0" y="0" width="2" height="2" fill="#00141f" />
            <rect x="4" y="0" width="2" height="2" fill="#00141f" opacity="0.6" />
            <rect x="2" y="2" width="2" height="2" fill="#b4f6ed" opacity="0.4" />
            <rect x="6" y="2" width="2" height="2" fill="#00141f" />
            <rect x="0" y="4" width="2" height="2" fill="#00141f" opacity="0.6" />
            <rect x="4" y="4" width="2" height="2" fill="#00141f" />
            <rect x="2" y="6" width="2" height="2" fill="#00141f" />
            <rect x="6" y="6" width="2" height="2" fill="#b4f6ed" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bayer-dither-matrix)" />
      </svg>

     <svg
        ref={wavesRef}
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="crispEdges"
      >
        <defs>
          <pattern
            id="sea-waves-pattern"
            width="160"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 25 Q 40 10, 70 25 T 130 25"
              fill="none"
              stroke="#b4f6ed"
              strokeWidth="3"
              strokeDasharray="3 3 6 3 3 6"
              opacity="0.65"
            />
            <path
              d="M50 70 Q 80 55, 110 70 T 170 70"
              fill="none"
              stroke="#e0fcff"
              strokeWidth="2"
              strokeDasharray="2 4 2 2 6 4"
              opacity="0.5"
            />
            <rect x="24" y="21" width="3" height="3" fill="#ffffff" opacity="0.6" />
            <rect x="94" y="66" width="3" height="3" fill="#ffffff" opacity="0.6" />
            <rect x="136" y="24" width="2" height="2" fill="#b4f6ed" opacity="0.4" />
            <rect x="44" y="69" width="2" height="2" fill="#e0fcff" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sea-waves-pattern)" />
      </svg>

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #042436 2px, #042436 4px)",
        }}
      />
    </div>
  )
}
