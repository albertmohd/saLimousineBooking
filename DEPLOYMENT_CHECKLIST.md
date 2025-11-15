# 📋 Vercel Deployment Quick Checklist

Print this page and check off each step as you complete it!

---

## BEFORE YOU START

- [ ] Create GitHub account (https://github.com/signup)
- [ ] Create Vercel account (https://vercel.com/signup) - sign up with GitHub
- [ ] Create Stripe account (https://stripe.com)
- [ ] Create Resend account (https://resend.com)

**Time needed**: ~45 minutes total

---

## STEP 1: GET YOUR KEYS (15 min)

### Stripe Keys
- [ ] Log in to https://dashboard.stripe.com
- [ ] Click **Developers** → **API Keys**
- [ ] Copy **Publishable key** (starts with `pk_test_...`)
- [ ] Copy **Secret key** (starts with `sk_test_...`) - click "Reveal"
- [ ] Save both keys in a text file

### Resend Key
- [ ] Log in to https://resend.com/api-keys
- [ ] Click **Create API Key**
- [ ] Name it: "Sanganeb Limo"
- [ ] Copy the key (starts with `re_...`)
- [ ] Save in your text file

### Session Secret
- [ ] Go to https://www.random.org/passwords/
- [ ] Copy the random password
- [ ] Save in your text file

---

## STEP 2: UPLOAD TO GITHUB (10 min)

- [ ] Go to https://github.com/new
- [ ] Repository name: `sanganeb-limo`
- [ ] Click **Create repository**
- [ ] In Replit: Version Control → Connect to GitHub
- [ ] Select `sanganeb-limo` repository
- [ ] Push to GitHub
- [ ] Verify files appear at https://github.com/YOUR_USERNAME/sanganeb-limo

---

## STEP 3: CREATE DATABASE (5 min)

- [ ] Go to https://vercel.com/dashboard
- [ ] Click **Storage** → **Create Database**
- [ ] Select **Postgres**
- [ ] Name: `sanganeb-limo-db`
- [ ] Region: **US East**
- [ ] Click **Create**
- [ ] Wait 30 seconds

---

## STEP 4: DEPLOY TO VERCEL (10 min)

- [ ] Go to https://vercel.com/dashboard
- [ ] Click **Add New...** → **Project**
- [ ] Find and click **Import** on `sanganeb-limo`
- [ ] Verify settings:
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `dist/public`

### Add Environment Variables:

Add these ONE BY ONE:

- [ ] `NODE_ENV` = `production`
- [ ] `STRIPE_SECRET_KEY` = (paste your sk_test_... key)
- [ ] `VITE_STRIPE_PUBLIC_KEY` = (paste your pk_test_... key)
- [ ] `RESEND_API_KEY` = (paste your re_... key)
- [ ] `SESSION_SECRET` = (paste your random password)

### Connect Database:

- [ ] Click **Storage** tab
- [ ] Connect `sanganeb-limo-db` to this project

### Deploy:

- [ ] Click **Deploy**
- [ ] Wait 2-3 minutes
- [ ] See "Congratulations!" message
- [ ] Click **Visit** to see your website

---

## STEP 5: SET UP DATABASE TABLES (5 min)

**In Replit Shell/Terminal, run these commands:**

```bash
npm install -g vercel
vercel login
vercel link
vercel env pull .env.local
npm run db:push
```

- [ ] See "Schema pushed successfully" message

---

## STEP 6: TEST EVERYTHING (10 min)

### Test Website:
- [ ] All pages load (Home, Fleet, Services, Rates, About, Book Now, Contact, FAQ)
- [ ] All images display
- [ ] WhatsApp button appears (green, bottom-right)

### Test Booking:
- [ ] Go to **Book Now**
- [ ] Fill out all 5 steps
- [ ] Use test card: `4242 4242 4242 4242`
- [ ] See "Booking Confirmed!" message
- [ ] Receive email at info@sanganeblimo.com

### Test Contact Form:
- [ ] Go to **Contact**
- [ ] Fill out form
- [ ] Click **Send Message**
- [ ] Receive email at info@sanganeblimo.com

---

## STEP 7: CUSTOM DOMAIN (Optional - 5 min + 24-48hrs wait)

- [ ] Buy domain at Namecheap/GoDaddy (if needed)
- [ ] In Vercel: Settings → Domains → Add
- [ ] Enter: `sanganeblimo.com`
- [ ] In domain registrar, add DNS records:
  - [ ] **A record**: `@` → `76.76.21.21`
  - [ ] **CNAME**: `www` → `cname.vercel-dns.com`
- [ ] Wait 24-48 hours for DNS to propagate

---

## WHEN READY FOR LIVE PAYMENTS

⚠️ **Only do this when everything is tested!**

- [ ] Go to Stripe dashboard
- [ ] Switch to **Live mode** (top-right toggle)
- [ ] Copy LIVE Publishable key (pk_live_...)
- [ ] Copy LIVE Secret key (sk_live_...)
- [ ] In Vercel: Settings → Environment Variables
- [ ] Update `STRIPE_SECRET_KEY` with sk_live_... key
- [ ] Update `VITE_STRIPE_PUBLIC_KEY` with pk_live_... key
- [ ] Vercel automatically redeploys
- [ ] Test with real (small) payment to verify

---

## ✅ FINAL CHECKLIST

Before announcing to customers:

- [ ] Website live at Vercel URL
- [ ] Database working (bookings save)
- [ ] Emails arriving at info@sanganeblimo.com
- [ ] Payment processing works
- [ ] Stripe in LIVE mode (not test)
- [ ] Custom domain working (if applicable)
- [ ] Tested on mobile phone
- [ ] Tested on desktop browser
- [ ] WhatsApp button has real number (update from placeholder)
- [ ] Contact info has real phone number (update from placeholder)

---

## 📞 HELP CONTACTS

**If something goes wrong:**

1. **Check the Easy Guide**: `EASY_VERCEL_DEPLOYMENT.md` (detailed solutions)
2. **Vercel Support**: https://vercel.com/help
3. **Stripe Support**: https://support.stripe.com
4. **Vercel Community**: https://github.com/vercel/vercel/discussions

---

## 🎯 YOUR WEBSITE URLS

Write them down:

- **Vercel URL**: `https://_________________________________.vercel.app`
- **Custom Domain**: `https://_________________________________.com`
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Resend Dashboard**: https://resend.com/dashboard

---

## ⏰ TIME ESTIMATES

- **Initial Setup**: 45-60 minutes
- **Domain Setup**: 5 minutes + 24-48 hour wait
- **Future Updates**: 5 minutes (just push to GitHub!)

---

**Print this checklist and keep it handy!** ✅

Check off each box as you complete it. If you get stuck, refer to `EASY_VERCEL_DEPLOYMENT.md` for detailed instructions.

**Good luck!** 🚀
