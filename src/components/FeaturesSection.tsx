import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Clock, Star, PenLine, Award, BarChart, FileCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  color,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`${color} border-3 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 rounded-sm relative`}
      style={{
        position: "relative",
        overflow: "visible",
      }}
    >
      <div
        className="w-14 h-14 border-2 border-black flex items-center justify-center mb-5 rounded-sm"
        style={{
          backgroundColor: "white",
          transform: "rotate(-3deg)",
          boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
        }}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "text-black",
          size: 24,
        })}
      </div>
      <h3 className="text-xl font-black mb-3 text-black relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-12 after:h-[3px] after:bg-black">
        {title}
      </h3>
      <p className="text-gray-800 font-medium">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !sectionRef.current) return;

    // Make sure the section is visible
    if (sectionRef.current) {
      gsap.set(sectionRef.current, {
        visibility: "visible",
        opacity: 1,
      });
    }

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

    // Create a scroll trigger for the entire section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      onEnter: () => {
        gsap.to(sectionRef.current, {
          opacity: 1,
          visibility: "visible",
          duration: 0.5,
        });
      },
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Clock />,
      title: "5x Faster Grading",
      description:
        "Free up teachers time to do what’s most meaningful, to teach and connect with students.",
      color: "bg-[#FFC8DD]", // Pastel pink
    },
    {
      icon: <Star />,
      title: "Personalized Feedback",
      description:
        "Our AI learns your unique grading style and adapts to your requirements.",
      color: "bg-[#FFAFCC]", // Pastel darker pink
    },
    {
      icon: <PenLine />,
      title: "Label on Handwritten Essays",
      description:
        "Mark directly on the student's handwritten essay with familiar feedback.",
      color: "bg-[#BDE0FE]", // Pastel blue
    },
    {
      icon: <BarChart />,
      title: "Standardized Grading",
      description:
        "Ensure consistent and fair grading for every student across classes.",
      color: "bg-[#A2D2FF]", // Pastel light blue
    },
    {
      icon: <Award />,
      title: "Improved Teacher Well-being",
      description:
        "Help reduce burnout by cutting down on time-consuming marking.",
      color: "bg-[#CDB4DB]", // Pastel purple
    },
    {
      icon: <FileCheck />,
      title: "Enhanced Understanding",
      description: "Help teachers understand their students better - keep track of every students strength and weakness and how they can improve.",
      color: "bg-[#B8F7D4]", // Pastel green
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section-padding relative overflow-hidden mt-20 z-10 bg-gradient-to-b from-white to-indigo-200"
      style={{ visibility: "visible", opacity: 1 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={headingRef} 
          className="text-center max-w-3xl mx-auto mb-20 relative"
          style={{
            transform: "rotate(-1deg)",
          }}
        >
          <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-black relative inline-block">
              Helping You Become a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Remarkable</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-pink-400 -z-0"></span>
              </span>{" "}
              Teacher
            </h2>
            <p className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black">
              Our AI-powered platform gives you the tools to make a real impact
              beyond just marking papers.
            </p>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 border-2 border-black"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.01}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
