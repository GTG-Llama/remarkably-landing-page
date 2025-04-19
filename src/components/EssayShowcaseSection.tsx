
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EssayFeature } from '@/utils/three-utils';
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

// Features data array matching the 3D model
const essayFeatures: EssayFeature[] = [
  {
    id: 'thesis',
    position: {
      x: 3.5,
      y: 3,
      z: 0.1
    },
    color: 0xFF3B30,
    label: 'Thesis Check',
    description: 'Our AI identifies and evaluates the strength of thesis statements, ensuring clarity and argumentative merit.'
  },
  {
    id: 'evidence',
    position: {
      x: 2.5,
      y: 1.5,
      z: 0.1
    },
    color: 0xA89165,
    label: 'Evidence Support',
    description: 'We analyze supporting evidence for relevance, sufficiency, and logical connection to the main arguments.'
  },
  {
    id: 'conclusion',
    position: {
      x: 3,
      y: 0,
      z: 0.1
    },
    color: 0xFF3B30,
    label: 'Conclusion Analysis',
    description: 'Get feedback on conclusion effectiveness, including summary quality and closing impact.'
  },
  {
    id: 'citations',
    position: {
      x: 2,
      y: -1.5,
      z: 0.1
    },
    color: 0x1EAEDB,
    label: 'Citation Verification',
    description: 'Automatically check citation formatting across multiple standards (MLA, APA, Chicago) and ensure proper attribution.'
  },
  {
    id: 'grammar',
    position: {
      x: 2.8,
      y: -3,
      z: 0.1
    },
    color: 0x4CAF50,
    label: 'Grammar Check',
    description: 'Advanced grammatical analysis identifies errors and suggests improvements beyond what basic spell-checkers can find.'
  }
];

// Animation variants for cards
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: index * 0.1
    }
  })
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
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Convert hex color to RGB for use in styles
  const colorHex = '#' + feature.color.toString(16).padStart(6, '0');
  
  useEffect(() => {
    if (cardRef.current) {
      if (isActive) {
        gsap.to(cardRef.current, {
          scale: 1.05,
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          duration: 0.4,
          ease: "power3.out"
        });
      } else {
        gsap.to(cardRef.current, {
          scale: 1,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power3.out"
        });
      }
    }
  }, [isActive]);
  
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      custom={index}
      variants={cardVariants}
      className="feature-card-animated"
    >
      <div 
        ref={cardRef} 
        className={`bg-white rounded-xl p-6 shadow-md border-2 transition-all duration-300 mb-6`}
        style={{
          borderColor: isActive ? colorHex : 'transparent',
          transform: 'translateZ(0)', // Force hardware acceleration for smoother animations
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
          style={{
            backgroundColor: `${colorHex}20` // 20 is hex for 12% opacity
          }}
        >
          <span 
            style={{ color: colorHex }} 
            className="font-bold text-xl"
          >
            {feature.id.charAt(0).toUpperCase()}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{feature.label}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const EssayShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;

    // This will trigger the 3D model to focus on specific features
    const handleFeatureHover = (featureId: string | null) => {
      // Dispatch event for 3D scene to react to
      const event = new CustomEvent('featureHover', {
        detail: {
          featureId
        }
      });
      document.dispatchEvent(event);
    };

    // Setup animations for section entrance
    gsap.from(sectionRef.current.querySelector('.section-title'), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // Set up scroll trigger for each feature to highlight it sequentially
    essayFeatures.forEach((feature, index) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${index * 120 + 300} center`,
        end: `top+=${index * 120 + 450} center`,
        onEnter: () => {
          setActiveFeature(feature.id);
          handleFeatureHover(feature.id);
        },
        onLeave: () => {
          if (activeFeature === feature.id) {
            setActiveFeature(null);
            handleFeatureHover(null);
          }
        },
        onEnterBack: () => {
          setActiveFeature(feature.id);
          handleFeatureHover(feature.id);
        },
        onLeaveBack: () => {
          if (activeFeature === feature.id) {
            setActiveFeature(null);
            handleFeatureHover(null);
          }
        }
      });
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [activeFeature]);
  
  return (
    <section 
      ref={sectionRef} 
      id="essay-showcase" 
      className="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-70 pointer-events-none"></div>
      
      <div className="content-container z-10 text-center md:px-8 mx-auto max-w-7xl w-full">
        <div 
          className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl mb-16 transform transition-all duration-500 hover:shadow-2xl"
        >
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-remarkably-gold">
            Intelligent Essay Analysis
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our AI identifies key elements of each essay and provides targeted feedback.
            Explore each feature to see how Remarkably analyzes student work.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 items-center lg:items-start">
          {/* Right side: Feature cards */}
          <div className="lg:w-2/5 pt-8 lg:pt-0 px-4 lg:px-0">
            <div className="grid grid-cols-1 gap-2">
              {essayFeatures.map((feature, index) => (
                <FeatureCard 
                  key={feature.id} 
                  feature={feature} 
                  isActive={activeFeature === feature.id}
                  index={index}
                  onMouseEnter={() => {
                    setActiveFeature(feature.id);
                    const event = new CustomEvent('featureHover', {
                      detail: {
                        featureId: feature.id
                      }
                    });
                    document.dispatchEvent(event);
                  }} 
                  onMouseLeave={() => {
                    setActiveFeature(null);
                    const event = new CustomEvent('featureHover', {
                      detail: {
                        featureId: null
                      }
                    });
                    document.dispatchEvent(event);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Left side: 3D essay viewing area - Takes more space on desktop */}
          <div className="lg:w-3/5 h-96 lg:h-[600px] relative rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder for 3D view (actual 3D rendering happens in ThreeScene.tsx) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <ArrowDown size={24} className="text-remarkably-gold mx-auto animate-bounce" />
        <span className="text-sm font-medium mt-1 block">Continue exploring</span>
      </motion.div>
    </section>
  );
};

export default EssayShowcaseSection;
