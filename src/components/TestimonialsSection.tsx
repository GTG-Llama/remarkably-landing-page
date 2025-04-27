import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
      "Engaging the services of the Remarkably AI essay grader was a strategic decision to reduce the time spent on marking, allowing teachers to focus on higher-value tasks such as lesson preparation and personalized student support. By leveraging AI, our teachers can provide more timely feedback, identify learning gaps efficiently, and dedicate more attention to nurturing students’ writing skills. This technology empowers our teachers to teach more effectively while managing their workload stress.",
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
      "Grading essays is honestly one of the most draining parts of the job. It takes forever, and after hours of marking, there’s barely any time left to write detailed, personalized feedback for every student. I love teaching writing—but the marking? Not so much.",
    rating: 4,
    color: "bg-[#CDB4DB]", // Pastel purple
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialContentRefs = useRef<Record<string, HTMLElement | null>>({});

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
    testimonialRefs.current = testimonialRefs.current.slice(
      0,
      testimonials.length
    );

    // Prevent animation from running on initial render
    if (testimonialRefs.current.every((ref) => ref === null)) return;

    setIsAnimating(true);

    // Create a timeline for smoother sequenced animations
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    // Animate testimonials exit and entrance
    testimonialRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const isActive = index === activeIndex;
      const direction = index < activeIndex ? -1 : 1;
      const cardContainer = ref.querySelector("[data-testimonial-card]");
      const quoteEl = ref.querySelector("[data-testimonial-quote]");
      const authorEl = ref.querySelector("[data-testimonial-author]");
      const starsEl = ref.querySelector("[data-testimonial-stars]");

      if (isActive) {
        // First fade in the container
        tl.to(
          ref,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          0
        );

        // Then animate the card with a fade effect but NO movement
        tl.fromTo(
          cardContainer,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          0.1
        );

        // Staggered entrance for the content elements
        tl.fromTo(
          [starsEl, quoteEl, authorEl],
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.3
        );
      } else {
        // Fade out inactive testimonials
        tl.to(
          ref,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        );
      }
    });

    return () => {
      tl.kill();
    };
  }, [activeIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    if (isAnimating) return;
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-indigo-200 relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-16 relative"
        >
          <div className="bg-blue-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Hear From
              <span className="relative inline-block ml-2">
                <span className="relative z-10">Remarkable</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-0"></span>
              </span>
              Teachers
            </h2>
            <p className="text-lg font-bold text-gray-800 mt-4 bg-white border-2 border-black p-3 -rotate-1">
              What are the problems that teachers face?
              <br />
              Discover how educators are using Remarkably to transform their
              teaching experience.
            </p>
          </div>
        </div>

        <div className="relative max-w-8xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-300 border-4 border-black rotate-12 z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow-300 border-4 border-black -rotate-6 z-10"></div>

            <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 overflow-hidden relative z-0 min-h-[470px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={(el) => (testimonialRefs.current[index] = el)}
                  className="absolute top-0 left-0 w-full h-full p-8 md:p-12"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    pointerEvents: index === activeIndex ? "auto" : "none",
                  }}
                >
                  <div
                    data-testimonial-card
                    className={`${testimonial.color} border-3 border-black p-6 relative`}
                  >
                    <div data-testimonial-stars className="flex mb-6">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star key={i} size={20} fill="#000" color="#000" />
                        )
                      )}
                    </div>

                    <blockquote
                      data-testimonial-quote
                      className="text-xl md:text-2xl font-bold mb-8 text-black"
                    >
                      "{testimonial.quote}"
                    </blockquote>

                    <div
                      data-testimonial-author
                      className="bg-white border-2 border-black p-3 inline-block"
                    >
                      <p className="font-black text-lg">{testimonial.name}</p>
                      <p className="text-gray-800 font-medium">
                        {testimonial.role}, {testimonial.school}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={goToPrev}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className={`w-12 h-12 border-2 border-black bg-white flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transform transition-all ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setActiveIndex(index)}
                disabled={isAnimating}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-4 h-4 border-2 border-black transition-all transform hover:-translate-y-1 ${
                  index === activeIndex
                    ? "bg-black"
                    : "bg-white hover:bg-gray-200"
                } ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            ))}
            <button
              onClick={goToNext}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className={`w-12 h-12 border-2 border-black bg-white flex items-center justify-center hover:bg-yellow-300 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transform transition-all ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
