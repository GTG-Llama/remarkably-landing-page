import React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      number: "1",
      title: "Upload Essays Seamlessly",
      description: "Simply upload handwritten or digital essays. Our advanced OCR technology instantly recognizes and processes your students' work with 99% accuracy.",
      mockup: "/lenordemo1-2.mp4",
      isVideo: true,
      gradient: "from-indigo-600 via-purple-600 to-blue-700",
      bgGradient: "from-indigo-50 via-purple-50 to-blue-50",
      borderGradient: "from-indigo-200 to-purple-200",
      numberBg: "bg-gradient-to-r from-indigo-600 to-purple-600",
      glowColor: "indigo-500/20",
      features: ["Supports handwritten & digital", "99% OCR accuracy", "Batch upload capability"]
    },
    {
      number: "2", 
      title: "AI Analyzes & Grades",
      description: "Advanced machine learning evaluates content, structure, grammar, and style while learning your unique grading preferences and teaching standards.",
      mockup: "/lenordemo2.mp4", 
      isVideo: true,
      gradient: "from-blue-600 via-cyan-600 to-teal-700",
      bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
      borderGradient: "from-blue-200 to-cyan-200",
      numberBg: "bg-gradient-to-r from-blue-600 to-cyan-600",
      glowColor: "blue-500/20",
      features: ["Learns your grading style", "Contextual understanding", "Rubric alignment"]
    },
    {
      number: "3",
      title: "Instant Detailed Feedback",
      description: "Receive comprehensive, personalized feedback with specific suggestions, corrections, and actionable improvement recommendations for each student.",
      mockup: "/lenordemo3-3.mp4",
      isVideo: true,
      gradient: "from-emerald-600 via-green-600 to-teal-700",
      bgGradient: "from-emerald-50 via-green-50 to-teal-50",
      borderGradient: "from-emerald-200 to-green-200",
      numberBg: "bg-gradient-to-r from-emerald-600 to-green-600",
      glowColor: "emerald-500/20",
      features: ["Detailed explanations", "Improvement suggestions", "Personalized comments"]
    },
    {
      number: "4",
      title: "Track Student Progress",
      description: "Monitor individual student development over time with detailed analytics, performance trends, and comprehensive insights into learning patterns.",
      mockup: "/paper-texture2.jpg",
      isVideo: false,
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      bgGradient: "from-orange-50 via-amber-50 to-yellow-50",
      borderGradient: "from-orange-200 to-amber-200",
      numberBg: "bg-gradient-to-r from-orange-600 to-amber-600",
      glowColor: "orange-500/20",
      features: ["Performance analytics", "Learning trends", "Progress visualization"]
    },
    {
      number: "5",
      title: "Export & Share Results",
      description: "Download professionally formatted reports and share feedback directly with students and parents through our secure platform integration.",
      mockup: "/plastic-texture.jpg",
      isVideo: false,
      gradient: "from-pink-600 via-rose-600 to-red-600",
      bgGradient: "from-pink-50 via-rose-50 to-red-50",
      borderGradient: "from-pink-200 to-rose-200",
      numberBg: "bg-gradient-to-r from-pink-600 to-rose-600",
      glowColor: "pink-500/20",
      features: ["Professional reports", "Secure sharing", "Parent portal access"]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-neural-grid opacity-[0.02]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-tech-purple-100 to-blue-100 border border-tech-purple-200 rounded-full">
              <Sparkles className="w-4 h-4 text-tech-purple-600" />
              <span className="text-sm font-semibold text-tech-purple-700">How Remarkably Works</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Get Better{" "}
              <span className="bg-gradient-to-r from-tech-purple-600 via-blue-600 to-tech-purple-600 bg-clip-text text-transparent">
                Results
              </span>
              ,<br />
              Without Increasing{" "}
              <span className="text-gray-700">Headcount</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your grading workflow with AI that understands education. 
              Built by educators, for educators.
            </p>
            
            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-tech-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-tech-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Sales
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${feature.bgGradient} border-2 border-gradient-to-r ${feature.borderGradient} p-8 hover:shadow-2xl transition-all duration-500`}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                
                {/* Content Container */}
                <div className="relative space-y-6">
                  {/* Number Badge */}
                  <div className={`${feature.numberBg} text-white w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.number}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                    
                    {/* Feature List */}
                    <div className="space-y-2 pt-2">
                      {feature.features.map((feat, featIndex) => (
                        <div key={featIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="relative bg-white rounded-xl p-4 shadow-lg border border-gray-200/50 group-hover:shadow-xl transition-shadow duration-300">
                    {feature.isVideo ? (
                      <video 
                        className="w-full h-52 object-cover rounded-lg"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src={feature.mockup} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="w-full h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-transparent" />
                        <div className="text-center space-y-3 relative z-10">
                          <div className={`w-16 h-16 ${feature.numberBg} rounded-2xl mx-auto flex items-center justify-center`}>
                            <div className="w-8 h-8 bg-white rounded-lg" />
                          </div>
                          <div className="space-y-2">
                            <div className="w-32 h-3 bg-gray-300 rounded mx-auto" />
                            <div className="w-24 h-2 bg-gray-200 rounded mx-auto" />
                            <div className="w-28 h-2 bg-gray-200 rounded mx-auto" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
