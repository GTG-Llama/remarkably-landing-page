import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/nus-enterprise.png", alt: "NUS Enterprise" },
  { src: "/block71.png", alt: "Block71" },
  { src: "/google.png", alt: "Google" },
  { src: "/nvidia-inception.png", alt: "Nvidia Inception Program" },
  { src: "/nus.png", alt: "NUS" },
  { src: "/nus-soc.png", alt: "NUS SOC" },
  { src: "/mongodb.png", alt: "MongoDB" },
  { src: "/nhouse.png", alt: "nHouse" },
  { src: "/social-impact-catalyst.png", alt: "Social Impact Catalyst" },
  { src: "/hangar.png", alt: "Hangar" },
  { src: "/lianhua-primary.png", alt: "Lianhua Primary School" },
];

const carouselLogos = [...logos, ...logos]; // Duplicate for seamless loop

const SupportedByCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.7,
      },
    },
  };

  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const logoVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: custom * 0.1,
      },
    }),
    hover: {
      y: -10,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 bg-white border-t-4 border-black border-b-4 border-black"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          className="text-2xl md:text-3xl font-black text-center mb-8 text-black relative inline-block mx-auto"
          variants={titleVariants}
          style={{ display: "block" }}
        >
          <motion.span
            className="relative z-10"
            initial={{ color: "#000" }}
            whileHover={{ color: "#6366f1" }}
            transition={{ duration: 0.3 }}
          >
            Supported by
          </motion.span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-0"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
          ></motion.span>
        </motion.h3>

        <TooltipProvider>
          <motion.div
            className="w-full overflow-visible"
            variants={carouselVariants}
          >
            <div
              className="flex items-center gap-10"
              style={{
                width: "max-content",
                animation: "carousel-scroll 30s linear infinite",
              }}
            >
              {carouselLogos.map((logo, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="flex items-center justify-center h-30 w-30 md:h-40 md:w-40 cursor-pointer"
                      variants={logoVariants}
                      custom={idx % logos.length} // Use modulo to assign delay based on original position
                      whileHover="hover"
                    >
                      <motion.img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-40 md:h-40 object-contain mx-auto"
                        draggable={false}
                        whileHover={{
                          filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
                          transition: { duration: 0.2 },
                        }}
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {logo.alt}
                    </motion.span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        </TooltipProvider>
      </div>
    </motion.section>
  );
};

export default SupportedByCarousel;
