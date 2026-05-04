'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/section-wrapper'

const testimonial = {
  quote: "Julian's strategic approach transformed our selling experience. We received multiple offers above asking within the first week, and the entire process was seamless from start to finish.",
  author: 'Sarah & Michael Thompson',
  property: 'Sold: Lakeview Penthouse',
}

export function TestimonialSection() {
  return (
    <SectionWrapper className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative">
            {/* Quote Icon */}
            <Quote className="size-12 text-primary/20 mx-auto mb-6" />
            
            {/* Quote Text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-pretty">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            
            {/* Author */}
            <div>
              <p className="font-semibold text-foreground">
                {testimonial.author}
              </p>
              <p className="text-sm text-primary">
                {testimonial.property}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
