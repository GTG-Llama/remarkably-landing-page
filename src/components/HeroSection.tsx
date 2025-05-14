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
    if (window.innerWidth >= 1024 && sectionRef.current) {
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
      const currentSectionRef = sectionRef.current;
      currentSectionRef.addEventListener("mousemove", handleMouseMove);
      return () => {
        currentSectionRef?.removeEventListener("mousemove", handleMouseMove);
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

  // Animation variants for staggered elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const decorativeElementVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: (i: number) => ({
      scale: 1,
      rotate: i === 1 ? 12 : i === 2 ? -6 : 6,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2 * i,
      },
    }),
  };

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-20 lg:pt-32"
    >

      {/* Left side - Catchy phrases with neobrutalism styling */}
      <motion.div
        className="w-full px-6 md:px-8 md:max-w-2xl md:text-center lg:max-w-none lg:w-1/2 lg:px-16 lg:text-left flex flex-col justify-center z-10 mb-10 lg:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-white neo-border neo-shadow p-8 transform mb-8 relative"
          variants={itemVariants}
          whileHover={{
            rotate: 3,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          initial={{ rotate: 1 }}
        >
          <h1
            ref={headingRef}
            className="text-5xl lg:text-6xl font-black text-black"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              The future of essay grading is
            </motion.span>
              <motion.span
                className="neo-highlight"
                whileHover={{
                  scale: 1.1,
                  color: "#FF9500",
                  transition: { duration: 0.2 },
                }}
              >
                here
              </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="bg-[var(--neo-bg-cyan)] neo-border neo-shadow-sm p-6 mb-8"
          variants={itemVariants}
          whileHover={{
            rotate: -4,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          initial={{ rotate: -2 }}
        >
          <p className="text-xl lg:text-2xl font-bold text-black">
            Replace tedious manual grading with AI-powered solutions that frees
            up time for what truly matters, teaching and connecting with
            students.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          onClick={scrollToFeatures}
          variants={itemVariants}
        >
          <motion.button
            className="neo-button-accent transform animate-bounce"
            whileHover={{
              scale: 1.1,
              rotate: -2,
              boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotate: -1 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right side - 3D Essay Model (adjusted to be partially visible) */}
      <motion.div
        className="w-full lg:w-1/2 h-auto lg:h-screen relative hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          delay: 0.5,
        }}
      >
        <ThreeScene
          scrollContainer="body"
          rightSidePosition={true}
          partialView={true}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
