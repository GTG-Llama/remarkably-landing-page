// Local SEO utilities for Singapore and Southeast Asia markets
import { trackEvent } from './analytics';

export interface LocalSEOConfig {
  businessName: string;
  region: string;
  city: string;
  country: string;
  countryCode: string;
  language: string;
  timezone: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  localKeywords: string[];
  competitors: string[];
  marketFocus: string[];
}

// Regional configurations for Remarkably's target markets
export const regionalConfigs: Record<string, LocalSEOConfig> = {
  singapore: {
    businessName: 'Remarkably Singapore',
    region: 'Singapore',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    language: 'en-SG',
    timezone: 'Asia/Singapore',
    coordinates: {
      latitude: 1.3521,
      longitude: 103.8198
    },
    localKeywords: [
      'Singapore MOE schools',
      'Singapore education technology',
      'AI grading Singapore',
      'essay marking Singapore',
      'Singapore teachers',
      'MOE approved grading',
      'Singapore curriculum',
      'PSLE essay grading',
      'O Level essay marking',
      'A Level grading Singapore'
    ],
    competitors: [
      'Gradescope',
      'Turnitin',
      'EssayGrader',
      'PaperRater'
    ],
    marketFocus: [
      'MOE schools',
      'International schools',
      'Tuition centers',
      'Private schools'
    ]
  },
  
  malaysia: {
    businessName: 'Remarkably Malaysia',
    region: 'Kuala Lumpur',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    countryCode: 'MY',
    language: 'en-MY',
    timezone: 'Asia/Kuala_Lumpur',
    coordinates: {
      latitude: 3.1390,
      longitude: 101.6869
    },
    localKeywords: [
      'Malaysia education technology',
      'AI grading Malaysia',
      'essay marking Malaysia',
      'Malaysian schools',
      'SPM essay grading',
      'STPM grading Malaysia',
      'Bahasa Malaysia essays',
      'English essays Malaysia',
      'Malaysia curriculum'
    ],
    competitors: [
      'Gradescope',
      'Turnitin',
      'Local education platforms'
    ],
    marketFocus: [
      'Government schools',
      'Private schools',
      'International schools',
      'Tuition centers'
    ]
  },
  
  indonesia: {
    businessName: 'Remarkably Indonesia',
    region: 'Jakarta',
    city: 'Jakarta',
    country: 'Indonesia',
    countryCode: 'ID',
    language: 'id-ID',
    timezone: 'Asia/Jakarta',
    coordinates: {
      latitude: -6.2088,
      longitude: 106.8456
    },
    localKeywords: [
      'Indonesia education technology',
      'AI grading Indonesia',
      'essay marking Indonesia',
      'Indonesian schools',
      'Bahasa Indonesia essays',
      'English essays Indonesia',
      'Jakarta schools',
      'Indonesian curriculum'
    ],
    competitors: [
      'Ruangguru',
      'Zenius',
      'Quipper'
    ],
    marketFocus: [
      'International schools',
      'Private schools',
      'Bilingual schools',
      'English language centers'
    ]
  },
  
  vietnam: {
    businessName: 'Remarkably Vietnam',
    region: 'Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    countryCode: 'VN',
    language: 'vi-VN',
    timezone: 'Asia/Ho_Chi_Minh',
    coordinates: {
      latitude: 10.8231,
      longitude: 106.6297
    },
    localKeywords: [
      'Vietnam education technology',
      'AI grading Vietnam',
      'essay marking Vietnam',
      'Vietnamese schools',
      'English essays Vietnam',
      'Ho Chi Minh schools',
      'Hanoi schools',
      'Vietnamese curriculum'
    ],
    competitors: [
      'ELSA Speak',
      'Monkey Junior',
      'Local education platforms'
    ],
    marketFocus: [
      'International schools',
      'Private schools',
      'English language centers',
      'Bilingual schools'
    ]
  }
};

// Generate local business schema markup
export const generateLocalBusinessSchema = (region: string) => {
  const config = regionalConfigs[region];
  if (!config) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.remarkably.ink/${region}#business`,
    "name": config.businessName,
    "alternateName": "Remarkably",
    "description": `AI-powered essay grading platform for ${config.country} educators`,
    "url": `https://www.remarkably.ink/${region}`,
    "logo": "https://www.remarkably.ink/remarkably-logo-black.png",
    "image": "https://www.remarkably.ink/remarkably-og-image.png",
    "telephone": "+65-XXXX-XXXX", // Replace with actual phone
    "address": {
      "@type": "PostalAddress",
      "addressCountry": config.countryCode,
      "addressRegion": config.region,
      "addressLocality": config.city
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": config.coordinates.latitude,
      "longitude": config.coordinates.longitude
    },
    "areaServed": {
      "@type": "Country",
      "name": config.country
    },
    "serviceArea": {
      "@type": "Country",
      "name": config.country
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Grading Services",
      "itemListElement": config.marketFocus.map(focus => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `AI Essay Grading for ${focus}`,
          "description": `Specialized AI grading solutions for ${focus} in ${config.country}`
        }
      }))
    },
    "sameAs": [
      "https://www.linkedin.com/company/remarkably-ai",
      "https://twitter.com/remarkably_ai"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday", 
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
};

// Generate region-specific meta tags
export const generateLocalMetaTags = (region: string) => {
  const config = regionalConfigs[region];
  if (!config) return {};

  return {
    'geo.region': config.countryCode,
    'geo.country': config.country,
    'geo.placename': config.city,
    'geo.position': `${config.coordinates.latitude};${config.coordinates.longitude}`,
    'ICBM': `${config.coordinates.latitude}, ${config.coordinates.longitude}`,
    'language': config.language,
    'content-language': config.language
  };
};

// Generate hreflang attributes for international SEO
export const generateHreflangLinks = (currentRegion?: string) => {
  const hreflangs = [
    { hreflang: 'x-default', href: 'https://www.remarkably.ink' },
    { hreflang: 'en', href: 'https://www.remarkably.ink' },
    { hreflang: 'en-sg', href: 'https://www.remarkably.ink/singapore' },
    { hreflang: 'en-my', href: 'https://www.remarkably.ink/malaysia' },
    { hreflang: 'id-id', href: 'https://www.remarkably.ink/indonesia' },
    { hreflang: 'vi-vn', href: 'https://www.remarkably.ink/vietnam' }
  ];

  // Filter out current region to avoid self-referencing
  return currentRegion 
    ? hreflangs.filter(link => !link.href.includes(currentRegion))
    : hreflangs;
};

// Local keyword optimization
export const optimizeForLocalKeywords = (content: string, region: string): string => {
  const config = regionalConfigs[region];
  if (!config) return content;

  let optimizedContent = content;
  
  // Naturally integrate local keywords
  config.localKeywords.forEach(keyword => {
    const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = optimizedContent.match(keywordRegex);
    const density = matches ? matches.length / optimizedContent.split(' ').length : 0;
    
    // If keyword density is too low, add it naturally
    if (density < 0.005) {
      const sentences = optimizedContent.split('. ');
      const randomIndex = Math.floor(Math.random() * sentences.length);
      sentences[randomIndex] = sentences[randomIndex].replace(
        /education/gi, 
        `education in ${config.country}`
      );
      optimizedContent = sentences.join('. ');
    }
  });

  return optimizedContent;
};

// Local citation opportunities
export const getLocalCitationOpportunities = (region: string): Array<{
  name: string;
  url: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
}> => {
  const config = regionalConfigs[region];
  if (!config) return [];

  const baseCitations = [
    { name: 'Google My Business', url: 'https://business.google.com', type: 'Directory', priority: 'high' as const },
    { name: 'Bing Places', url: 'https://www.bingplaces.com', type: 'Directory', priority: 'high' as const },
    { name: 'LinkedIn Company Page', url: 'https://linkedin.com/company/remarkably-ai', type: 'Social', priority: 'high' as const }
  ];

  // Region-specific citations
  const regionalCitations: Record<string, Array<{name: string, url: string, type: string, priority: 'high' | 'medium' | 'low'}>> = {
    singapore: [
      { name: 'Singapore Business Directory', url: 'https://www.singaporebusiness.directory', type: 'Directory', priority: 'medium' },
      { name: 'Yellow Pages Singapore', url: 'https://www.yellowpages.com.sg', type: 'Directory', priority: 'medium' },
      { name: 'Singapore Education Directory', url: 'https://www.moe.gov.sg', type: 'Education', priority: 'high' }
    ],
    malaysia: [
      { name: 'Malaysia Business Directory', url: 'https://www.malaysiabusiness.my', type: 'Directory', priority: 'medium' },
      { name: 'Yellow Pages Malaysia', url: 'https://www.yellowpages.my', type: 'Directory', priority: 'medium' }
    ],
    indonesia: [
      { name: 'Indonesia Business Directory', url: 'https://www.indonesiabusiness.id', type: 'Directory', priority: 'medium' },
      { name: 'Yellow Pages Indonesia', url: 'https://www.yellowpages.co.id', type: 'Directory', priority: 'medium' }
    ],
    vietnam: [
      { name: 'Vietnam Business Directory', url: 'https://www.vietnambusiness.vn', type: 'Directory', priority: 'medium' },
      { name: 'Yellow Pages Vietnam', url: 'https://www.yellowpages.vn', type: 'Directory', priority: 'medium' }
    ]
  };

  return [...baseCitations, ...(regionalCitations[region] || [])];
};

// Local competitor analysis
export const analyzeLocalCompetitors = (region: string) => {
  const config = regionalConfigs[region];
  if (!config) return null;

  return {
    region: config.country,
    competitors: config.competitors,
    marketFocus: config.marketFocus,
    opportunities: [
      'Focus on local curriculum alignment',
      'Emphasize language support',
      'Partner with local educational institutions',
      'Provide region-specific customer support',
      'Adapt pricing for local market conditions'
    ],
    threats: [
      'Established local players',
      'Language barriers',
      'Regulatory requirements',
      'Cultural differences in education'
    ]
  };
};

// Track local SEO performance
export const trackLocalSEOMetrics = (region: string, metrics: {
  localSearchRank?: number;
  organicTraffic?: number;
  localLeads?: number;
  citationCount?: number;
}) => {
  trackEvent('local_seo_metrics', {
    region,
    ...metrics,
    timestamp: new Date().toISOString()
  });
};

// Initialize local SEO monitoring
export const initLocalSEOMonitoring = (region: string) => {
  const config = regionalConfigs[region];
  if (!config) return;

  // Track regional page views
  trackEvent('regional_page_view', {
    region,
    country: config.country,
    language: config.language,
    timestamp: new Date().toISOString()
  });

  // Monitor local search performance
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const distance = calculateDistance(
        position.coords.latitude,
        position.coords.longitude,
        config.coordinates.latitude,
        config.coordinates.longitude
      );
      
      trackEvent('user_location_proximity', {
        region,
        distance: Math.round(distance),
        timestamp: new Date().toISOString()
      });
    });
  }
};

// Calculate distance between two coordinates (in km)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Export utility functions
export const getRegionalConfig = (region: string) => regionalConfigs[region];
export const getAllRegions = () => Object.keys(regionalConfigs); 