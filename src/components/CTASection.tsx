import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

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
      className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-400 to-indigo-900 bg-opacity-90"
    >
      {/* Decorative elements */}
      <div className="absolute top-12 left-1/4 w-24 h-24 bg-cyan-300 border-4 border-black rotate-12 z-0"></div>
      <div className="absolute bottom-12 right-1/4 w-20 h-20 bg-yellow-300 border-4 border-black -rotate-6 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={contentRef}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -top-8 -left-8 w-full h-full bg-pink-300 border-4 border-black rotate-2 z-0"></div>
          
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">
                  Ready to Become 
                  <span className="relative ml-2 inline-block">
                    <span className="relative z-10">Remarkable</span>
                    <span className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"></span>
                  </span>
                  ?
                </h2>
                <p className="text-xl text-black font-bold mb-8 bg-blue-100 border-2 border-black p-4 -rotate-1">
                  Join hundreds of teachers who are reclaiming their time and making a bigger impact with Remarkably.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-black text-white text-lg font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 flex items-center gap-2">
                    <a href="mailto:contact@lenorai.com">
                      Schedule a Consult
                    </a>
                    <ArrowRight size={18} />
                  </button>
                  <button className="bg-pink-300 text-black text-lg font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1">
                    It's Free!
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#B8F7D4] border-2 border-black -rotate-2 z-0"></div>
                <div className="bg-white border-3 border-black p-6 relative z-10 transform rotate-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl font-black mb-6 text-black relative inline-block">
                    What You'll Get:
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-cyan-300 -z-0"></span>
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "A Powerful automated essay grader.",
                      "Personalized onboarding session",
                      "Reduced Marking Time from 15mins to 3mins",
                      "Priority customer support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 mb-3">
                        <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-black font-bold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
