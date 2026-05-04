'use client'

import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ValuationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ValuationModal({ isOpen, onClose }: ValuationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">
            Get Your Free Home Valuation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your property address and our team will prepare a comprehensive 
            market analysis within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter your property address"
              className="pl-10 h-12 bg-secondary/50"
            />
          </div>
          <Button className="w-full h-12" size="lg">
            Request Valuation
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Your information is kept confidential and never shared.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
