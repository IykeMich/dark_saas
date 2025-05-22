'use client'
import { useState } from 'react'
import Image from 'next/image'
import revealImage from '@/assets/images/reveal.jpg'

type MaskPos = { x: number; y: number }

const HeroReveal: React.FC = () => {
  const [maskPos, setMaskPos] = useState<MaskPos>({ x: -200, y: -200 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    setMaskPos({ x: e.clientX - left, y: e.clientY - top })
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMaskPos({ x: -200, y: -200 })}
    >
      {/* 1) Full-bright hero */}
      <Image
        src={revealImage}
        alt="Hero (color)"
        fill
        className="object-cover"
        priority
      />

      {/* 2) Dark overlay with circular “hole” */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',             // dark-blue/black dimming
          backgroundBlendMode: 'multiply',
          WebkitMaskImage: `radial-gradient(circle 150px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, black 100%)`,
          maskImage:         `radial-gradient(circle 150px at ${maskPos.x}px ${maskPos.y}px, transparent 0%, black 100%)`,
          // add a glow around the reveal circle:
          boxShadow: `0 0 0 10000px rgba(0,0,0,0.8), 0 0 20px 10px rgba(167,139,250,0.6)`,
        }}
      />
    </div>
  )
}

export default HeroReveal
