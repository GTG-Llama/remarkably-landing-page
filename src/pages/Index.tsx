
import React, { useEffect, useState } from "react";
import ThreeScene from "@/components/ThreeScene";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EssayFocusSection from "@/components/EssayFocusSection";
import EssayShowcaseSection from "@/components/EssayShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FlowingParticles from "@/components/FlowingParticles";
import GlowEffect from "@/components/GlowEffect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize loading animation
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    tl.to(".loading-screen", {
      opacity: 0,
      duration: 0.8,
      delay: 1.2,
      ease: "power2.inOut",
    });

    // Enhanced page entrance animation
    const entranceTl = gsap.timeline({ delay: 1.5 });
    
    entranceTl
      .from("#main-content", { opacity: 0, duration: 1, ease: "power2.out" })
      .from(".header-anim", { y: -20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.8")
      .from(".hero-anim", { scale: 0.95, opacity: 0, duration: 0.8 }, "-=0.6");

    // Smooth scroll setup
    gsap.utils.toArray('a[href^="#"]').forEach((anchor: any) => {
      anchor.addEventListener("click", (e: Event) => {
        e.preventDefault();
        
        const targetID = anchor.getAttribute("href");
        const target = document.querySelector(targetID);
        
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Connect sections with path animation
    const sections = gsap.utils.toArray<HTMLElement>('section[id]');
    sections.forEach((section, i) => {
      if (i < sections.length - 1) {
        const nextSection = sections[i + 1];
        
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(`.section-indicator-${i}`, { backgroundColor: "#A89165", duration: 0.3 });
          },
          onLeave: () => {
            gsap.to(`.section-indicator-${i}`, { backgroundColor: "#e5e5e5", duration: 0.3 });
            gsap.to(`.section-indicator-${i+1}`, { backgroundColor: "#A89165", duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(`.section-indicator-${i}`, { backgroundColor: "#A89165", duration: 0.3 });
            gsap.to(`.section-indicator-${i+1}`, { backgroundColor: "#e5e5e5", duration: 0.3 });
          },
          onLeaveBack: () => {
            gsap.to(`.section-indicator-${i}`, { backgroundColor: "#e5e5e5", duration: 0.3 });
          }
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-remarkably-gold animate-pulse mb-4">
              <span className="text-white font-bold text-3xl flex h-full items-center justify-center">R</span>
            </div>
            <p className="text-xl font-medium">Loading experience...</p>
          </div>
        </div>
      )}

      {/* Flowing Particles Animation */}
      <FlowingParticles />

      {/* Section Glow Effects */}
      <GlowEffect targetSelector="#hero-section" startDelay={0.2} />
      <GlowEffect targetSelector="#essay-focus" startDelay={0.3} />
      <GlowEffect targetSelector="#essay-showcase" startDelay={0.35} color="rgba(168, 145, 101, 0.5)" />
      <GlowEffect targetSelector="#features" startDelay={0.4} />
      <GlowEffect targetSelector="#video-showcase" startDelay={0.5} />

      {/* Section Navigation Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-3">
          {["hero-section", "essay-focus", "essay-showcase", "features", "video-showcase", "testimonials"].map((id, index) => (
            <a 
              key={id}
              href={`#${id}`}
              className={`section-indicator-${index} w-3 h-3 rounded-full bg-e5e5e5 transition-all duration-300 hover:scale-125`}
              aria-label={`Navigate to ${id.replace('-', ' ')}`}
            />
          ))}
        </div>
      </div>

      {/* 3D Scene - This will be fixed in the background */}
      <ThreeScene scrollContainer="#main-content" />

      {/* Main Content */}
      <div id="main-content" className="relative z-10">
        <Header />
        <HeroSection />
        <EssayFocusSection />
        <EssayShowcaseSection />
        <FeaturesSection />
        <VideoShowcaseSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
