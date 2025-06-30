// EmailJS configuration with environment variables for security
export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ro0uo77jCD6Wq_ev8",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_khbhigg",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_uqob2bs", // Admin notification
  userTemplateId: import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || "template_user_welcome", // User welcome email
};

// Enhanced validation and debugging
const validateEmailJSConfig = () => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if environment variables are set
  if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    warnings.push("VITE_EMAILJS_PUBLIC_KEY environment variable is not set. Using fallback value.");
  }

  if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
    warnings.push("VITE_EMAILJS_SERVICE_ID environment variable is not set. Using fallback value.");
  }

  if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
    warnings.push("VITE_EMAILJS_TEMPLATE_ID environment variable is not set. Using fallback value.");
  }

  if (!import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID) {
    warnings.push("VITE_EMAILJS_USER_TEMPLATE_ID environment variable is not set. Using fallback value.");
  }

  // Validate config format
  if (!emailjsConfig.publicKey || emailjsConfig.publicKey.length < 10) {
    errors.push("EmailJS Public Key appears to be invalid (too short)");
  }

  if (!emailjsConfig.serviceId || !emailjsConfig.serviceId.startsWith('service_')) {
    errors.push("EmailJS Service ID appears to be invalid (should start with 'service_')");
  }

  if (!emailjsConfig.templateId || !emailjsConfig.templateId.startsWith('template_')) {
    errors.push("EmailJS Template ID appears to be invalid (should start with 'template_')");
  }

  // Log warnings and errors
  warnings.forEach(warning => console.warn(`[EmailJS Config] ${warning}`));
  errors.forEach(error => console.error(`[EmailJS Config] ${error}`));

  return { errors, warnings, isValid: errors.length === 0 };
};

// Run validation
export const emailjsValidation = validateEmailJSConfig();

// Debug info (only in development)
if (import.meta.env.DEV) {
  console.log("[EmailJS Config] Configuration:", {
    publicKey: emailjsConfig.publicKey ? `${emailjsConfig.publicKey.substring(0, 6)}...` : 'Not set',
    serviceId: emailjsConfig.serviceId,
    templateId: emailjsConfig.templateId,
    isValid: emailjsValidation.isValid
  });
}
 