// Google Analytics 4 tracking functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track demo interactions
export const trackDemo = (demoStep: string) => {
  trackEvent('demo_interaction', 'Demo', demoStep);
};

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', 'Lead Generation', formType);
};

// Track pricing interactions
export const trackPricingInteraction = (plan: string, action: string) => {
  trackEvent(action, 'Pricing', plan);
};

// Track feature engagement
export const trackFeatureEngagement = (feature: string) => {
  trackEvent('feature_click', 'Features', feature);
};

// SEO Performance Tracking
export const trackSEOMetrics = () => {
  // Track Core Web Vitals
  if (typeof window !== 'undefined' && 'web-vital' in window) {
    // This would integrate with web-vitals library
    // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
  }
};

// Social Media Tracking
export const trackSocialShare = (platform: string, url: string) => {
  trackEvent('social_share', 'Social Media', `${platform}_${url}`);
};

// Search Console Integration Helper
export const generateSearchConsoleData = () => {
  return {
    sitemap: 'https://www.remarkably.ink/sitemap.xml',
    robots: 'https://www.remarkably.ink/robots.txt',
    domain: 'remarkably.ink',
    pages: [
      '/',
      '/features',
      '/benefits',
      '/pricing',
      '/demo',
      '/testimonials',
      '/about-us',
      '/contact',
      '/local-school',
      '/international-school'
    ]
  };
};

// Schema.org structured data helpers
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateProductSchema = (product: {
  name: string,
  description: string,
  price: string,
  currency: string,
  availability: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": `https://schema.org/${product.availability}`
    }
  };
}; 