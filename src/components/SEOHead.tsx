import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOConfig, generateStructuredData } from '../utils/seo-config';

interface SEOHeadProps {
  config: SEOConfig;
  pageKey?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ config, pageKey }) => {
  const {
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData,
    alternateLinks = []
  } = config;

  const baseUrl = 'https://www.remarkably.ink';
  // TODO: Create proper OG image (1200x630px) and replace this temporary logo
  const defaultImage = `${baseUrl}/remarkably logo black.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || baseUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="Remarkably" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical || baseUrl} />
      <meta property="twitter:title" content={twitterTitle || title} />
      <meta property="twitter:description" content={twitterDescription || description} />
      <meta property="twitter:image" content={twitterImage || ogImage || defaultImage} />
      <meta name="twitter:creator" content="@remarkably_ai" />
      <meta name="twitter:site" content="@remarkably_ai" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Remarkably - Lenor AI Pte. Ltd." />
      <meta name="publisher" content="Remarkably" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags for Singapore/Asia focus */}
      <meta name="geo.region" content="SG" />
      <meta name="geo.country" content="Singapore" />
      <meta name="geo.placename" content="Singapore" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Remarkably" />
      <meta name="application-name" content="Remarkably" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="msapplication-navbutton-color" content="#6366f1" />
      
      {/* Performance & Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Alternate Language Links */}
      {alternateLinks.map((link, index) => (
        <link key={index} rel="alternate" href={link.href} hrefLang={link.hreflang} />
      ))}
      
      {/* Default alternate for x-default */}
      <link rel="alternate" href={baseUrl} hrefLang="x-default" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {generateStructuredData(structuredData)}
        </script>
      )}
      
      {/* Additional Organization Schema for all pages */}
      <script type="application/ld+json">
        {generateStructuredData({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Remarkably",
          "legalName": "Lenor AI Pte. Ltd.",
          "url": baseUrl,
          "logo": `${baseUrl}/remarkably-logo-black.png`,
          "image": `${baseUrl}/remarkably logo black.png`,
          "description": "AI-powered essay grading platform that helps teachers grade 6-7x faster while maintaining quality feedback",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SG",
            "addressRegion": "Singapore"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Chinese"],
            "url": `${baseUrl}/contact`
          },
          "foundingDate": "2023",
          "founders": [
            {
              "@type": "Person",
              "name": "Harry Wu",
              "jobTitle": "CEO & Co-Founder"
            }
          ],
          "memberOf": [
            "Google for Startups",
            "NVIDIA Inception Program", 
            "MongoDB for Startups",
            "NUS Enterprise"
          ],
          "sameAs": [
            "https://www.linkedin.com/company/remarkably-ai",
            "https://twitter.com/remarkably_ai"
          ]
        })}
      </script>
      
      {/* Breadcrumb Schema for non-home pages */}
      {pageKey && pageKey !== 'home' && (
        <script type="application/ld+json">
          {generateStructuredData({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title.split(' | ')[0],
                "item": canonical || `${baseUrl}/${pageKey}`
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 