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

gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false)
    });

    tl.to(".loading-screen", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.5
    });

    const entranceTl = gsap.timeline({ delay: 1 });
    
    entranceTl
      .from("#main-content", { 
        opacity: 0, 
        duration: 1.2, 
        ease: "power3.out" 
      })
      .from(".header-anim", { 
        y: -30, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power3.out" 
      }, "-=0.8")
      .from(".hero-anim", { 
        scale: 0.98, 
        opacity: 0, 
        duration: 1,
        ease: "power3.out" 
      }, "-=0.6");

    gsap.utils.toArray('a[href^="#"]').forEach((anchor: any) => {
      anchor.addEventListener("click", (e: Event) => {
        e.preventDefault();
        const targetID = anchor.getAttribute("href");
        const target = document.querySelector(targetID);
        
        if (target) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: target,
              offsetY: 80
            },
            ease: "power3.inOut"
          });
        }
      });
    });

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="loading-screen fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-remarkably-gold animate-pulse mb-4 transition-all duration-500">
              <span className="text-white font-bold text-3xl flex h-full items-center justify-center">
                R
              </span>
            </div>
            <p className="text-xl font-medium text-gray-800">Loading experience...</p>
          </div>
        </div>
      )}

      <FlowingParticles />

      <GlowEffect targetSelector="#hero-section" startDelay={0.2} />
      <GlowEffect targetSelector="#essay-focus" startDelay={0.3} />
      <GlowEffect targetSelector="#essay-showcase" startDelay={0.35} />
      <GlowEffect targetSelector="#features" startDelay={0.4} />
      <GlowEffect targetSelector="#video-showcase" startDelay={0.5} />

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

      <ThreeScene scrollContainer="#main-content" />

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
