import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculatorSection: React.FC = () => {
  const [teachers, setTeachers] = useState(10);
  const [essaysPerWeek, setEssaysPerWeek] = useState(50);
  const [markingTimePerEssay, setMarkingTimePerEssay] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(30);

  // Calculations
  const weeklyMarkingHours = essaysPerWeek * markingTimePerEssay / 60;
  const monthlyMarkingHours = weeklyMarkingHours * 4;
  const yearlyMarkingHours = monthlyMarkingHours * 12;
  const timeSavedWithAI = yearlyMarkingHours * 0.8; // 80% time saving
  const costSavings = timeSavedWithAI * hourlyRate;
  const hoursPerWeekSaved = timeSavedWithAI / 52;
  
  // Calculate equivalent part-time teachers based on Singapore average salary
  const singaporeTeacherMonthlySalary = 4400; // SGD 4,400 per month
  const singaporeTeacherAnnualSalary = singaporeTeacherMonthlySalary * 12;
  const equivalentPartTimeTeachers = Math.round(costSavings / singaporeTeacherAnnualSalary);

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  const resultVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="roi-calculator" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-indigo-100">
      {/* Decorative elements */}
      <motion.div className="absolute top-12 left-1/4 w-24 h-24 bg-yellow-300 border-4 border-black z-0" initial={{
      rotate: 0,
      opacity: 0
    }} whileInView={{
      rotate: 12,
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8,
      delay: 0.2
    }} />
      <motion.div className="absolute bottom-12 right-1/4 w-20 h-20 bg-pink-300 border-4 border-black z-0" initial={{
      rotate: 0,
      opacity: 0
    }} whileInView={{
      rotate: -6,
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8,
      delay: 0.4
    }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        amount: 0.2
      }}>
          <motion.div className="bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform" variants={itemVariants} whileHover={{
          rotate: 1,
          boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
          transition: {
            duration: 0.3
          }
        }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="w-8 h-8" />
              <h2 className="text-3xl lg:text-5xl font-black text-black">
                ROI Calculator
              </h2>
            </div>
            <motion.p className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black" variants={itemVariants}>
              Calculate how much time and money your school can save with Remarkably
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Section */}
          <motion.div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            <motion.h3 className="text-2xl font-black mb-6 text-black relative inline-block" variants={itemVariants}>
              Your School Details
              <motion.span className="absolute -bottom-2 left-0 w-full h-3 bg-cyan-300 -z-0" initial={{
              width: 0
            }} whileInView={{
              width: "100%"
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.6
            }} />
            </motion.h3>

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-2">
                  Number of Teachers
                </label>
                <div className="relative">
                  <input type="range" min="1" max="100" value={teachers} onChange={e => setTeachers(Number(e.target.value))} className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider" />
                  <motion.div animate={{
                  x: teachers / 100 * 100 - 50
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }} className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-yellow-300 border-2 border-black py-1 font-black px-[17px] mx-[145px]">
                    {teachers}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-2">
                  Essays per Week (all teachers)
                </label>
                <div className="relative">
                  <input type="range" min="10" max="500" value={essaysPerWeek} onChange={e => setEssaysPerWeek(Number(e.target.value))} className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider" />
                  <motion.div animate={{
                  x: essaysPerWeek / 500 * 100 - 50
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }} className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-pink-300 border-2 border-black px-3 py-1 font-black mx-[142px]">
                    {essaysPerWeek}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-2">Minutes per Essay (currently)</label>
                <div className="relative">
                  <input type="range" min="5" max="30" value={markingTimePerEssay} onChange={e => setMarkingTimePerEssay(Number(e.target.value))} className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider" />
                  <motion.div animate={{
                  x: markingTimePerEssay / 30 * 100 - 50
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }} className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-300 border-2 border-black py-1 font-black px-[8px] mx-[138px]">
                    {markingTimePerEssay}min
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-2">
                  Teacher Hourly Rate ($)
                </label>
                <div className="relative">
                  <input type="range" min="15" max="100" value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider" />
                  <motion.div animate={{
                  x: hourlyRate / 100 * 100 - 50
                }} transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }} className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-300 border-2 border-black px-3 py-1 font-black mx-[144px]">
                    ${hourlyRate}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            <motion.div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" variants={resultVariants} whileHover={{
            y: -5,
            x: -5,
            boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
            transition: {
              duration: 0.2
            }
          }}>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6" />
                <h4 className="text-xl font-black text-black">Time Saved Annually</h4>
              </div>
              <motion.p className="text-3xl font-black text-black" key={timeSavedWithAI} initial={{
              scale: 1.2,
              color: "#FF6B6B"
            }} animate={{
              scale: 1,
              color: "#000000"
            }} transition={{
              duration: 0.3
            }}>
                {timeSavedWithAI.toFixed(0)} hours
              </motion.p>
              <p className="text-sm font-bold text-gray-700 mt-2">
                ({hoursPerWeekSaved.toFixed(1)} hours per week)
              </p>
            </motion.div>

            <motion.div className="bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" variants={resultVariants} whileHover={{
            y: -5,
            x: -5,
            boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
            transition: {
              duration: 0.2
            }
          }}>
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-6 h-6" />
                <h4 className="text-xl font-black text-black">Annual Cost Savings</h4>
              </div>
              <motion.p className="text-3xl font-black text-black" key={costSavings} initial={{
              scale: 1.2,
              color: "#4ECDC4"
            }} animate={{
              scale: 1,
              color: "#000000"
            }} transition={{
              duration: 0.3
            }}>
                ${costSavings.toLocaleString()}
              </motion.p>
              <p className="text-sm font-bold text-gray-700 mt-2">
                Based on 80% time reduction
              </p>
            </motion.div>

            <motion.div className="bg-pink-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" variants={resultVariants} whileHover={{
            y: -5,
            x: -5,
            boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
            transition: {
              duration: 0.2
            }
          }}>
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6" />
                <h4 className="text-xl font-black text-black">ROI Impact</h4>
              </div>
              <motion.p className="text-2xl font-black text-black" variants={itemVariants}>
                Teachers can focus on
              </motion.p>
              <motion.p className="text-lg font-bold text-gray-800 mt-2 bg-white border-2 border-black p-2" variants={itemVariants}>
                Teaching, mentoring & curriculum development instead of marking
              </motion.p>
            </motion.div>

            <motion.div className="bg-blue-300 border-4 border-black p-4 text-center" variants={resultVariants} whileHover={{
            rotate: 2,
            transition: {
              duration: 0.2
            }
          }}>
              <p className="text-lg font-black text-black">
                🎯 That's equivalent to hiring {equivalentPartTimeTeachers > 0 ? equivalentPartTimeTeachers : 1} additional teacher{equivalentPartTimeTeachers !== 1 ? 's' : ''}!
              </p>
              <p className="text-sm font-bold text-gray-700 mt-1">
                (Based on SG$4,400/month average teacher salary)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          background: #000000;
          border: 2px solid #000000;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          background: #000000;
          border: 2px solid #000000;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default ROICalculatorSection;
