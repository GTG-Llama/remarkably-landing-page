
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      id="essay-focus" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="content-container z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl font-bold mb-6 text-remarkably-gold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See How Remarkably Works
          </motion.h2>
          
          <motion.p 
            ref={descriptionRef}
            className="text-xl text-gray-700 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our AI-powered technology analyzes essays in real-time, identifies key points, 
            highlights strengths and weaknesses, and provides personalized feedback—all 
            with the accuracy and nuance of an experienced educator.
          </motion.p>
          
          <motion.div 
            ref={featureCardsRef} 
            className="grid md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                number: 1,
                title: "Upload Essays",
                description: "Simply upload student essays via our intuitive interface."
              },
              {
                number: 2,
                title: "AI Analysis",
                description: "Our AI analyzes content, structure, and style in seconds."
              },
              {
                number: 3,
                title: "Detailed Feedback",
                description: "Receive personalized suggestions and insights for each student."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                variants={item}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)" 
                }}
              >
                <div className="w-12 h-12 bg-remarkably-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-remarkably-gold font-bold text-xl">{feature.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown size={24} className="text-remarkably-gold mx-auto animate-bounce" />
        <span className="text-sm font-medium mt-1 block">Continue scrolling</span>
      </motion.div>
    </motion.section>
  );
};

export default EssayFocusSection;
