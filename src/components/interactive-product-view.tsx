"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function InteractiveProductView() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -8
    const rotateYValue = ((x - centerX) / centerX) * 8

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <section className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente a interface intuitiva</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma projetada para simplificar seu fluxo de trabalho com recursos poderosos e fáceis de usar.
          </p>
        </motion.div>

        <div className="relative py-12 lg:py-24">
          {/* Central Product Card with 3D Tilt Effect */}
          <motion.div
            ref={cardRef}
            className="relative w-full max-w-3xl mx-auto z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
              transition: "transform 0.3s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="px-4 py-2.5 bg-gray-800 text-white flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs opacity-70 flex-1 text-center">BioLink</div>
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/placeholder.svg?height=800&width=1280"
                  alt="Dashboard da plataforma"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Reflection effect */}
            <div
              className="absolute w-full h-20 bottom-0 left-0 transform translate-y-full"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                filter: "blur(10px)",
                opacity: 0.5,
                transformOrigin: "top",
                transform: "scaleY(-1)",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
