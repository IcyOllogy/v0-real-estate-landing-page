'use client'

import { motion } from 'framer-motion'

interface OrbProps {
  className: string
  duration: number
  delay?: number
}

function Orb({ className, duration, delay = 0 }: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-50 ${className}`}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -40, 20, -30, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  )
}

export function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Electric Blue orb - top right */}
      <Orb
        className="w-[500px] h-[500px] bg-primary -top-48 -right-24"
        duration={20}
        delay={0}
      />
      
      {/* Secondary blue orb - bottom left */}
      <Orb
        className="w-[400px] h-[400px] bg-blue-600 -bottom-32 -left-32"
        duration={25}
        delay={2}
      />
      
      {/* Subtle accent orb - center */}
      <Orb
        className="w-[300px] h-[300px] bg-primary/50 top-1/3 left-1/4"
        duration={18}
        delay={4}
      />
      
      {/* Small accent orb - top left */}
      <Orb
        className="w-[200px] h-[200px] bg-blue-400 top-20 left-10"
        duration={22}
        delay={1}
      />
      
      {/* Purple accent orb - bottom right for depth */}
      <Orb
        className="w-[350px] h-[350px] bg-violet-600/40 bottom-20 right-1/4"
        duration={28}
        delay={3}
      />
    </div>
  )
}
