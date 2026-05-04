'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'

const properties = [
  {
    id: 1,
    name: 'Skyline Penthouse',
    result: 'Sold $150k Over Asking',
    image: '/images/property-1.jpg',
  },
  {
    id: 2,
    name: 'Oak Ridge Estate',
    result: 'Sold in 48 Hours',
    image: '/images/property-2.jpg',
  },
  {
    id: 3,
    name: 'The Summit Residence',
    result: 'Sold $200k Over Asking',
    image: '/images/property-3.jpg',
  },
  {
    id: 4,
    name: 'Harbor View Manor',
    result: 'Sold in 72 Hours',
    image: '/images/property-4.jpg',
  },
]

const trustLogos = ['Forbes', 'Wall Street Journal', 'Architectural Digest']

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function PropertyGallery() {
  return (
    <SectionWrapper className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase text-sm tracking-wide">
            Recent Wins
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Results That Speak for Themselves
          </h2>
        </div>

        {/* Property Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-lg font-semibold text-foreground">
                    {property.name}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {property.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg md:text-xl font-semibold text-muted-foreground/50"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
