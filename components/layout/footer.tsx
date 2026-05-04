import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram } from 'lucide-react'

const sellerResources = [
  { href: '#', label: '2026 Market Report' },
  { href: '#', label: 'Pre-Launch Checklist' },
  { href: '#', label: 'Tax Strategy Guide' },
]

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'Instagram', icon: Instagram },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative size-16 rounded-full overflow-hidden bg-secondary">
                <Image
                  src="/images/julian-headshot.jpg"
                  alt="Julian Vance"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Julian Vance</h3>
                <p className="text-sm text-muted-foreground">License #482910</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic Listing Specialist focusing on luxury condos and suburban family estates. 
              Using data-driven staging and predictive market analysis to maximize your home equity.
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Seller Resources</h4>
            <ul className="space-y-3">
              {sellerResources.map((resource) => (
                <li key={resource.label}>
                  <Link
                    href={resource.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="size-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Contact Julian
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 Julian Vance. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Equal Housing Opportunity</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
