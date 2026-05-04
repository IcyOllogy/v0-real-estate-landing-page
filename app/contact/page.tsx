'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ValuationModal } from '@/components/ui/valuation-modal'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'julian@julianvance.com', href: 'mailto:julian@julianvance.com' },
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Office', value: 'Beverly Hills, CA', href: '#' },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-card">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <Link
              href="/"
              className="text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
            >
              Julian Vance
            </Link>
            <Button onClick={() => setIsModalOpen(true)} size="sm">
              Get Valuation
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-5xl mx-auto"
            >
              {/* Page Header */}
              <motion.div variants={itemVariants} className="text-center mb-12">
                <p className="text-primary font-medium mb-2 uppercase text-sm tracking-wide">
                  Get in Touch
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  Let&apos;s Start a Conversation
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Whether you&apos;re ready to sell or just exploring your options, 
                  I&apos;m here to provide expert guidance every step of the way.
                </p>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div variants={itemVariants}>
                  <div className="glass-card rounded-2xl p-8">
                    <h2 className="text-xl font-semibold text-foreground mb-6">
                      Send a Message
                    </h2>
                    <form className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="John"
                            className="bg-secondary/50"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Smith"
                            className="bg-secondary/50"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone (Optional)
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="bg-secondary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your property or ask any questions..."
                          rows={5}
                          className="bg-secondary/50 resize-none"
                        />
                      </div>
                      <Button type="button" className="w-full h-12">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants} className="space-y-8">
                  {/* Profile Card */}
                  <div className="glass-card rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative size-20 rounded-full overflow-hidden bg-secondary">
                        <Image
                          src="/images/julian-headshot.jpg"
                          alt="Julian Vance"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          Julian Vance
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Strategic Listing Specialist
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          License #482910
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      With over 15 years of experience in luxury real estate, 
                      I specialize in helping homeowners maximize their equity through 
                      data-driven staging and strategic marketing.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-lg font-semibold text-foreground mb-6">
                      Contact Information
                    </h3>
                    <ul className="space-y-4">
                      {contactInfo.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                          >
                            <div className="size-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                              <item.icon className="size-5" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">
                                {item.label}
                              </p>
                              <p className="text-foreground">
                                {item.value}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Follow Me
                    </h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="size-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="size-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Julian Vance. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <ValuationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTop />
    </>
  )
}
