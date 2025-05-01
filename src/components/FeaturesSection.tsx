import React, { useEffect, useRef } from "react";
import { Clock, Star, PenLine, Award, BarChart, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index = 0,
  color,
}) => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const iconVariants = {
    hidden: { rotate: 0, scale: 0.8 },
    visible: {
      rotate: -3,
      scale: 1,
      transition: {
        delay: index * 0.1 + 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      rotate: 3,
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`${color} border-3 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rounded-sm relative`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      whileHover={{
        y: -5,
        x: -5,
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
        transition: { duration: 0.2 },
      }}
      style={{
        position: "relative",
        overflow: "visible",
      }}
    >
      <motion.div
        className="w-14 h-14 border-2 border-black flex items-center justify-center mb-5 rounded-sm bg-white"
        style={{
          boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
        }}
        variants={iconVariants}
        whileHover="hover"
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "text-black",
          size: 24,
        })}
      </motion.div>
      <h3 className="text-xl font-black mb-3 text-black relative after:content-[''] after:absolute after:top-8 after:left-0 after:w-12 after:h-[3px] after:bg-black">
        {title}
      </h3>
      <p className="text-gray-800 font-medium">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { y: 50, opacity: 0, rotate: 0 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: -1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const decorationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
        type: "spring",
      },
    },
    hover: {
      rotate: 45,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.7,
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      icon: <Clock />,
      title: "5x Faster Grading",
      description:
        "Free up teachers time to do what's most meaningful, to teach and connect with students.",
      color: "bg-[#FFC8DD]", // Pastel pink
    },
    {
      icon: <Star />,
      title: "Personalized Feedback",
      description:
        "We aim to assist, not replace. Our AI learns your unique grading style and adapts to your requirements and final touches.",
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
      description:
        "Help teachers understand their students better - keep track of every student's strengths & weaknesses and how they can improve.",
      color: "bg-[#B8F7D4]", // Pastel green
    },
  ];

  return (
    <section
      id="features"
      className="section-padding relative overflow-hidden mt-20 z-10 bg-gradient-to-b from-white to-indigo-200"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 relative"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform"
            whileHover={{
              rotate: 1,
              boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-black relative inline-block">
              Helping You Become a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Remarkable</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-4 bg-pink-400 -z-0"
                  variants={highlightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                ></motion.span>
              </span>{" "}
              Teacher
            </h2>
            <motion.p
              className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              Our AI-powered platform gives you the tools to make a real impact
              beyond just marking papers.
            </motion.p>
            <motion.div
              className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 border-2 border-black"
              variants={decorationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            ></motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              color={feature.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
