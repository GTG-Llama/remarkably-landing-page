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
      className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-400 to-indigo-600"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-12 left-1/4 w-24 h-24 bg-yellow-300 border-4 border-black z-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: 12, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-12 right-1/4 w-20 h-20 bg-pink-300 border-4 border-black z-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: -6, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-green-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform"
            variants={itemVariants}
            whileHover={{
              rotate: 1,
              boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="w-8 h-8" />
              <h2 className="text-3xl lg:text-5xl font-black text-black">
                ROI Calculator
              </h2>
            </div>
            <motion.p
              className="text-xl text-gray-800 font-bold mt-4 px-4 py-3 bg-white border-2 border-black"
              variants={itemVariants}
            >
              Calculate how much time and money your school can save with Remarkably
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Section */}
          <motion.div
            className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-black mb-6 text-black relative inline-block"
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

            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-4">
                  Number of Teachers
                </label>
                <div className="relative">
                  <div className="bg-yellow-300 border-2 border-black px-3 py-1 font-black text-center mb-2 w-16 mx-auto">
                    {teachers}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={teachers}
                    onChange={(e) => setTeachers(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-4">
                  Essays per Month (per teacher)
                </label>
                <div className="relative">
                  <div className="bg-pink-300 border-2 border-black px-3 py-1 font-black text-center mb-2 w-16 mx-auto">
                    {essaysPerMonth}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={essaysPerMonth}
                    onChange={(e) => setEssaysPerMonth(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-4">
                  Minutes per Essay (current marking time)
                </label>
                <div className="relative">
                  <div className="bg-blue-300 border-2 border-black px-3 py-1 font-black text-center mb-2 w-20 mx-auto">
                    {markingTimePerEssay}min
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={markingTimePerEssay}
                    onChange={(e) => setMarkingTimePerEssay(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-lg font-bold text-black mb-4">
                  Teacher Hourly Rate ($)
                </label>
                <div className="relative">
                  <div className="bg-green-300 border-2 border-black px-3 py-1 font-black text-center mb-2 w-16 mx-auto">
                    ${hourlyRate}
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 border-2 border-black appearance-none cursor-pointer slider"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Results Section - Invoice Format */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Invoice Header */}
            <motion.div
              className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={resultVariants}
            >
              <div className="text-center mb-4">
                <h3 className="text-2xl font-black text-black mb-2">REMARKABLY SAVINGS INVOICE</h3>
                <div className="bg-yellow-300 border-2 border-black px-4 py-2 inline-block">
                  <p className="text-lg font-black">ANNUAL ROI BREAKDOWN</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black pb-2">
                <span className="font-bold">School Details:</span>
                <span className="font-bold">{teachers} Teachers • {essaysPerMonth} Essays/Month</span>
              </div>
            </motion.div>

            {/* Invoice Items */}
            <motion.div
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={resultVariants}
            >
              {/* Time Saved Item */}
              <motion.div
                className="border-b-4 border-black p-6 hover:bg-yellow-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-300 border-2 border-black p-2">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-black">TIME SAVINGS</h4>
                      <p className="text-sm font-bold text-gray-700">Annual hours recovered</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p
                      className="text-2xl font-black text-black"
                      key={timeSavedWithAI}
                      initial={{ scale: 1.2, color: "#FF6B6B" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      {timeSavedWithAI.toFixed(0)} hrs
                    </motion.p>
                    <p className="text-sm font-bold text-gray-600">
                      ({hoursPerWeekSaved.toFixed(1)} hrs/week)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Cost Savings Item */}
              <motion.div
                className="border-b-4 border-black p-6 hover:bg-green-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-300 border-2 border-black p-2">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-black">COST SAVINGS</h4>
                      <p className="text-sm font-bold text-gray-700">Annual salary savings (80% reduction)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p
                      className="text-2xl font-black text-black"
                      key={costSavings}
                      initial={{ scale: 1.2, color: "#4ECDC4" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      ${costSavings.toLocaleString()}
                    </motion.p>
                    <p className="text-sm font-bold text-gray-600">
                      @ ${hourlyRate}/hr rate
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ROI Impact Item */}
              <motion.div
                className="border-b-4 border-black p-6 hover:bg-pink-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-300 border-2 border-black p-2">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-black">ROI IMPACT</h4>
                      <p className="text-sm font-bold text-gray-700">Teachers refocus on high-value work</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white border-2 border-black p-2 max-w-48">
                      <p className="text-sm font-black text-black">
                        Teaching, mentoring & curriculum development
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Teacher Equivalent Item */}
              <motion.div
                className="p-6 hover:bg-blue-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-300 border-2 border-black p-2">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-black">HIRING EQUIVALENT</h4>
                      <p className="text-sm font-bold text-gray-700">Additional part-time teachers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p
                      className="text-2xl font-black text-black"
                      key={singaporeTeacherEquivalent}
                      initial={{ scale: 1.2, color: "#3B82F6" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      {singaporeTeacherEquivalent} teachers
                    </motion.p>
                    <p className="text-sm font-bold text-gray-600">
                      (SG$4,400/month salary)
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Invoice Total */}
            <motion.div
              className="bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={resultVariants}
              whileHover={{
                y: -3,
                x: -3,
                boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="text-center">
                <p className="text-lg font-black mb-2">TOTAL ANNUAL VALUE</p>
                <motion.p
                  className="text-4xl font-black text-yellow-300"
                  key={costSavings}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ${costSavings.toLocaleString()}
                </motion.p>
                <p className="text-sm font-bold text-gray-300 mt-2">
                  in recovered teaching capacity
                </p>
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
