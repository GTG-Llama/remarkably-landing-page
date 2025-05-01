import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

// Define EssayFeature interface locally instead of importing from three-utils
interface EssayFeature {
  id: string;
  position: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scale?: number;
  color: number;
  label: string;
  description: string;
}

const essayFeatures: EssayFeature[] = [
  {
    id: "spelling",
    position: {
      x: 3.5,
      y: 3,
      z: 0.1,
    },
    color: 0xffc8dd, // Pastel pink
    label: "Spelling",
    description:
      "We check for spelling errors and suggest corrections to enhance clarity.",
  },
  {
    id: "grammar",
    position: {
      x: 2.5,
      y: 1.5,
      z: 0.1,
    },
    color: 0xbde0fe, // Pastel blue
    label: "Grammar",
    description:
      "We analyze sentence structure, verb tense, and punctuation to ensure grammatical accuracy.",
  },
  {
    id: "punctuation",
    position: {
      x: 3,
      y: 0,
      z: 0.1,
    },
    color: 0xfffc30, // yellow
    label: "Punctuation",
    description:
      "Get feedback on punctuation accuracy, including comma usage and sentence clarity.",
  },
  {
    id: "Improvements",
    position: {
      x: 2,
      y: -1.5,
      z: 0.1,
    },
    color: 0x2ee84a, // Green
    label: "Suggestions for Improvement",
    description:
      "We analyse content and structure, providing suggestions for improvement.",
  },
];

interface FeatureCardProps {
  feature: EssayFeature;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  isActive,
  onMouseEnter,
  onMouseLeave,
  index,
}) => {
  const colorHex = "#" + feature.color.toString(16).padStart(6, "0");

  const cardVariants = {
    inactive: {
      scale: 1,
      x: 0,
      y: 0,
      boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
    },
    active: {
      scale: 1.05,
      x: -3,
      y: -3,
      boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
    },
    hover: {
      scale: 1.02,
      x: -2,
      y: -2,
      boxShadow: "7px 7px 0px 0px rgba(0,0,0,1)",
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 0.8 },
    animate: {
      rotate: 3,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
        type: "spring",
      },
    },
    hover: {
      rotate: -3,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const descriptionVariants = {
    initial: { rotate: 0 },
    animate: { rotate: -1 },
    hover: {
      rotate: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      custom={index}
      variants={{
        offscreen: {
          y: 30,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
            delay: index * 0.1,
          },
        },
      }}
    >
      <div className="relative">
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="rounded-sm border-2 border-black p-8"
          style={{
            backgroundColor: colorHex,
            borderColor: "black",
            position: "relative",
            overflow: "visible",
          }}
          variants={cardVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          whileHover="hover"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-14 h-14 flex items-center justify-center mb-4 mx-auto border-3 border-black"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
            }}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <span style={{ color: "black" }} className="font-black text-2xl">
              {feature.id.charAt(0).toUpperCase()}
            </span>
          </motion.div>
          <h3 className="text-xl font-black mb-3 text-black relative">
            {feature.label}
          </h3>
          <motion.p
            className="text-black leading-relaxed font-bold bg-white border-2 border-black p-3"
            variants={descriptionVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            {feature.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const EssayShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const featureRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleFeatures, setVisibleFeatures] = useState<string[]>([]);
  const controls = useAnimation();

  const headingVariants = {
    hidden: { y: 50, opacity: 0, rotate: 0 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      rotate: 2,
      boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
      transition: { duration: 0.3 },
    },
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  const decorativeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      rotate: custom,
      transition: {
        delay: 0.3,
        duration: 0.5,
        type: "spring",
      },
    }),
    hover: {
      scale: 1.1,
      rotate: (custom) => custom * 1.5,
      transition: { duration: 0.3 },
    },
  };

  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleFeatureHover = (featureId: string | null) => {
      const event = new CustomEvent("featureHover", {
        detail: {
          featureId,
        },
      });
      document.dispatchEvent(event);
    };

    // Set up intersection observers for each feature card
    const observers: IntersectionObserver[] = [];

    essayFeatures.forEach((feature) => {
      const featureRef = featureRefs.current[feature.id];
      if (!featureRef) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveFeature(feature.id);
              handleFeatureHover(feature.id);
              setVisibleFeatures((prev) => {
                if (!prev.includes(feature.id)) {
                  return [...prev, feature.id];
                }
                return prev;
              });
            } else {
              if (activeFeature === feature.id) {
                setActiveFeature(null);
                handleFeatureHover(null);
              }
              setVisibleFeatures((prev) =>
                prev.filter((id) => id !== feature.id)
              );
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(featureRef);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [activeFeature]);

  return (
    <section
      ref={sectionRef}
      id="essay-showcase"
      className="min-h-screen py-20 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements with animations */}
      <motion.div
        className="absolute top-10 left-0 w-24 h-24 bg-yellow-300 border-4 border-black z-0"
        variants={decorativeVariants}
        custom={12}
        initial="hidden"
        animate={controls}
        whileHover="hover"
      />

      <motion.div
        className="absolute bottom-10 right-5 w-20 h-20 bg-pink-300 border-4 border-black z-0"
        variants={decorativeVariants}
        custom={-6}
        initial="hidden"
        animate={controls}
        whileHover="hover"
      />

      <div className="content-container w-3/4 z-10 text-center md:px-2 mt-5 relative">
        <motion.div
          className="bg-[#BDE0FE] border-4 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16"
          variants={headingVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
            Essay
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Analysis</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"
                variants={highlightVariants}
                initial="hidden"
                animate={controls}
              />
            </span>
            Features
          </h2>
          <motion.p
            className="text-xl text-black font-bold bg-white border-2 border-black p-4 max-w-3xl mx-auto"
            initial={{ rotate: 0 }}
            animate={{ rotate: -1 }}
            whileHover={{
              rotate: 1,
              transition: { duration: 0.3 },
            }}
          >
            Explore how our AI meticulously analyzes each element of student
            essays, providing comprehensive feedback for improvement.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-3/5 h-[700px] relative order-2 lg:order-1">
            {/* This empty div is where the 3D model will be visible */}
            <div className="absolute bottom-0 left-0 right- h-20 z-10 pointer-events-none"></div>
          </div>

          <div className="lg:w-1/3 space-y-12 order-1 lg:order-2">
            {essayFeatures.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (featureRefs.current[feature.id] = el)}
                className="transition-all duration-500"
              >
                <FeatureCard
                  feature={feature}
                  isActive={activeFeature === feature.id}
                  index={index}
                  onMouseEnter={() => {
                    setActiveFeature(feature.id);
                    document.dispatchEvent(
                      new CustomEvent("featureHover", {
                        detail: { featureId: feature.id },
                      })
                    );
                  }}
                  onMouseLeave={() => {
                    setActiveFeature(null);
                    document.dispatchEvent(
                      new CustomEvent("featureHover", {
                        detail: { featureId: null },
                      })
                    );
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssayShowcaseSection;
