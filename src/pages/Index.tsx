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
import SupportedByCarousel from "@/components/SupportedByCarousel";

gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    tl.to(".loading-screen", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.5,
    });

    const entranceTl = gsap.timeline({ delay: 1 });

    entranceTl
      .from("#main-content", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .from(
        ".header-anim",
        {
          y: -30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .from(
        ".hero-anim",
        {
          scale: 0.98,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Check if the screen width is greater than tablet breakpoint (e.g., 1024px for lg)
    if (window.innerWidth >= 1024) {
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
                offsetY: 80, // Keep header height in mind
              },
              ease: "power3.inOut",
            });
          }
        });
      });

      const sections = gsap.utils.toArray<HTMLElement>("section[id]");

      // First, reset all indicators to non-active state initially
      sections.forEach((_, i) => {
        if (i > 0) {
          // Skip the first one which should be active on page load
          gsap.set(`.section-indicator-${i}`, {
            backgroundColor: "#e5e5e5", // A neutral, non-active color
          });
        }
      });

      // Create individual ScrollTrigger for each section
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            // Make all indicators non-active
            sections.forEach((_, index) => {
              gsap.to(`.section-indicator-${index}`, {
                backgroundColor: "#e5e5e5",
                duration: 0.3,
              });
            });
            // Activate only the current indicator
            gsap.to(`.section-indicator-${i}`, {
              backgroundColor: "#ffe712", // Your active color
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            // Make all indicators non-active
            sections.forEach((_, index) => {
              gsap.to(`.section-indicator-${index}`, {
                backgroundColor: "#e5e5e5",
                duration: 0.3,
              });
            });
            // Activate only the current indicator
            gsap.to(`.section-indicator-${i}`, {
              backgroundColor: "#ffe712", // Your active color
              duration: 0.3,
            });
          },
        });
      });
    }

    return () => {
      // Kill all ScrollTriggers if they were created
      if (window.innerWidth >= 1024) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="loading-screen fixed inset-0 bg-indigo-100 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-300 border-4 border-black rotate-6"></div>
              <div className="w-48 h-16 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative z-10 flex items-center justify-center transform -rotate-2">
                <img
                  src="/remarkably logo black.png"
                  alt="Logo"
                  className="w-144 h-40 object-contain px-2"
                />
              </div>
            </div>
            <p className="text-xl font-black text-black mt-6 px-6 py-3 bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Marking your essay...
            </p>
          </div>
        </div>
      )}

      <FlowingParticles />

      <GlowEffect targetSelector="#hero-section" startDelay={0.2} />
      <GlowEffect targetSelector="#essay-focus" startDelay={0.3} />
      <GlowEffect targetSelector="#essay-showcase" startDelay={0.35} />
      <GlowEffect targetSelector="#features" startDelay={0.4} />
      <GlowEffect targetSelector="#video-showcase" startDelay={0.5} />

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-3">
          {[
            "hero-section",
            "essay-focus",
            "essay-showcase",
            "features",
            "video-showcase",
            "testimonials",
          ].map((id, index) => (
            <a
              key={id}
              className={`section-indicator-${index} w-4 h-4 border-2 border-black ${
                index === 0 ? "bg-black" : "bg-white"
              } transition-all duration-300`}
              aria-label={`Navigate to ${id.replace("-", " ")}`}
            />
          ))}
        </div>
      </div>

      {/* Wrap ThreeScene in a div with responsive visibility classes */}
      <div className="hidden lg:block">
        <ThreeScene scrollContainer="#main-content" />
      </div>

      <div id="main-content" className="relative z-10">
        <Header />
        <HeroSection />
        <EssayFocusSection />
        <EssayShowcaseSection />
        <FeaturesSection />
        <VideoShowcaseSection />
        <TestimonialsSection />
        <CTASection />
        <SupportedByCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
