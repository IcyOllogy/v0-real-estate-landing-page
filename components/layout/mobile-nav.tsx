'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  onOpenModal: () => void
  navLinks: NavLink[]
}

export function MobileNav({ isOpen, onClose, onOpenModal, navLinks }: MobileNavProps) {
  const handleLinkClick = () => {
    onClose()
  }

  const handleCtaClick = () => {
    onClose()
    onOpenModal()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="glass-card w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-foreground">Julian Vance</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border"
            >
              {link.label}
            </Link>
          ))}
          <Button onClick={handleCtaClick} className="mt-4 w-full">
            Get Valuation
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
