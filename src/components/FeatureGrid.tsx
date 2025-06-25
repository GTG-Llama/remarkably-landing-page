import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  theme: "light" | "dark";
}

interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLight = feature.theme === "light";
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  relative rounded-2xl p-8 lg:p-12 transition-all duration-300
                  hover:scale-[1.02] hover:shadow-xl
                  ${isLight 
                    ? "bg-white text-gray-900 shadow-lg border border-gray-100" 
                    : "bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white shadow-2xl"
                  }
                `}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Background pattern for dark theme */}
                {!isLight && (
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
                                       radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1), transparent 50%),
                                       radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2), transparent 50%)`
                    }}
                  />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center mb-6
                    ${isLight 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg" 
                      : "bg-gradient-to-br from-white/20 to-white/10 text-white backdrop-blur-sm border border-white/20"
                    }
                  `}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`
                      text-2xl font-bold leading-tight
                      ${isLight ? "text-gray-900" : "text-white"}
                    `}>
                      {feature.title}
                    </h3>
                    
                    <p className={`
                      text-lg leading-relaxed
                      ${isLight ? "text-gray-600" : "text-gray-300"}
                    `}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className={`
                    absolute top-6 right-6 w-20 h-20 rounded-full opacity-20
                    ${isLight 
                      ? "bg-gradient-to-br from-indigo-200 to-purple-300" 
                      : "bg-gradient-to-br from-white/10 to-white/5"
                    }
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureGrid; 