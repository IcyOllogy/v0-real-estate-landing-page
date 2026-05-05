'use client'

import { CheckCircle2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
  onGetValuation: () => void
}

const reasons = [
  {
    title: 'Know Your True Equity',
    description: 'Understand exactly how much your home is worth in today\'s market, not based on outdated estimates.',
  },
  {
    title: 'Make Informed Decisions',
    description: 'Whether selling, refinancing, or planning your future, accurate valuation data empowers better choices.',
  },
  {
    title: 'Maximize Your Sale Price',
    description: 'Properties with professional valuations sell for 4-8% more on average than those without.',
  },
  {
    title: 'Identify Strategic Improvements',
    description: 'Discover which upgrades will deliver the highest ROI before listing your home.',
  },
  {
    title: 'Stay Ahead of Market Trends',
    description: 'Get insights into local market conditions and timing to optimize your selling strategy.',
  },
]

export function LearnMoreModal({ isOpen, onClose, onGetValuation }: LearnMoreModalProps) {
  const handleGetValuation = () => {
    onClose()
    onGetValuation()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg glass-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Why Get a Home Valuation?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            A professional valuation is the first step to unlocking your home&apos;s full potential.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground text-sm">
                  {reason.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button onClick={handleGetValuation} className="flex-1 h-11">
            Get My Free Valuation
          </Button>
          <Button onClick={onClose} variant="outline" className="flex-1 h-11">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
