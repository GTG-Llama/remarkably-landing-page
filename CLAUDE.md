# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for Remarkably, an AI-powered EdTech platform that helps teachers grade essays 7× faster by replicating each teacher's unique feedback style. The website is built with React/Vite and features a sophisticated dual-routing system, comprehensive SEO optimization, and modern design patterns.

## Development Commands

```bash
npm run dev          # Development server (localhost:8080)
npm run build        # Production build  
npm run build:dev    # Development build with development mode
npm run lint         # ESLint code checking
npm run preview      # Preview production build
```2

**🌐 LOCAL DEVELOPMENT URLS:**
- **Beta Site (PRIMARY)**: `localhost:8080/beta/` - All new development happens here
- **Old Site (Legacy)**: `localhost:8080/` - Legacy version, do not mo1dify
2
## Product & Business Context

- **Remarkably's mission**: AI essay grading that delivers up to 7x faster feedback while reducing teacher stress
- **Current traction**: 400+ essays/month throughput, adopted by MOE Singapore, used in multiple local/international schools
- **Upcoming milestone**: Hong Kong Learning & Teaching Expo
- **Target audience**: English teachers, schools, students; core value prop is faster, higher-quality feedback at scale

## Development Philosophy & Standards

- **"Do not rush. Build with care" principle**
- **Always ask for clarification when instructions are unclear**
- Maintain production-quality code (clean, modular, DRY, and commented)
- Manual testing across multiple breakpoints and devices is required before merging to main
- Treat this repo like a production handover — even if only one person is working on it now

## Technical Architecture

### Tech Stack
- **Frontend**: Vite + React + TailwindCSS + Framer Motion + shadcn/ui
- **Hosting**: Google Cloud VM
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion + GSAP
- **SEO**: react-helmet-async with structured data

### Key Architecture Patterns

#### Dual Routing System
**CRITICAL: There are TWO versions of the site:**

- **OLD SITE** (Legacy): Routes at root level (`/`, `/contact`, etc.)
  - Uses: `Layout.tsx`, `Header.tsx`, `Index.tsx` 
  - URL: `localhost:8080/`
  - Status: Legacy version, not actively developed

- **NEW SITE** (Active Development): Routes under `/beta/*`
  - Uses: `BetaLayout.tsx`, `BetaHeader.tsx`, `Home.tsx`
  - URL: `localhost:8080/beta/`, `localhost:8080/beta/features`, etc.
  - Status: **PRIMARY DEVELOPMENT TARGET**
  - This is where ALL new changes should be made!

**⚠️ IMPORTANT: Always work on the BETA site components, not the old site!**

**🎨 DESIGN PRESERVATION RULE:**
- **NEVER replace the beta site's design with the old site's design**
- **PRESERVE the beta site's unique styling, layout, and visual identity**
- Only implement specific requested improvements (like video integration, mobile fixes, etc.)
- Maintain the beta site's color schemes, typography, spacing, and component structure
- When adding new features, seamlessly integrate them into the existing beta design language

**📍 DEVELOPMENT ENVIRONMENT:**
- **Primary Development URL**: `localhost:8080/beta/`
- **All changes must be tested on the beta site at this URL**
- The development server runs on port 8080 (if available) or will auto-select another port
- Always verify changes work correctly on `localhost:8080/beta/` before considering them complete

- `src/App.tsx` - Main application router
- `src/components/BetaApp.tsx` - **BETA site router** (primary)
- `src/contexts/NavigationContext.tsx` - Beta-aware path resolution

#### SEO System
- `src/utils/seo-config.ts` - Comprehensive SEO configurations for all pages
- `src/components/SEOHead.tsx` - Reusable SEO component
- Structured data (JSON-LD) implemented for search engines
- Uses `react-helmet-async` for dynamic head management

#### Component Organization
- **Pages**: Main route components in `src/pages/`
- **Components**: Reusable UI components in `src/components/`
- **UI Components**: shadcn/ui components in `src/components/ui/`
- **Contexts**: React contexts for state management
- **Utils**: Utility functions and configurations

## Git Workflow & Deployment

- **dev branch**: Active development (primary working branch)
- **main branch**: Production-ready only (merged after testing)
- Solo workflow, no enforced PR reviews, but QA is manual
- **Do not commit broken states to main**
- Merge dev to main only after visual QA and keep commits readable
- Deployment happens after merge to main through Google Cloud VM

## Design System Guidelines

### Brand Colors & Theme
- **Brand tone**: Clean, optimistic, energetic
- **CTA blue**: ~#4f46e5 (adjustable)
- **Gradient**: Light violet/blue, subtle but vibrant
- **Design aesthetic**: Light, clean with neobrutalist accents

### Design Tokens (from `src/index.css`)
```css
--color-primary-yellow: #ffe712
--color-primary-black: #000000
--teacher-primary: 216 100% 65%
--shadow-brutal: 4px 4px 0px 0px rgba(0,0,0,1)
--spacing-xs to --spacing-5xl: 8px grid system
```

### Typography & Spacing
- Typography and spacing refinement needed site-wide (buttons, cards, header gaps)
- Tailwind utilities preferred; use `@layer` for custom components
- Custom properties defined in `src/index.css` and `src/styles/globals.css`

## Hero Video Integration Specs

- **Autoplay**: Muted, looped
- **Mobile fallback**: Static image (recommended: WebP format, 1920x1080 dimensions)
- **Storage**: `/public/videos/` or external CDN
- **Format**: .mp4 H.264, <3MB file size, 16:9 aspect ratio
- **Integration**: Should not interfere with scroll or text layout
- **Mobile detection**: Implement proper mobile-specific styling considerations

## SEO & Analytics Strategy

- **Current status**: `/beta` site is crawlable for Google indexing
- **Tools**: Google Search Console enabled, Google Analytics to be added
- **Transition plan**: `/beta/feature` → `/feature` (avoid link rot)
- **Requirements**: Canonical tags, OG images, favicon
- **Management**: Metadata handled manually through SEO system
- **Future**: Careful redirect planning to prevent duplicate content penalties

## Contact Form & EmailJS

### Environment Variables (in `.env.local`)
```
VITE_EMAILJS_PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
```

### Configuration
- Config stored in `src/lib/emailjs-config.ts`
- Single default EmailJS template for now
- Future plans: automation + CRM integration, multi-language templates
- See `CONTACT_SETUP.md` for detailed setup instructions

## Testing Requirements

### Manual Testing Breakpoints
- **iPhone SE**: 375px (Great for testing small mobile devices (especially with limited height)
- **iPad**: 768px (Represents tablet landscape and small laptop screens.)
- **Desktop**: 1440px (Standard laptop resolution and common design target.)
- **Small desktop:** 1024px or 1280px (for older laptops.)
- **Mobile medium:** 414px (e.g. 414px for iPhone 13/14/15 Pro Max)
- **Large screen**: 1920px+ (Ensures compatibility on widescreen monitors and TVs.)

### Testing Checklist
- Element spacing and visual hierarchy
- Mobile scroll and tap feedback
- Color accessibility and contrast
- Responsive issues due to animation
- Header transparency and sticky behavior

## Common Issues & Gotchas

### Mobile Layout Issues
- **Excessive vertical gaps** between sections
- **Text overflow** in cards and buttons  
- **Button misalignment** on touch devices
- **Sticky header bugs** blocking content or transparency issues
- **Animation stutters** affecting layout stability

### Build & Development Issues
- Asset paths (video, image, font) must be explicit and relative
- `next build` is strict about asset references
- Hydration mismatches from autoplay or script-based rendering
- Tailwind purging custom classes (use `@layer` overrides)

### Common Visual Problems
- Inconsistent spacing across breakpoints
- Header/logo transparency bugs on scroll
- Animation stutters and layout shifts

## Tailwind Overrides & Custom Styles

### Key Files
- `src/index.css` - Main custom styles with `@layer` base, components, utilities
- `src/styles/globals.css` - Additional global styles

### Example Overrides
```css
/* From src/index.css line 138 */
.btn-brutal {
  display: inline-flex;
  font-weight: 700;
  border: 4px solid var(--color-primary-black);
  /* ... */
}

/* Custom properties */
--color-primary-yellow: #ffe712;
--shadow-brutal: 4px 4px 0px 0px rgba(0,0,0,1);
```

## Recent Major Updates

### Interactive Demo Integration (Latest)
- **Files**: `src/pages/Home.tsx` (beta homepage), `src/pages/Demo.tsx` (dedicated demo page)
- **Changes**: Added interactive demo section to homepage, replacing purple lead capture form
- **Features**:
  - **Homepage Integration**: Interactive demo section on `localhost:8080/beta/` 
  - **Dedicated Demo Page**: Complete redesign at `localhost:8080/beta/demo`
  - Interactive feature selection with 4 key features: AI Analysis, Grading, Feedback, Batch Processing
  - Professional video player with browser-style interface and enhanced visual design
  - Cleaner aesthetics with improved colors, gradients, and visual hierarchy
  - Responsive design perfectly matching beta site's design language
  - Call-to-action buttons integrated seamlessly

### Hero Video Integration 
- **File**: `src/components/HeroSection.tsx` (beta site)
- **Changes**: Added seamless video integration between headline and CTA buttons
- **Features**:
  - `HeroVideo` component with mobile fallback support
  - Maintains original beta design while adding video showcase
  - Responsive sizing with rounded corners and subtle shadows
  - Non-intrusive placement that enhances rather than replaces content

### Header Scroll Transparency
- **Files**: `src/components/BetaHeader.tsx`, `src/components/Header.tsx`
- **Changes**: Added scroll-triggered transparency effects
- **Features**:
  - Transparent background at page top
  - Smooth transition to white background with shadow on scroll
  - Maintains mobile responsiveness and accessibility

## Cursor AI Prompting Best Practices

### Effective Prompts
- ✅ "Implement changes to the hero section video background with autoplay and mobile fallback"
- ✅ "Update the Layout component sticky header behavior to transition from transparent to white on scroll"
- ✅ "Fix mobile spacing issues in the Features section cards on screens under 768px"

### Avoid
- ❌ "Make prettier" or "fix style" without visual references
- ❌ Vague prompts without specific components or behavior mentioned
- ❌ Requests without context about which breakpoint or device

### Best Practices
- Reference specific components and files
- Provide visual references when possible
- Specify desired behavior clearly
- Mention breakpoints or devices when relevant

## Localization & Regional Pages

### Current Status
- **Language**: English only
- **Regional pages**: `/local-school`, `/international-school`, `/vietnam`, `/indonesia`, `/malaysia`, `/tuition`
- **Future**: Chinese version planned, language switcher space reserved

### Development Considerations
- CSS should support RTL/LTR switching where relevant
- Avoid hardcoded `text-left` unless necessary
- Language switcher UI space should be reserved in header design

## Development Recommendations

### Site-wide Improvements Needed (BETA SITE ONLY)
- **Focus on `/beta/*` routes only** - this is the active development site
- Add color and font tokens to Tailwind config
- Use Framer Motion for layout transitions
- Create reusable `<Head>` component for metadata (don't hardcode page metadata)
- Add favicon and OG images (see `/public`)
- Polish footer and secondary pages for design consistency
- **Never modify old site components** (`Layout.tsx`, `Header.tsx`, `Index.tsx`) unless specifically requested

### Code Quality
- Use shared Tailwind config for design tokens
- Implement proper TypeScript types
- Add comments where necessary
- Structure files logically
- Avoid overly abstract setups unless justified

## Important File Locations

### Core Application Files
- `src/App.tsx` - Main application router
- `src/main.tsx` - Application entry point with scroll behavior
- `src/components/BetaApp.tsx` - Beta site router
- `src/contexts/NavigationContext.tsx` - Beta-aware navigation context

### Configuration & Utils
- `src/utils/seo-config.ts` - SEO configurations for all pages
- `src/lib/emailjs-config.ts` - EmailJS service configuration
- `src/utils/analytics.ts` - Analytics utilities
- `src/lib/utils.ts` - General utility functions

### Styling & Design
- `src/index.css` - Main styles with CSS custom properties
- `src/styles/globals.css` - Global styles and design system
- `tailwind.config.ts` - Tailwind configuration

### Documentation
- `CONTACT_SETUP.md` - EmailJS setup instructions
- `SEO-IMPLEMENTATION.md` - Comprehensive SEO documentation
- `README.md` - Basic project information

## Regional Landing Pages

Current market-specific pages:
- `/local-school` - Singapore MOE schools
- `/international-school` - International curricula (IB, Cambridge, AP)
- `/vietnam`, `/indonesia`, `/malaysia` - Regional variants
- `/tuition` - Tuition centers

Each page has specific SEO configurations in `src/utils/seo-config.ts` with appropriate keywords and structured data.

## Typical Development Workflow

### Standard Feature Development
```bash
# 1. Pull latest from dev branch
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/hero-video

# 3. Implement changes with manual testing
npm run dev
# Test across all breakpoints (375px, 768px, 1440px, 1920px+)

# 4. Run quality checks
npm run lint
npm run build  # Ensure no build errors

# 5. Commit and merge to dev
git add .
git commit -m "feat: implement hero video with mobile fallback"
git checkout dev
git merge feature/hero-video

# 6. Test staging on dev
# Deploy dev branch to staging environment

# 7. Merge to main for production
git checkout main
git merge dev
# Deploy main to production
```

### Pre-Merge Quality Checklist
- [ ] Test on all breakpoints: iPhone SE (375px), iPad (768px), Desktop (1440px), Large (1920px+)
- [ ] Verify sticky header behavior on scroll (transparent → white transition)
- [ ] Check mobile tap targets are minimum 44px
- [ ] Validate form submissions work (EmailJS integration)
- [ ] Test video/image loading performance
- [ ] Ensure animations don't stutter on mobile
- [ ] Verify color contrast meets accessibility standards
- [ ] Check that text doesn't overflow in cards/buttons
- [ ] Test navigation between main site and /beta routes

## Code Examples & Implementation Patterns

### SEO System Usage
```tsx
// In any page component
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';

export default function MyPage() {
  return (
    <>
      <SEOHead config={getPageSEO('features')} pageKey="features" />
      <div className="page-content">
        {/* Page content */}
      </div>
    </>
  );
}
```

### Responsive Component Pattern
```tsx
// From codebase analysis - common responsive pattern
import { useMediaQuery } from '@/hooks/use-mobile';

export default function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div className={
      `container mx-auto px-4 ${
        isMobile ? 'py-8 space-y-4' : 'py-16 space-y-8'
      }`
    }>
      {/* Content that adapts to screen size */}
    </div>
  );
}
```

### EmailJS Integration Example
```tsx
// Based on src/lib/emailjs-config.ts pattern
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs-config';

const sendEmail = async (formData: FormData) => {
  try {
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        to_email: formData.email,
        to_name: formData.name,
        message: formData.message,
        from_name: 'Remarkably Team'
      },
      emailjsConfig.publicKey
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};
```

### Tailwind Design Token Usage
```tsx
// Using the design tokens from tailwind.config.ts
export default function ThemedButton() {
  return (
    <button className="
      bg-tech-purple-600 hover:bg-tech-purple-500
      text-white font-semibold px-6 py-3 rounded-lg
      shadow-neural hover:shadow-glow
      transition-all duration-300
      animate-fade-in
    ">
      Get Started
    </button>
  );
}
```

## Performance Guidelines

### Bundle Optimization
- **Current setup**: Vite with manual chunks in `vite.config.ts`
- **Chunk strategy**: Separate vendor chunks for React, animations, Three.js, UI components
- **Warning limit**: 600KB (configured)
- **Target**: Keep individual chunks under 500KB for optimal loading

### Image Optimization
```bash
# Recommended image formats and sizes
# Hero images: WebP, 1920x1080, <500KB
# Card images: WebP, 800x600, <200KB
# Icons: SVG preferred, PNG fallback
# Avatars: WebP, 200x200, <50KB
```

### Core Web Vitals Targets (for expo launch)
- **LCP**: <2.5s (Largest Contentful Paint)
- **FID**: <100ms (First Input Delay)  
- **CLS**: <0.1 (Cumulative Layout Shift)
- **FCP**: <1.8s (First Contentful Paint)

## Common Troubleshooting

### Build Failures
```bash
# Asset path issues
# ❌ Wrong: src="./public/video.mp4"
# ✅ Correct: src="/video.mp4"

# Tailwind purging custom CSS
# ❌ Wrong: Custom CSS without @layer
# ✅ Correct: Use @layer components or utilities

# TypeScript errors
npm run lint          # Check for TS/ESLint issues
npm run build         # Verify production build
```

### Development Issues
```bash
# Hot reload problems
rm -rf node_modules/.vite  # Clear Vite cache
npm run dev                # Restart dev server

# Environment variables not loading
# Ensure .env.local exists with VITE_ prefix:
# VITE_EMAILJS_PUBLIC_KEY=your_key_here

# Port conflicts
# Default port 8080 configured in vite.config.ts
# Check for conflicts with other services
```

### Common Mobile Issues
```css
/* Fix excessive vertical gaps */
.section {
  @apply py-8 md:py-16;  /* Not py-16 md:py-32 */
}

/* Fix button text overflow */
.btn {
  @apply px-4 py-2 text-sm md:px-6 md:py-3 md:text-base;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Fix sticky header issues */
.sticky-header {
  @apply sticky top-0 z-50;
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
}
```

## Emergency Procedures

### Quick Rollback (Pre-Expo)
```bash
# If main branch has issues
git checkout main
git reset --hard HEAD~1  # Rollback 1 commit
git push --force-with-lease origin main

# If dev branch has issues  
git checkout dev
git reset --hard origin/main  # Reset to last known good
```

### Critical Path Features (Must Work for Expo)
1. **Home page loads** without errors
2. **Contact form** sends emails successfully  
3. **Mobile responsiveness** works on all breakpoints
4. **Navigation** between pages functions properly
5. **SEO metadata** renders correctly
6. **Loading performance** meets targets (<3s)

### Emergency Contacts & Resources
- **Hosting**: Google Cloud VM (check status dashboard)
- **Domain**: remarkably.ink (DNS managed separately)
- **EmailJS**: Dashboard for delivery monitoring
- **Analytics**: Google Search Console for crawl errors

## Advanced Configuration

### Environment Variables Reference
```bash
# Required for production
VITE_EMAILJS_PUBLIC_KEY=pk_your_public_key
VITE_EMAILJS_SERVICE_ID=service_your_service
VITE_EMAILJS_TEMPLATE_ID=template_your_template

# Optional for analytics (when implemented)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
```

### Build Configuration Details
```typescript
// From vite.config.ts analysis
// Manual chunks for optimal loading:
{
  'react-vendor': ['react', 'react-dom'],           // ~45KB
  'animation-vendor': ['framer-motion'],            // ~85KB  
  'three-vendor': ['three', '@react-three/fiber'], // ~120KB
  'ui-vendor': ['@radix-ui/*'],                     // ~60KB
  'utils': ['clsx', 'tailwind-merge']              // ~15KB
}
```

### Tailwind Configuration Insights
```typescript
// From tailwind.config.ts - Available design tokens:
colors: {
  'tech-purple-600': '#6366f1',     // Primary CTA color
  'tech-gold-500': '#f59e0b',       // Accent highlights
  'remarkably-gold': '#A89165',     // Brand color
}

animations: {
  'neural-pulse': '2s ease-in-out infinite',
  'fade-up': '0.6s ease-out',
  'glow': '2s ease-in-out infinite alternate',
}
```

---

**Remember**: This is a high-visibility project with an upcoming expo deadline. Quality and attention to detail are paramount. When in doubt, ask for clarification rather than making assumptions.