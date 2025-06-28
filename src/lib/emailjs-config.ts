// EmailJS configuration with environment variables for security
export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ro0uo77jCD6Wq_ev8",
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_khbhigg",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_uqob2bs",
};

// Validate that required environment variables are set
if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  console.warn("VITE_EMAILJS_PUBLIC_KEY environment variable is not set. Using fallback value.");
}

if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
  console.warn("VITE_EMAILJS_SERVICE_ID environment variable is not set. Using fallback value.");
}

if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
  console.warn("VITE_EMAILJS_TEMPLATE_ID environment variable is not set. Using fallback value.");
}
 