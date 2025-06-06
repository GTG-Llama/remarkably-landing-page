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

        {/* Prominent Total Annual Value */}
        <motion.div
          className="max-w-4xl mx-auto mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-white text-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            variants={resultVariants}
            whileHover={{
              y: -4,
              x: -4,
              boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-12 h-12 bg-yellow-300 border-4 border-black transform rotate-12"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 bg-pink-300 border-4 border-black transform -rotate-6"></div>
            
            <div className="text-center relative z-10">
              <motion.p
                className="text-lg font-black mb-3 text-yellow-500"
                variants={itemVariants}
              >
                🏆 TOTAL ANNUAL VALUE RECOVERED
              </motion.p>
              <motion.div
                className="bg-white text-black border-4 border-black p-4 inline-block shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                key={costSavings}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
                whileHover={{
                  rotate: 2,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.p
                  className="text-4xl lg:text-6xl font-black text-green-600"
                  key={costSavings}
                  initial={{ scale: 1.1, rotateY: 10 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ${costSavings.toLocaleString()}
                </motion.p>
              </motion.div>
              <motion.p
                className="text-sm font-bold text-black-300 mt-2"
                variants={itemVariants}
              >
                in teaching capacity recovered annually
              </motion.p>
              <motion.div
                className="flex justify-center items-center gap-3 mt-3 flex-wrap"
                variants={itemVariants}
              >
                <div className="bg-yellow-300 text-black border-2 border-black px-3 py-1 font-black text-sm">
                  {timeSavedWithAI.toFixed(0)} Hours Saved
                </div>
                <div className="bg-green-300 text-black border-2 border-black px-3 py-1 font-black text-sm">
                  {singaporeTeacherEquivalent} Teachers Worth
                </div>
                <div className="bg-pink-300 text-black border-2 border-black px-3 py-1 font-black text-sm">
                  80% Time Reduction
                </div>
              </motion.div>
            </div>
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
              className="text-xl font-black mb-4 text-black relative inline-block"
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

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-base font-bold text-black">
                    Number of Teachers
                  </label>
                  <div className="bg-yellow-300 border-2 border-black px-3 py-1 font-black text-center">
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
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-base font-bold text-black">
                    Essays per Month (per teacher)
                  </label>
                  <div className="bg-pink-300 border-2 border-black px-3 py-1 font-black text-center">
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
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-base font-bold text-black">
                    Minutes per Essay (current marking time)
                  </label>
                  <div className="bg-blue-300 border-2 border-black px-3 py-1 font-black text-center">
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
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-base font-bold text-black">
                    Teacher Hourly Rate ($)
                  </label>
                  <div className="bg-green-300 border-2 border-black px-3 py-1 font-black text-center">
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

              {/* Additional spacing to match right side height */}
              <motion.div variants={itemVariants} className="mt-8">
                <div className="bg-cyan-300 border-4 border-black p-4 text-center">
                  <h4 className="text-lg font-black text-black mb-2">Quick Summary</h4>
                  <p className="text-sm font-bold text-black">
                    {totalEssaysPerMonth.toLocaleString()} total essays per month
                  </p>
                  <p className="text-sm font-bold text-black">
                    {monthlyMarkingHours.toFixed(0)} hours of marking per month
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Results Section - Invoice Format */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Invoice Header */}
            <motion.div
              className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={resultVariants}
            >
              <div className="text-center mb-3">
                <h3 className="text-xl font-black text-black mb-2">REMARKABLY SAVINGS INVOICE</h3>
                <div className="bg-yellow-300 border-2 border-black px-3 py-1 inline-block">
                  <p className="text-base font-black">ANNUAL ROI BREAKDOWN</p>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black pb-2">
                <span className="font-bold text-sm">School Details:</span>
                <span className="font-bold text-sm">{teachers} Teachers • {essaysPerMonth} Essays/Month</span>
              </div>
            </motion.div>

            {/* Invoice Items */}
            <motion.div
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              variants={resultVariants}
            >
              {/* Time Saved Item */}
              <motion.div
                className="border-b-4 border-black p-4 hover:bg-yellow-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-300 border-2 border-black p-2">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-black">TIME SAVINGS</h4>
                      <p className="text-xs font-bold text-gray-700">Annual hours recovered</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p
                      className="text-xl font-black text-black"
                      key={timeSavedWithAI}
                      initial={{ scale: 1.2, color: "#FF6B6B" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      {timeSavedWithAI.toFixed(0)} hrs
                    </motion.p>
                    <p className="text-xs font-bold text-gray-600">
                      ({hoursPerWeekSaved.toFixed(1)} hrs/week)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Cost Savings Item */}
              <motion.div
                className="border-b-4 border-black p-4 hover:bg-green-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-300 border-2 border-black p-2">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-black">COST SAVINGS</h4>
                      <p className="text-xs font-bold text-gray-700">Annual salary savings (80% reduction)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p
                      className="text-xl font-black text-black"
                      key={costSavings}
                      initial={{ scale: 1.2, color: "#4ECDC4" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      ${costSavings.toLocaleString()}
                    </motion.p>
                    <p className="text-xs font-bold text-gray-600">
                      @ ${hourlyRate}/hr rate
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ROI Impact Item */}
              <motion.div
                className="border-b-4 border-black p-4 hover:bg-pink-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-300 border-2 border-black p-2">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-black">ROI IMPACT</h4>
                      <p className="text-xs font-bold text-gray-700">Teachers refocus on high-value work</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white border-2 border-black p-2 max-w-44">
                      <p className="text-xs font-black text-black">
                        Teaching, mentoring & curriculum development
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Teacher Equivalent Item */}
              <motion.div
                className="p-4 hover:bg-blue-50 transition-colors"
                whileHover={{
                  x: -2,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-300 border-2 border-black p-2">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-base font-black text-black">HIRING EQUIVALENT</h4>
                      <p className="text-xs font-bold text-gray-700">Additional part-time teachers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.p
                      className="text-xl font-black text-black"
                      key={singaporeTeacherEquivalent}
                      initial={{ scale: 1.2, color: "#3B82F6" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      {singaporeTeacherEquivalent} teachers
                    </motion.p>
                    <p className="text-xs font-bold text-gray-600">
                      (SG$4,400/month salary)
                    </p>
                  </div>
                </div>
              </motion.div>
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
