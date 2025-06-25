export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  alternateLinks?: { href: string; hreflang: string }[];
}

const baseUrl = 'https://www.remarkably.ink';
const defaultImage = `${baseUrl}/remarkably-og-image.png`;

export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Remarkably - AI-Powered Essay Grading Platform | Save 6-7x Time',
    description: 'Transform essay grading with AI. Remarkably helps teachers grade handwritten and digital essays 6-7x faster while maintaining quality feedback. Trusted by MOE schools across Singapore.',
    keywords: [
      'AI essay grading',
      'automated essay scoring',
      'handwritten essay grading',
      'Singapore MOE schools',
      'teacher productivity tools',
      'education technology',
      'essay feedback AI',
      'student assessment platform',
      'grading automation',
      'teaching assistant AI'
    ],
    canonical: baseUrl,
    ogImage: defaultImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Remarkably',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      description: 'AI-powered essay grading platform that helps teachers grade 6-7x faster while maintaining quality feedback',
      url: baseUrl,
      provider: {
        '@type': 'Organization',
        name: 'Lenor AI Pte. Ltd.',
        url: baseUrl,
        logo: `${baseUrl}/remarkably-logo-black.png`,
        foundingDate: '2023',
        founders: [
          {
            '@type': 'Person',
            name: 'Harry Wu',
            jobTitle: 'CEO & Co-Founder'
          }
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'SG',
          addressRegion: 'Singapore'
        }
      },
      offers: {
        '@type': 'Offer',
        category: 'Education Software',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5'
      }
    }
  },
  
  features: {
    title: 'AI Essay Grading Features | Handwritten & Digital Essays | Remarkably',
    description: 'Discover Remarkably\'s advanced AI features: handwritten essay OCR, personalized feedback, rubric alignment, bulk grading, and real-time analytics for teachers.',
    keywords: [
      'AI grading features',
      'handwritten essay OCR',
      'personalized feedback AI',
      'rubric-based grading',
      'bulk essay grading',
      'teacher dashboard',
      'student progress tracking'
    ],
    canonical: `${baseUrl}/features`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Remarkably Features',
      description: 'Comprehensive AI essay grading features for educators',
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'Remarkably',
        applicationCategory: 'EducationalApplication',
        featureList: [
          'Handwritten Essay OCR',
          'AI-Powered Feedback Generation',
          'Rubric-Based Grading',
          'Bulk Essay Processing',
          'Student Progress Analytics',
          'Custom Feedback Styles',
          'Multi-Format Support'
        ]
      }
    }
  },

  benefits: {
    title: 'Benefits of AI Essay Grading | Save Time & Improve Teaching | Remarkably',
    description: 'Discover how Remarkably\'s AI grading saves teachers 6-7x time, reduces burnout, improves feedback quality, and enhances student learning outcomes.',
    keywords: [
      'teacher time savings',
      'reduce grading burnout',
      'improve feedback quality',
      'student learning outcomes',
      'teacher productivity',
      'education efficiency'
    ],
    canonical: `${baseUrl}/benefits`
  },

  pricing: {
    title: 'Remarkably Pricing Plans | Flexible AI Grading Solutions for Schools',
    description: 'Explore Remarkably\'s flexible pricing plans designed for individual teachers, schools, and districts. Free trial available. Contact us for custom enterprise solutions.',
    keywords: [
      'AI grading pricing',
      'education software pricing',
      'school software plans',
      'teacher tools pricing',
      'bulk licensing discounts'
    ],
    canonical: `${baseUrl}/pricing`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Remarkably Pricing',
      description: 'Flexible pricing plans for AI essay grading',
      mainEntity: {
        '@type': 'Product',
        name: 'Remarkably AI Grading Platform',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Plan',
            description: 'Perfect for individual teachers',
            category: 'Education Software'
          },
          {
            '@type': 'Offer', 
            name: 'School Plan',
            description: 'Designed for entire schools',
            category: 'Education Software'
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Plan',
            description: 'Custom solutions for districts',
            category: 'Education Software'
          }
        ]
      }
    }
  },

  demo: {
    title: 'Live Demo | See AI Essay Grading in Action | Remarkably',
    description: 'Experience Remarkably\'s AI essay grading platform with our interactive demo. See how we grade real handwritten essays in under 2 minutes.',
    keywords: [
      'AI grading demo',
      'essay grading demonstration',
      'handwritten essay demo',
      'live grading example',
      'interactive demo'
    ],
    canonical: `${baseUrl}/demo`
  },

  testimonials: {
    title: 'Teacher Testimonials | Real Reviews of AI Essay Grading | Remarkably',
    description: 'Read authentic testimonials from teachers and educators who use Remarkably\'s AI grading platform. See real results and time savings.',
    keywords: [
      'teacher testimonials',
      'AI grading reviews',
      'educator feedback',
      'MOE school reviews',
      'teacher success stories'
    ],
    canonical: `${baseUrl}/testimonials`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Teacher Testimonials',
      description: 'Real testimonials from educators using Remarkably',
      mainEntity: {
        '@type': 'Organization',
        name: 'Remarkably',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5'
        }
      }
    }
  },

  'about-us': {
    title: 'About Remarkably | NUS-Founded AI Education Startup | Our Story',
    description: 'Learn about Remarkably\'s mission to empower educators with AI. Founded at NUS, backed by Google, NVIDIA, and MongoDB. Meet our team of education innovators.',
    keywords: [
      'about remarkably',
      'NUS startup',
      'education AI company',
      'founder story',
      'Harry Wu CEO',
      'Singapore edtech'
    ],
    canonical: `${baseUrl}/about-us`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Remarkably',
      description: 'Learn about our mission to transform education with AI',
      mainEntity: {
        '@type': 'Organization',
        name: 'Lenor AI Pte. Ltd.',
        alternateName: 'Remarkably',
        url: baseUrl,
        logo: `${baseUrl}/remarkably-logo-black.png`,
        foundingDate: '2023',
        foundingLocation: {
          '@type': 'Place',
          name: 'Singapore'
        },
        founder: {
          '@type': 'Person',
          name: 'Harry Wu',
          jobTitle: 'CEO & Co-Founder',
          alumniOf: 'National University of Singapore'
        },
        memberOf: [
          'Google for Startups',
          'NVIDIA Inception Program',
          'MongoDB for Startups',
          'NUS Enterprise'
        ]
      }
    }
  },

  achievements: {
    title: 'Awards & Recognition | Remarkably Achievements | Backed by Global Leaders',
    description: 'Remarkably is backed by Google, NVIDIA, MongoDB, and NUS Enterprise. Winner of multiple startup competitions and innovation awards.',
    keywords: [
      'startup awards',
      'Google for Startups',
      'NVIDIA Inception',
      'NUS Enterprise',
      'education innovation awards'
    ],
    canonical: `${baseUrl}/achievements`
  },

  contact: {
    title: 'Contact Remarkably | Book Demo | Get Support | AI Essay Grading',
    description: 'Contact Remarkably for demos, support, or partnerships. Book a personalized demo to see AI essay grading in action. Multiple ways to reach us.',
    keywords: [
      'contact remarkably',
      'book demo',
      'customer support',
      'partnership inquiries',
      'sales contact'
    ],
    canonical: `${baseUrl}/contact`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Remarkably',
      description: 'Get in touch with our team',
      mainEntity: {
        '@type': 'Organization',
        name: 'Remarkably',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['English', 'Chinese']
        }
      }
    }
  },

  'local-school': {
    title: 'AI Essay Grading for Singapore MOE Schools | Local School Solutions',
    description: 'Remarkably\'s AI grading platform designed specifically for Singapore MOE schools. Supports local curriculum, PSLE, O-Level, and A-Level essay formats.',
    keywords: [
      'Singapore MOE schools',
      'local school AI grading',
      'PSLE essay grading',
      'O-Level essays',
      'A-Level grading',
      'Singapore curriculum'
    ],
    canonical: `${baseUrl}/local-school`,
    alternateLinks: [
      { href: `${baseUrl}/local-school`, hreflang: 'en-sg' }
    ]
  },

  'international-school': {
    title: 'AI Essay Grading for International Schools | Global Curriculum Support',
    description: 'Remarkably supports international curricula including IB, Cambridge IGCSE, AP, and more. Trusted by international schools across Asia.',
    keywords: [
      'international school AI grading',
      'IB essay grading',
      'Cambridge IGCSE',
      'AP essay grading',
      'international curriculum'
    ],
    canonical: `${baseUrl}/international-school`,
    alternateLinks: [
      { href: `${baseUrl}/international-school`, hreflang: 'en' }
    ]
  }
};

export const getPageSEO = (pageKey: string): SEOConfig => {
  return seoConfigs[pageKey] || seoConfigs.home;
};

export const generateStructuredData = (data: object): string => {
  return JSON.stringify(data, null, 2);
};

// Common meta tags for all pages
export const commonMetaTags = {
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
  'theme-color': '#6366f1',
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'default',
  'apple-mobile-web-app-title': 'Remarkably',
  'application-name': 'Remarkably',
  'msapplication-TileColor': '#6366f1',
  'format-detection': 'telephone=no'
}; 