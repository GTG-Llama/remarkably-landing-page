import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EssayFeature } from "@/utils/three-utils";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const essayFeatures: EssayFeature[] = [
  {
    id: "thesis",
    position: {
      x: 3.5,
      y: 3,
      z: 0.1,
    },
    color: 0xffc8dd, // Pastel pink
    label: "Thesis Check",
    description:
      "Our AI identifies and evaluates the strength of thesis statements, ensuring clarity and argumentative merit.",
  },
  {
    id: "evidence",
    position: {
      x: 2.5,
      y: 1.5,
      z: 0.1,
    },
    color: 0xbde0fe, // Pastel blue
    label: "Evidence Support",
    description:
      "We analyze supporting evidence for relevance, sufficiency, and logical connection to the main arguments.",
  },
  {
    id: "conclusion",
    position: {
      x: 3,
      y: 0,
      z: 0.1,
    },
    color: 0xa2d2ff, // Pastel light blue
    label: "Conclusion Analysis",
    description:
      "Get feedback on conclusion effectiveness, including summary quality and closing impact.",
  },
  {
    id: "citations",
    position: {
      x: 2,
      y: -1.5,
      z: 0.1,
    },
    color: 0xcdb4db, // Pastel purple
    label: "Citation Verification",
    description:
      "Automatically check citation formatting across multiple standards (MLA, APA, Chicago) and ensure proper attribution.",
  },
  {
    id: "grammar",
    position: {
      x: 2.8,
      y: -3,
      z: 0.1,
    },
    color: 0xb8f7d4, // Pastel green
    label: "Grammar Check",
    description:
      "Advanced grammatical analysis identifies errors and suggests improvements beyond what basic spell-checkers can find.",
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

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
  const cardRef = useRef<HTMLDivElement>(null);
  const colorHex = "#" + feature.color.toString(16).padStart(6, "0");

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: isActive ? 1.03 : 1,
        transform: isActive ? "translate(-3px, -3px)" : "translate(0, 0)",
        boxShadow: isActive
          ? `8px 8px 0px 0px rgba(0,0,0,1)`
          : `5px 5px 0px 0px rgba(0,0,0,1)`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isActive]);

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
        {isActive && (
          <div
            className="absolute top-1/2 right-full h-[2px] z-0"
            style={{
              background: `linear-gradient(to left, ${colorHex}, transparent)`,
              width: "150px",
              transform: "translateY(-50%)",
            }}
          />
        )}
        <div
          ref={cardRef}
          className={`rounded-sm border-2 border-black p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]`}
          style={{
            backgroundColor: colorHex,
            borderColor: "black",
            position: "relative",
            overflow: "visible",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 mx-auto border-2 border-black"
            style={{
              backgroundColor: "#FFFFFF",
              transform: "rotate(-2deg)",
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
            }}
          >
            <span style={{ color: colorHex }} className="font-bold text-2xl">
              {feature.id.charAt(0).toUpperCase()}
            </span>
          </div>
          <h3 className="text-xl font-black mb-3 text-black relative">
            {feature.label}
          </h3>
          <p className="text-black leading-relaxed font-medium">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const EssayShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const featureRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleFeatures, setVisibleFeatures] = useState<string[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const handleFeatureHover = (featureId: string | null) => {
      const event = new CustomEvent("featureHover", {
        detail: {
          featureId,
        },
      });
      document.dispatchEvent(event);
    };

    // Clear existing triggers first
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === sectionRef.current) {
        trigger.kill();
      }
    });

    // Create individual scroll triggers for each card
    essayFeatures.forEach((feature, index) => {
      // Check if the ref exists
      if (!featureRefs.current[feature.id]) return;

      const cardElement = featureRefs.current[feature.id];

      if (!cardElement) return;

      const trigger = ScrollTrigger.create({
        trigger: cardElement,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActiveFeature(feature.id);
          handleFeatureHover(feature.id);

          setVisibleFeatures((prev) => {
            if (!prev.includes(feature.id)) {
              return [...prev, feature.id];
            }
            return prev;
          });
        },
        onLeave: () => {
          if (activeFeature === feature.id) {
            setActiveFeature(null);
            handleFeatureHover(null);
          }
          setVisibleFeatures((prev) => prev.filter((id) => id !== feature.id));
        },
        onEnterBack: () => {
          setActiveFeature(feature.id);
          handleFeatureHover(feature.id);

          setVisibleFeatures((prev) => {
            if (!prev.includes(feature.id)) {
              return [...prev, feature.id];
            }
            return prev;
          });
        },
        onLeaveBack: () => {
          if (activeFeature === feature.id) {
            setActiveFeature(null);
            handleFeatureHover(null);
          }

          setVisibleFeatures((prev) => prev.filter((id) => id !== feature.id));
        },
      });

      return () => trigger.kill();
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [activeFeature, featureRefs.current]);

  return (
    <section
      ref={sectionRef}
      id="essay-showcase"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="content-container w-full z-10 text-center md:px-2 mt-1">
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16 transform transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
            Essay Analysis Features
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore how our AI meticulously analyzes each element of student
            essays, providing comprehensive feedback for improvement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-4/5 h-[700px] relative order-2 lg:order-1">
            <div className="from-transparent to-white/70 absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"></div>
          </div>

          <div className="lg:w-1/3 space-y-12 order-1 lg:order-2 mr-14">
            {essayFeatures.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (featureRefs.current[feature.id] = el)}
                className={`transition-all duration-500 ${
                  visibleFeatures.includes(feature.id)
                    ? "opacity-100"
                    : "opacity-50"
                }`}
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <ArrowDown size={24} className="text-remarkably-gold mx-auto" />
        <span className="text-sm font-medium mt-2 block text-gray-600">
          Continue exploring
        </span>
      </div>
    </section>
  );
};

export default EssayShowcaseSection;
