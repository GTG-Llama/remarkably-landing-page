
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

// Animation variants
const contentVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.2, 
      duration: 0.6,
      type: "spring", 
      bounce: 0.4
    } 
  })
};

const EssayFocusSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Send event to ThreeScene to trigger essay close-up animation
    const essayTransitionEvent = new CustomEvent('essayTransition', {
      detail: { active: true }
    });
    document.dispatchEvent(essayTransitionEvent);

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="content-container z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          <motion.h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl font-bold mb-6 text-remarkably-gold"
            variants={contentVariants}
          >
            See How Remarkably Works
          </motion.h2>
          
          <motion.p 
            ref={descriptionRef}
            className="text-xl text-gray-700 mb-10"
            variants={contentVariants}
          >
            Our AI-powered technology analyzes essays in real-time, identifies key points, 
            highlights strengths and weaknesses, and provides personalized feedback—all 
            with the accuracy and nuance of an experienced educator.
          </motion.p>
          
          <div ref={featureCardsRef} className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Upload Essays",
                description: "Simply upload student essays via our intuitive interface."
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Our AI analyzes content, structure, and style in seconds."
              },
              {
                step: "3",
                title: "Detailed Feedback",
                description: "Receive personalized suggestions and insights for each student."
              }
            ].map((card, i) => (
              <motion.div 
                key={card.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={cardVariants}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="w-12 h-12 bg-remarkably-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-remarkably-gold font-bold text-xl">{card.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <ArrowDown size={24} className="text-remarkably-gold mx-auto animate-bounce" />
        <span className="text-sm font-medium mt-1 block">Continue scrolling</span>
      </motion.div>
    </section>
  );
};

export default EssayFocusSection;
