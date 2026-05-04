'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { StatsSection } from '@/components/sections/stats-section'
import { PropertyGallery } from '@/components/sections/property-gallery'
import { CtaSection } from '@/components/sections/cta-section'
import { MethodSection } from '@/components/sections/method-section'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { FaqSection } from '@/components/sections/faq-section'
import { ValuationModal } from '@/components/ui/valuation-modal'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header onOpenModal={openModal} />
      
      <main>
        <HeroSection onOpenModal={openModal} />
        
        <StatsSection />
        
        <PropertyGallery />
        
        <CtaSection
          headline="Ready to maximize your home's value?"
          buttonText="Get My Free Valuation"
          onOpenModal={openModal}
        />
        
        <MethodSection />
        
        <TestimonialSection />
        
        <CtaSection
          headline="Join 500+ sellers who chose strategic selling."
          buttonText="Start My Valuation"
          onOpenModal={openModal}
          variant="highlight"
        />
        
        <FaqSection />
        
        <CtaSection
          headline="Your home's best chapter starts here."
          buttonText="Get My Valuation Today"
          onOpenModal={openModal}
        />
      </main>
      
      <Footer />
      
      <ValuationModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTop />
    </>
  )
}
