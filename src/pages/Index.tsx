
import React, { useEffect, useState } from "react";
import ThreeScene from "@/components/ThreeScene";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EssayFocusSection from "@/components/EssayFocusSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
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

      {/* 3D Scene - This will be fixed in the background */}
      <ThreeScene scrollContainer="#main-content" />

      {/* Main Content */}
      <div id="main-content" className="relative z-10">
        <Header />
        <HeroSection />
        <EssayFocusSection />
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
