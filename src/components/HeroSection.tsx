
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const promotionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(promotionRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.4")
    .from(
      taglineRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .from(
      ctaRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .from(
      scrollIndicatorRef.current,
      {
        opacity: 0,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
      },
      "+=0.5"
    );

    // Add particle effects on mouse move
    if (sectionRef.current) {
      const createParticle = (x: number, y: number) => {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 rounded-full bg-remarkably-gold/30 pointer-events-none';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.zIndex = '5';
        
        sectionRef.current?.appendChild(particle);
        
        gsap.to(particle, {
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          opacity: 0,
          scale: Math.random() * 3 + 1,
          duration: Math.random() * 2 + 1,
          ease: "power2.out",
          onComplete: () => {
            particle.remove();
          }
        });
      };
      
      const handleMouseMove = (e: MouseEvent) => {
        // Only create particles occasionally to avoid overwhelming the browser
        if (Math.random() > 0.92) {
          createParticle(e.clientX, e.clientY);
        }
      };
      
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("essay-focus");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero-section"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,145,101,0.15),rgba(255,255,255,0)_70%)]"></div>
      </div>
      
      <div className="content-container z-10 text-center px-4 md:px-8 max-w-5xl mx-auto hero-anim">
        
        
        <h1
          ref={headingRef}
          className="relative inline-block"
                >
                  remarkable?
          <br />
          <span className="text-remarkably-gold">Remarkably.</span>
        </h1>
        
        <p
          ref={taglineRef}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Our AI-powered platform helps you grade faster, provide better feedback, 
          and reclaim your time — so you can focus on what truly matters: your students.
        </p>
        
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-black text-white rounded-full px-8 py-3 text-lg font-medium hover:bg-opacity-80 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Start Free Trial</span>
            <span className="absolute inset-0 bg-remarkably-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </button>
          <button className="px-8 py-3 text-lg border border-gray-300 rounded-full hover:border-remarkably-gold hover:text-remarkably-gold transition-colors relative overflow-hidden group">
            <span className="relative z-10">Watch Demo</span>
            <span className="absolute inset-0 bg-remarkably-gold/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToFeatures}
      >
        <ArrowDown size={28} className="text-remarkably-gold animate-bounce" />
        <span className="text-sm font-medium mt-2 block">Explore More</span>
      </div>
    </section>
  );
};

export default HeroSection;
