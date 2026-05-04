import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Julian Vance | Strategic Listing Specialist',
  description: 'Maximize your home equity with data-driven staging and elite marketing. 104% average list-to-sale ratio for luxury condos and suburban estates.',
  keywords: ['real estate', 'luxury homes', 'home valuation', 'listing specialist', 'property staging'],
  authors: [{ name: 'Julian Vance' }],
  openGraph: {
    title: 'Your Home Deserves a Better Debut | Julian Vance',
    description: 'Strategic staging and predictive market analysis for luxury home sellers.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julian Vance | Strategic Listing Specialist',
    description: 'Maximize your home equity with data-driven staging and elite marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
