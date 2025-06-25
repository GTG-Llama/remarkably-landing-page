import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  quote: string;
  avatarUrl?: string;
  schoolLogoUrl?: string;
  position?: string;
  school?: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  title = "What Educators Say",
  subtitle = "Trusted by teachers worldwide",
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className={`py-16 bg-gradient-to-br from-gray-50 to-indigo-50/30 ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        {/* Header */}
        <motion.div variants={headerVariants} className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex-shrink-0 w-80 snap-start"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-indigo-200"
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-indigo-200/50 backdrop-blur-sm"
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-indigo-500 opacity-60" />
        {testimonial.schoolLogoUrl && (
          <img
            src={testimonial.schoolLogoUrl}
            alt="School logo"
            className="w-12 h-12 object-contain rounded-lg bg-white p-1 shadow-sm"
          />
        )}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-3 mt-auto">
        {testimonial.avatarUrl ? (
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg border-2 border-white shadow-sm">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </div>
          {(testimonial.position || testimonial.school) && (
            <div className="text-xs text-gray-600">
              {testimonial.position}
              {testimonial.position && testimonial.school && " • "}
              {testimonial.school}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection; 