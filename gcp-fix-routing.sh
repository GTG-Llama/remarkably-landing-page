#!/bin/bash

# Google Cloud VM SPA Routing Fix for remarkably.ink
# Run this script from /var/www/remarkably-landing-page

echo "🔧 Fixing SPA routing on Google Cloud VM..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    print_error "Please run with sudo: sudo ./gcp-fix-routing.sh"
    exit 1
fi

# Variables for Google Cloud setup
DOMAIN="remarkably.ink"
WEB_ROOT="/var/www/remarkably-landing-page/dist"
NGINX_SITES="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"

# Step 1: Check if we're in the right directory
if [ ! -f "nginx-production.conf" ]; then
    print_error "nginx-production.conf not found!"
    print_warning "Make sure you're running this from /var/www/remarkably-landing-page"
    exit 1
fi

if [ ! -d "dist" ]; then
    print_error "dist folder not found!"
    print_warning "Make sure you've built the project with: npm run build"
    exit 1
fi

# Step 2: Create nginx config with correct paths for GCP
print_warning "Creating nginx configuration for Google Cloud VM..."

cat > "$NGINX_SITES/$DOMAIN" << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name remarkably.ink www.remarkably.ink;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name remarkably.ink www.remarkably.ink;
    
    # Document root - points to your dist folder
    root /var/www/remarkably-landing-page/dist;
    index index.html;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|mp4|webm|ogg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
        try_files $uri =404;
    }
    
    # Handle specific files
    location = /robots.txt { try_files $uri =404; access_log off; }
    location = /sitemap.xml { try_files $uri =404; access_log off; }
    location = /site.webmanifest { try_files $uri =404; access_log off; }
    location = /favicon.ico { try_files $uri =404; access_log off; }
    
    # Handle the landing subfolder
    location /landing/ {
        try_files $uri $uri/ /landing/index.html;
    }
    
    # Handle SEO folder
    location /seo/ {
        try_files $uri $uri/ =404;
    }
    
    # CRITICAL: SPA routing fix
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }
    
    # Error pages fallback to index.html
    error_page 404 /index.html;
    error_page 500 502 503 504 /index.html;
}
EOF

print_status "Nginx configuration created"

# Step 3: Enable the site
print_warning "Enabling nginx site..."
rm -f "$NGINX_ENABLED/default"  # Remove default site
ln -sf "$NGINX_SITES/$DOMAIN" "$NGINX_ENABLED/$DOMAIN"
print_status "Site enabled"

# Step 4: Set proper permissions
print_warning "Setting file permissions..."
chown -R www-data:www-data "$WEB_ROOT"
chmod -R 755 "$WEB_ROOT"
print_status "Permissions set"

# Step 5: Test nginx configuration
print_warning "Testing nginx configuration..."
if nginx -t; then
    print_status "Nginx configuration is valid"
else
    print_error "Nginx configuration test failed!"
    exit 1
fi

# Step 6: Reload nginx
print_warning "Reloading nginx..."
if systemctl reload nginx; then
    print_status "Nginx reloaded successfully"
else
    print_error "Failed to reload nginx"
    exit 1
fi

# Step 7: Check nginx status
print_warning "Checking nginx status..."
if systemctl is-active --quiet nginx; then
    print_status "Nginx is running"
else
    print_error "Nginx is not running!"
    systemctl status nginx
    exit 1
fi

# Final status
echo ""
print_status "SPA routing fix completed!"
echo ""
echo "🧪 Test these URLs:"
echo "• https://remarkably.ink/contact"
echo "• https://remarkably.ink/beta"
echo "• https://remarkably.ink/beta/features"
echo ""
echo "All should load the correct React components (not the homepage)"
echo ""
echo "📝 If issues persist:"
echo "• Check logs: sudo tail -f /var/log/nginx/error.log"
echo "• Verify SSL certs are configured"
echo "• Check GCP firewall rules allow ports 80/443"
EOF