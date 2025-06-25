// Advanced SEO Optimization Utilities
import { trackEvent } from './analytics';

export interface SEOMetrics {
  pageLoadTime: number;
  timeToFirstByte: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

export interface SEOTest {
  id: string;
  name: string;
  variants: Array<{
    id: string;
    title: string;
    description: string;
    keywords: string[];
  }>;
  trafficSplit: number[];
  isActive: boolean;
}

// Core Web Vitals Monitoring
export const measureCoreWebVitals = (): Promise<SEOMetrics> => {
  return new Promise((resolve) => {
    const metrics: Partial<SEOMetrics> = {};
    
    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
      metrics.timeToFirstByte = navigation.responseStart - navigation.requestStart;
    });

    // Measure Core Web Vitals using Web Vitals library approach
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.largestContentfulPaint = entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cumulativeLayoutShift = (metrics.cumulativeLayoutShift || 0) + (entry as any).value;
            }
            break;
          case 'first-input':
            metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
            break;
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });

    // Resolve after a short delay to collect metrics
    setTimeout(() => {
      resolve(metrics as SEOMetrics);
    }, 3000);
  });
};

// SEO A/B Testing
export class SEOTester {
  private tests: Map<string, SEOTest> = new Map();
  private userVariants: Map<string, string> = new Map();

  addTest(test: SEOTest): void {
    this.tests.set(test.id, test);
  }

  getVariant(testId: string, userId: string): string | null {
    const test = this.tests.get(testId);
    if (!test || !test.isActive) return null;

    // Check if user already has a variant assigned
    const existingVariant = this.userVariants.get(`${testId}_${userId}`);
    if (existingVariant) return existingVariant;

    // Assign new variant based on traffic split
    const random = Math.random();
    let cumulativeWeight = 0;
    
    for (let i = 0; i < test.variants.length; i++) {
      cumulativeWeight += test.trafficSplit[i] / 100;
      if (random <= cumulativeWeight) {
        const variantId = test.variants[i].id;
        this.userVariants.set(`${testId}_${userId}`, variantId);
        
        // Track variant assignment
        trackEvent('seo_test_variant_assigned', {
          testId,
          variantId,
          userId
        });
        
        return variantId;
      }
    }

    return test.variants[0].id; // Fallback to first variant
  }

  getTestContent(testId: string, variantId: string) {
    const test = this.tests.get(testId);
    if (!test) return null;

    return test.variants.find(v => v.id === variantId) || test.variants[0];
  }
}

// Dynamic SEO Content Optimization
export const optimizeSEOContent = (content: string, targetKeywords: string[]): string => {
  let optimizedContent = content;
  
  // Ensure target keywords appear naturally
  targetKeywords.forEach(keyword => {
    const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = optimizedContent.match(keywordRegex);
    const keywordDensity = matches ? matches.length / optimizedContent.split(' ').length : 0;
    
    // Optimal keyword density is 1-3%
    if (keywordDensity < 0.01) {
      // Add keyword naturally if density is too low
      const sentences = optimizedContent.split('. ');
      const randomIndex = Math.floor(Math.random() * sentences.length);
      sentences[randomIndex] = sentences[randomIndex].replace(/\.$/, `, including ${keyword}.`);
      optimizedContent = sentences.join('. ');
    }
  });

  return optimizedContent;
};

// SEO Score Calculator
export const calculateSEOScore = (page: {
  title: string;
  description: string;
  keywords: string[];
  headings: string[];
  content: string;
  images: Array<{ alt: string; src: string }>;
  links: Array<{ href: string; text: string; isInternal: boolean }>;
}): { score: number; recommendations: string[] } => {
  let score = 0;
  const recommendations: string[] = [];
  const maxScore = 100;

  // Title optimization (20 points)
  if (page.title.length >= 30 && page.title.length <= 60) {
    score += 20;
  } else {
    recommendations.push('Optimize title length (30-60 characters)');
  }

  // Description optimization (15 points)
  if (page.description.length >= 120 && page.description.length <= 160) {
    score += 15;
  } else {
    recommendations.push('Optimize meta description length (120-160 characters)');
  }

  // Keyword optimization (15 points)
  const primaryKeyword = page.keywords[0];
  if (primaryKeyword) {
    const titleHasKeyword = page.title.toLowerCase().includes(primaryKeyword.toLowerCase());
    const descHasKeyword = page.description.toLowerCase().includes(primaryKeyword.toLowerCase());
    const contentHasKeyword = page.content.toLowerCase().includes(primaryKeyword.toLowerCase());
    
    if (titleHasKeyword && descHasKeyword && contentHasKeyword) {
      score += 15;
    } else {
      recommendations.push('Include primary keyword in title, description, and content');
    }
  }

  // Heading structure (10 points)
  const hasH1 = page.headings.some(h => h.startsWith('h1'));
  const hasH2 = page.headings.some(h => h.startsWith('h2'));
  if (hasH1 && hasH2) {
    score += 10;
  } else {
    recommendations.push('Use proper heading structure (H1, H2, etc.)');
  }

  // Image optimization (10 points)
  const imagesWithAlt = page.images.filter(img => img.alt && img.alt.trim() !== '');
  if (imagesWithAlt.length === page.images.length && page.images.length > 0) {
    score += 10;
  } else {
    recommendations.push('Add alt text to all images');
  }

  // Internal linking (10 points)
  const internalLinks = page.links.filter(link => link.isInternal);
  if (internalLinks.length >= 3) {
    score += 10;
  } else {
    recommendations.push('Add more internal links (minimum 3)');
  }

  // Content length (10 points)
  const wordCount = page.content.split(' ').length;
  if (wordCount >= 300) {
    score += 10;
  } else {
    recommendations.push('Increase content length (minimum 300 words)');
  }

  // Readability (10 points)
  const avgWordsPerSentence = page.content.split('.').reduce((acc, sentence) => {
    return acc + sentence.split(' ').length;
  }, 0) / page.content.split('.').length;
  
  if (avgWordsPerSentence <= 20) {
    score += 10;
  } else {
    recommendations.push('Improve readability by using shorter sentences');
  }

  return { score: Math.round((score / maxScore) * 100), recommendations };
};

// Page Speed Optimization Suggestions
export const getPageSpeedOptimizations = async (): Promise<string[]> => {
  const suggestions: string[] = [];
  
  try {
    // Check for large images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
        suggestions.push(`Optimize image: ${img.src} (too large)`);
      }
      if (!img.loading || img.loading !== 'lazy') {
        suggestions.push(`Add lazy loading to: ${img.src}`);
      }
    });

    // Check for uncompressed resources
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      if (src && !src.includes('.min.') && !src.includes('localhost')) {
        suggestions.push(`Consider minifying script: ${src}`);
      }
    });

    // Check for missing preload hints
    const criticalResources = ['fonts', 'critical CSS', 'hero images'];
    criticalResources.forEach(resource => {
      const preloadExists = document.querySelector(`link[rel="preload"][as*="${resource}"]`);
      if (!preloadExists) {
        suggestions.push(`Consider preloading critical ${resource}`);
      }
    });

  } catch (error) {
    console.error('Error analyzing page speed:', error);
  }

  return suggestions;
};

// Mobile SEO Checker
export const checkMobileSEO = (): { score: number; issues: string[] } => {
  const issues: string[] = [];
  let score = 100;

  // Check viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport || !viewport.getAttribute('content')?.includes('width=device-width')) {
    issues.push('Missing or incorrect viewport meta tag');
    score -= 20;
  }

  // Check for mobile-friendly font sizes
  const elements = document.querySelectorAll('*');
  let smallTextCount = 0;
  elements.forEach(el => {
    const computedStyle = window.getComputedStyle(el);
    const fontSize = parseFloat(computedStyle.fontSize);
    if (fontSize < 12) {
      smallTextCount++;
    }
  });

  if (smallTextCount > 0) {
    issues.push(`${smallTextCount} elements have text smaller than 12px`);
    score -= 15;
  }

  // Check touch target sizes
  const clickableElements = document.querySelectorAll('button, a, input, select, textarea');
  let smallTargetCount = 0;
  clickableElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallTargetCount++;
    }
  });

  if (smallTargetCount > 0) {
    issues.push(`${smallTargetCount} touch targets are smaller than 44px`);
    score -= 15;
  }

  return { score: Math.max(0, score), issues };
};

// Initialize SEO monitoring
export const initSEOMonitoring = () => {
  // Monitor Core Web Vitals
  measureCoreWebVitals().then(metrics => {
    trackEvent('core_web_vitals', metrics);
  });

  // Monitor mobile SEO
  if (window.innerWidth <= 768) {
    const mobileCheck = checkMobileSEO();
    if (mobileCheck.issues.length > 0) {
      trackEvent('mobile_seo_issues', {
        score: mobileCheck.score,
        issues: mobileCheck.issues
      });
    }
  }

  // Monitor page speed
  getPageSpeedOptimizations().then(suggestions => {
    if (suggestions.length > 0) {
      trackEvent('page_speed_suggestions', { suggestions });
    }
  });
};

// Export singleton instance
export const seoTester = new SEOTester(); 