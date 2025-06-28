import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedSEOProps {
  pageType?: 'homepage' | 'product' | 'article' | 'contact' | 'about';
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
  readingTime?: number;
  wordCount?: number;
  richSnippets?: {
    faq?: Array<{ question: string; answer: string }>;
    howTo?: Array<{ name: string; text: string }>;
    reviews?: Array<{ author: string; rating: number; text: string; date: string }>;
  };
}

const AdvancedSEOHead: React.FC<AdvancedSEOProps> = ({
  pageType = 'homepage',
  publishedTime,
  modifiedTime,
  articleAuthor,
  readingTime,
  wordCount,
  richSnippets
}) => {
  const baseUrl = 'https://www.remarkably.ink';

  const generateFAQSchema = () => {
    if (!richSnippets?.faq) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": richSnippets.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  };

  const generateHowToSchema = () => {
    if (!richSnippets?.howTo) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use Remarkably AI Essay Grading",
      "description": "Step-by-step guide to using Remarkably for AI-powered essay grading",
      "step": richSnippets.howTo.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text
      }))
    };
  };

  const generateReviewSchema = () => {
    if (!richSnippets?.reviews) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Remarkably AI Essay Grading Platform",
      "review": richSnippets.reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5"
        },
        "reviewBody": review.text,
        "datePublished": review.date
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": richSnippets.reviews.length,
        "bestRating": "5"
      }
    };
  };

  const generateWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Remarkably",
    "url": baseUrl,
    "description": "AI-powered essay grading platform for educators",
    "publisher": {
      "@type": "Organization",
      "name": "Lenor AI Pte. Ltd."
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  });

  const generateLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Remarkably",
    "image": `${baseUrl}/remarkably-logo-black.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG",
      "addressRegion": "Singapore"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "1.3521",
      "longitude": "103.8198"
    },
    "url": baseUrl,
    "telephone": "+65-XXXX-XXXX",
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
  });

  return (
    <Helmet>
      {/* Advanced Performance Optimizations */}
      <link rel="preload" href="/remarkably-logo-black.png" as="image" type="image/png" />
      <link rel="preload" href="/remarkably logo black.png" as="image" type="image/png" />
      
      {/* Resource Hints for Critical Third-Party Resources */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="https://www.linkedin.com" />
      <link rel="dns-prefetch" href="https://platform.twitter.com" />
      
      {/* Article-specific meta tags */}
      {pageType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {pageType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {pageType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      
      {/* Reading time and word count for content pages */}
      {readingTime && (
        <meta name="twitter:label1" content="Reading time" />
      )}
      {readingTime && (
        <meta name="twitter:data1" content={`${readingTime} min read`} />
      )}
      {wordCount && (
        <meta name="twitter:label2" content="Word count" />
      )}
      {wordCount && (
        <meta name="twitter:data2" content={`${wordCount} words`} />
      )}
      
      {/* Enhanced security headers */}
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* Rich Snippets - FAQ Schema */}
      {richSnippets?.faq && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema(), null, 2)}
        </script>
      )}
      
      {/* Rich Snippets - HowTo Schema */}
      {richSnippets?.howTo && (
        <script type="application/ld+json">
          {JSON.stringify(generateHowToSchema(), null, 2)}
        </script>
      )}
      
      {/* Rich Snippets - Review Schema */}
      {richSnippets?.reviews && (
        <script type="application/ld+json">
          {JSON.stringify(generateReviewSchema(), null, 2)}
        </script>
      )}
      
      {/* Website Schema for Search Actions */}
      <script type="application/ld+json">
        {JSON.stringify(generateWebSiteSchema(), null, 2)}
      </script>
      
      {/* Local Business Schema for Singapore presence */}
      <script type="application/ld+json">
        {JSON.stringify(generateLocalBusinessSchema(), null, 2)}
      </script>
      
      {/* Educational Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Remarkably",
          "description": "Provider of AI-powered educational technology solutions",
          "url": baseUrl,
          "logo": `${baseUrl}/remarkably-logo-black.png`,
          "sameAs": [
            "https://www.linkedin.com/company/remarkably-ai",
            "https://twitter.com/remarkably_ai"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Grading Solutions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Essay Grading",
                  "description": "Automated essay grading with AI technology"
                }
              }
            ]
          }
        }, null, 2)}
      </script>
      
      {/* Course/Training Schema for Educational Content */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "AI-Powered Essay Grading Training",
          "description": "Learn how to effectively use AI for essay grading in educational settings",
          "provider": {
            "@type": "Organization",
            "name": "Remarkably",
            "url": baseUrl
          },
          "educationalLevel": "Professional Development",
          "teaches": "AI Essay Grading Best Practices",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "Teacher"
          }
        }, null, 2)}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOHead; 