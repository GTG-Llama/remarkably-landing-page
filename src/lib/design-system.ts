// Design System Constants for Remarkably

// Spacing Scale (8px grid system)
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
} as const;

// Typography Scale
export const typography = {
  // Font Sizes
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  
  // Font Weights
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '800',
  },
  
  // Line Heights
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    yellow: '#ffe712',    // Remarkably Yellow
    black: '#000000',     // Pure Black
    white: '#ffffff',     // Pure White
  },
  
  // Accent Colors
  accent: {
    pink: '#ff6b9d',
    blue: '#4f46e5',
    green: '#10b981',
    orange: '#f59e0b',
    purple: '#8b5cf6',
  },
  
  // Neutral Colors
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Background Colors
  backgrounds: {
    light: '#ffffff',
    dark: '#1a1a1a',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
} as const;

// Shadows (Neobrutalism Style)
export const shadows = {
  sm: '2px 2px 0px 0px rgba(0,0,0,1)',
  md: '4px 4px 0px 0px rgba(0,0,0,1)',
  lg: '6px 6px 0px 0px rgba(0,0,0,1)',
  xl: '8px 8px 0px 0px rgba(0,0,0,1)',
  '2xl': '12px 12px 0px 0px rgba(0,0,0,1)',
  
  // Interactive shadows
  hover: '8px 8px 0px 0px rgba(0,0,0,1)',
  active: '2px 2px 0px 0px rgba(0,0,0,1)',
} as const;

// Border Styles
export const borders = {
  width: '4px',
  radius: '0px',        // Sharp corners for neobrutalism
  style: 'solid',
  color: '#000000',
} as const;

// Component Variants
export const components = {
  button: {
    primary: {
      bg: colors.primary.yellow,
      text: colors.primary.black,
      border: borders.color,
      shadow: shadows.md,
      hoverShadow: shadows.hover,
    },
    secondary: {
      bg: colors.primary.white,
      text: colors.primary.black,
      border: borders.color,
      shadow: shadows.md,
      hoverShadow: shadows.hover,
    },
    dark: {
      bg: colors.primary.black,
      text: colors.primary.white,
      border: borders.color,
      shadow: shadows.md,
      hoverShadow: shadows.hover,
    },
  },
  
  card: {
    default: {
      bg: colors.primary.white,
      border: borders.color,
      shadow: shadows.lg,
      hoverShadow: shadows.xl,
    },
    dark: {
      bg: colors.neutral[900],
      border: borders.color,
      shadow: shadows.lg,
      hoverShadow: shadows.xl,
    },
  },
} as const;

// Animation Presets
export const animations = {
  durations: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
  },
  
  easings: {
    easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Section Spacing
export const sections = {
  padding: {
    mobile: spacing['2xl'],
    desktop: spacing['4xl'],
  },
  margin: {
    mobile: spacing['3xl'],
    desktop: spacing['5xl'],
  },
} as const;