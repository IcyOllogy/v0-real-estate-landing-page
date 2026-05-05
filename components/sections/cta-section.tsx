'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface CtaSectionProps {
  headline: string
  buttonText: string
  onOpenModal: () => void
  variant?: 'default' | 'highlight'
  showLearnMore?: boolean
  onLearnMore?: () => void
}

export function CtaSection({ 
  headline, 
  buttonText, 
  onOpenModal,
  variant = 'default',
  showLearnMore = false,
  onLearnMore,
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onOpenModal} size="lg" className="h-12 px-8">
              {buttonText}
            </Button>
            {showLearnMore && onLearnMore && (
              <Button onClick={onLearnMore} variant="outline" size="lg" className="h-12 px-8">
                Learn More
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
