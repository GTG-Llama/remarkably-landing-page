import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AutoDemo from './AutoDemo';
import { BookDemoCTA, TryFreeCTA } from './ui/cta-button';
import { Play, Zap, Clock, CheckCircle } from 'lucide-react';

const DemoShowcaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Grade in Seconds",
      description: "What used to take 10-15 minutes now takes 30 seconds"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Your Teaching Style",
      description: "AI learns and mimics your grading preferences and voice"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Consistent Quality",
      description: "Never worry about grading fatigue affecting your feedback"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="demo-showcase"
      className="section-padding bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container-standard px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border-2 border-black text-black font-bold text-sm shadow-md mb-6">
              <Play className="w-4 h-4" />
              See It In Action
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Watch Remarkably
              <span className="relative mx-2">
                <span className="bg-yellow-300 px-2 py-1 rotate-1 inline-block border-4 border-black shadow-lg">
                  Grade Live
                </span>
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              See how teachers transform their grading workflow from hours to minutes with AI-powered assistance
            </p>
          </motion.div>

          {/* Auto Demo */}
          <motion.div variants={itemVariants} className="mb-12">
            <AutoDemo />
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white border-4 border-black p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-4 text-indigo-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 border-4 border-black p-8 shadow-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Grading?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ teachers who've already saved thousands of hours with Remarkably
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <TryFreeCTA size="lg" className="bg-yellow-300 hover:bg-yellow-400 text-black" />
              <BookDemoCTA size="lg" className="bg-white hover:bg-gray-100 text-indigo-600" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free 1-month trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 border-4 border-black rotate-12 hidden lg:block"
        animate={{
          rotate: [12, 18, 12],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-12 h-12 bg-pink-300 border-4 border-black -rotate-12 hidden lg:block"
        animate={{
          rotate: [-12, -6, -12],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default DemoShowcaseSection;