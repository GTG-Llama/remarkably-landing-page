import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowingParticles from "@/components/FlowingParticles";
import GlowEffect from "@/components/GlowEffect";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// List of important images to preload
const imagesToPreload = [
  "/remarkably logo black.png",
  // Add other critical images here
];

interface LandingPageTemplateProps {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  ctaFeatures: string[];
  curriculumSection: {
    title: string;
    items: string[];
  };
  logoPath?: string;
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  pageTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  keyFeatures,
  benefits,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  ctaFeatures,
  curriculumSection,
  logoPath,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  // Set page title and meta description
  useEffect(() => {
    document.title = pageTitle;
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metaDescription);
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "description";
      newMetaTag.content = metaDescription;
      document.head.appendChild(newMetaTag);
    }
  }, [pageTitle, metaDescription]);

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
                  src={logoPath || "/remarkably logo black.png"}
                  alt="Logo"
                  className="w-144 h-40 object-contain px-2"
                />
              </div>
            </div>
            <p className="text-xl font-black text-black mt-6 px-6 py-3 bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Loading... {progress}%
            </p>
          </div>
        </div>
      )}

      <FlowingParticles />
      <GlowEffect targetSelector="#hero-section" startDelay={0.2} />
      <GlowEffect targetSelector="#features" startDelay={0.4} />
      <GlowEffect targetSelector="#benefits" startDelay={0.5} />

      <Header />

      <div id="main-content" className="pt-20">
        {/* Hero Section */}
        <section
          id="hero-section"
          className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-20 lg:pt-32"
        >
          <motion.div
            className="w-full px-6 md:px-8 md:max-w-2xl md:text-center lg:max-w-none lg:w-1/2 lg:px-16 lg:text-left flex flex-col justify-center z-10 mb-10 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="bg-white neo-border neo-shadow p-8 transform mb-8 relative"
              whileHover={{
                rotate: 3,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: 1 }}
            >
              <h1 className="text-5xl lg:text-6xl font-black text-black">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {heroTitle}
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="bg-[var(--neo-bg-cyan)] neo-border neo-shadow-sm p-6 mb-8"
              whileHover={{
                rotate: -4,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              initial={{ rotate: -2 }}
            >
              <p className="text-xl lg:text-2xl font-bold text-black">
                {heroSubtitle}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="neo-button-accent transform"
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ rotate: -1 }}
              >
                <a href="#cta">Request a Demo</a>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-auto lg:h-screen relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 50,
              delay: 0.5,
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="absolute top-1/4 left-1/4 w-40 h-40 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-0"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 12, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-pink-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-0"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: -6, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
              <motion.div 
                className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 max-w-xl"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: -2, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <img 
                  src="/remarkably logo black.png" 
                  alt="Essay Grading Demo" 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Key Features Section */}
        <section
          id="features"
          className="section-padding relative overflow-hidden mt-0 lg:mt-20 z-10 bg-gradient-to-b from-white to-indigo-200 py-24"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform"
                whileHover={{
                  rotate: 1,
                  boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.3 },
                }}
              >
                <h2 className="text-3xl lg:text-5xl font-black mb-6 text-black relative inline-block">
                  Key Features for Your School
                </h2>
                <motion.p
                  className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  AI-powered grading tools customized for your specific needs
                </motion.p>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-[${
                    ["#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF", "#CDB4DB", "#B8F7D4"][
                      index % 6
                    ]
                  }] border-3 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-sm relative`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    x: -5,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-xl font-black mb-3 text-black relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-12 after:h-[3px] after:bg-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="section-padding relative overflow-hidden z-10 bg-gradient-to-b from-indigo-200 to-white py-24"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="bg-pink-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform"
                whileHover={{
                  rotate: -1,
                  boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.3 },
                }}
              >
                <h2 className="text-3xl lg:text-5xl font-black mb-6 text-black relative inline-block">
                  Benefits That Matter
                </h2>
                <motion.p
                  className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  How Remarkably transforms education for your institution
                </motion.p>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-3 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    x: -5,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-xl font-black mb-3 text-black relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-12 after:h-[3px] after:bg-black">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-800 font-medium">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Support Section */}
        <section
          id="curriculum"
          className="section-padding relative overflow-hidden z-10 bg-gradient-to-b from-white to-indigo-100 py-24"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="bg-blue-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform"
                whileHover={{
                  rotate: 2,
                  boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.3 },
                }}
              >
                <h2 className="text-3xl lg:text-5xl font-black mb-6 text-black relative inline-block">
                  {curriculumSection.title}
                </h2>
                <motion.p
                  className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  Tailored to support your specific curriculum needs
                </motion.p>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {curriculumSection.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-3 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    x: -5,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <p className="font-bold text-black">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-400 to-indigo-900 bg-opacity-90"
        >
          <motion.div
            className="absolute top-12 left-1/4 w-24 h-24 bg-cyan-300 border-4 border-black z-0"
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: 12, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-12 right-1/4 w-20 h-20 bg-yellow-300 border-4 border-black z-0"
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: -6, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute -top-8 -left-8 w-full h-full bg-pink-300 border-4 border-black z-0"
                initial={{ rotate: 0, opacity: 0 }}
                whileInView={{ rotate: 2, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">
                      {ctaTitle}
                      <span className="relative ml-2 inline-block">
                        <span className="relative z-10">Remarkable</span>
                        <motion.span
                          className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.8 }}
                        />
                      </span>
                    </h2>
                    <motion.p
                      className="text-xl text-black font-bold mb-8 bg-blue-100 border-2 border-black p-4"
                      initial={{ rotate: 0, opacity: 0 }}
                      whileInView={{ rotate: -1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {ctaSubtitle}
                    </motion.p>
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        className="bg-black text-white text-lg font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <a href="mailto:contact@remarkably.ink">{ctaButtonText}</a>
                        <ArrowRight size={18} />
                      </motion.button>
                      <motion.div
                        className="bg-pink-300 text-black text-lg font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Free Demo!
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.div
                      className="absolute -top-4 -left-4 w-full h-full bg-[#B8F7D4] border-2 border-black z-0"
                      initial={{ rotate: 0, opacity: 0 }}
                      whileInView={{ rotate: -2, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.div
                      className="bg-white border-3 border-black p-6 relative z-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                      initial={{ rotate: 0, opacity: 0 }}
                      whileInView={{ rotate: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <h3 className="text-xl font-black mb-6 text-black relative inline-block">
                        What You'll Get:
                        <motion.span
                          className="absolute -bottom-2 left-0 w-full h-2 bg-cyan-300 -z-0"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.9 }}
                        />
                      </h3>
                      <ul className="space-y-4">
                        {ctaFeatures.map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3 mb-3"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          >
                            <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0">
                              <Check size={14} className="text-white" />
                            </div>
                            <span className="text-black font-bold">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPageTemplate; 