
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  school: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "English Teacher",
    school: "Lincoln High School",
    quote: "Remarkably has transformed how I grade essays. I'm saving hours each week and giving more thoughtful feedback. My students are actually engaging with my comments now!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Department Head",
    school: "Westfield Academy",
    quote: "As a department head, I've seen firsthand how Remarkably improves consistency across our team. The standardized grading has made our assessments more fair and transparent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "History Teacher",
    school: "Oakridge Preparatory",
    quote: "I was skeptical about AI grading at first, but Remarkably truly understands my personal teaching style. It's like having a reliable teaching assistant available 24/7.",
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });
  }, []);

  useEffect(() => {
    // Reset testimonial references
    testimonialRefs.current = testimonialRefs.current.slice(0, testimonials.length);
    
    // Animate active testimonial
    testimonialRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      if (index === activeIndex) {
        gsap.to(ref, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(ref, {
          opacity: 0,
          x: index < activeIndex ? -30 : 30,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    });
  }, [activeIndex]);

  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <motion.section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={headingRef} 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear From Remarkable Teachers
          </h2>
          <p className="text-xl text-gray-600">
            Discover how educators are using Remarkably to transform 
            their teaching experience.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="h-[350px] bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => (testimonialRefs.current[index] = el)}
                className={`absolute top-0 left-0 w-full h-full p-8 md:p-12 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex mb-6"
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} fill="#A89165" color="#A89165" />
                  ))}
                </motion.div>

                <motion.blockquote 
                  className="text-xl md:text-2xl font-medium italic mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  "{testimonial.quote}"
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.school}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={goToPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-remarkably-gold hover:text-remarkably-gold transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-remarkably-gold"
                    : "bg-gray-300 hover:bg-remarkably-gold/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
            <motion.button
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-remarkably-gold hover:text-remarkably-gold transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
