import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowDown, Share2, Eye } from "lucide-react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
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
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
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
};

const EssayFocusSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Send event to ThreeScene to trigger essay close-up animation
    const essayTransitionEvent = new CustomEvent("essayTransition", {
      detail: {
        active: true,
      },
    });
    document.dispatchEvent(essayTransitionEvent);

    // Create individual scroll triggers for each card
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActiveCardIndex(index);
        },
        onLeave: () => {
          if (activeCardIndex === index) {
            setActiveCardIndex(null);
          }
        },
        onEnterBack: () => {
          setActiveCardIndex(index);
        },
        onLeaveBack: () => {
          if (activeCardIndex === index) {
            setActiveCardIndex(null);
          }
        },
        markers: false, // Set to true for debugging
      });
    });

    // Cleanup on component unmount
    return () => {
      const resetEvent = new CustomEvent("essayTransition", {
        detail: {
          active: false,
        },
      });
      document.dispatchEvent(resetEvent);

      ScrollTrigger.getAll().forEach((trigger) => {
        // Check if the trigger references our section or any of our cards
        const triggerElement = trigger.vars.trigger;
        const isOurSection = triggerElement === sectionRef.current;
        const isOurCard = cardRefs.current.some(
          (cardRef) => cardRef && triggerElement === cardRef
        );

        if (isOurSection || isOurCard) {
          trigger.kill();
        }
      });
    };
  }, [activeCardIndex]);

  const cards = [
    {
      step: "1",
      title: "Upload Essays",
      description:
        "Simply upload student essays via our intuitive interface. Support for multiple formats including Word, PDF, and plain text.",
      videoUrl: "/videos/upload-demo.mp4",
    },
    {
      step: "2",
      title: "AI Analysis",
      description:
        "Our AI analyzes content, structure, and style in seconds, identifying key strengths and areas for improvement.",
      videoUrl: "/videos/analysis-demo.mp4",
    },
    {
      step: "3",
      title: "Detailed Feedback",
      description:
        "Receive personalized suggestions and insights for each student, with specific recommendations for improvement.",
      videoUrl: "/videos/feedback-demo.mp4",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="essay-focus"
      className="min-h-screen flex items-start justify-center relative overflow-hidden py-20 bg-white"
    >
      <div className="absolute inset-0 bg-white"></div>

      <div className="content-container w-full text-center md:px-8 max-w-6xl mx-auto z-10 relative">
        <motion.div
          className="mb-16 bg-white rounded-md border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={contentVariants}
        >
          <motion.h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-black mb-6 text-black"
            variants={contentVariants}
          >
            See How Remarkably Works
          </motion.h2>

          <motion.p
            ref={descriptionRef}
            className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto"
            variants={contentVariants}
          >
            Our AI-powered technology analyzes essays in real-time, providing
            personalized feedback with the accuracy and nuance of an experienced
            educator.
          </motion.p>
        </motion.div>

        <div ref={featureCardsRef} className="space-y-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.step}
              ref={(el) => (cardRefs.current[i] = el)}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={cardVariants}
              className="flex flex-col lg:flex-row items-stretch overflow-hidden relative"
            >
              <div
                className={`w-full lg:w-1/2 bg-[#c8ee46] p-8 lg:p-12 flex flex-col justify-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 transform transition-all duration-300 ${
                  activeCardIndex === i
                    ? "translate-x-[-3px] translate-y-[-3px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                    : ""
                }`}
              >
                <div className="flex flex-col text-left">
                  <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-black">
                    <span className="font-black text-black">{card.step}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black mb-6 text-black">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 text-lg mb-6">
                    {card.description}
                  </p>

                  <div className="flex space-x-3 mt-auto">
                    <button className="p-3 rounded-md bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                      <Share2 size={20} className="text-black" />
                    </button>
                    <button className="p-3 rounded-md bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                      <Eye size={20} className="text-black" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`w-full lg:w-1/2 bg-white border-4 border-black p-6 flex items-center justify-center lg:ml-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-0 transform transition-all duration-300 ${
                  activeCardIndex === i
                    ? "translate-x-[-3px] translate-y-[-3px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                    : ""
                }`}
              >
                <div className="w-full max-w-lg overflow-hidden">
                  <div className="bg-gray-100 p-4 flex items-center justify-between border-b-4 border-black">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-red-500 border border-black"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-500 border border-black"></div>
                      <div className="w-4 h-4 rounded-full bg-green-500 border border-black"></div>
                    </div>
                    <div className="font-bold text-black">Remarkably AI</div>
                  </div>
                  <div className="aspect-video bg-gray-100 flex items-center justify-center border-2 border-black">
                    <img
                      src={`/thumbnails/${card.step}-thumbnail.jpg`}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <ArrowDown
          size={24}
          className="text-black animate-bounce justify-center"
        />
      </motion.div>
    </section>
  );
};

export default EssayFocusSection;
