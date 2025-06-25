import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'faq' | 'howto' | 'review' | 'product' | 'service' | 'event' | 'jobposting';
  data: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const baseUrl = 'https://www.remarkably.ink';

  const generateSchema = () => {
    switch (type) {
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.map((item: any) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        };

      case 'howto':
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": data.name,
          "description": data.description,
          "image": data.image || `${baseUrl}/remarkably-howto-image.png`,
          "totalTime": data.totalTime || "PT5M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": data.supply || [],
          "tool": data.tool || [],
          "step": data.steps.map((step: any, index: number) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            "image": step.image || `${baseUrl}/step-${index + 1}.png`
          }))
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Remarkably AI Essay Grading Platform",
          "image": `${baseUrl}/remarkably-product-image.png`,
          "description": "AI-powered essay grading platform for educators",
          "brand": {
            "@type": "Brand",
            "name": "Remarkably"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Lenor AI Pte. Ltd."
          },
          "review": data.reviews.map((review: any) => ({
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
            "ratingValue": data.averageRating || "4.9",
            "reviewCount": data.reviews.length,
            "bestRating": "5"
          }
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "image": data.image || `${baseUrl}/remarkably-product-image.png`,
          "description": data.description,
          "brand": {
            "@type": "Brand",
            "name": "Remarkably"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Lenor AI Pte. Ltd."
          },
          "offers": {
            "@type": "Offer",
            "url": data.url || baseUrl,
            "priceCurrency": data.currency || "USD",
            "price": data.price || "0",
            "priceValidUntil": data.priceValidUntil,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Remarkably"
            }
          },
          "category": "Education Software",
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Platform",
              "value": "Web Application"
            },
            {
              "@type": "PropertyValue", 
              "name": "Target Audience",
              "value": "Educators"
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Remarkably",
            "url": baseUrl
          },
          "areaServed": data.areaServed || [
            {
              "@type": "Country",
              "name": "Singapore"
            },
            {
              "@type": "Country", 
              "name": "Malaysia"
            },
            {
              "@type": "Country",
              "name": "Indonesia"
            }
          ],
          "serviceType": data.serviceType || "Educational Technology",
          "category": "Education",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Grading Services",
            "itemListElement": data.offerings?.map((offering: any) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": offering.name,
                "description": offering.description
              }
            })) || []
          }
        };

      case 'event':
        return {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": data.name,
          "description": data.description,
          "startDate": data.startDate,
          "endDate": data.endDate,
          "location": {
            "@type": "VirtualLocation",
            "url": data.url || baseUrl
          },
          "organizer": {
            "@type": "Organization",
            "name": "Remarkably",
            "url": baseUrl
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
          "isAccessibleForFree": data.isAccessibleForFree || true,
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "Teacher"
          }
        };

      case 'jobposting':
        return {
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": data.title,
          "description": data.description,
          "datePosted": data.datePosted,
          "validThrough": data.validThrough,
          "employmentType": data.employmentType || "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Lenor AI Pte. Ltd.",
            "sameAs": baseUrl,
            "logo": `${baseUrl}/remarkably-logo-black.png`
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SG",
              "addressRegion": "Singapore"
            }
          },
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "SGD",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": data.salaryMin,
              "maxValue": data.salaryMax,
              "unitText": "YEAR"
            }
          },
          "qualifications": data.qualifications || [],
          "responsibilities": data.responsibilities || [],
          "skills": data.skills || []
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 