
import React, { useEffect, useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import ImprovedHeroSection from "@/components/ImprovedHeroSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Lazy load heavy components
const ThreeScene = lazy(() => import("@/components/ThreeScene"));
const EssayFocusSection = lazy(() => import("@/components/EssayFocusSection"));
const EssayShowcaseSection = lazy(() => import("@/components/EssayShowcaseSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const VideoShowcaseSection = lazy(() => import("@/components/VideoShowcaseSection"));
const ROICalculatorSection = lazy(() => import("@/components/ROICalculatorSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const FlowingParticles = lazy(() => import("@/components/FlowingParticles"));
const GlowEffect = lazy(() => import("@/components/GlowEffect"));
const SupportedByCarousel = lazy(() => import("@/components/SupportedByCarousel"));
const DemoShowcaseSection = lazy(() => import("@/components/DemoShowcaseSection"));

// List of important images to preload
const imagesToPreload = [
  "/remarkably logo black.png",
  // Add other critical images here
];

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  // Preload critical images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;
    
    const preloadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          setProgress(Math.floor((loadedCount / totalImages) * 100));
          resolve(true);
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.floor((loadedCount / totalImages) * 100));
          resolve(false);
        };
      });
    };

    const loadAllImages = async () => {
      await Promise.all(imagesToPreload.map(src => preloadImage(src)));
      setImagesLoaded(true);
    };

    loadAllImages();
    
    // Set a minimum loading time to prevent flash
    const minLoadingTimer = setTimeout(() => {
      setContentReady(true);
    }, 1500);
    
    return () => clearTimeout(minLoadingTimer);
  }, []);

  // Handle animations and page setup after loading
  useEffect(() => {
    // Only proceed when both images are loaded and minimum time has passed
    if (!imagesLoaded || !contentReady) return;
    
    // Ensure the page is scrolled to top
    window.scrollTo(0, 0);
    
    // Simple timeout to hide loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Setup smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.target as HTMLAnchorElement;
      const targetID = anchor.getAttribute("href");
      const target = document.querySelector(targetID);
      
      if (target) {
        target.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [imagesLoaded, contentReady]);

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
              Marking your essay... {progress}%
            </p>
          </div>
        </div>
      )}

      <Suspense fallback={<div />}>
        <FlowingParticles />
      </Suspense>

      <Suspense fallback={<div />}>
        <GlowEffect targetSelector="#hero-section" startDelay={0.2} />
        <GlowEffect targetSelector="#essay-focus" startDelay={0.3} />
        <GlowEffect targetSelector="#essay-showcase" startDelay={0.35} />
        <GlowEffect targetSelector="#features" startDelay={0.4} />
        <GlowEffect targetSelector="#video-showcase" startDelay={0.5} />
        <GlowEffect targetSelector="#roi-calculator" startDelay={0.55} />
      </Suspense>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-3">
          {[
            "hero-section",
            "essay-focus",
            "essay-showcase",
            "features",
            "video-showcase",
            "testimonials",
            "roi-calculator",
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
        <Suspense fallback={<div />}>
          <ThreeScene scrollContainer="#main-content" />
        </Suspense>
      </div>

      <motion.div 
        id="main-content" 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Header />
        <ImprovedHeroSection />
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <EssayFocusSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <EssayShowcaseSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <DemoShowcaseSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <FeaturesSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <VideoShowcaseSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-96 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <ROICalculatorSection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-24 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <CTASection />
        </Suspense>
        
        <Suspense fallback={
          <div className="h-32 bg-gray-50 animate-pulse border-4 border-black" />
        }>
          <SupportedByCarousel />
        </Suspense>
        
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
