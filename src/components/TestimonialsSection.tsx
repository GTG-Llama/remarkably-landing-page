import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  school: string;
  quote: string;
  rating: number;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mrs Mavis Low",
    role: "Vice-Princpal",
    school: "Lianhua Primary School",
    quote:
      "Engaging the services of the Remarkably AI essay grader was a strategic decision to reduce the time spent on marking, allowing teachers to focus on higher-value tasks such as lesson preparation and personalized student support. By leveraging AI, our teachers can provide more timely feedback, identify learning gaps efficiently, and dedicate more attention to nurturing students' writing skills. This technology empowers our teachers to teach more effectively while managing their workload stress.",
    rating: 5,
    color: "bg-[#FFC8DD]", // Pastel pink
  },
  {
    id: 2,
    name: "Dr Lim",
    role: "English Teacher",
    school: "Raffles Institution",
    quote:
      "Marking is a critical part of teaching, but it can be time-consuming and exhausting. With AI tools, we have a real opportunity to speed up feedback cycles—helping students improve faster by closing the feedback loop. The potential to streamline grading while retaining teacher oversight is incredibly promising.",
    rating: 5,
    color: "bg-[#BDE0FE]", // Pastel blue
  },
  {
    id: 3,
    name: "Mr Tan",
    role: "Teacher",
    school: "High School",
    quote:
      "Grading essays is honestly one of the most draining parts of the job. It takes forever, and after hours of marking, there's barely any time left to write detailed, personalized feedback for every student. I love teaching writing—but the marking? Not so much.",
    rating: 4,
    color: "bg-[#CDB4DB]", // Pastel purple
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const autoScrollTimerRef = useRef<number | null>(null);

  // Heading animation variants
  const headingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Decorative elements animation variants
  const decorVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      rotate: custom,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: (custom) => custom * 2,
      transition: { duration: 0.3 },
    },
  };

  // Testimonial card animation variants
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  };

  // Content staggered animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Setup auto-scrolling
  useEffect(() => {
    // Clear any existing timer when component mounts or dependencies change
    if (autoScrollTimerRef.current) {
      window.clearInterval(autoScrollTimerRef.current);
    }

    // Only start auto-scrolling if it's not paused
    if (!isAutoScrollPaused) {
      autoScrollTimerRef.current = window.setInterval(() => {
        setDirection(1);
        setActiveIndex((current) =>
          current === testimonials.length - 1 ? 0 : current + 1
        );
      }, 4000);
    }

    // Clean up timer when component unmounts
    return () => {
      if (autoScrollTimerRef.current) {
        window.clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [activeIndex, isAutoScrollPaused]);

  const goToPrev = () => {
    // Pause auto-scrolling temporarily
    setIsAutoScrollPaused(true);
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );

    // Resume auto-scrolling after user interaction
    setTimeout(() => setIsAutoScrollPaused(false), 8000);
  };

  const goToNext = () => {
    // Pause auto-scrolling temporarily
    setIsAutoScrollPaused(true);
    setDirection(1);
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );

    // Resume auto-scrolling after user interaction
    setTimeout(() => setIsAutoScrollPaused(false), 8000);
  };

  const goToSlide = (index: number) => {
    // Pause auto-scrolling temporarily
    setIsAutoScrollPaused(true);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);

    // Resume auto-scrolling after user interaction
    setTimeout(() => setIsAutoScrollPaused(false), 8000);
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-indigo-300 to-indigo-400 relative overflow-hidden py-20"
      onMouseEnter={() => setIsAutoScrollPaused(true)}
      onMouseLeave={() => setIsAutoScrollPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 relative"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-blue-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform"
            whileHover={{
              rotate: 2,
              boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
            initial={{ rotate: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Hear From
              <span className="relative inline-block ml-2">
                <span className="relative z-10">Remarkable</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-0"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "100%",
                    transition: { delay: 0.3, duration: 0.6 },
                  }}
                  viewport={{ once: true }}
                ></motion.span>
              </span>
              Teachers
            </h2>
            <motion.p
              className="text-lg font-bold text-gray-800 mt-4 bg-white border-2 border-black p-3"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -2 }}
              transition={{ duration: 0.2 }}
            >
              What are the problems that teachers face?
              <br />
              Discover how educators are using Remarkably to transform their
              teaching experience.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="relative max-w-8xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 bg-pink-300 border-4 border-black z-10"
              variants={decorVariants}
              custom={12}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-300 border-4 border-black z-10"
              variants={decorVariants}
              custom={-6}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            ></motion.div>

            <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 overflow-hidden relative z-0 min-h-[600px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute top-0 left-0 w-full h-full p-8 md:p-12"
                >
                  <motion.div
                    className={`${testimonials[activeIndex].color} border-3 border-black p-6 relative h-full`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                  >
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="h-full flex flex-col"
                    >
                      <motion.div className="flex mb-6" variants={itemVariants}>
                        {Array.from({
                          length: testimonials[activeIndex].rating,
                        }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{
                              scale: 1,
                              transition: {
                                delay: 0.2 + i * 0.1,
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                          >
                            <Star size={20} fill="#000" color="#000" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.blockquote
                        variants={itemVariants}
                        className="text-xl md:text-2xl font-bold mb-8 text-black flex-grow"
                      >
                        "{testimonials[activeIndex].quote}"
                      </motion.blockquote>

                      <motion.div
                        variants={itemVariants}
                        className="bg-white border-2 border-black p-3 inline-block"
                        whileHover={{
                          scale: 1.03,
                          rotate: -1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <p className="font-black text-lg">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-gray-800 font-medium">
                          {testimonials[activeIndex].role},{" "}
                          {testimonials[activeIndex].school}
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <motion.button
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{
                scale: 1.1,
                shadow: "5px 5px 0px 0px rgba(0,0,0,1)",
                y: -4,
                x: -4,
                backgroundColor: "#FEF3C7",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-4 h-4 border-2 border-black ${
                  index === activeIndex
                    ? "bg-black"
                    : "bg-white hover:bg-gray-200"
                }`}
                whileHover={{
                  y: -2,
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                animate={
                  index === activeIndex
                    ? { scale: [1, 1.2, 1], transition: { duration: 0.5 } }
                    : {}
                }
              />
            ))}

            <motion.button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{
                scale: 1.1,
                shadow: "5px 5px 0px 0px rgba(0,0,0,1)",
                y: -4,
                x: -4,
                backgroundColor: "#FEF3C7",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
