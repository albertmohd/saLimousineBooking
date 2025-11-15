# Sanganeb Limo - Luxury Transportation Website Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from luxury automotive brands (Mercedes-Benz, BMW corporate sites) and premium hospitality services (Ritz-Carlton, St. Regis). The design emphasizes sophistication, trust, and discretion through restrained elegance and professional polish.

## Core Design Principles

1. **Understated Luxury**: Generous whitespace, refined typography, and subtle interactions convey prestige without ostentation
2. **Trust & Credibility**: Clean layouts, professional imagery, and clear information hierarchy build confidence
3. **VIP Discretion**: Minimal distractions, focused content, and elegant restraint reflect service values

## Typography System

**Font Families**:
- Headings: Montserrat (weights: 400, 500, 600, 700)
- Body: Merriweather (weights: 300, 400, 700)
- Accents/Labels: Montserrat (uppercase, letter-spacing)

**Hierarchy**:
- Hero Headlines: Montserrat 600, 3xl-6xl responsive scaling
- Section Headings: Montserrat 600, 2xl-4xl
- Subsections: Montserrat 500, xl-2xl
- Body Text: Merriweather 400, base-lg, line-height relaxed (1.75)
- Labels/CTAs: Montserrat 500, sm-base, uppercase tracking-wide
- Small Print: Merriweather 300, sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 (mobile), p-12 (tablet), p-16 (desktop)
- Section spacing: py-16 (mobile), py-20 (tablet), py-32 (desktop)
- Card spacing: p-6 to p-8
- Form fields: p-4

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl
- Forms: max-w-2xl

## Component Library

### Navigation Header
- Sticky header with logo left, navigation center, "Book Now" CTA right
- Desktop: horizontal menu with hover underline animations
- Mobile: hamburger menu with full-screen overlay
- Logo prominence: h-12 to h-16
- Subtle shadow on scroll

### Hero Section (Homepage)
- Full-width, 85vh height on desktop, 70vh mobile
- Large hero image: Professional chauffeur with luxury sedan or elegant interior shot
- Centered content overlay with translucent backdrop blur
- Headline + subheadline + primary CTA button (blurred background for button)
- Trust badges strip below hero: 4 icons with text (24/7 Service, Licensed, Professional, Government Approved)

### Booking Form Components
- Multi-step form with progress indicator (5 steps: Service → Vehicle → Details → Contact → Confirm)
- Custom dropdown selects with vehicle thumbnails
- Date/time pickers with elegant calendar UI
- Textarea for special requests with character count
- Checkbox with custom styling for terms
- Large, prominent submit button

### Fleet Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: Image top (aspect-ratio-16/9), content below
- Vehicle image, category badge, capacity icon, amenities list (icons + text)
- Two CTAs: "View Details" (ghost button) + "Check Availability" (primary)
- Hover: subtle lift effect (shadow expansion)

### Services Section
- Six service types, each with icon, heading, description
- Two-column layout on desktop (grid-cols-2), single on mobile
- Icons: elegant line icons, 48-64px
- Description: 2-3 lines of text

### Testimonials
- Card-based layout with quote marks, testimonial text, attribution (name, title, organization)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Subtle card elevation, padding p-8

### Contact Page
- Two-column layout: Form left (60%), contact info right (40%)
- Contact info: Stacked sections for phone, email, WhatsApp, business hours, address
- Clickable phone/email with icons
- WhatsApp button with pre-filled message integration

### FAQ Section
- Accordion-style collapsible items
- Question in Montserrat 500, answer in Merriweather 400
- 8-10 questions covering booking, security, cancellation, corporate accounts
- Smooth expand/collapse animations

### Footer
- Three-column layout (desktop): Logo + Quick Links + Contact Info
- Social media icons row
- Bottom bar: Copyright, privacy policy, terms links
- Padding: py-12 on mobile, py-16 on desktop

## Images

### Required Images:
1. **Homepage Hero**: Professional chauffeur standing beside Mercedes S-Class or similar luxury sedan, elegant environment (hotel entrance, corporate building). High-resolution, sophisticated composition.
2. **Fleet Images**: Individual vehicle photos for each category (minimum 6 vehicles):
   - Executive Sedans: Mercedes S-Class, BMW 7-Series, Audi A8
   - Luxury SUVs: Cadillac Escalade, Range Rover, Mercedes GLS
   - Stretch Limousines: White or black stretch limo
   - Executive Vans: Mercedes Sprinter
3. **Services Page**: Supporting imagery for each service type (corporate meeting, airport terminal, diplomatic setting) - smaller accent images
4. **About Page**: Chauffeur training imagery, fleet maintenance, team photo
5. **Testimonial Section**: Professional headshots or company logos (placeholder)

All images: High-resolution, professionally shot, consistent lighting/tone, reinforce luxury positioning.

## Interactive Elements

- Smooth scroll behavior between sections
- Form validation with inline error messages (red accent, italic text)
- Success confirmation modal after booking submission (overlay with checkmark icon)
- WhatsApp floating button: Fixed bottom-right, z-50, with bounce animation on page load
- Hover states: Subtle opacity changes (0.9), shadow expansion, no wild color shifts
- Loading states for form submission (spinner overlay)

## Responsive Behavior

- Mobile-first approach: single column layouts stack naturally
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation: Hamburger menu below lg breakpoint
- Forms: Full-width inputs on mobile, maintain max-width on desktop
- Hero text: Scale down from 6xl → 3xl on mobile
- Grid adjustments: 3-col → 2-col → 1-col progressive collapse

## Form Integration

- Use Web3Forms or Formspree for email delivery to info@sanganeblimo.com
- Email template includes: Customer name, organization, service type, vehicle, date/time, locations, passenger count, special requests, timestamp
- WhatsApp link format with pre-populated booking details
- Success message: "Thank you for choosing Sanganeb Limo! We'll contact you within 1 hour to confirm your booking."

## Page Structure Summary

1. **Homepage**: Hero → Trust Badges → Fleet Preview (6 cards) → Why Choose Us (3 columns) → Testimonials (3 columns) → CTA Section
2. **Fleet**: Page header → Filter tabs → Vehicle grid (9-12 vehicles) → CTA footer
3. **Services**: Page header → 6 service blocks (2-col grid) → CTA section
4. **About**: Company story → Values grid (3-col) → Chauffeur standards → Certifications
5. **Booking**: Multi-step form with progress indicator, right sidebar with booking summary
6. **Contact**: Form + info two-column layout → Map embed → FAQ preview
7. **FAQ**: Accordion list (10 items) → Contact CTA

This design balances luxury aesthetics with functional clarity, ensuring VIP clients feel valued while corporate administrators can efficiently book services.