
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-remarkably-gold/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={contentRef}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-xl max-w-5xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Become Remarkable?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of teachers who are reclaiming their time and making a bigger impact with Remarkably.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="apple-button-gold px-8 py-3 flex items-center gap-2">
                  <span>Start Free Trial</span>
                  <ArrowRight size={18} />
                </button>
                <button className="px-8 py-3 border border-gray-300 rounded-full hover:border-remarkably-gold hover:text-remarkably-gold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">What You'll Get:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-remarkably-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-remarkably-gold text-sm font-bold">✓</span>
                  </div>
                  <span>14-day free trial with full access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-remarkably-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-remarkably-gold text-sm font-bold">✓</span>
                  </div>
                  <span>Personalized onboarding session</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-remarkably-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-remarkably-gold text-sm font-bold">✓</span>
                  </div>
                  <span>Unlimited essay grading during trial</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-remarkably-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-remarkably-gold text-sm font-bold">✓</span>
                  </div>
                  <span>Priority customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
