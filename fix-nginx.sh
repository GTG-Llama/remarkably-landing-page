#!/bin/bash

echo "🔧 Fixing nginx configuration..."

# Remove the broken config
sudo rm -f /etc/nginx/sites-enabled/remarkably.ink
sudo rm -f /etc/nginx/sites-available/remarkably.ink

# Copy the correct config
sudo cp nginx-gcp.conf /etc/nginx/sites-available/remarkably.ink

# Enable the site
sudo ln -sf /etc/nginx/sites-available/remarkably.ink /etc/nginx/sites-enabled/remarkably.ink

# Remove default site
sudo rm -f /etc/nginx/sites-enabled/default

# Test configuration
echo "Testing nginx configuration..."
if sudo nginx -t; then
    echo "✓ Configuration is valid"
    echo "Reloading nginx..."
    sudo systemctl reload nginx
    echo "✓ Nginx reloaded"
    
    # Set permissions
    sudo chown -R www-data:www-data /var/www/remarkably-landing-page/dist
    sudo chmod -R 755 /var/www/remarkably-landing-page/dist
    echo "✓ Permissions set"
    
    echo ""
    echo "🎉 Fix complete! Test these URLs:"
    echo "• https://remarkably.ink/contact"
    echo "• https://remarkably.ink/beta"
    
else
    echo "❌ Configuration test failed"
    sudo nginx -t
fi