// Performance-focused SEO utilities
import { trackEvent } from './analytics';

export interface WebVitalsMetrics {
  CLS: number;
  FID: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

export interface SEOPerformanceScore {
  overall: number;
  coreWebVitals: number;
  technical: number;
  content: number;
  mobile: number;
}

// Core Web Vitals thresholds (Google's recommended values)
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 }
};

// Measure and track Core Web Vitals
export const measureWebVitals = (): Promise<WebVitalsMetrics> => {
  return new Promise((resolve) => {
    const metrics: Partial<WebVitalsMetrics> = {};
    let metricsCollected = 0;
    const totalMetrics = 5;

    const checkComplete = () => {
      metricsCollected++;
      if (metricsCollected >= totalMetrics) {
        resolve(metrics as WebVitalsMetrics);
      }
    };

    // Measure TTFB (Time to First Byte)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
      checkComplete();
    }

    // Use PerformanceObserver for other metrics
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.FCP = entry.startTime;
              checkComplete();
            }
            break;
            
          case 'largest-contentful-paint':
            metrics.LCP = entry.startTime;
            checkComplete();
            break;
            
          case 'layout-shift':
            if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
              metrics.CLS = (metrics.CLS || 0) + (entry as PerformanceEntry & { value: number }).value;
            }
            break;
            
          case 'first-input':
            metrics.FID = (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime;
            checkComplete();
            break;
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Set timeout to resolve with collected metrics
    setTimeout(() => {
      if (!metrics.CLS) {
        metrics.CLS = 0;
        checkComplete();
      }
      resolve(metrics as WebVitalsMetrics);
    }, 5000);
  });
};

// Calculate Web Vitals score
export const calculateWebVitalsScore = (metrics: WebVitalsMetrics): number => {
  let score = 0;
  let totalMetrics = 0;

  Object.entries(metrics).forEach(([key, value]) => {
    const threshold = THRESHOLDS[key as keyof typeof THRESHOLDS];
    if (threshold && value !== undefined) {
      totalMetrics++;
      if (value <= threshold.good) {
        score += 100;
      } else if (value <= threshold.poor) {
        score += 50;
      } else {
        score += 0;
      }
    }
  });

  return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
};

// Image optimization checker
export const checkImageOptimization = (): Promise<Array<{src: string, issues: string[]}>> => {
  return new Promise((resolve) => {
    const imageIssues: Array<{src: string, issues: string[]}> = [];
    const images = document.querySelectorAll('img');
    let imagesChecked = 0;

    if (images.length === 0) {
      resolve(imageIssues);
      return;
    }

    images.forEach((img) => {
      const issues: string[] = [];
      
      // Check for missing alt text
      if (!img.alt || img.alt.trim() === '') {
        issues.push('Missing alt text');
      }
      
      // Check for loading attribute
      if (!img.loading || img.loading !== 'lazy') {
        issues.push('Missing lazy loading');
      }
      
      // Check image dimensions vs display size
      if (img.complete) {
        const naturalRatio = img.naturalWidth / img.naturalHeight;
        const displayRatio = img.width / img.height;
        
        if (Math.abs(naturalRatio - displayRatio) > 0.1) {
          issues.push('Aspect ratio mismatch');
        }
        
        if (img.naturalWidth > img.width * 2) {
          issues.push('Image too large for display size');
        }
      }
      
      // Check for WebP format
      if (!img.src.includes('.webp') && !img.src.includes('data:')) {
        issues.push('Consider using WebP format');
      }
      
      if (issues.length > 0) {
        imageIssues.push({ src: img.src, issues });
      }
      
      imagesChecked++;
      if (imagesChecked === images.length) {
        resolve(imageIssues);
      }
    });
  });
};

// Font optimization checker
export const checkFontOptimization = (): string[] => {
  const issues: string[] = [];
  
  // Check for font-display: swap
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach((link) => {
    const href = (link as HTMLLinkElement).href;
    if (href.includes('fonts.googleapis.com')) {
      if (!href.includes('display=swap')) {
        issues.push('Google Fonts missing display=swap parameter');
      }
    }
  });
  
  // Check for preconnect to font domains
  const preconnects = document.querySelectorAll('link[rel="preconnect"]');
  const hasGoogleFontsPreconnect = Array.from(preconnects).some(
    link => (link as HTMLLinkElement).href.includes('fonts.googleapis.com')
  );
  
  if (!hasGoogleFontsPreconnect) {
    issues.push('Missing preconnect to fonts.googleapis.com');
  }
  
  return issues;
};

// Critical resource optimization
export const checkCriticalResources = (): string[] => {
  const issues: string[] = [];
  
  // Check for critical CSS inlining
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  if (stylesheets.length > 2) {
    issues.push('Consider inlining critical CSS');
  }
  
  // Check for resource hints
  const preloads = document.querySelectorAll('link[rel="preload"]');
  if (preloads.length === 0) {
    issues.push('No critical resources preloaded');
  }
  
  // Check for render-blocking resources
  const scripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
  if (scripts.length > 0) {
    issues.push(`${scripts.length} render-blocking scripts found`);
  }
  
  return issues;
};

// Mobile performance checker
export const checkMobilePerformance = (): { score: number; issues: string[] } => {
  const issues: string[] = [];
  let score = 100;
  
  // Check viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    issues.push('Missing viewport meta tag');
    score -= 20;
  }
  
  // Check for touch-friendly tap targets
  const clickableElements = document.querySelectorAll('button, a, input, select');
  let smallTargets = 0;
  
  clickableElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallTargets++;
    }
  });
  
  if (smallTargets > 0) {
    issues.push(`${smallTargets} touch targets smaller than 44px`);
    score -= Math.min(20, smallTargets * 2);
  }
  
  // Check text size
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
  let smallTextCount = 0;
  
  textElements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const fontSize = parseFloat(style.fontSize);
    if (fontSize < 16) {
      smallTextCount++;
    }
  });
  
  if (smallTextCount > textElements.length * 0.1) {
    issues.push('Text may be too small on mobile');
    score -= 15;
  }
  
  return { score: Math.max(0, score), issues };
};

// Comprehensive SEO performance audit
export const runSEOPerformanceAudit = async (): Promise<{
  score: SEOPerformanceScore;
  recommendations: string[];
  metrics: WebVitalsMetrics;
}> => {
  const recommendations: string[] = [];
  
  // Measure Core Web Vitals
  const webVitals = await measureWebVitals();
  const webVitalsScore = calculateWebVitalsScore(webVitals);
  
  // Check various optimization areas
  const imageIssues = await checkImageOptimization();
  const fontIssues = checkFontOptimization();
  const resourceIssues = checkCriticalResources();
  const mobileCheck = checkMobilePerformance();
  
  // Calculate scores
  const technicalScore = Math.max(0, 100 - (fontIssues.length * 10) - (resourceIssues.length * 15));
  const contentScore = Math.max(0, 100 - (imageIssues.length * 20));
  const overallScore = Math.round(
    (webVitalsScore * 0.4 + technicalScore * 0.3 + contentScore * 0.2 + mobileCheck.score * 0.1)
  );
  
  // Compile recommendations
  if (webVitalsScore < 80) {
    recommendations.push('Improve Core Web Vitals performance');
  }
  
  imageIssues.forEach(issue => {
    recommendations.push(`Image optimization: ${issue.issues.join(', ')} for ${issue.src}`);
  });
  
  recommendations.push(...fontIssues);
  recommendations.push(...resourceIssues);
  recommendations.push(...mobileCheck.issues);
  
  // Track the audit results
  trackEvent('seo_performance_audit', {
    overallScore,
    webVitalsScore,
    technicalScore,
    contentScore,
    mobileScore: mobileCheck.score,
    recommendationCount: recommendations.length
  });
  
  return {
    score: {
      overall: overallScore,
      coreWebVitals: webVitalsScore,
      technical: technicalScore,
      content: contentScore,
      mobile: mobileCheck.score
    },
    recommendations: recommendations.slice(0, 10), // Top 10 recommendations
    metrics: webVitals
  };
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Monitor on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(runSEOPerformanceAudit, 2000);
    });
  } else {
    setTimeout(runSEOPerformanceAudit, 2000);
  }
  
  // Monitor on visibility change (when user returns to tab)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      measureWebVitals().then(metrics => {
        trackEvent('web_vitals_measurement', metrics);
      });
    }
  });
};

// Export performance optimization suggestions
export const getPerformanceOptimizationTips = (): string[] => [
  'Enable gzip/brotli compression on your server',
  'Use a Content Delivery Network (CDN) for static assets',
  'Implement browser caching with appropriate cache headers',
  'Minimize HTTP requests by combining CSS/JS files',
  'Optimize images: use WebP format and appropriate sizing',
  'Remove unused CSS and JavaScript code',
  'Use resource hints: preload, prefetch, preconnect',
  'Implement lazy loading for images and non-critical content',
  'Minify CSS, JavaScript, and HTML files',
  'Use efficient CSS selectors and avoid complex layouts'
]; 