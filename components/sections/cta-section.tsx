'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface CtaSectionProps {
  headline: string
  buttonText: string
  onOpenModal: () => void
  variant?: 'default' | 'highlight'
}

export function CtaSection({ 
  headline, 
  buttonText, 
  onOpenModal,
  variant = 'default' 
}: CtaSectionProps) {
  return (
    <section className={`py-16 ${variant === 'highlight' ? 'bg-primary/10' : 'bg-card/30'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
            {headline}
          </h2>
          <Button onClick={onOpenModal} size="lg" className="h-12 px-8">
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
