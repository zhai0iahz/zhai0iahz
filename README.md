# Court & Craft Tennis Website

A modern, performant website for Jason's tennis coaching business near Irvine Spectrum Center, CA.

## Tech Stack

- **Next.js 14** with App Router (TypeScript)
- **CSS Modules** for scoped styling
- **Google Fonts** via next/font (DM Sans, Poppins)
- No external UI libraries for minimal bundle size

## Features

### Implemented in v1

- [x] **Mobile-first responsive design** - optimized for phone viewers
- [x] **Smooth scroll animations** - Intersection Observer-based, no heavy libraries
- [x] **Octagonal radial services layout** - services arranged around center hub (per user's request)
- [x] **FAQ accordion** - expandable Q&A section (per user's request)
- [x] **Contact form** - functional with placeholder submission handling
- [x] **CSS variables theming** - easy color/font customization
- [x] **SEO metadata** - optimized for search engines

### Sections

1. **Hero** - Tagline, headline, CTA buttons, image placeholder
2. **About** - Jason's bio, teaching philosophy, quote highlight
3. **Services** - 6 services in octagonal radial layout
4. **Approach** - 6-point philosophy grid
5. **Testimonials** - 3 customer testimonials
6. **FAQ** - 6 common questions with accordion
7. **Contact** - Contact info cards + inquiry form
8. **Footer** - Links, social icons, copyright

## Project Structure

```
/app
  /layout.tsx         - Root layout with fonts, metadata
  /page.tsx           - Main landing page assembling sections
  /globals.css        - CSS variables, resets, animations
  /not-found.tsx      - 404 page
  /error.tsx          - Error boundary component
/components
  /Header.tsx         - Fixed navigation with scroll effects
  /Footer.tsx         - Site footer
  /Hero.tsx           - Hero section
  /About.tsx          - About Jason section
  /Services.tsx       - Octagonal radial services (key feature)
  /Approach.tsx       - Philosophy section
  /Testimonials.tsx   - Customer testimonials
  /FAQ.tsx            - Accordion FAQ
  /Contact.tsx        - Contact form and info
  /*.module.css       - Component-specific styles
/public
  /images             - Placeholder (ready for real images)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Roadmap (Future Updates)

### Phase 1: Content & Polish
- [ ] Replace placeholder images with real photos of Jason on court
- [ ] Add actual contact information (phone, email)
- [ ] Add Google Maps embed for location
- [ ] Add more testimonials

### Phase 2: Performance & SEO
- [ ] Add Open Graph images for social sharing
- [ ] Implement structured data (LocalBusiness schema)
- [ ] Add sitemap.xml and robots.txt
- [ ] Core Web Vitals optimization

### Phase 3: User Engagement
- [ ] Email subscription form (newsletter)
- [ ] Booking system integration (Calendly, Acuity, etc.)
- [ ] Student portal for lesson scheduling
- [ ] Progress tracking for students

### Phase 4: Payments
- [ ] Stripe integration for online payments
- [ ] Lesson package purchases
- [ ] Membership/subscription model
- [ ] Equipment store (racquets, strings)

### Phase 5: Community Features
- [ ] Student forum or community board
- [ ] Match scheduling between students
- [ ] Tournament/event management
- [ ] Ambassador program tracking

## Design System

### Colors
- Primary: `#2E8B8B` (teal)
- Primary Dark: `#1B5E5E`
- Secondary: `#1B365D` (navy)
- Accent: `#F9A825` (gold)
- Background: `#FFFFFF`
- Surface: `#F5F5F5`

### Typography
- Headings: DM Sans (variable weight)
- Body: Poppins (400, 500, 600, 700, 800)

### Spacing
- Section padding: 100px (80px on mobile)
- Container max-width: 1200px
- Border radius: 8px (sm), 12px (md), 16px (lg)

## Deployment

This project is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```

## Notes

- Brand name: Court & Craft Tennis (from original landing page designs)
- Most mobile-friendly (user expectation from README notes)
- Octagonal services layout specifically requested by user
- FAQ section added per user request
- Gaming mechanics/psychology approach highlighted in content
- Beginner-friendly messaging emphasized throughout
- Pricing: $80-140 private, $90-120 inner game, $25+ restringing, $50+ customization
- New student trial: 50% off (until October) - as mentioned in README notes
- Multi-lesson discount available - as mentioned in README notes
