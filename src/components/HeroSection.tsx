import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

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
      ease: "power3.out",
    }).from(
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
        const particle = document.createElement("div");
        particle.className =
          "absolute w-2 h-2 rounded-full bg-black pointer-events-none";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.zIndex = "5";
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
          },
        });
      };
      const handleMouseMove = (e: MouseEvent) => {
        // Only create particles occasionally to avoid overwhelming the browser
        if (Math.random() > 0.92) {
          createParticle(e.clientX, e.clientY);
        }
      };
      sectionRef.current.addEventListener("mousemove", handleMouseMove);
      return () => {
        sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const scrollToFeatures = () => {
    // Scroll approximately 100vh down the page
    window.scrollTo({
      top: window.innerHeight * 1.0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      {/* Decorative elements for neobrutalism style */}
      <div className="absolute top-12 left-12 w-24 h-24 bg-[var(--neo-bg-blue)] neo-border rotate-12 z-0"></div>
      <div className="absolute bottom-14 left-20 w-16 h-16 bg-[var(--neo-bg-pink)] neo-border -rotate-6 z-0"></div>
      <div className="absolute top-24 right-48 w-20 h-20 bg-[var(--neo-bg-yellow)] neo-border rotate-6 z-0 md:block hidden"></div>

      {/* Left side - Catchy phrases with neobrutalism styling */}
      <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-16 flex flex-col justify-center z-10 mb-10 md:mb-0">
        <div className="bg-white neo-border neo-shadow p-8 transform rotate-1 mb-8 relative">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black"
          >
            <span className="block">The future of</span>
            <span className="block mt-2">
              essay grading is <span className="neo-highlight">here</span>
            </span>
          </h1>
        </div>

        <div className="bg-[var(--neo-bg-cyan)] neo-border neo-shadow-sm p-6 -rotate-2 mb-8">
          <p className="text-xl md:text-2xl font-bold text-black">
            Replace tedious manual grading with AI-powered solutions that frees
            up time for what truly matters, teaching and connecting with
            students.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          onClick={scrollToFeatures}
        >
          <button className="neo-button-accent transform -rotate-1 animate-bounce">
            Learn more
          </button>
        </div>
      </div>

      {/* Right side - 3D Essay Model (adjusted to be partially visible) */}
      <div className="w-full md:w-1/2 h-[400px] md:h-screen relative">
        <ThreeScene
          scrollContainer="body"
          rightSidePosition={true}
          partialView={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
