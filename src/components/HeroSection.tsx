import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }).from(scrollIndicatorRef.current, {
      opacity: 0,
      duration: 0.8,
      repeat: -1,
      yoyo: true
    }, "+=0.5");

    // Add particle effects on mouse move
    if (sectionRef.current) {
      const createParticle = (x: number, y: number) => {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 rounded-full bg-black pointer-events-none';
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
      featuresSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero-section" ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,145,101,0.15),rgba(255,255,255,0)_70%)]"></div>
      </div>
      
      <div className="content-container z-10 text-center md:px-8 max-w-10xl hero-anim py-[20px] rounded-md my-0 mx-0 px-0 absolute top-[45%] left-0 right-0">
        <h1 ref={headingRef} className="font-playfair text-2xl md:text-[12rem] tracking-tight relative bg-clip-text bg-gradient-to-b from-black via-black to-remarkably-gold/90 mx-0 py-0 lg:text-[[14rem]] font-bold text-slate-950">
          remarkably.
        </h1>
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-12 transform cursor-pointer" onClick={scrollToFeatures}>
        <ArrowDown size={28} className="text-remarkably-gold animate-bounce" />
      </div>
    </section>;
};
export default HeroSection;