'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'

const stats = [
  {
    value: '104%',
    label: 'Average List-to-Sale Ratio',
    description: 'Our clients sell above asking price',
  },
  {
    value: '12',
    label: 'Median Days on Market',
    description: 'Fast closings, less stress',
  },
  {
    value: '$450M+',
    label: 'Lifetime Career Sales',
    description: 'Proven track record of success',
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

export function StatsSection() {
  return (
    <SectionWrapper id="results" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card rounded-xl p-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
