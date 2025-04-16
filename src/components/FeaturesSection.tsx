
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
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
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
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-14 h-14 bg-remarkably-gold/10 rounded-full flex items-center justify-center mb-5">
        {React.cloneElement(icon as React.ReactElement, { 
          className: "text-remarkably-gold", 
          size: 24 
        })}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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

  const features = [
    {
      icon: <Clock />,
      title: "5x Faster Grading",
      description: "Free up hours each week by automating repetitive marking tasks.",
    },
    {
      icon: <Star />,
      title: "Personalized Feedback",
      description: "Our AI learns your unique grading style and adapts to your requirements.",
    },
    {
      icon: <PenLine />,
      title: "Label on Handwritten Essays",
      description: "Mark directly on the student's handwritten essay with familiar feedback.",
    },
    {
      icon: <BarChart />,
      title: "Standardized Grading",
      description: "Ensure consistent and fair grading for every student across classes.",
    },
    {
      icon: <Award />,
      title: "Improved Teacher Well-being",
      description: "Help reduce burnout by cutting down on time-consuming marking.",
    },
    {
      icon: <FileCheck />,
      title: "Enhanced Learning Outcomes",
      description: "Faster feedback means students can improve faster too.",
    },
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Helping You Become a Remarkable Teacher
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered platform gives you the tools to make a real impact 
            beyond just marking papers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="apple-button-gold px-8 py-3">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
