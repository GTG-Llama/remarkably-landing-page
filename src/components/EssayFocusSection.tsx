import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
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
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { useVideoPlayback } from "@/hooks/useVideoPlayback";

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

// MODIFIED cardVariants to be a function that checks isMobile
const getCardVariants = (isMobile: boolean): Variants => ({
  hidden: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      bounce: 0.4,
    },
  }),
});

// Debounce utility function
const debounce = <T extends (...args: unknown[]) => unknown>(fn: T, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const EssayFocusSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const triggerRefs = useRef<ScrollTrigger[]>([]);
  const cardVisibility = useRef<boolean[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const cardVariants = getCardVariants(isMobile); // Get variants based on mobile status
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
      step: "2",
      title: "AI Analysis",
      description:
        "Our AI analyzes content, structure, and style in seconds, identifying key strengths and areas for improvement.",
      videoUrl: "/lenordemo2.mp4",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600", // Blue
      icons: [
        { icon: FaRobot, label: "AI processing" },
        { icon: FaBrain, label: "Smart analysis" },
        { icon: FaChartLine, label: "Performance metrics" },
      ],
    },
    {
      step: "3",
      title: "Detailed Feedback",
      description:
        "Receive personalized suggestions and insights for each student, with specific recommendations for improvement.",
      videoUrl: "/lenordemo3-3.mp4",
      color: "bg-gradient-to-br from-pink-500 to-rose-600", // Purple
      icons: [
        { icon: FaCommentAlt, label: "Personalized comments" },
        { icon: FaLightbulb, label: "Improvement suggestions" },
        { icon: FaClipboardCheck, label: "Assessment checklist" },
      ],
    },
  ];

  // Create video refs for each card
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, cards.length);
  }, [cards.length]);

  // Debounced version of setActiveCardIndex to prevent rapid state changes
  const debouncedSetActiveCard = useMemo(() => 
    debounce((index: number | null) => {
      setActiveCardIndex(index);
    }, 50), []);

  // Function to determine the most visible card
  const updateActiveCard = useCallback(() => {
    // If no cards are visible, set activeCardIndex to null
    if (!cardVisibility.current.some((visible) => visible)) {
      debouncedSetActiveCard(null);
      return;
    }

    // Find the index of the visible card
    const visibleCardIndex = cardVisibility.current.findIndex(
      (visible) => visible
    );
    debouncedSetActiveCard(visibleCardIndex);
  }, [debouncedSetActiveCard]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Send event to ThreeScene to trigger essay close-up animation
    const essayTransitionEvent = new CustomEvent("essayTransition", {
      detail: {
        active: true,
      },
    });
    document.dispatchEvent(essayTransitionEvent);

    // Initialize card visibility array
    cardVisibility.current = Array(cardRefs.current.length).fill(false);

    // Create individual scroll triggers for each card
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top center+=100", // Adjusted to give more space before triggering
        end: "bottom center-=100", // Adjusted to give more space before ending
        onEnter: () => {
          cardVisibility.current[index] = true;
          updateActiveCard();
        },
        onLeave: () => {
          cardVisibility.current[index] = false;
          updateActiveCard();
        },
        onEnterBack: () => {
          cardVisibility.current[index] = true;
          updateActiveCard();
        },
        onLeaveBack: () => {
          cardVisibility.current[index] = false;
          updateActiveCard();
        },
        markers: false, // Set to true for debugging
      });

      triggerRefs.current.push(trigger);
    });

    // Cleanup on component unmount
    return () => {
      const resetEvent = new CustomEvent("essayTransition", {
        detail: {
          active: false,
        },
      });
      document.dispatchEvent(resetEvent);

      // Kill all our scroll triggers
      triggerRefs.current.forEach((trigger) => {
        trigger.kill();
      });
      triggerRefs.current = [];
    };
  }, [updateActiveCard]);

  return (
    <section
      ref={sectionRef}
      id="essay-focus"
      className="min-h-screen flex items-start justify-center relative overflow-hidden py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <motion.div
        className="absolute top-10 left-1/4 w-32 h-32 bg-yellow-300 border-4 border-white rotate-12 z-0"
        animate={{
          y: [0, -15, 0],
          rotate: [12, 15, 12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 bg-cyan-300 border-4 border-white -rotate-6 z-0"
        animate={{
          y: [0, -20, 0],
          rotate: [-6, -10, -6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-300 border-4 border-white rotate-45 z-0"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [45, 50, 45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>

      <div className="content-container w-full px-4 lg:px-8 max-w-6xl mx-auto z-10 relative">
        <motion.div
          className="mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={contentVariants}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 border-4 border-white p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] transform rotate-1 text-center">
            <motion.h2
              ref={titleRef}
              className="text-3xl lg:text-5xl font-black mb-6 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              See How
              <motion.span
                className="relative inline-block mx-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="relative z-10">Remarkably </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"
                  animate={{
                    width: ["0%", "100%"],
                    x: ["-10%", "0%"],
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
                viewport={{ once: true, amount: 0.6 }}
                variants={cardVariants}
                className="flex flex-col lg:flex-row items-stretch overflow-visible relative"
              >
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-300 border-4 border-black rotate-12 z-10"
                  animate={{
                    rotate: activeCardIndex === i ? [12, 30, 12] : 12,
                    scale: activeCardIndex === i ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeCardIndex === i ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className={`w-full lg:w-1/2 ${
                    card.color
                  } p-8 lg:p-12 flex flex-col justify-center border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] relative z-10 transform transition-all duration-300 ${
                    activeCardIndex === i
                      ? "translate-x-[-3px] translate-y-[-3px] shadow-[12px_12px_0px_0px_rgba(255,255,255,0.5)]"
                      : "shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                  } ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <div className="flex flex-col text-left">
                    <motion.div
                      className="absolute top-4 right-4 bg-yellow-300 w-12 h-12 flex items-center justify-center border-3 border-white transform rotate-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
                      animate={{
                        rotate: activeCardIndex === i ? [12, 0, 12] : 12,
                      }}
                      transition={{
                        duration: 3,
                        repeat: activeCardIndex === i ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="font-black text-black text-xl">
                        {card.step}
                      </span>
                    </motion.div>
                    <motion.h3
                      className="text-2xl lg:text-3xl font-black mb-6 text-black"
                      animate={{
                        scale: activeCardIndex === i ? [1, 1.03, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeCardIndex === i ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="text-black font-bold text-lg mb-8 bg-white border-2 border-gray-800 p-4 -rotate-1 shadow-md"
                      animate={{
                        rotate: activeCardIndex === i ? [-1, -2, -1] : -1,
                      }}
                      transition={{
                        duration: 4,
                        repeat: activeCardIndex === i ? Infinity : 0,
                        ease: "easeInOut",
                      }}
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
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                          animate={
                            activeCardIndex === i
                              ? {
                                  y: [0, -3, 0],
                                  transition: {
                                    duration: 1.5,
                                    delay: iconIndex * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  },
                                }
                              : {}
                          }
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
                      ? "translate-x-[-3px] translate-y-[-3px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                      : "shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  } ${i % 2 === 0 ? "-rotate-1" : "rotate-1"} overflow-hidden`}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <div className="w-full h-full relative">
                    <video
                      ref={videoRef}
                      src={card.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
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
