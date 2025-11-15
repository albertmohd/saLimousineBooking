# Vercel Deployment Guide for Sanganeb Limo

This guide will walk you through deploying your Sanganeb Limo website on Vercel with PostgreSQL database and Stripe payment processing.

## Prerequisites

- Vercel account (sign up at https://vercel.com)
- GitHub account (for connecting repository)
- Stripe account with API keys
- Resend API key for email notifications
- PostgreSQL database (Vercel Postgres or external)

---

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub

If you haven't already, push your project to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Sanganeb Limo website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sanganeb-limo.git
git push -u origin main
```

---

## Step 2: Set Up PostgreSQL Database

### Option A: Use Vercel Postgres (Recommended)

1. Go to your Vercel dashboard
2. Click **Storage** → **Create Database**
3. Select **Postgres**
4. Choose a name (e.g., "sanganeb-limo-db")
5. Select your region (choose US region for USA operations)
6. Click **Create**

Vercel will automatically create a `DATABASE_URL` environment variable.

### Option B: Use External PostgreSQL

If using an external PostgreSQL database (e.g., Neon, Supabase, AWS RDS):

1. Get your PostgreSQL connection string
2. It should look like: `postgresql://user:password@host:5432/database`
3. You'll add this as `DATABASE_URL` in environment variables

---

## Step 3: Deploy to Vercel

### 3.1 Import Your Project

1. Go to https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Select your repository (sanganeb-limo)

### 3.2 Configure Project Settings

Vercel will auto-detect your project settings. Verify:

- **Framework Preset**: Other (or leave as detected)
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`

### 3.3 Add Environment Variables

Click **Environment Variables** and add the following:

```
NODE_ENV=production
DATABASE_URL=your_postgres_connection_string
RESEND_API_KEY=your_resend_api_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
SESSION_SECRET=your_random_secret_here
```

**Important Notes:**
- ⚠️ **STRIPE KEYS ARE REQUIRED** - The booking system requires a $50 deposit, so Stripe must be configured before deployment
- If using Vercel Postgres, `DATABASE_URL` is automatically added
- For production, use **live** Stripe keys (sk_live_ and pk_live_)
- For testing, use **test** Stripe keys (sk_test_ and pk_test_)
- Generate `SESSION_SECRET` with: `openssl rand -base64 32`
- **Without Stripe keys configured, all booking attempts will fail with error 500**

### 3.4 Deploy

1. Click **Deploy**
2. Wait 2-3 minutes for the build to complete
3. Vercel will provide a URL: `https://your-project.vercel.app`

---

## Step 4: Initialize Database Tables

After first deployment, you need to create the database tables:

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Link your project:
```bash
vercel link
```

4. Pull environment variables:
```bash
vercel env pull .env.local
```

5. Push database schema:
```bash
npm run db:push
```

### Method 2: Using Replit (Alternative)

If you're still in Replit:

1. Add Vercel's `DATABASE_URL` to Replit Secrets
2. Run: `npm run db:push`
3. Remove the test DATABASE_URL from Replit after

---

## Step 5: Add Custom Domain (Optional)

### 5.1 Purchase Domain

If you don't have sanganeblimo.com yet:
- Purchase from Namecheap, GoDaddy, or Google Domains

### 5.2 Connect Domain to Vercel

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain: `sanganeblimo.com`
5. Vercel will show you DNS records to add

### 5.3 Update DNS Records

Go to your domain registrar and add these records:

**For Root Domain (sanganeblimo.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For WWW Subdomain (www.sanganeblimo.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

DNS propagation takes 24-48 hours.

---

## Step 6: Verify Deployment

### 6.1 Test Website Functionality

Visit your deployed site and test:

- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Navigation works
- ✅ Booking form appears

### 6.2 Test Booking Flow

1. Go to /book page
2. Fill out booking details
3. Complete Step 4 (Payment)
4. Use Stripe test card: `4242 4242 4242 4242`
5. Verify email notification sent to info@sanganeblimo.com

### 6.3 Test Contact Form

1. Go to /contact page
2. Submit contact form
3. Verify email received at info@sanganeblimo.com

---

## Step 7: Enable Production Mode

Once testing is complete:

### 7.1 Update Stripe to Live Keys

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Update:
   - `STRIPE_SECRET_KEY` → sk_live_...
   - `VITE_STRIPE_PUBLIC_KEY` → pk_live_...
3. Redeploy: Vercel will auto-redeploy

### 7.2 Verify Domain in Resend

1. Login to Resend dashboard
2. Go to **Domains**
3. Add and verify `sanganeblimo.com`
4. Update DNS with Resend's verification records

---

## 🎯 Quick Deployment Checklist

Before going live, verify:

- [ ] PostgreSQL database created and connected
- [ ] All environment variables set correctly
- [ ] ⚠️ **STRIPE KEYS CONFIGURED** (REQUIRED - app will not work without them)
- [ ] Database tables created (npm run db:push)
- [ ] Stripe live keys configured (or test keys for testing)
- [ ] Resend domain verified
- [ ] Custom domain connected (if applicable)
- [ ] Test booking flow works end-to-end
- [ ] Email notifications working
- [ ] All images and assets loading
- [ ] SSL certificate active (https://)

---

## 📊 What Gets Deployed

**Frontend (Static Files):**
- Built React app → `dist/public/`
- All pages, components, images
- Served from Vercel's CDN (fast globally)

**Backend (Serverless Functions):**
- `api/create-payment-intent.ts` → `/api/create-payment-intent`
- `api/bookings.ts` → `/api/bookings`
- `api/contacts.ts` → `/api/contacts`

**Database:**
- PostgreSQL tables: users, bookings, contacts
- Managed by Vercel Postgres or external provider

---

## 🔧 Troubleshooting

### Issue: Build Failed

**Solution:**
- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Ensure Node.js version is 20.x or higher

### Issue: Database Connection Error

**Solution:**
- Verify `DATABASE_URL` is set correctly
- Check database is running and accessible
- Ensure database tables are created (run db:push)

### Issue: Payment Not Working or Bookings Failing with 500 Error

**Solution:**
- ⚠️ **Verify both Stripe keys are set** (SECRET and PUBLIC) - These are REQUIRED
- Without Stripe keys, all booking attempts will fail with error 500
- Check Stripe dashboard for API errors
- Ensure using correct key type (test vs live)
- Verify CORS settings if errors in browser console
- **The booking system requires payment processing - it cannot be disabled**

### Issue: Email Not Sending

**Solution:**
- Verify `RESEND_API_KEY` is set
- Check Resend dashboard for sending limits
- Verify domain is verified in Resend (for custom domain)
- Check Vercel function logs for errors

### Issue: Images Not Loading

**Solution:**
- Verify `attached_assets/` folder is included in deployment
- Check vercel.json has `includeFiles: ["attached_assets/**"]`
- Verify build completed successfully

### Issue: 404 on API Routes

**Solution:**
- Check vercel.json rewrites configuration
- Verify API functions are in `api/` directory
- Check function logs in Vercel dashboard

---

## 💰 Vercel Pricing

**Hobby Plan (Free):**
- Perfect for testing and small sites
- 100 GB bandwidth/month
- Serverless function executions included
- **Good for starting out**

**Pro Plan ($20/month):**
- Unlimited bandwidth
- Advanced analytics
- Custom domains unlimited
- **Recommended for production business**

**Note:** Vercel Postgres has separate pricing:
- Free: 256 MB storage, 60 hours compute/month
- Pro: $24/month for 512 MB, better performance

---

## 🚀 Future Updates

To update your website:

1. Make changes in your code
2. Commit to GitHub:
```bash
git add .
git commit -m "Your update message"
git push
```
3. Vercel auto-deploys! (takes 2-3 minutes)

**Or use Vercel CLI:**
```bash
vercel --prod
```

---

## 📧 Support

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

**Stripe Support:**
- Dashboard: https://dashboard.stripe.com
- Docs: https://stripe.com/docs

**Resend Support:**
- Dashboard: https://resend.com/dashboard
- Docs: https://resend.com/docs

---

## ✅ Your Website is Live!

Congratulations! Your Sanganeb Limo website is now live on Vercel with:

- ✅ Professional luxury limousine booking system
- ✅ Secure payment processing ($50 deposit)
- ✅ Automated email notifications
- ✅ PostgreSQL database persistence
- ✅ Global CDN delivery (fast worldwide)
- ✅ Automatic HTTPS/SSL
- ✅ Auto-scaling (handles traffic spikes)

Your clients can now book VIP limousine services at **https://your-domain.vercel.app** (or your custom domain)!
