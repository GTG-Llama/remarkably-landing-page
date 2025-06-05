/**
 * EmailJS Configuration
 * 
 * To set up email functionality:
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create a new email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{to_email}} - recipient email
 *    - {{to_name}} - recipient name
 *    - {{from_name}} - sender name
 *    - {{subject}} - email subject
 *    - {{message}} - email message content
 * 4. Replace the placeholder values below with your actual EmailJS credentials
 */

export const emailjsConfig = {
  // Your EmailJS public key (from your EmailJS dashboard)
  publicKey: "YOUR_PUBLIC_KEY",
  
  // Your EmailJS service ID (from your EmailJS dashboard)
  serviceId: "YOUR_SERVICE_ID",
  
  // Your EmailJS template ID (from your EmailJS dashboard)
  templateId: "YOUR_TEMPLATE_ID",
};

/**
 * Example EmailJS template for the welcome email:
 * 
 * Subject: Welcome to Remarkably! 🎉
 * 
 * Template content:
 * Hi {{to_name}},
 * 
 * {{message}}
 * 
 * Best regards,
 * {{from_name}}
 */ 