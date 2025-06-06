# Contact Form Setup Guide

This guide will help you set up the contact form with EmailJS to automatically send welcome emails to users.

## 📧 EmailJS Setup

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

### Step 3: Create Email Template

1. In your EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. **Option A - Use the HTML Template:**

   - Copy the contents of `emailjs-welcome-template.html`
   - Paste it into the EmailJS template editor (HTML mode)
   - Set the subject to: `Welcome to Remarkably! 🎉`

4. **Option B - Simple Text Template:**
   Use this basic template structure:

   ```html
   Subject: Welcome to Remarkably! 🎉 Hi {{to_name}}, {{message}} Best regards,
   {{from_name}}
   ```

5. Make sure to include these variables in your template:

   - `{{to_email}}` - recipient email
   - `{{to_name}}` - recipient name
   - `{{from_name}}` - sender name
   - `{{subject}}` - email subject
   - `{{message}}` - email message content

6. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to **Account**
2. Find your **Public Key** (also called User ID)

### Step 5: Configure the Application

1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const emailjsConfig = {
  publicKey: "your_actual_public_key_here",
  serviceId: "your_actual_service_id_here",
  templateId: "your_actual_template_id_here",
};
```

## 🧪 Testing the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact` in your browser
3. Fill out the contact form with a valid email address
4. Submit the form
5. Check the email inbox for the welcome message

## 🔧 Customization

### Form Fields

The contact form includes these fields:

- First Name (required)
- Last Name (required)
- Email Address (required)
- School/Organization (optional)
- Role (optional)
- Message (optional)

### Email Content

You can customize the welcome email content by editing the `emailParams.message` in `src/pages/Contact.tsx`.

### Styling

The contact form uses the same design system as the rest of the application with:

- Black borders and shadows
- Colorful accents (yellow, pink, blue, green)
- Responsive layout
- Smooth animations

## 🚨 Important Notes

1. **Rate Limits**: EmailJS free tier has rate limits. Consider upgrading for production use.

2. **Error Handling**: The form includes proper error handling and user feedback via toast notifications.

3. **Validation**: All form fields are validated using Zod schema with TypeScript types.

4. **Security**: EmailJS runs client-side, so sensitive data should not be included in the template.

## 🌐 Deployment

When deploying to production:

1. Ensure your EmailJS credentials are correctly configured
2. Test the contact form on your live site
3. Monitor EmailJS dashboard for delivery statistics
4. Consider setting up email forwarding for form submissions

## 📞 Alternative Email Services

If you prefer not to use EmailJS, you can replace it with:

- **Formspree**: Simple form backend service
- **Netlify Forms**: If hosting on Netlify
- **Custom API**: Your own backend email service
- **SendGrid**: More robust email service for high volume

## 🎯 Features

✅ **Automatic Welcome Email**: Users receive a welcome email immediately after form submission  
✅ **Form Validation**: Comprehensive client-side validation with error messages  
✅ **Success Feedback**: Beautiful success page with animation  
✅ **Responsive Design**: Works perfectly on mobile and desktop  
✅ **TypeScript**: Fully typed for better development experience  
✅ **Error Handling**: Graceful error handling with user-friendly messages

## 🔗 Navigation

The contact page is available at `/contact` and is integrated into the main application routing.
