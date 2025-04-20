import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EssayFeature } from '@/utils/three-utils';
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const essayFeatures: EssayFeature[] = [{
  id: 'thesis',
  position: {
    x: 3.5,
    y: 3,
    z: 0.1
  },
  color: 0xFF3B30,
  label: 'Thesis Check',
  description: 'Our AI identifies and evaluates the strength of thesis statements, ensuring clarity and argumentative merit.'
}, {
  id: 'evidence',
  position: {
    x: 2.5,
    y: 1.5,
    z: 0.1
  },
  color: 0xA89165,
  label: 'Evidence Support',
  description: 'We analyze supporting evidence for relevance, sufficiency, and logical connection to the main arguments.'
}, {
  id: 'conclusion',
  position: {
    x: 3,
    y: 0,
    z: 0.1
  },
  color: 0xFF3B30,
  label: 'Conclusion Analysis',
  description: 'Get feedback on conclusion effectiveness, including summary quality and closing impact.'
}, {
  id: 'citations',
  position: {
    x: 2,
    y: -1.5,
    z: 0.1
  },
  color: 0x1EAEDB,
  label: 'Citation Verification',
  description: 'Automatically check citation formatting across multiple standards (MLA, APA, Chicago) and ensure proper attribution.'
}, {
  id: 'grammar',
  position: {
    x: 2.8,
    y: -3,
    z: 0.1
  },
  color: 0x4CAF50,
  label: 'Grammar Check',
  description: 'Advanced grammatical analysis identifies errors and suggests improvements beyond what basic spell-checkers can find.'
}];

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
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
  const colorHex = '#' + feature.color.toString(16).padStart(6, '0');
  
  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: isActive ? 1.03 : 1,
        boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.4,
        ease: "power2.out"
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
          opacity: 0 
        },
        onscreen: { 
          y: 0, 
          opacity: 1, 
          transition: { 
            type: "spring", 
            bounce: 0.3, 
            duration: 1, 
            delay: index * 0.1 
          } 
        }
      }}
    >
      <div className="relative">
        {isActive && (
          <div 
            className="absolute top-1/2 right-full h-[2px] z-0" 
            style={{
              background: `linear-gradient(to left, ${colorHex}, transparent)`,
              width: '150px',
              transform: 'translateY(-50%)'
            }}
          />
        )}
        <div 
          ref={cardRef} 
          className={`bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 transition-all duration-300`}
          style={{
            borderColor: isActive ? colorHex : 'transparent'
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto"
            style={{
              backgroundColor: `${colorHex}15`
            }}
          >
            <span 
              style={{ color: colorHex }} 
              className="font-bold text-2xl"
            >
              {feature.id.charAt(0).toUpperCase()}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.label}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const EssayShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;

    const handleFeatureHover = (featureId: string | null) => {
      const event = new CustomEvent('featureHover', {
        detail: {
          featureId
        }
      });
      document.dispatchEvent(event);
    };

    essayFeatures.forEach((feature, index) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${index * 150 + 300} center`,
        end: `top+=${index * 150 + 450} center`,
        onEnter: () => {
          setActiveFeature(feature.id);
          handleFeatureHover(feature.id);
        },
        onLeave: () => {
          setActiveFeature(null);
          handleFeatureHover(null);
        },
        onEnterBack: () => {
          setActiveFeature(feature.id);
          handleFeatureHover(feature.id);
        },
        onLeaveBack: () => {
          setActiveFeature(null);
          handleFeatureHover(null);
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      id="essay-showcase" 
      className="min-h-screen flex flex-col items-center justify-center relative mt-3 overflow-hidden"
    >
      <div className="content-container w-full z-10 text-center md:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-remarkably-gold">
            Essay Analysis Features
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore how our AI meticulously analyzes each element of student essays,
            providing comprehensive feedback for improvement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-4/5 h-[600px] relative order-2 lg:order-1">
            <div className="bg-gradient-to-b from-transparent to-white/70 absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"></div>
          </div>

          <div className="lg:w-2/5 space-y-6 order-1 lg:order-2">
            {essayFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.id} 
                feature={feature} 
                isActive={activeFeature === feature.id}
                index={index}
                onMouseEnter={() => {
                  setActiveFeature(feature.id);
                  document.dispatchEvent(new CustomEvent('featureHover', {
                    detail: { featureId: feature.id }
                  }));
                }} 
                onMouseLeave={() => {
                  setActiveFeature(null);
                  document.dispatchEvent(new CustomEvent('featureHover', {
                    detail: { featureId: null }
                  }));
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <ArrowDown size={24} className="text-remarkably-gold mx-auto" />
        <span className="text-sm font-medium mt-2 block text-gray-600">Continue exploring</span>
      </div>
    </section>
  );
};

export default EssayShowcaseSection;
