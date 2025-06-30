# Contact Form Setup Guide

## Current Issue
The contact form is failing because EmailJS credentials need to be properly configured with your actual EmailJS account.

## Quick Fix Steps

### 1. Create EmailJS Account (if you don't have one)
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### 2. Set Up EmailJS Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup wizard
5. Copy the **Service ID** (starts with `service_`)

### 3. Create EmailJS Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:
```
Subject: New Contact Form Submission - {{to_name}}

Hello {{to_name}},

Thank you for your interest in Remarkably! We've received your message:

Name: {{first_name}} {{last_name}}
Email: {{to_email}}
Company: {{company}}
Role: {{role}}
Message: {{message}}

We'll be in touch within 24 hours to schedule your personalized demo.

Best regards,
The Remarkably Team
```
4. Copy the **Template ID** (starts with `template_`)

### 4. Get Public Key
1. Go to **Integration** tab
2. Copy your **Public Key**

### 5. Update Environment Variables
Edit the `.env.local` file with your actual credentials:

```bash
# Replace with your actual EmailJS credentials
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
```

### 6. Restart Development Server
```bash
npm run dev
```

## Testing
1. Go to `localhost:3000/beta/contact` (or whatever port you're using)
2. Fill out the contact form
3. Submit the form
4. Check browser console for detailed logs
5. Check your email for the welcome message

## Debugging
The enhanced error handling will now show:
- Detailed error messages in the console
- Configuration validation errors
- Specific error codes (401, 404, etc.)
- Debug information in development mode

## Common Issues
- **401 Error**: Wrong Public Key
- **404 Error**: Wrong Service ID or Template ID
- **400 Error**: Template variables don't match
- **Configuration Error**: Environment variables not loaded correctly

## Current Fallback Values
If no environment variables are set, the system uses these fallback values:
- Public Key: `ro0uo77jCD6Wq_ev8`
- Service ID: `service_khbhigg`
- Template ID: `template_uqob2bs`

These may be expired or invalid, which is why you need to set up your own EmailJS account.