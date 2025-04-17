
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EssayFeature } from '@/utils/three-utils';

gsap.registerPlugin(ScrollTrigger);

// Features data array matching the 3D model
const essayFeatures: EssayFeature[] = [
  {
    id: 'thesis',
    position: { x: 3.5, y: 3, z: 0.1 },
    color: 0xFF3B30,
    label: 'Thesis Check',
    description: 'Our AI identifies and evaluates the strength of thesis statements, ensuring clarity and argumentative merit.'
  },
  {
    id: 'evidence',
    position: { x: 2.5, y: 1.5, z: 0.1 },
    color: 0xA89165,
    label: 'Evidence Support',
    description: 'We analyze supporting evidence for relevance, sufficiency, and logical connection to the main arguments.'
  },
  {
    id: 'conclusion',
    position: { x: 3, y: 0, z: 0.1 },
    color: 0xFF3B30,
    label: 'Conclusion Analysis',
    description: 'Get feedback on conclusion effectiveness, including summary quality and closing impact.'
  },
  {
    id: 'citations',
    position: { x: 2, y: -1.5, z: 0.1 },
    color: 0x1EAEDB,
    label: 'Citation Verification',
    description: 'Automatically check citation formatting across multiple standards (MLA, APA, Chicago) and ensure proper attribution.'
  },
  {
    id: 'grammar',
    position: { x: 2.8, y: -3, z: 0.1 },
    color: 0x4CAF50,
    label: 'Grammar Check',
    description: 'Advanced grammatical analysis identifies errors and suggests improvements beyond what basic spell-checkers can find.'
  }
];

interface FeatureCardProps {
  feature: EssayFeature;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  feature, 
  isActive,
  onMouseEnter,
  onMouseLeave
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Convert hex color to RGB for use in Tailwind's text-[#hex] format
  const colorHex = '#' + feature.color.toString(16).padStart(6, '0');
  
  useEffect(() => {
    if (cardRef.current) {
      if (isActive) {
        gsap.to(cardRef.current, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          duration: 0.3
        });
      } else {
        gsap.to(cardRef.current, {
          scale: 1,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          duration: 0.3
        });
      }
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl p-6 shadow-md border-2 transition-all duration-300 ${
        isActive ? 'border-' + colorHex : 'border-transparent'
      }`}
      style={{ borderColor: isActive ? colorHex : 'transparent' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
        style={{ backgroundColor: `${colorHex}20` }} // 20 is hex for 12% opacity
      >
        <span style={{ color: colorHex }} className="font-bold text-xl">
          {feature.id.charAt(0).toUpperCase()}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.label}</h3>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
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
        detail: { featureId }
      });
      document.dispatchEvent(event);
    };

    // Set up scroll trigger for each feature to highlight it sequentially
    essayFeatures.forEach((feature, index) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${(index * 150) + 300} center`,
        end: `top+=${(index * 150) + 450} center`,
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

    // Clean up ScrollTrigger instances on unmount
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
      className="min-h-screen flex flex-col items-center justify-center relative py-20"
    >
      <div className="content-container z-10 text-center px-4 md:px-8 mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-remarkably-gold">
            Features
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our AI identifies key elements of each essay and provides targeted feedback.
            Hover over each feature to see how Remarkably analyzes student work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: 3D essay viewing area */}
          <div className="lg:w-1/2 h-80 lg:h-auto relative">
            <div className="bg-gradient-to-b from-transparent to-white/70 absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"></div>
            
            {/* Placeholder for 3D view (actual 3D rendering happens in ThreeScene.tsx) */}
          </div>

          {/* Right side: Feature cards */}
          <div className="pt-10 ml-20">
            <div className="grid grid-cols-1 gap-6">
              {essayFeatures.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isActive={activeFeature === feature.id}
                  onMouseEnter={() => {
                    setActiveFeature(feature.id);
                    const event = new CustomEvent('featureHover', {
                      detail: { featureId: feature.id }
                    });
                    document.dispatchEvent(event);
                  }}
                  onMouseLeave={() => {
                    setActiveFeature(null);
                    const event = new CustomEvent('featureHover', {
                      detail: { featureId: null }
                    });
                    document.dispatchEvent(event);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <ArrowDown size={24} className="text-remarkably-gold mx-auto" />
        <span className="text-sm font-medium mt-1 block">Continue exploring</span>
      </div>
    </section>
  );
};

export default EssayShowcaseSection;
