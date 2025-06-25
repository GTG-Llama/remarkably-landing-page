import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ButtonConfig {
  label: string;
  action: () => void;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

interface CallToActionProps {
  title: string;
  description: string;
  primaryButton: ButtonConfig;
  secondaryButton?: ButtonConfig;
  backgroundVariant?: "light" | "dark" | "gradient";
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundVariant = "gradient",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case "light":
        return "bg-gray-50";
      case "dark":
        return "bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white";
      case "gradient":
      default:
        return "bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white";
    }
  };

  const getTextClasses = () => {
    return backgroundVariant === "light" ? "text-gray-900" : "text-white";
  };

  const getDescriptionClasses = () => {
    return backgroundVariant === "light" ? "text-gray-600" : "text-indigo-100";
  };

  return (
    <section 
      ref={ref} 
      className={`py-20 relative overflow-hidden ${getBackgroundClasses()} ${className}`}
    >
      {/* Background Pattern */}
      {backgroundVariant !== "light" && (
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2), transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1), transparent 50%)`
            }}
          />
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom relative z-10"
      >
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <motion.h2 
            variants={itemVariants}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${getTextClasses()}`}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${getDescriptionClasses()}`}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <CTAButton 
              config={primaryButton} 
              isPrimary={true}
              backgroundVariant={backgroundVariant}
            />
            
            {secondaryButton && (
              <CTAButton 
                config={secondaryButton} 
                isPrimary={false}
                backgroundVariant={backgroundVariant}
              />
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-6 pt-8 text-sm opacity-80"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>Free 7-day trial</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-current opacity-50"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>No credit card required</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-current opacity-50"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// CTA Button Component
interface CTAButtonProps {
  config: ButtonConfig;
  isPrimary: boolean;
  backgroundVariant: "light" | "dark" | "gradient";
}

const CTAButton: React.FC<CTAButtonProps> = ({ config, isPrimary, backgroundVariant }) => {
  const Icon = config.icon;
  
  const getButtonClasses = () => {
    if (isPrimary) {
      if (backgroundVariant === "light") {
        return "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl";
      } else {
        return "bg-white text-indigo-600 hover:bg-gray-50 shadow-lg hover:shadow-xl";
      }
    } else {
      if (backgroundVariant === "light") {
        return "bg-white text-indigo-600 border-2 border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300";
      } else {
        return "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm";
      }
    }
  };

  return (
    <motion.button
      onClick={config.action}
      disabled={config.disabled}
      className={`
        inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg
        transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
        ${getButtonClasses()}
      `}
      whileHover={{ 
        scale: config.disabled ? 1 : 1.05,
        y: config.disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: config.disabled ? 1 : 0.98 
      }}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {config.label}
      {!Icon && <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
    </motion.button>
  );
};

export default CallToAction; 