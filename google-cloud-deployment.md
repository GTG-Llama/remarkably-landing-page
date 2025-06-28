# Google Cloud VM Deployment Guide for remarkably.ink

## Current Setup Detected
- **Platform**: Google Cloud VM
- **OS**: Debian GNU/Linux 6.1.0-33-cloud-amd64
- **Server**: nginx/1.22.1
- **Location**: `/var/www/remarkably-landing-page`
- **User**: `lenor_eduai`

## Quick Fix Commands

Since you're already on the server and have the files, here are the exact commands to fix the routing:

### Step 1: Navigate to your project directory
```bash
cd /var/www/remarkably-landing-page
```

### Step 2: Create the nginx configuration
```bash
# Copy the nginx config we created
sudo cp nginx-production.conf /etc/nginx/sites-available/remarkably.ink

# Enable the site
sudo ln -sf /etc/nginx/sites-available/remarkably.ink /etc/nginx/sites-enabled/remarkably.ink

# Remove default site if it exists
sudo rm -f /etc/nginx/sites-enabled/default
```

### Step 3: Update the nginx config for your exact paths
```bash
# Edit the config to match your setup
sudo nano /etc/nginx/sites-available/remarkably.ink
```

**Update this line in the config:**
```nginx
# Change from:
root /var/www/remarkably;

# To:
root /var/www/remarkably-landing-page/dist;
```

### Step 4: Test and reload nginx
```bash
# Test the configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx

# Check nginx status
sudo systemctl status nginx
```

### Step 5: Set proper permissions
```bash
# Make sure nginx can read the files
sudo chown -R www-data:www-data /var/www/remarkably-landing-page/dist
sudo chmod -R 755 /var/www/remarkably-landing-page/dist
```

## Alternative: Use your existing deploy.sh script

I see you have a `deploy.sh` script. You can run:
```bash
sudo ./deploy.sh
```

But you'll need to make sure it's configured for your paths.

## Testing the Fix

After applying the configuration, test these URLs:
```bash
# Test from the server
curl -I https://remarkably.ink/contact
curl -I https://remarkably.ink/beta

# Or test in browser:
# https://remarkably.ink/contact
# https://remarkably.ink/beta
# https://remarkably.ink/beta/features
```

## Troubleshooting Commands for Google Cloud VM

```bash
# Check nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check nginx access logs
sudo tail -f /var/log/nginx/access.log

# Restart nginx if needed
sudo systemctl restart nginx

# Check if port 80/443 are open in firewall
sudo ufw status
# or for iptables:
sudo iptables -L

# Check what's listening on port 80/443
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

## Google Cloud Specific Notes

1. **Firewall Rules**: Make sure your GCP firewall allows HTTP (80) and HTTPS (443)
2. **External IP**: Verify your domain points to the correct external IP
3. **SSL Certificates**: Update SSL certificate paths in nginx config if using custom certificates

## Quick Verification

The fix is working when:
- ✅ `remarkably.ink/contact` shows contact page (not homepage)
- ✅ `remarkably.ink/beta` shows beta site (not homepage)
- ✅ All routes work without showing the same content
- ✅ No 404 errors in browser console