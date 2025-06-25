import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import {
  FaFilePdf,
  FaFileWord,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaCommentAlt,
  FaLightbulb,
  FaClipboardCheck,
  FaFileUpload,
} from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { CiTextAlignLeft } from "react-icons/ci";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Animation variants
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Simplified card variants for better performance
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EssayFocusSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const cards = [
    {
      step: "01",
      title: "Upload Essays",
      description:
        "Simply upload student essays in bulk or individually. Remarkably supports various file formats including .docx, .pdf, and plain text.",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      videoUrl: "/lenordemo1-2.mp4",
      icons: [
        { icon: FaFileUpload, label: "Upload" },
        { icon: FaFileWord, label: "Word" },
        { icon: FaFilePdf, label: "PDF" },
      ],
    },
    {
      step: "02",
      title: "AI Analysis",
      description:
        "Our AI analyzes content, structure, and style in seconds, identifying key strengths and areas for improvement.",
      videoUrl: "/lenordemo2.mp4",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      icons: [
        { icon: FaRobot, label: "AI processing" },
        { icon: FaBrain, label: "Smart analysis" },
        { icon: FaChartLine, label: "Performance metrics" },
      ],
    },
    {
      step: "03",
      title: "Detailed Feedback",
      description:
        "Receive personalized suggestions and insights for each student, with specific recommendations for improvement.",
      videoUrl: "/lenordemo3-3.mp4",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      icons: [
        { icon: FaCommentAlt, label: "Personalized comments" },
        { icon: FaLightbulb, label: "Improvement suggestions" },
        { icon: FaClipboardCheck, label: "Assessment checklist" },
      ],
    },
  ];

  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, cards.length);
  }, [cards.length]);

  // Simple scroll-based active card detection
  useEffect(() => {
    if (!sectionRef.current) return;

    const handleScroll = () => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible && index !== activeCardIndex) {
          setActiveCardIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCardIndex]);

  return (
    <section
      ref={sectionRef}
      id="essay-focus"
      className="min-h-screen flex items-start justify-center relative overflow-hidden py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Simplified background animations */}
      <motion.div
        className="absolute top-10 left-1/4 w-32 h-32 bg-yellow-300 border-4 border-white rotate-12 z-0"
        animate={{
          rotate: [12, 20, 12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          <div className="flex items-center justify-center mb-8 flex-col">
            <motion.h2
              ref={titleRef}
              className="text-4xl lg:text-5xl font-black text-black bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              How
              <motion.span
                className="relative inline-block mx-2"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="relative z-10">Remarkably </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"
                  animate={{
                    width: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                ></motion.span>
              </motion.span>
              Works
            </motion.h2>

            <motion.p
              ref={descriptionRef}
              className="text-xl text-black font-bold mb-6 bg-white border-2 border-black p-4 max-w-3xl mx-auto -rotate-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              Our AI-powered technology analyzes essays in real-time, providing
              personalized feedback with the accuracy and nuance of an
              experienced educator.
            </motion.p>
          </div>
        </motion.div>

        <div ref={featureCardsRef} className="space-y-20">
          {cards.map((card, i) => (
              <motion.div
                key={card.step}
                ref={(el) => (cardRefs.current[i] = el)}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="flex flex-col lg:flex-row items-stretch overflow-visible relative"
              >
                {/* Decorative element */}
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-300 border-4 border-black rotate-12 z-10"
                  animate={activeCardIndex === i ? {
                    rotate: [12, 18, 12],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: activeCardIndex === i ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                
                <motion.div
                  className={`w-full lg:w-1/2 ${
                    card.color
                  } p-8 lg:p-12 flex flex-col justify-center border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] relative z-10 transform transition-all duration-300 ${
                    activeCardIndex === i
                      ? "translate-x-[-3px] translate-y-[-3px]"
                      : ""
                  } ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                >
                  <div className="flex flex-col text-left">
                    <motion.div
                      className="absolute top-4 right-4 bg-yellow-300 w-12 h-12 flex items-center justify-center border-3 border-white transform rotate-12"
                    >
                      <span className="font-black text-black text-xl">
                        {card.step}
                      </span>
                    </motion.div>
                    <motion.h3
                      className="text-2xl lg:text-3xl font-black mb-6 text-white"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="text-black font-bold text-lg mb-8 bg-white border-2 border-gray-800 p-4 -rotate-1 shadow-md"
                    >
                      {card.description}
                    </motion.p>
                    <div className="flex space-x-3 mt-auto">
                      {card.icons.map((iconItem, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          className="p-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                          title={iconItem.label}
                          whileHover={{
                            scale: 1.05,
                          }}
                        >
                          <iconItem.icon size={20} className="text-black" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`w-full lg:w-1/2 bg-white border-4 border-black p-6 flex items-center justify-center lg:ml-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-0 transform transition-all duration-300 ${
                    activeCardIndex === i
                      ? "translate-x-[-3px] translate-y-[-3px]"
                      : ""
                  } ${i % 2 === 0 ? "-rotate-1" : "rotate-1"} overflow-hidden`}
                >
                  <div className="w-full h-full relative">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={card.videoUrl}
                      autoPlay={activeCardIndex === i}
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      onLoadStart={() => {
                        // Ensure video starts playing when it becomes active
                        if (activeCardIndex === i && videoRefs.current[i]) {
                          videoRefs.current[i]?.play().catch(() => {
                            // Ignore autoplay errors
                          });
                        }
                      }}
                    >
                      <source src={card.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssayFocusSection;
