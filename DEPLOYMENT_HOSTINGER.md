# Deploying Sanganeb Limo to Hostinger

## Prerequisites
- Hostinger account with Node.js hosting enabled
- Git installed locally
- Node.js 20.x installed locally

## Step 1: Prepare Your Project for Deployment

### 1.1 Download Your Project from Replit
You can download your project using Git:

```bash
# Clone the repository locally
git clone YOUR_REPLIT_GIT_URL
cd sanganeb-limo
```

Or download as ZIP from Replit and extract it.

### 1.2 Create Environment Variables File
Create a `.env` file in the root directory:

```env
NODE_ENV=production
RESEND_API_KEY=your_resend_api_key_here
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key_here
VITE_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key_here
SESSION_SECRET=your_session_secret_here
PORT=5000
```

**Important**: Replace the placeholder values with your actual credentials.

**Note on Stripe Keys**: 
- For testing: Use keys starting with `sk_test_` and `pk_test_`
- For production: Use keys starting with `sk_live_` and `pk_live_`
- Get your keys from https://dashboard.stripe.com/apikeys

## Step 2: Build the Project

Run the build command locally to ensure everything works:

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

This will:
1. Build the React frontend (output to `dist/client`)
2. Bundle the Express backend (output to `dist/index.js`)

## Step 3: Prepare Files for Hostinger

### 3.1 Files to Upload
Upload these files/folders to your Hostinger hosting:
- `dist/` - Built application
- `node_modules/` - Dependencies (or run npm install on server)
- `package.json` - Package configuration
- `package-lock.json` - Lock file
- `attached_assets/` - Your images and assets
- `.env` - Environment variables (set in Hostinger control panel instead)

### 3.2 Files NOT to Upload
- `client/` - Source files (already built)
- `server/` - Source files (already built)
- `.replit` - Replit configuration
- `.cache/` - Cache files
- `*.ts` files - TypeScript source (already compiled)

## Step 4: Configure Hostinger

### 4.1 Access Hostinger Control Panel
1. Log in to your Hostinger account
2. Go to **Hosting** → **Manage**
3. Find your domain/subdomain

### 4.2 Set Up Node.js Application
1. In hPanel, go to **Advanced** → **Node.js**
2. Click **Create Application**
3. Configure:
   - **Node.js version**: 20.x
   - **Application root**: `/public_html` (or your chosen directory)
   - **Application URL**: Your domain (e.g., sanganeblimo.com)
   - **Application startup file**: `dist/index.js`
   - **Environment variables**: Add your variables:
     ```
     NODE_ENV=production
     RESEND_API_KEY=your_resend_key
     STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
     VITE_STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
     SESSION_SECRET=your_secret
     PORT=5000
     ```

### 4.3 Upload Files
Using **File Manager** or **FTP**:

1. **Via File Manager**:
   - Go to **Files** → **File Manager**
   - Navigate to your application root
   - Upload the files listed in Step 3.1
   - Extract if uploaded as ZIP

2. **Via FTP** (recommended for large uploads):
   - Use FileZilla or similar FTP client
   - Connect using credentials from Hostinger
   - Upload all necessary files

### 4.4 Install Dependencies
1. In Hostinger control panel, go to **Advanced** → **SSH**
2. Enable SSH access
3. Connect via SSH:
   ```bash
   ssh u123456789@your-domain.com
   ```
4. Navigate to your application directory:
   ```bash
   cd public_html
   ```
5. Install dependencies:
   ```bash
   npm install --production
   ```

## Step 5: Start the Application

### 5.1 Start via Hostinger Panel
1. Go to **Node.js** in hPanel
2. Find your application
3. Click **Start Application**

### 5.2 Start via SSH
```bash
npm start
```

## Step 6: Configure Domain & SSL

### 6.1 Point Domain to Hosting
1. In Hostinger, go to **Domains** → **Manage**
2. Ensure your domain points to the correct hosting
3. DNS records should be:
   - A record pointing to Hostinger IP
   - Optional: CNAME for www

### 6.2 Enable SSL Certificate
1. Go to **Security** → **SSL**
2. Install free SSL certificate (Let's Encrypt)
3. Force HTTPS redirect

## Step 7: Verify Deployment

Visit your domain:
- https://yourdomain.com

Test:
1. ✅ Homepage loads correctly
2. ✅ All images display (fleet vehicles, logo)
3. ✅ Navigation works
4. ✅ Booking form submits successfully
5. ✅ Contact form sends emails
6. ✅ WhatsApp button functions

## Troubleshooting

### Issue: Application Won't Start
**Solution**: Check Node.js logs in hPanel → Node.js → View Logs

### Issue: "Cannot find module"
**Solution**: Run `npm install` again via SSH

### Issue: Images Not Loading
**Solution**: 
- Ensure `attached_assets/` folder uploaded correctly
- Check file permissions (should be 644 for files, 755 for directories)

### Issue: Email Not Sending
**Solution**:
- Verify RESEND_API_KEY in environment variables
- Check Resend dashboard for API limits
- Verify "from" email domain is verified in Resend

### Issue: Payment Processing Not Working
**Solution**:
- Verify STRIPE_SECRET_KEY and VITE_STRIPE_PUBLIC_KEY are set
- Ensure you're using live keys (sk_live_ and pk_live_) for production
- Check Stripe dashboard for API errors
- Verify your Stripe account is fully activated (not in test mode)

### Issue: Port Already in Use
**Solution**: 
- Hostinger assigns ports automatically
- Check assigned port in Node.js panel
- Update PORT environment variable

## Updating the Website

When you need to update:

1. **Make changes in Replit** (or locally)
2. **Rebuild**: `npm run build`
3. **Upload new `dist/` folder** to Hostinger
4. **Restart application** in Node.js panel

## Performance Optimization

### Enable Compression
Create `.htaccess` in your public directory:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Cache Static Assets
Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## Support

If you encounter issues:
1. Check Hostinger Knowledge Base: https://support.hostinger.com
2. Contact Hostinger Support
3. Check application logs in hPanel → Node.js → Logs

## Important Notes

- **Backups**: Hostinger provides automatic backups, but keep your own copy
- **Monitoring**: Check your application periodically
- **Email Limits**: Resend free tier has sending limits - monitor usage
- **Updates**: Keep Node.js packages updated for security

## Alternative: Using Git Deployment

For easier updates, you can set up Git deployment:

1. Initialize Git in your project (if not already done)
2. Push to GitHub/GitLab
3. In Hostinger, use Git Version Control to pull updates
4. Automatic deployments on push

This makes updating much easier - just push changes and they deploy automatically!
