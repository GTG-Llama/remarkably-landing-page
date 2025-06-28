# Production Routing Fix Guide

## Problem
The production website at remarkably.ink is serving the homepage for all routes (`/contact`, `/beta`, etc.) instead of letting React Router handle client-side routing.

## Root Cause
The web server is not configured to handle Single Page Application (SPA) routing. All routes are falling back to serving the same content instead of serving `index.html` for React Router to handle.

## Solutions by Hosting Type

### 1. Nginx Server (Self-hosted/VPS)

**Quick Fix** - Use the simple configuration:
```bash
# Copy the simple config to your server
sudo cp nginx-simple.conf /etc/nginx/sites-available/remarkably.ink
sudo ln -s /etc/nginx/sites-available/remarkably.ink /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Complete Fix** - Use the full configuration:
```bash
# Copy the full config for production
sudo cp nginx.conf /etc/nginx/sites-available/remarkably.ink
sudo ln -s /etc/nginx/sites-available/remarkably.ink /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Key nginx directive:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 2. Netlify Hosting

1. Upload `netlify.toml` to your repository root
2. Deploy - Netlify will automatically use the configuration
3. The key redirect rule: `from = "/*"` `to = "/index.html"` `status = 200`

### 3. Vercel Hosting

1. Upload `vercel.json` to your repository root
2. Deploy - Vercel will automatically use the configuration
3. The key rewrite rule: `"source": "/(.*)"` `"destination": "/index.html"`

### 4. Apache Server

1. Upload `.htaccess` to your web root directory alongside `index.html`
2. Ensure mod_rewrite is enabled: `sudo a2enmod rewrite`
3. Restart Apache: `sudo systemctl restart apache2`

## Deployment Steps

### Step 1: Build the Application
```bash
npm run build
```

### Step 2: Deploy Based on Your Server Type

**For Nginx/Apache:**
1. Copy `dist/` contents to your web root (e.g., `/var/www/remarkably/`)
2. Apply the appropriate server configuration above
3. Restart your web server

**For Netlify/Vercel:**
1. Push code with configuration file to your repository
2. Connect your repository to the hosting service
3. Deploy automatically

### Step 3: Test the Fix

Test these URLs to ensure they work:
- https://remarkably.ink/contact
- https://remarkably.ink/beta
- https://remarkably.ink/beta/features
- https://remarkably.ink/beta/features/handwriting-recognition

All should load the correct React components, not the homepage.

## Current Status

✅ **Local Development**: Working correctly on localhost:8080
❌ **Production**: Serving homepage for all routes
🔧 **Fix Needed**: Server configuration for SPA routing

## Files Created

- `nginx.conf` - Complete nginx configuration
- `nginx-simple.conf` - Minimal nginx configuration
- `netlify.toml` - Netlify deployment configuration
- `vercel.json` - Vercel deployment configuration
- `.htaccess` - Apache server configuration

## Next Steps

1. Identify your current hosting setup (nginx, Apache, Netlify, Vercel, etc.)
2. Apply the appropriate configuration from the files above
3. Test the routes to confirm the fix works
4. Update your deployment process to include the server configuration

## Common Issues

- **404 errors**: Server config not applied correctly
- **Blank pages**: Check browser console for JavaScript errors
- **CSS not loading**: Check static asset paths and cache headers

The key is making sure your web server serves `index.html` for all routes that don't match static files, allowing React Router to handle the routing on the client side.