
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
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
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="content-container z-10 text-center px-4 md:px-6 max-w-5xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Empowering Remarkable{" "}
          <span className="text-remarkably-gold">Teachers</span>.
          <br />
          Building Remarkable{" "}
          <span className="text-remarkably-gold">Schools</span>.
        </h1>
        <p
          ref={taglineRef}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Our AI-powered essay grading platform helps you grade faster, provide better feedback, 
          and reclaim your time — so you can focus on what truly matters: your students.
        </p>
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="apple-button-gold px-8 py-3 text-lg">
            Start Free Trial
          </button>
          <button className="px-8 py-3 text-lg border border-gray-300 rounded-full hover:border-remarkably-gold hover:text-remarkably-gold transition-colors">
            Watch Demo
          </button>
        </div>
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToFeatures}
      >
        <ArrowDown size={32} className="text-remarkably-gold animate-bounce" />
        <span className="text-sm font-medium mt-2 block">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
