# 🚀 Easy Vercel Deployment Guide for Sanganeb Limo
## For Non-Technical Users

This guide will help you get your limousine website live on the internet in about 30-60 minutes. No technical experience needed!

---

## 📋 What You'll Need Before Starting

Think of these as ingredients you need before cooking:

### 1. **GitHub Account** (Free - where your website files live)
- Go to https://github.com/signup
- Create a free account (use your email)
- Verify your email

### 2. **Vercel Account** (Free to start - where your website runs)
- Go to https://vercel.com/signup
- Sign up using your GitHub account (easiest option)
- This connects GitHub and Vercel automatically

### 3. **Stripe Account** (for accepting payments)
- Go to https://stripe.com
- Sign up for an account
- ⚠️ **CRITICAL**: You MUST set this up - the booking system requires payment processing
- Complete verification (they may ask for business details)
- **You'll need two "keys" from Stripe later** (like passwords for your website to talk to Stripe)

### 4. **Resend Account** (Free - for sending emails)
- Go to https://resend.com
- Sign up for a free account
- This sends booking confirmation emails to info@sanganeblimo.com
- **You'll need an "API key" later** (like a password)

### 5. **Database** (Free option available on Vercel - where bookings are saved)
- We'll set this up inside Vercel in Step 3
- No separate signup needed!

---

## 💰 What Does This Cost?

**Good news**: You can start completely FREE!

- **GitHub**: Free forever
- **Vercel**: Free plan includes everything you need to start
- **Resend**: Free for 100 emails/day (enough for most businesses)
- **Stripe**: Free to set up, they take 2.9% + $0.30 per transaction only when you get paid
- **Database**: Free tier on Vercel (256 MB storage - holds thousands of bookings)

**Later, if your business grows:**
- Vercel Pro: $20/month (unlimited traffic, better support)
- Resend Pro: $20/month (50,000 emails)
- Larger database: $24/month (if you outgrow free tier)

---

## 🎯 Step-by-Step Deployment

### STEP 1: Upload Your Website to GitHub

**What's GitHub?** Think of it as Google Drive for website code. It stores all your website files online.

1. **Download Replit Desktop App** (if using Replit):
   - Or use Replit's built-in Git tools
   
2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it: `sanganeb-limo`
   - Make it **Public** (or Private if you prefer)
   - Don't check any boxes (no README, no gitignore)
   - Click **Create repository**

3. **Upload your code**:
   
   **Option A - Using Replit** (Easier):
   - In Replit, click the **Version Control** icon (looks like a branch)
   - Click "Connect to GitHub"
   - Select your `sanganeb-limo` repository
   - Click "Push to GitHub"
   
   **Option B - Using Replit Shell** (if Option A doesn't work):
   - Open Shell/Terminal in Replit
   - Copy and paste these commands one by one (replace YOUR_USERNAME with your GitHub username):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Sanganeb Limo website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sanganeb-limo.git
   git push -u origin main
   ```
   - When asked for username/password:
     - Username: your GitHub username
     - Password: use a GitHub Personal Access Token (see note below)

**GitHub Password Note**: GitHub doesn't accept regular passwords anymore. You need a "Personal Access Token":
- Go to https://github.com/settings/tokens
- Click **Generate new token (classic)**
- Give it a name like "Replit access"
- Check the "repo" box
- Click **Generate token**
- Copy the token (starts with `ghp_...`) and use it as your password
- **Save this token somewhere safe - you can't see it again!**

✅ **How to know it worked**: Visit your GitHub repository at `https://github.com/YOUR_USERNAME/sanganeb-limo` - you should see all your files!

---

### STEP 2: Get Your API Keys

**What's an API Key?** Think of it as a special password that lets different services talk to each other securely.

#### A. Get Your Stripe Keys

1. Go to https://dashboard.stripe.com
2. Log in to your account
3. Click **Developers** in the left menu
4. Click **API Keys**
5. You'll see two types of keys:

   **For Testing First** (use these to test before going live):
   - **Publishable key** (starts with `pk_test_...`) 
   - **Secret key** (starts with `sk_test_...` - click "Reveal test key")
   
   **For Real Payments Later** (use these when ready for customers):
   - Toggle to "Live mode" in the top right
   - **Publishable key** (starts with `pk_live_...`)
   - **Secret key** (starts with `sk_live_...`)

6. **Copy both keys to a text file** (you'll need them soon)
   - Label them clearly: "Stripe Publishable Test Key" and "Stripe Secret Test Key"

⚠️ **Important**: Start with TEST keys. Use LIVE keys only when you're ready for real customers!

#### B. Get Your Resend API Key

1. Go to https://resend.com/api-keys
2. Log in to your account
3. Click **Create API Key**
4. Give it a name: "Sanganeb Limo Production"
5. Click **Add**
6. **Copy the key** (starts with `re_...`)
7. Paste it in your text file and label it "Resend API Key"

⚠️ **Important**: You can only see this key once! Save it now.

#### C. Create a Session Secret

This is a random password for your website's security.

**Easy way**:
1. Go to https://www.random.org/passwords/?num=1&len=24&format=html&rnd=new
2. Copy the random password shown
3. Save it in your text file as "Session Secret"

**Or use this example** (but change a few characters):
```
k8mP2nQ9rT4xW7yZ3bC6vN1h
```

✅ **You should now have 4 things saved**:
- Stripe Publishable Key (pk_test_... or pk_live_...)
- Stripe Secret Key (sk_test_... or sk_live_...)
- Resend API Key (re_...)
- Session Secret (random letters and numbers)

---

### STEP 3: Deploy to Vercel

**What's Vercel?** It's like a web hosting service that makes your website available on the internet. It's super fast and handles all the technical stuff for you.

#### A. Import Your Project

1. Go to https://vercel.com/dashboard
2. Click the big **Add New...** button
3. Select **Project**
4. You'll see your GitHub repositories listed
5. Find **sanganeb-limo** and click **Import**

#### B. Configure Settings

Vercel will show you a configuration screen:

1. **Project Name**: Leave as `sanganeb-limo` (or change if you want)
2. **Framework Preset**: Leave as detected (should say "Other" or "Vite")
3. **Root Directory**: Leave as `./`
4. **Build Command**: Should show `npm run build` ✅
5. **Output Directory**: Should show `dist/public` ✅

**Don't click Deploy yet!** We need to add your API keys first.

#### C. Add Environment Variables

**What are these?** These are where you paste those API keys you copied earlier. Think of them as locked boxes where your website stores sensitive passwords.

Scroll down to **Environment Variables** section:

Click **Add Environment Variable** and add each of these one by one:

1. **Key**: `NODE_ENV`  
   **Value**: `production`

2. **Key**: `STRIPE_SECRET_KEY`  
   **Value**: Paste your Stripe Secret Key (sk_test_... or sk_live_...)

3. **Key**: `VITE_STRIPE_PUBLIC_KEY`  
   **Value**: Paste your Stripe Publishable Key (pk_test_... or pk_live_...)

4. **Key**: `RESEND_API_KEY`  
   **Value**: Paste your Resend API Key (re_...)

5. **Key**: `SESSION_SECRET`  
   **Value**: Paste your Session Secret

⚠️ **Don't add DATABASE_URL yet** - we'll create the database next and Vercel adds this automatically!

#### D. Create Database

Before clicking Deploy:

1. Open a new tab and go to https://vercel.com/dashboard
2. Click **Storage** in the top menu
3. Click **Create Database**
4. Select **Postgres** (the database icon)
5. Give it a name: `sanganeb-limo-db`
6. Select region: **US East** (choose the one closest to your customers)
7. Click **Create**

Wait 30 seconds for it to be created.

8. Click **Connect Project**
9. Select your `sanganeb-limo` project
10. Click **Connect**

✅ This automatically adds the `DATABASE_URL` to your project!

#### E. Deploy!

1. Go back to your deployment tab
2. Now click the big **Deploy** button
3. Wait 2-3 minutes while Vercel builds your website
4. You'll see a progress screen with lots of text scrolling
5. When done, you'll see: **🎉 Congratulations!** with a link

✅ **Your website is now live!** Click **Visit** to see it.

**Your website address** will be something like:
`https://sanganeb-limo.vercel.app`

---

### STEP 4: Set Up Your Database Tables

**What's this?** Your website needs organized storage for bookings and contacts. This creates those storage boxes.

#### Option A: Use Vercel CLI (Recommended but needs terminal)

1. On your Vercel project page, click **Settings**
2. Click **General**
3. Scroll to **Build & Development Settings**
4. Copy the **Install Command**: Usually `npm install`

5. In Replit Shell/Terminal, run these commands:
```bash
npm install -g vercel
vercel login
```

6. Follow the login prompts (it opens a browser)

7. Link your project:
```bash
vercel link
```
- Select your Vercel account
- Select `sanganeb-limo` project

8. Pull the database connection:
```bash
vercel env pull .env.local
```

9. Create the database tables:
```bash
npm run db:push
```

✅ You should see: "✓ Schema pushed successfully"

#### Option B: Contact Vercel Support (If Option A is too technical)

1. Go to https://vercel.com/help
2. Click **Contact Support**
3. Explain: "I need help running database migrations for my PostgreSQL database"
4. Provide your project name: `sanganeb-limo`

---

### STEP 5: Test Your Website

**Critical tests to make sure everything works:**

#### A. Test Basic Navigation

1. Visit your website: `https://your-project.vercel.app`
2. Click through all pages:
   - Home ✅
   - Fleet ✅
   - Services ✅
   - Rates ✅
   - About ✅
   - Book Now ✅
   - Contact ✅
   - FAQ ✅

3. Check that all images load properly
4. Check that the WhatsApp button appears (bottom right, green)

#### B. Test Booking System (CRITICAL)

1. Click **Book Now** in the menu
2. Fill out the form:
   - **Step 1**: Select a service (e.g., "Airport Transfer")
   - **Step 2**: Select a vehicle (e.g., "Mercedes S-Class")
   - **Step 3**: Enter pickup details:
     - Pickup: "123 Test Street, Washington DC"
     - Dropoff: "Airport"
     - Date: Tomorrow's date
     - Time: "10:00 AM"
     - Passengers: 2
   - **Step 4**: Your contact info:
     - Full Name: "Test Booking"
     - Email: Your email
     - Phone: Your phone
     - Organization: "Test Company"
   - **Step 5**: Payment

3. **If using TEST Stripe keys**, use this test card:
   - Card Number: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/25`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)

4. Click **Complete Payment & Booking**

5. ✅ **Success looks like**:
   - You see a "Booking Confirmed!" message
   - You receive an email at info@sanganeblimo.com with booking details

❌ **If it fails with error 500**: Your Stripe keys aren't set correctly. Go back to Step 3C and double-check both Stripe keys.

#### C. Test Contact Form

1. Go to the **Contact** page
2. Fill out:
   - Name: "Test Contact"
   - Email: Your email
   - Phone: Your phone
   - Message: "This is a test message"
3. Click **Send Message**

4. ✅ **Success looks like**:
   - You see "Message Sent!" notification
   - You receive an email at info@sanganeblimo.com

---

### STEP 6: Add Your Custom Domain (Optional)

**What's this?** Instead of `sanganeb-limo.vercel.app`, you can use `www.sanganeblimo.com`

#### A. Buy a Domain (if you don't have one)

**Where to buy**:
- **Namecheap**: https://www.namecheap.com (~$10-15/year)
- **GoDaddy**: https://www.godaddy.com (~$12-20/year)
- **Google Domains**: https://domains.google (~$12/year)

Search for "sanganeblimo.com" and purchase it.

#### B. Connect Domain to Vercel

1. In Vercel, go to your project
2. Click **Settings** → **Domains**
3. Click **Add**
4. Type: `sanganeblimo.com`
5. Click **Add**

Vercel will show you DNS records to add (don't worry, we'll explain!)

#### C. Update DNS Settings

**What's DNS?** Think of it as the phone book of the internet. It tells people where to find your website.

1. Log in to where you bought your domain (Namecheap, GoDaddy, etc.)
2. Find **DNS Settings** or **Manage DNS** (usually under domain management)
3. You'll see a list of records

4. **Add these two records**:

   **Record 1** (for sanganeblimo.com):
   - Type: `A`
   - Host/Name: `@` (or leave blank)
   - Value/Points to: `76.76.21.21`
   - TTL: `Automatic` or `3600`

   **Record 2** (for www.sanganeblimo.com):
   - Type: `CNAME`
   - Host/Name: `www`
   - Value/Points to: `cname.vercel-dns.com`
   - TTL: `Automatic` or `3600`

5. Save changes

⏰ **Wait 24-48 hours**: DNS changes take time to spread across the internet. Your domain will work at `sanganeblimo.com` within a day or two.

✅ **How to check if it's working**: Type your domain in a browser. If it shows your website, it's working!

---

### STEP 7: Switch to Live Payments (When Ready)

**When to do this**: Only after you've tested everything and are ready to accept real customer bookings!

1. Go to Vercel Dashboard
2. Select your project: `sanganeb-limo`
3. Click **Settings** → **Environment Variables**
4. Find `STRIPE_SECRET_KEY`:
   - Click the **three dots** (⋯) next to it
   - Click **Edit**
   - Replace with your **LIVE** secret key (sk_live_...)
   - Click **Save**

5. Find `VITE_STRIPE_PUBLIC_KEY`:
   - Click the **three dots** (⋯)
   - Click **Edit**
   - Replace with your **LIVE** publishable key (pk_live_...)
   - Click **Save**

6. Vercel will automatically redeploy (takes 2-3 minutes)

⚠️ **Important**: With LIVE keys, real credit cards will be charged! Test thoroughly with TEST keys first.

---

## ✅ Success Checklist

Before telling customers about your website:

- [ ] Website loads at your Vercel URL
- [ ] All 8 pages work (Home, Fleet, Services, Rates, About, Book Now, Contact, FAQ)
- [ ] All images display correctly
- [ ] Booking form works and sends email to info@sanganeblimo.com
- [ ] Contact form works and sends email to info@sanganeblimo.com
- [ ] Payment processing works (test with 4242 card)
- [ ] Stripe switched to LIVE keys (when ready for real customers)
- [ ] Custom domain connected (if you have one)
- [ ] Email notifications arriving at info@sanganeblimo.com

---

## 🆘 Common Problems & Solutions

### Problem: "Build Failed" error during deployment

**What it means**: Something went wrong when Vercel tried to prepare your website.

**Solution**:
1. Check the error log (scroll down on the deployment page)
2. Look for red error messages
3. Common issue: Missing packages
   - Solution: In Replit, run `npm install` and push to GitHub again
4. If stuck, click **Redeploy** in Vercel (sometimes it just works the second time!)

### Problem: Booking form shows error 500

**What it means**: The payment system isn't configured.

**Solution**:
1. ⚠️ **Most common cause**: Stripe keys are missing or wrong
2. Go to Vercel → Settings → Environment Variables
3. Check you have BOTH:
   - `STRIPE_SECRET_KEY` (starts with sk_test_ or sk_live_)
   - `VITE_STRIPE_PUBLIC_KEY` (starts with pk_test_ or pk_live_)
4. Make sure there are no extra spaces or missing characters
5. After fixing, click **Redeploy**

### Problem: Not receiving emails

**What it means**: Email service isn't working.

**Solution**:
1. Check your spam/junk folder first!
2. Verify `RESEND_API_KEY` is set in Vercel Environment Variables
3. Log in to Resend.com and check:
   - Dashboard → Logs
   - Look for failed sends
4. Free tier limit: 100 emails/day (did you hit the limit?)

### Problem: "Database connection failed"

**What it means**: Website can't talk to the database.

**Solution**:
1. Go to Vercel → Storage
2. Make sure `sanganeb-limo-db` exists
3. Check it's connected to your project
4. Environment variable `DATABASE_URL` should be automatically set
5. Run database setup again: `npm run db:push` (see Step 4)

### Problem: Images not showing

**What it means**: Image files didn't upload correctly.

**Solution**:
1. Check that `attached_assets` folder is in your GitHub repository
2. Go to https://github.com/YOUR_USERNAME/sanganeb-limo
3. You should see an `attached_assets` folder with `generated_images` inside
4. If missing, upload the folder and push to GitHub again

### Problem: Custom domain not working

**What it means**: DNS settings need more time or aren't correct.

**Solution**:
1. **Wait 24-48 hours** (DNS changes are slow)
2. Check DNS settings at your domain registrar
3. Use this tool to verify: https://www.whatsmydns.net
   - Enter your domain: `sanganeblimo.com`
   - Select type: `A`
   - Check if it shows: `76.76.21.21`
4. If still not working after 48 hours, contact your domain registrar support

---

## 📞 Getting Help

### Free Help Resources

1. **Vercel Community**:
   - https://github.com/vercel/vercel/discussions
   - Search for your error message
   - Post a question (very helpful community!)

2. **Stripe Support**:
   - https://support.stripe.com
   - Live chat available
   - Very responsive!

3. **YouTube Tutorials**:
   - Search: "Deploy to Vercel tutorial"
   - Watch: "Vercel for beginners"

### Paid Support (if needed)

1. **Vercel Pro Support**: Included with Pro plan ($20/month)
2. **Hire a Developer**: 
   - Fiverr: $50-200 for deployment help
   - Upwork: $30-100/hour for web developers

---

## 🎉 Congratulations!

Your limousine booking website is now LIVE on the internet!

**What you've accomplished**:
- ✅ Professional business website
- ✅ Online booking system
- ✅ Secure payment processing
- ✅ Automated email notifications
- ✅ Modern, fast, and secure hosting
- ✅ Scales automatically (handles more customers as you grow)

**Your website is available at**:
- `https://sanganeb-limo.vercel.app` (always works)
- `https://sanganeblimo.com` (if you connected a custom domain)

**Share this with your customers!** 🚗💼

---

## 🔄 Making Changes Later

When you want to update your website:

### Easy Way (Replit to GitHub to Vercel)

1. Make changes in Replit
2. In Replit, go to **Version Control**
3. Click **Commit** (like "Save")
4. Click **Push** (uploads to GitHub)
5. Vercel automatically rebuilds (2-3 minutes)
6. Changes are live!

**Vercel watches GitHub**: Every time you push changes to GitHub, Vercel automatically updates your website. It's like magic! ✨

---

## 💡 Pro Tips

1. **Test first**: Always test with Stripe TEST keys before using LIVE keys
2. **Check email spam**: First few emails from Resend might go to spam
3. **Monitor Stripe**: Check your Stripe dashboard weekly for payments
4. **Free tier limits**: 
   - Vercel Free: 100 GB bandwidth/month (plenty for starting)
   - Resend Free: 100 emails/day
   - Database Free: 256 MB storage
5. **Backups**: GitHub automatically saves all versions of your code
6. **Mobile testing**: Check your website on your phone!

---

## 📈 Next Steps

After your website is live:

1. **Google My Business**: List your business on Google
2. **Social Media**: Share your website link
3. **Business Cards**: Print your website URL
4. **SEO**: Submit to Google Search Console (makes you searchable)
5. **Analytics**: Add Google Analytics to track visitors (optional)

---

**Questions?** This guide is designed to be complete, but if you get stuck:
1. Read the error message carefully
2. Check the "Common Problems" section above
3. Google the exact error message
4. Ask in Vercel community forums

**You've got this!** 🚀
