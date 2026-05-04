# Julian Vance Landing Page - Implementation Kickstart

## Project Overview

**Persona:** Julian Vance, Strategic Listing Specialist  
**Focus:** Luxury Condos and Suburban Family Estates  
**Goal:** Single CTA - Home Valuation for prospective sellers  
**Type:** Frontend prototype (no backend)

---

## Design Token System

### Color Palette (Dark Mode)

```css
/* Primary Colors */
--background: 222 47% 6%;        /* Deep slate background #0a0e14 */
--foreground: 210 40% 98%;       /* Off-white text #f8fafc */

/* Card & Surface Colors */
--card: 222 47% 8%;              /* Slightly lighter slate #0f1419 */
--card-foreground: 210 40% 98%;
--popover: 222 47% 8%;
--popover-foreground: 210 40% 98%;

/* Primary Action (Electric Blue) */
--primary: 210 100% 50%;         /* Electric Blue #0066FF */
--primary-foreground: 210 40% 98%;

/* Secondary (Muted Slate) */
--secondary: 217 33% 17%;        /* Muted slate #1e293b */
--secondary-foreground: 210 40% 98%;

/* Accent (Subtle Blue Tint) */
--accent: 217 33% 17%;
--accent-foreground: 210 40% 98%;

/* Muted Elements */
--muted: 217 33% 17%;
--muted-foreground: 215 20% 65%; /* Slate-400 #94a3b8 */

/* Borders & Rings */
--border: 217 33% 20%;           /* Subtle border #2d3748 */
--input: 217 33% 20%;
--ring: 210 100% 50%;            /* Electric Blue focus ring */

/* Status Colors */
--destructive: 0 84% 60%;
--destructive-foreground: 210 40% 98%;

/* Glass Effect Variables */
--glass-bg: rgba(15, 20, 25, 0.7);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-blur: 12px;

/* Radius */
--radius: 0.75rem;
```

### Typography Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 4rem / 3rem mobile | 700 | 1.1 |
| H2 (Section) | 2.5rem / 2rem mobile | 600 | 1.2 |
| H3 (Card Title) | 1.5rem | 600 | 1.3 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |

### Font Stack

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

---

## Component Architecture

### File Structure (~600 lines max per file)

```
app/
├── layout.tsx                 # Root layout with fonts & metadata
├── page.tsx                   # Landing page composition
├── contact/
│   └── page.tsx               # Contact page
└── globals.css                # Design tokens & global styles

components/
├── layout/
│   ├── header.tsx             # Navigation with burger menu
│   ├── footer.tsx             # Multi-column authority footer
│   └── mobile-nav.tsx         # Mobile slide-out navigation
│
├── sections/
│   ├── hero-section.tsx       # Hero with address input
│   ├── stats-section.tsx      # Performance matrix stats
│   ├── property-gallery.tsx   # Recent wins 2x2 grid
│   ├── method-section.tsx     # Three-step method
│   ├── testimonial-section.tsx # Premium testimonial
│   ├── faq-section.tsx        # Accordion FAQ
│   └── cta-section.tsx        # Reusable CTA block
│
├── ui/
│   ├── glass-card.tsx         # Glass morphism card
│   ├── property-card.tsx      # Property listing card
│   ├── stat-card.tsx          # Stats display card
│   ├── method-step.tsx        # Method step component
│   └── valuation-modal.tsx    # CTA modal component
│
└── shared/
    ├── scroll-to-top.tsx      # Back to top button
    └── section-wrapper.tsx    # Animation wrapper
```

---

## Section Breakdown

### 1. Header / Navigation
- Fixed position, glass effect background
- Logo: "Julian Vance" text mark
- Desktop: Horizontal nav links (Results, Method, FAQ, Contact)
- Mobile: Burger menu icon -> slide-out drawer
- CTA button in header: "Get Valuation"

### 2. Hero Section
- **Headline:** "Your home deserves a better debut."
- **Subheadline:** "Strategic staging and predictive market analysis to maximize your equity."
- **Address Input:** Wide input with MapPin icon + "Get My Valuation" button
- **CTA Action:** Opens valuation modal
- **Animation:** Fade-in-up on load

### 3. Performance Matrix (Stats)
- **Stats Row (3 columns):**
  - 104% Average List-to-Sale Ratio
  - 12 Days Median Time on Market
  - $450M+ Lifetime Career Sales
- **Animation:** Scroll-triggered fade-in

### 4. Recent Wins Gallery
- **Layout:** 2x2 bento grid (stacks to 1 column on mobile)
- **Property Cards:**
  1. Skyline Penthouse - "Sold $150k Over Asking"
  2. Oak Ridge Estate - "Sold in 48 Hours"
  3. The Summit Residence - "Sold $200k Over Asking"
  4. Harbor View Manor - "Sold in 72 Hours"
- **Trust Bar:** Grayscale logos (Forbes, WSJ, Architectural Digest)

### 5. CTA Block #1
- **Headline:** "Ready to maximize your home's value?"
- **Button:** "Get My Free Valuation" -> Opens modal

### 6. The Three-Step Method
- **Step 1:** Predictive Analysis
  - "Using 2026 absorption rates to time your launch for maximum competition."
- **Step 2:** High-Fidelity Staging
  - "Custom interior styling curated for the luxury buyer demographic."
- **Step 3:** Targeted Exposure
  - "Precision digital ad targeting to high-net-worth individuals."

### 7. Testimonial Section
- Premium quote card with glass effect
- Quote, client name, property sold
- Placeholder content

### 8. CTA Block #2
- **Headline:** "Join 500+ sellers who chose strategic selling."
- **Button:** "Start My Valuation" -> Opens modal

### 9. FAQ Section (Accordion)
- **Q1:** "How do you ensure my privacy?"
  - A: "We utilize elite vetting; only pre-qualified, high-net-worth buyers gain access to private showings."
- **Q2:** "Why not use a discount broker?"
  - A: "Our 104% average list-to-price ratio means our strategy pays for itself by capturing equity others leave on the table."
- **Q3:** "Is the market right for selling?"
  - A: "We don't guess—we use data. Our 2026 predictive models identify the exact window for your property's peak value."
- **Q4:** "What if my home needs work?"
  - A: "Our concierge staging service handles everything from minor repairs to full interior styling."

### 10. CTA Block #3 (Final)
- **Headline:** "Your home's best chapter starts here."
- **Button:** "Get My Valuation Today" -> Opens modal

### 11. Footer
- **Column 1:** Julian Vance headshot placeholder, License #482910, Bio
- **Column 2:** Seller Resources (2026 Market Report, Pre-Launch Checklist, Tax Strategy)
- **Column 3:** Social Links (LinkedIn, Instagram), Contact Julian link
- **Bottom Bar:** Copyright 2026, Equal Housing Opportunity, Privacy Policy

---

## Interactive Behaviors

### Valuation Modal
- Triggered by all CTA buttons
- Content: "Thank you for your interest" placeholder message
- Address input repeated inside modal
- Close button (X) and backdrop click to close

### Smooth Scrolling
- All anchor links scroll smoothly to sections
- Section IDs: `#results`, `#method`, `#faq`, `#contact`

### Back to Top
- Fixed position button (bottom-right)
- Appears after scrolling 500px
- Smooth scroll to top on click

### Animations (Framer Motion)
- **Hero:** Fade-in-up on load (staggered children)
- **Stats:** Scroll-triggered fade-in
- **Property Cards:** Staggered fade-in on scroll
- **Method Steps:** Sequential reveal on scroll
- **FAQ:** Accordion expand/collapse animation

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, burger menu, stacked cards |
| Tablet | 640-1024px | 2-column grids, condensed header |
| Desktop | > 1024px | Full layout, horizontal nav |

### Mobile Adaptations
- Hero headline: 3rem -> 2.25rem
- Stats: 3-column -> 1-column stack
- Property grid: 2x2 -> single column
- Method steps: Horizontal -> vertical
- Footer: 3-column -> stacked

---

## Placeholder Content

### Images to Generate
1. `hero-bg.jpg` - Luxury home exterior at dusk
2. `julian-headshot.jpg` - Professional headshot placeholder
3. `property-1.jpg` - Modern penthouse interior
4. `property-2.jpg` - Suburban estate exterior
5. `property-3.jpg` - Luxury living room
6. `property-4.jpg` - Waterfront property

### Logo Placeholders
- Forbes (text-based placeholder)
- Wall Street Journal (text-based placeholder)
- Architectural Digest (text-based placeholder)

---

## SEO Metadata (Placeholders)

```typescript
export const metadata = {
  title: "Julian Vance | Strategic Listing Specialist",
  description: "Maximize your home equity with data-driven staging and elite marketing. 104% average list-to-sale ratio.",
  openGraph: {
    title: "Your Home Deserves a Better Debut | Julian Vance",
    description: "Strategic staging and predictive market analysis for luxury home sellers.",
    type: "website",
  },
};
```

---

## Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with design tokens
2. Update `layout.tsx` with fonts and metadata
3. Create `glass-card.tsx` and `section-wrapper.tsx` utilities

### Phase 2: Layout Components
4. Build `header.tsx` with responsive nav
5. Build `mobile-nav.tsx` drawer
6. Build `footer.tsx` multi-column layout

### Phase 3: Core Sections
7. Build `hero-section.tsx` with address input
8. Build `valuation-modal.tsx`
9. Build `stats-section.tsx`
10. Build `property-gallery.tsx` with `property-card.tsx`

### Phase 4: Supporting Sections
11. Build `method-section.tsx` with `method-step.tsx`
12. Build `testimonial-section.tsx`
13. Build `faq-section.tsx` with accordion
14. Build `cta-section.tsx` (reusable)

### Phase 5: Polish
15. Add `scroll-to-top.tsx`
16. Compose `page.tsx` with all sections
17. Build `contact/page.tsx`
18. Generate placeholder images
19. Final responsive testing

---

## Dependencies to Install

```bash
pnpm add framer-motion
```

---

## Notes

- All CTA buttons trigger the same valuation modal
- Contact Julian link navigates to `/contact` page
- No backend/API integration - all forms are UI-only
- Images will be generated as placeholders for later replacement
- Glass effects use backdrop-blur with semi-transparent backgrounds
- Animations respect `prefers-reduced-motion` preference
