# Sanganeb Limo - Professional Limousine Service Website

## Project Overview
Professional luxury limousine booking website for Sanganeb Limo, targeting government officials, NGO personnel, and corporate clients. Features VIP-focused design with booking capabilities, fleet showcase, services information, rates page, and automated email notifications.

## Recent Changes (November 14, 2025)
- Completed comprehensive Rates page similar to Ballston Limo with competitive pricing structure
- Added Rates navigation link to header and footer
- Implemented backend API routes for booking and contact form submissions
- Set up Resend email integration for automated notifications to info@sanganeblimo.com
- Fixed React warnings about nested `<a>` tags in Header and Footer components
- Updated WhatsApp button styling to green (#16a34a) positioned at bottom-right
- Added loading states to form submission buttons

## User Preferences
- **Color Scheme**: White, navy blue (HSL 215 80% 42%), and black for professional appearance
- **Target Audience**: Government officials, NGO personnel, corporate clients - distinguished VIP clientele
- **Design Style**: Professional, trustworthy, sophisticated, elegant
- **Email**: All booking and contact notifications sent to info@sanganeblimo.com

## Project Architecture

### Frontend (React + TypeScript + Vite)
**Pages (8 total)**:
- Home (`/`) - Hero section with professional imagery, service highlights
- Fleet (`/fleet`) - Showcase of 9 generated luxury vehicle images
- Services (`/services`) - Detailed service offerings
- Rates (`/rates`) - Competitive pricing structure (hourly rates + airport transfers)
- About (`/about`) - Company information
- Book Now (`/book-now`) - Multi-step booking form (5 steps)
- Contact (`/contact`) - Contact form with automated email
- FAQ (`/faq`) - Frequently asked questions

**Key Components**:
- `Header.tsx` - Sticky navigation with logo, nav links, Book Now CTA
- `Footer.tsx` - Company info, quick links, contact information, social media
- `BookingForm.tsx` - Multi-step form with API integration
- `ContactForm.tsx` - Simple contact form with API integration  
- `WhatsAppButton.tsx` - Fixed position green WhatsApp CTA button

### Backend (Express + TypeScript)
**API Routes** (`server/routes.ts`):
- `POST /api/bookings` - Creates booking, sends email notification
- `POST /api/contacts` - Creates contact submission, sends email notification

**Email Integration** (`server/email.ts`):
- Using Resend API (manual setup with RESEND_API_KEY secret)
- Sends notifications to info@sanganeblimo.com
- Note: User dismissed Replit's Resend connector integration

**Storage** (`server/storage.ts`):
- In-memory storage (MemStorage) for bookings and contacts
- No database persistence configured

**Data Models** (`shared/schema.ts`):
- `Booking` - Service type, vehicle, pickup/dropoff, date/time, passenger info
- `Contact` - Name, email, phone, message
- `User` - Username, password (not currently used)

## Design Guidelines
- Professional navy blue: `--primary: 215 80% 42%` (HSL format)
- Modern serif/sans-serif font pairing
- Hover effects using `hover-elevate` and `active-elevate-2` utility classes
- Consistent spacing and padding throughout
- Responsive design for mobile, tablet, desktop

## Fleet Images
9 professional vehicle images generated and stored in `attached_assets/generated_images/`:
- Executive sedans (Mercedes S-Class, BMW 7-Series, Audi A8)
- Luxury SUVs (Cadillac Escalade, Range Rover, Mercedes GLS)
- Stretch limousines
- Executive vans (Mercedes Sprinter)
- Hero chauffeur image

## Environment Secrets
- `RESEND_API_KEY` - For sending email notifications via Resend
- `SESSION_SECRET` - For Express session management

## Running the Project
The workflow "Start application" runs `npm run dev` which:
1. Starts Express server on port 5000
2. Starts Vite dev server
3. Serves frontend and backend on same port

## Deployment Options

### Vercel Deployment (November 15, 2025) - **RECOMMENDED**
**Status**: Production ready ✓ with PostgreSQL database and Stripe integration

**Key Features**:
- ✅ Serverless architecture (auto-scaling, pay-per-use)
- ✅ PostgreSQL database with Vercel Postgres or external provider
- ✅ Stripe payment processing ($50 deposit required)
- ✅ Global CDN delivery (fast worldwide)
- ✅ Automatic HTTPS/SSL
- ✅ One-click deployment from GitHub

**Architecture Changes**:
- Converted Express.js routes to Vercel serverless API functions (api/*.ts)
- Database: PostgreSQL (replaces in-memory storage)
- Shared connection pooling for serverless (server/db-vercel.ts)
- Frontend: Static build to dist/public (Vite)
- Backend: Serverless functions in api/ directory

**Deployment Files**:
- `DEPLOYMENT_VERCEL.md` - Complete Vercel deployment guide
- `vercel.json` - Vercel configuration
- `api/create-payment-intent.ts` - Payment intent creation endpoint
- `api/bookings.ts` - Booking submission with payment verification
- `api/contacts.ts` - Contact form submission
- `server/db-vercel.ts` - Shared database connection for serverless

**Required Environment Variables**:
- DATABASE_URL (auto-added with Vercel Postgres)
- RESEND_API_KEY (email notifications)
- STRIPE_SECRET_KEY ⚠️ REQUIRED
- VITE_STRIPE_PUBLIC_KEY ⚠️ REQUIRED
- SESSION_SECRET (generate with: openssl rand -base64 32)
- NODE_ENV=production

**Important**: Stripe keys are REQUIRED. Without them, all booking attempts will fail with error 500.

**Database Setup**:
1. Create Vercel Postgres database OR use external PostgreSQL
2. Run `npm run db:push` to create tables (users, bookings, contacts)

---

### Hostinger Deployment (Alternative)
**Status**: Production build ready ✓ with Stripe payment integration

**Deployment Files Created**:
- `HOSTINGER_DEPLOYMENT_SUMMARY.md` - Quick overview and checklist
- `QUICK_START_HOSTINGER.md` - Fast 5-minute deployment guide
- `DEPLOYMENT_HOSTINGER.md` - Comprehensive step-by-step instructions
- `.env.example` - Environment variables template

**Production Build**:
- Total size: 11MB (optimized)
- Built with: `npm run build`
- Output: `dist/` folder (backend + frontend)
- Ready for Node.js 20.x hosting

**Required for Deployment**:
- Upload: `dist/`, `attached_assets/`, `package.json`
- Environment: RESEND_API_KEY, STRIPE_SECRET_KEY, VITE_STRIPE_PUBLIC_KEY, SESSION_SECRET, NODE_ENV=production
- Startup file: `dist/index.js`

**Payment Integration (Stripe)**:
- $50 deposit required per booking
- Supports: Visa, Mastercard, Apple Pay, Google Pay, PayPal
- Server-side payment verification implemented for security
- Test mode: Use keys starting with `pk_test_` and `sk_test_`
- Production: Use keys starting with `pk_live_` and `sk_live_`

## Next Steps / Future Enhancements
- Consider adding database persistence (PostgreSQL) for bookings/contacts
- Implement real WhatsApp number (currently placeholder: 1234567890)
- Add phone number to contact information (currently placeholder: +1 (234) 567-8900)
- Consider adding booking management dashboard
- Add email confirmation to customers after booking
- Implement booking confirmation workflow
- Set up Git deployment for easier updates on Hostinger
