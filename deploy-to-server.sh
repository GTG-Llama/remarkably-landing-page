#!/bin/bash

# Deployment script for remarkably.ink
# Run this script on your production server

echo "🚀 Deploying Remarkably.ink with SPA routing fix..."

# Variables - UPDATE THESE
DOMAIN="remarkably.ink"
WEB_ROOT="/var/www/remarkably"
NGINX_SITES="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
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
    print_error "Please run this script as root (use sudo)"
    exit 1
fi

# Step 1: Backup existing nginx config
print_warning "Backing up existing nginx configuration..."
if [ -f "$NGINX_SITES/$DOMAIN" ]; then
    cp "$NGINX_SITES/$DOMAIN" "$NGINX_SITES/$DOMAIN.backup.$(date +%Y%m%d_%H%M%S)"
    print_status "Existing config backed up"
fi

# Step 2: Copy new nginx configuration
print_warning "Installing new nginx configuration..."
if [ -f "nginx-production.conf" ]; then
    cp nginx-production.conf "$NGINX_SITES/$DOMAIN"
    print_status "New nginx config installed"
else
    print_error "nginx-production.conf not found! Make sure you're running this from the project directory."
    exit 1
fi

# Step 3: Enable the site
print_warning "Enabling nginx site..."
if [ ! -L "$NGINX_ENABLED/$DOMAIN" ]; then
    ln -s "$NGINX_SITES/$DOMAIN" "$NGINX_ENABLED/$DOMAIN"
fi
print_status "Site enabled"

# Step 4: Test nginx configuration
print_warning "Testing nginx configuration..."
if nginx -t; then
    print_status "Nginx configuration is valid"
else
    print_error "Nginx configuration test failed!"
    print_warning "Restoring backup configuration..."
    if [ -f "$NGINX_SITES/$DOMAIN.backup"* ]; then
        cp "$NGINX_SITES/$DOMAIN.backup"* "$NGINX_SITES/$DOMAIN"
    fi
    exit 1
fi

# Step 5: Reload nginx
print_warning "Reloading nginx..."
if systemctl reload nginx; then
    print_status "Nginx reloaded successfully"
else
    print_error "Failed to reload nginx"
    exit 1
fi

# Step 6: Check if web root exists and has content
print_warning "Checking web root..."
if [ ! -d "$WEB_ROOT" ]; then
    print_warning "Web root $WEB_ROOT doesn't exist. Creating it..."
    mkdir -p "$WEB_ROOT"
fi

if [ ! -f "$WEB_ROOT/index.html" ]; then
    print_warning "No index.html found in $WEB_ROOT"
    print_warning "Make sure to copy your built dist/ folder contents to $WEB_ROOT"
    echo ""
    echo "To deploy your built application:"
    echo "1. Build your project: npm run build"
    echo "2. Copy dist contents: rsync -av dist/ $WEB_ROOT/"
    echo "3. Set proper permissions: chown -R www-data:www-data $WEB_ROOT"
fi

# Step 7: Test the routes
print_warning "Testing routes..."
echo ""
echo "Please test these URLs in your browser:"
echo "• https://$DOMAIN/"
echo "• https://$DOMAIN/contact"
echo "• https://$DOMAIN/beta"
echo "• https://$DOMAIN/beta/features"
echo ""
echo "All should load the React application correctly (not show 404 or serve wrong content)"

print_status "Deployment script completed!"
echo ""
echo "📝 Next steps:"
echo "1. Copy your built application to $WEB_ROOT"
echo "2. Set proper file permissions"
echo "3. Test all routes listed above"
echo "4. Check nginx error logs if issues persist: tail -f /var/log/nginx/error.log"