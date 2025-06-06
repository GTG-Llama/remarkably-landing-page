import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculatorSection: React.FC = () => {
  const [teachers, setTeachers] = useState(10);
  const [essaysPerMonth, setEssaysPerMonth] = useState(20);
  const [markingTimePerEssay, setMarkingTimePerEssay] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(30);

  // Calculations
  const totalEssaysPerMonth = essaysPerMonth * teachers;
  const monthlyMarkingHours = (totalEssaysPerMonth * markingTimePerEssay) / 60;
  const yearlyMarkingHours = monthlyMarkingHours * 12;
  
  const timeSavedWithAI = yearlyMarkingHours * 0.8; // 80% time saving
  const costSavings = timeSavedWithAI * hourlyRate;
  const hoursPerWeekSaved = (timeSavedWithAI / 52);

  // Singapore teacher calculation: $4,400/month * 12 months = $52,800/year
  // Assuming part-time is 20 hours/week * 52 weeks = 1,040 hours/year
  // Hourly rate: $52,800 / 1,040 = ~$50.77/hour for part-time equivalent
  const singaporeTeacherEquivalent = Math.round(costSavings / 26400); // $4,400 * 6 months as rough part-time equivalent

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const resultVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="roi-calculator"
      className="py-12 relative overflow-hidden bg-gradient-to-b from-indigo-400 to-indigo-600"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-6 left-1/4 w-16 h-16 bg-yellow-300 border-4 border-black z-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: 12, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-6 right-1/4 w-14 h-14 bg-pink-300 border-4 border-black z-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: -6, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-green-300 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform"
            variants={itemVariants}
            whileHover={{
              rotate: 1,
              boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Calculator className="w-6 h-6" />
              <h2 className="text-2xl lg:text-4xl font-black text-black">
                ROI Calculator
              </h2>
            </div>
            <motion.p
              className="text-lg text-gray-800 font-bold mt-3 px-3 py-2 bg-white border-2 border-black"
              variants={itemVariants}
            >
              Calculate how much time and money your school can save with Remarkably
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Input Section */}
          <motion.div
            className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-black mb-4 text-black relative inline-block"
              variants={itemVariants}
            >
              Your School Details
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-3 bg-cyan-300 -z-0"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
            </motion.h3>

            <div className="space-y-6 mt-4 ">
              <motion.div variants={itemVariants}>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-base font-bold text-black text-xl">
                    Number of Teachers
                  </label>
                  <div className="bg-yellow-300 border-2 border-black px-3 py-1 font-black text-center mb-2 text-xl">
                    {teachers}
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teachers}
                  onChange={(e) => setTeachers(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-base font-bold text-black text-xl">
                    Essays per Month (per teacher)
                  </label>
                  <div className="bg-pink-300 border-2 border-black px-3 py-1 font-black text-center mb-2 text-xl">
                    {essaysPerMonth}
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={essaysPerMonth}
                  onChange={(e) => setEssaysPerMonth(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-base font-bold text-black text-xl">
                    Marking time per essay
                  </label>
                  <div className="bg-blue-300 border-2 border-black px-3 py-1 font-black text-center mb-2 text-xl">
                    {markingTimePerEssay}min
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={markingTimePerEssay}
                  onChange={(e) => setMarkingTimePerEssay(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-base font-bold text-black text-xl">
                    Teacher Hourly Rate ($)
                  </label>
                  <div className="bg-green-300 border-2 border-black px-3 py-1 font-black text-center mb-2 text-xl">
                    ${hourlyRate}
                  </div>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                />
              </motion.div>

              
            </div>
          </motion.div>

          {/* Results Section - Simplified ROI Display */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Main ROI Display */}
            <motion.div
              className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
              variants={resultVariants}
              whileHover={{
                y: -4,
                x: -4,
                boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="text-center">
                <motion.p
                  className="text-lg font-bold text-gray-300 mb-4"
                  variants={itemVariants}
                >
                  🏆 TOTAL ANNUAL VALUE RECOVERED
                </motion.p>
                <motion.div
                  className="mb-6"
                  key={costSavings}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.p
                    className="text-6xl lg:text-7xl font-black text-white"
                    key={costSavings}
                    initial={{ scale: 1.1, color: "#4ECDC4" }}
                    animate={{ scale: 1, color: "#FFFFFF" }}
                    transition={{ duration: 0.5 }}
                  >
                    ${costSavings.toLocaleString()}
                  </motion.p>
                </motion.div>
                <motion.p
                  className="text-base text-gray-300"
                  variants={itemVariants}
                >
                  Or {timeSavedWithAI.toFixed(0)} hours of your teaching staff's time
                </motion.p>
                
                {/* Contact Us Button */}
                <motion.div
                  className="mt-6"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-yellow-300 text-black border-4 border-black px-8 py-4 font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                    Contact Us
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* ROI Breakdown */}
            <motion.div
              className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={resultVariants}
              whileHover={{
                y: -2,
                x: -2,
                boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.h4
                className="text-xl font-black text-black mb-4"
                variants={itemVariants}
              >
                How did we get this number?
              </motion.h4>
              
              <div className="space-y-3">
                <motion.div
                  className="flex justify-between items-center"
                  variants={itemVariants}
                >
                  <span className="font-bold text-black">Hours saved per year</span>
                  <span className="font-black text-black">{timeSavedWithAI.toFixed(0)} hours</span>
                </motion.div>
                
                <motion.div
                  className="flex justify-between items-center"
                  variants={itemVariants}
                >
                  <span className="font-bold text-black">Value of saving {timeSavedWithAI.toFixed(0)} hours of teaching time</span>
                  <span className="font-black text-black">${costSavings.toLocaleString()}</span>
                </motion.div>
                
                <motion.div
                  className="flex justify-between items-center"
                  variants={itemVariants}
                >
                  <span className="font-bold text-black">Cost of Remarkably subscription per year</span>
                  <span className="font-black text-black">$3,600</span>
                </motion.div>
                
                <motion.div
                  className="border-t-4 border-black pt-3 mt-4"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-black text-black text-lg">Total ROI per year</span>
                    <motion.span
                      className="font-black text-black text-xl bg-green-300 border-2 border-black px-3 py-1"
                      key={costSavings}
                      initial={{ scale: 1.1, backgroundColor: "#4ECDC4" }}
                      animate={{ scale: 1, backgroundColor: "#a7f3d0" }}
                      transition={{ duration: 0.3 }}
                    >
                      ${(costSavings - 3600).toLocaleString()}
                    </motion.span>
                  </div>
                </motion.div>
              </div>
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
