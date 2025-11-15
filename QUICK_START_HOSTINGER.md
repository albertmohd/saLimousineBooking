# Quick Start: Deploy to Hostinger

## TL;DR - Fast Deployment Steps

### 1. Build Your Project
```bash
npm install
npm run build
```

### 2. Files to Upload to Hostinger
Upload these to your hosting directory (e.g., `public_html`):
- ✅ `dist/` folder (your built app)
- ✅ `package.json` and `package-lock.json`
- ✅ `attached_assets/` folder (images)
- ❌ Don't upload: `client/`, `server/`, `node_modules/`, `.replit`

### 3. Hostinger Setup (in hPanel)

**Node.js Configuration**:
- Go to: Advanced → Node.js → Create Application
- Node version: **20.x**
- Application startup file: **`dist/index.js`**
- Application URL: **your-domain.com**

**Environment Variables** (in Node.js settings):
```
NODE_ENV=production
RESEND_API_KEY=your_resend_key
STRIPE_SECRET_KEY=sk_live_your_stripe_key
VITE_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
SESSION_SECRET=your_secret_key
PORT=5000
```

### 4. Install & Start
Via SSH:
```bash
ssh your-username@your-domain.com
cd public_html
npm install --production
```

Then start app via hPanel → Node.js → Start Application

### 5. Enable SSL
hPanel → Security → SSL → Install Free SSL

### Done! 🎉
Visit https://your-domain.com

---

## Need More Details?
See full deployment guide: `DEPLOYMENT_HOSTINGER.md`

## Common Issues

**App won't start?**
- Check logs: hPanel → Node.js → View Logs
- Verify environment variables are set

**Images not showing?**
- Upload `attached_assets/` folder
- Check file permissions: 644 for files, 755 for folders

**Email not working?**
- Verify RESEND_API_KEY in environment variables
- Check from domain is verified in Resend dashboard

**Payments not working?**
- Verify both Stripe keys are set (STRIPE_SECRET_KEY and VITE_STRIPE_PUBLIC_KEY)
- Use live keys (sk_live_ and pk_live_) for production
- Check Stripe dashboard at https://dashboard.stripe.com
