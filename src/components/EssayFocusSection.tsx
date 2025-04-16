
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EssayFocusSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Send event to ThreeScene to trigger essay close-up animation
    const essayTransitionEvent = new CustomEvent('essayTransition', {
      detail: { active: true }
    });
    document.dispatchEvent(essayTransitionEvent);

    // Animate section content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
    .from(descriptionRef.current, {
      y: 30,
      opacity: 0, 
      duration: 0.5,
    }, "-=0.3");

    // Cleanup on component unmount
    return () => {
      const resetEvent = new CustomEvent('essayTransition', {
        detail: { active: false }
      });
      document.dispatchEvent(resetEvent);
      
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="essay-focus" 
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="content-container z-10 text-center px-4 md:px-6 max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-700">
        <h2 
          ref={titleRef} 
          className="text-3xl md:text-4xl font-bold mb-6 text-remarkably-gold"
        >
          See How Remarkably Works
        </h2>
        <p 
          ref={descriptionRef}
          className="text-xl text-gray-700"
        >
          Our AI-powered technology analyzes essays in real-time, identifies key points, 
          highlights strengths and weaknesses, and provides personalized feedback—all 
          with the accuracy and nuance of an experienced educator.
        </p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <ArrowDown size={24} className="text-remarkably-gold mx-auto" />
        <span className="text-sm font-medium mt-1 block">Continue scrolling</span>
      </div>
    </section>
  );
};

export default EssayFocusSection;
