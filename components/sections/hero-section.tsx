'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface HeroSectionProps {
  onOpenModal: () => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury home exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
          >
            Strategic Listing Specialist
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Your home deserves a better debut.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
          >
            Strategic staging and predictive market analysis to maximize your equity. 
            Let data guide your sale to its highest potential.
          </motion.p>

          {/* Address Input */}
          <motion.div
            variants={itemVariants}
            className="max-w-xl mx-auto"
          >
            <div className="glass-card rounded-xl p-2 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your property address"
                  className="pl-10 h-12 bg-secondary/50 border-0 focus-visible:ring-1"
                />
              </div>
              <Button 
                onClick={onOpenModal} 
                size="lg" 
                className="h-12 px-6 whitespace-nowrap"
              >
                Get My Valuation
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Free, no-obligation market analysis delivered within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
