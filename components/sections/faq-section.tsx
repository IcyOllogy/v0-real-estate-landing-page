'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionWrapper } from '@/components/shared/section-wrapper'

const faqs = [
  {
    question: 'How do you ensure my privacy during the selling process?',
    answer: 'We utilize elite vetting protocols where only pre-qualified, high-net-worth buyers gain access to private showings. Your property is never listed on public sites without your explicit consent, and all potential buyers sign NDAs before viewing.',
  },
  {
    question: 'Why not use a discount broker to save on commission?',
    answer: 'Our 104% average list-to-price ratio means our strategic approach pays for itself and then some. Discount brokers often leave significant equity on the table. Our clients consistently net more after our commission than they would with a discount service.',
  },
  {
    question: 'Is the current market right for selling my home?',
    answer: "We don't guess - we use data. Our 2026 predictive models analyze absorption rates, buyer demand, and seasonal patterns to identify the exact window for your property's peak value. We'll provide you with a detailed market timing analysis specific to your neighborhood.",
  },
  {
    question: 'What if my home needs work before selling?',
    answer: 'Our concierge staging service handles everything from minor repairs to full interior styling. We coordinate trusted contractors, designers, and stagers so you never have to lift a finger. The cost is typically recovered many times over in the final sale price.',
  },
]

export function FaqSection() {
  return (
    <SectionWrapper id="faq" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase text-sm tracking-wide">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
