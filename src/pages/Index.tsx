import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ImprovedHeroSection from "@/components/ImprovedHeroSection";
import Footer from "@/components/Footer";
import MetricsCards from "@/components/MetricsCards";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SupportedByCarousel from "@/components/SupportedByCarousel";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import { motion } from "framer-motion";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { Clock, Users, Trophy } from "lucide-react";

// Metrics data
const metricsData = [
  {
    icon: Clock,
    number: <span className="counter-up">7x</span>,
    label: "Faster Grading",
    description: "Save 5-7 hours per week with automated essay analysis",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    isAnimated: true,
  },
  {
    icon: Users,
    number: <span className="counter-up">1M+</span>,
    label: "Words Graded",
    description: "Trusted by teachers worldwide for consistent results",
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    isAnimated: true,
  },
  {
    icon: Trophy,
    number: <span className="counter-up">99%</span>,
    label: "Accuracy Rate",
    description: "AI-powered precision that matches expert teachers",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    isAnimated: true,
  },
];

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simple loading timer
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show loading for a brief moment then display content
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen fixed inset-0 bg-indigo-100 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-300 border-4 border-black rotate-6"></div>
            <div className="w-48 h-16 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative z-10 flex items-center justify-center transform -rotate-2">
              <img
                src="/remarkably logo black.png"
                alt="Logo"
                className="w-32 h-12 object-contain px-2"
              />
            </div>
          </div>
          <p className="text-xl font-black text-black mt-6 px-6 py-3 bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <NavigationProvider>
      <div className="relative">
        {/* Navigation dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
          <div className="flex flex-col items-center gap-3">
            {[
              "hero-section",
              "metrics-section",
              "video-showcase",
              "features",
              "testimonials",
            ].map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                className={`section-indicator-${index} w-4 h-4 border-2 border-black ${
                  index === 0 ? "bg-black" : "bg-white"
                } transition-all duration-300 hover:bg-yellow-300`}
                aria-label={`Navigate to ${id.replace("-", " ")}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          id="main-content" 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Header />
          <ImprovedHeroSection />
          
          {/* Metrics Section */}
          <section id="metrics-section" className="py-20 bg-white">
            <MetricsCards 
              metrics={metricsData}
              title="Trusted by Schools Worldwide"
              subtitle="Impact"
              className="container mx-auto px-6"
            />
          </section>

          {/* Video Showcase Section */}
          <VideoShowcaseSection />
          
          <SupportedByCarousel />
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </motion.div>
      </div>
    </NavigationProvider>
  );
};

export default Index;
