import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Metric {
  icon: LucideIcon;
  number: React.ReactNode;
  label: string;
  description: string;
  gradient: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  isAnimated?: boolean;
}

interface MetricsCardsProps {
  metrics: Metric[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ 
  metrics, 
  title,
  subtitle,
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statsVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const headerVariants = {
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

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        {/* Header */}
        {(title || subtitle) && (
          <motion.div variants={headerVariants} className="text-center mb-12">
            {subtitle && (
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>
        )}
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            
            return (
              <motion.div
                key={index}
                variants={statsVariants}
                className={`${metric.bgColor} ${metric.borderColor} rounded-2xl p-8 border-2 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden backdrop-blur-sm`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Enhanced Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "easeInOut" 
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className={`text-4xl md:text-5xl font-bold ${metric.textColor} tracking-tight`}>
                      {metric.number}
                    </div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {metric.label}
                    </div>
                    <div className="text-sm font-medium text-gray-600 leading-relaxed">
                      {metric.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default MetricsCards; 