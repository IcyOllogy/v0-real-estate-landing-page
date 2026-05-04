'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Palette, Target } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/section-wrapper'

const steps = [
  {
    icon: TrendingUp,
    title: 'Predictive Analysis',
    description: 'Using 2026 absorption rates to time your launch for maximum competition among qualified buyers.',
  },
  {
    icon: Palette,
    title: 'High-Fidelity Staging',
    description: 'Custom interior styling curated specifically for the luxury buyer demographic in your market.',
  },
  {
    icon: Target,
    title: 'Targeted Exposure',
    description: 'Precision digital ad targeting to high-net-worth individuals actively searching for properties like yours.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function MethodSection() {
  return (
    <SectionWrapper id="method" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase text-sm tracking-wide">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            The Three-Step Method
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            A proven system that combines data science with design excellence 
            to position your home for maximum market impact.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-8 text-center relative"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                {index + 1}
              </span>
              
              {/* Icon */}
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="size-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
