
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
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add class to body to prevent scrolling during loading
    document.body.classList.add('overflow-hidden');
    
    // Initialize loading animation with Apple-like refinement
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.classList.remove('overflow-hidden');
      },
    });

    tl.to(".loading-screen", {
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "power2.inOut",
    });

    // Enhanced page entrance animation
    const entranceTl = gsap.timeline({ delay: 1.3 });
    
    entranceTl
      .from("#main-content", { opacity: 0, duration: 1, ease: "power3.out" })
      .from(".header-anim", { y: -20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.8")
      .from(".hero-anim", { scale: 0.97, opacity: 0, duration: 0.8 }, "-=0.6");

    // Smooth scroll setup with improved behavior
    gsap.utils.toArray('a[href^="#"]').forEach((anchor: any) => {
      anchor.addEventListener("click", (e: Event) => {
        e.preventDefault();
        
        const targetID = anchor.getAttribute("href");
        const target = document.querySelector(targetID);
        
        if (target) {
          // Use GSAP for smoother scrolling
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: target.getBoundingClientRect().top + window.scrollY - 80,
              autoKill: false
            },
            ease: "power3.inOut"
          });
        }
      });
    });

    // Section indicators animation with improved transitions
    const sections = gsap.utils.toArray<HTMLElement>('section[id]');
    sections.forEach((section, i) => {
      if (i < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(`.section-indicator-${i}`, { 
              backgroundColor: "#A89165", 
              scale: 1.25,
              duration: 0.4 
            });
          },
          onLeave: () => {
            gsap.to(`.section-indicator-${i}`, { 
              backgroundColor: "#e5e5e5", 
              scale: 1,
              duration: 0.4 
            });
            gsap.to(`.section-indicator-${i+1}`, { 
              backgroundColor: "#A89165", 
              scale: 1.25,
              duration: 0.4 
            });
          },
          onEnterBack: () => {
            gsap.to(`.section-indicator-${i}`, { 
              backgroundColor: "#A89165", 
              scale: 1.25,
              duration: 0.4 
            });
            gsap.to(`.section-indicator-${i+1}`, { 
              backgroundColor: "#e5e5e5", 
              scale: 1,
              duration: 0.4 
            });
          },
          onLeaveBack: () => {
            gsap.to(`.section-indicator-${i}`, { 
              backgroundColor: "#e5e5e5", 
              scale: 1,
              duration: 0.4 
            });
          }
        });
      }
    });

    // Add parallax effect to various elements
    gsap.utils.toArray<HTMLElement>('.parallax-element').forEach((element) => {
      const speed = element.dataset.speed || "0.1";
      gsap.to(element, {
        y: `+=${window.innerHeight * parseFloat(speed)}`,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.classList.remove('overflow-hidden');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen with Apple-inspired design */}
      {isLoading && (
        <div className="loading-screen fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-remarkably-gold animate-pulse mb-4 overflow-hidden shadow-lg">
              <span className="text-white font-bold text-3xl flex h-full items-center justify-center">R</span>
            </div>
            <p className="text-xl font-medium tracking-wide">Loading experience...</p>
          </div>
        </div>
      )}

      {/* Flowing Particles Animation - Enhanced for a premium feel */}
      <FlowingParticles />

      {/* Section Glow Effects with improved positioning */}
      <GlowEffect targetSelector="#hero-section" startDelay={0.2} size="large" />
      <GlowEffect targetSelector="#essay-focus" startDelay={0.3} />
      <GlowEffect targetSelector="#essay-showcase" startDelay={0.35} color="rgba(168, 145, 101, 0.5)" />
      <GlowEffect targetSelector="#features" startDelay={0.4} />
      <GlowEffect targetSelector="#video-showcase" startDelay={0.5} />

      {/* Section Navigation Indicators - Apple-inspired design */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-3">
          {["hero-section", "essay-focus", "essay-showcase", "features", "video-showcase", "testimonials"].map((id, index) => (
            <a 
              key={id}
              href={`#${id}`}
              className={`section-indicator-${index} w-3 h-3 rounded-full bg-e5e5e5 transition-all duration-300 hover:scale-125 shadow-sm`}
              aria-label={`Navigate to ${id.replace('-', ' ')}`}
            />
          ))}
        </div>
      </div>

      {/* 3D Scene - Fixed in the background with improved rendering */}
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
