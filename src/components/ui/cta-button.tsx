import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { components, shadows, animations } from '@/lib/design-system';

interface CTAButtonProps {
  variant: 'b2b' | 'b2c' | 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  size = 'md',
  children,
  href,
  onClick,
  className,
  icon,
  fullWidth = false,
}) => {
  const variants = {
    b2b: {
      bg: 'bg-indigo-600',
      text: 'text-white',
      hoverBg: 'hover:bg-indigo-700',
      border: 'border-black',
      shadow: shadows.md,
      hoverShadow: shadows.hover,
    },
    b2c: {
      bg: 'bg-yellow-300',
      text: 'text-black',
      hoverBg: 'hover:bg-yellow-400',
      border: 'border-black',
      shadow: shadows.md,
      hoverShadow: shadows.hover,
    },
    primary: components.button.primary,
    secondary: components.button.secondary,
    dark: components.button.dark,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonVariant = variants[variant];
  const buttonSize = sizes[size];

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'font-bold',
    'border-4',
    'transition-all duration-300',
    'transform',
    'active:translate-x-1 active:translate-y-1',
    'focus:outline-none focus:ring-4 focus:ring-yellow-300',
    fullWidth ? 'w-full' : '',
    buttonVariant.bg,
    buttonVariant.text,
    buttonVariant.hoverBg,
    buttonVariant.border,
    buttonSize,
    className
  );

  const MotionComponent = motion.button;

  const buttonContent = (
    <MotionComponent
      className={baseClasses}
      style={{
        boxShadow: buttonVariant.shadow,
      }}
      whileHover={{
        boxShadow: buttonVariant.hoverShadow,
        x: -2,
        y: -2,
      }}
      whileTap={{
        boxShadow: shadows.active,
        x: 1,
        y: 1,
      }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </MotionComponent>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

// Specific CTA components for different user flows
export const BookDemoCTA: React.FC<{ 
  className?: string; 
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}> = ({ className, size, fullWidth }) => (
  <CTAButton
    variant="b2b"
    size={size}
    href="#demo-booking"
    className={className}
    fullWidth={fullWidth}
  >
    📅 Book Free Demo
  </CTAButton>
);

export const TryFreeCTA: React.FC<{ 
  className?: string; 
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}> = ({ className, size, fullWidth }) => (
  <CTAButton
    variant="b2c"
    size={size}
    href="https://app.remarkably.ink"
    className={className}
    fullWidth={fullWidth}
  >
    🚀 Try Free for 1 Month
  </CTAButton>
);

export const LearnMoreCTA: React.FC<{ 
  className?: string; 
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}> = ({ className, size, href = "#features" }) => (
  <CTAButton
    variant="secondary"
    size={size}
    href={href}
    className={className}
  >
    Learn More
  </CTAButton>
);