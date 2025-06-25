import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  BarChart3,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ROICalculatorSection: React.FC = () => {
  const [teachers, setTeachers] = useState(10);
  const [essaysPerWeek, setEssaysPerWeek] = useState(30);
  const [hoursPerEssay, setHoursPerEssay] = useState(0.25);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Calculations
  const weeklyHours = teachers * essaysPerWeek * hoursPerEssay;
  const monthlyCost = weeklyHours * 4 * hourlyRate;
  const yearlyCost = monthlyCost * 12;
  
  // With Remarkably (7x faster)
  const newWeeklyHours = weeklyHours / 7;
  const newMonthlyCost = newWeeklyHours * 4 * hourlyRate;
  const newYearlyCost = newMonthlyCost * 12;

  // Savings
  const monthlySavings = monthlyCost - newMonthlyCost;
  const yearlySavings = yearlyCost - newYearlyCost;
  const timeSaved = weeklyHours - newWeeklyHours;
  
  // ROI calculation (assuming $200/month per teacher for software)
  const softwareCost = teachers * 200 * 12;
  const netSavings = yearlySavings - softwareCost;
  const roi = ((netSavings / softwareCost) * 100);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Savings",
      description: "Reduce grading time by 85%",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Lower operational expenses",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teacher Satisfaction",
      description: "95% report better work-life balance",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quality Improvement",
      description: "More consistent, detailed feedback",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section className="section-standard bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-elements">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="badge-primary">
              <Calculator className="w-4 h-4" />
                ROI Calculator
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Calculate Your <span className="text-gradient-primary">Savings</span>
            </h2>
            
            <p className="text-empathetic">
              See the potential impact Remarkably can have on your institution's budget and teacher productivity. 
              Most schools see ROI within the first 3 months.
            </p>
        </motion.div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Input Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card-elevated p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Institution Details</h3>
                  </div>

                  {/* Number of Teachers */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      Number of Teachers
                    </label>
                    <div className="relative">
                <input
                  type="range"
                  min="1"
                        max="200"
                  value={teachers}
                  onChange={(e) => setTeachers(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>1</span>
                        <span className="font-bold text-indigo-600">{teachers} teachers</span>
                        <span>200+</span>
                  </div>
                </div>
                  </div>

                  {/* Essays per Week */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      Essays Graded Per Teacher Per Week
                    </label>
                    <div className="relative">
                <input
                  type="range"
                  min="5"
                        max="100"
                        value={essaysPerWeek}
                        onChange={(e) => setEssaysPerWeek(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>5</span>
                        <span className="font-bold text-indigo-600">{essaysPerWeek} essays</span>
                        <span>100+</span>
                      </div>
                    </div>
                  </div>

                  {/* Hours per Essay */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      Average Hours Per Essay
                  </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[0.15, 0.25, 0.5, 1].map((hours) => (
                        <button
                          key={hours}
                          onClick={() => setHoursPerEssay(hours)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            hoursPerEssay === hours
                              ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300'
                              : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
                          }`}
                        >
                          {hours === 0.15 ? '9 min' : hours === 0.25 ? '15 min' : hours === 0.5 ? '30 min' : '1 hour'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hourly Rate */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      Teacher Hourly Rate (SGD)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                        type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                        className="form-input pl-10"
                        placeholder="50"
                />
                    </div>
            </div>

                  <motion.button
                    onClick={handleCalculate}
                    className="w-full btn-primary group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate ROI
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div variants={itemVariants} className="space-y-8">
              {showResults ? (
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Key Metrics */}
                  <div className="card-elevated p-8 gradient-overlay">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Your ROI Results</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                          <div className="text-3xl font-bold text-emerald-700 mb-2">
                            {roi > 0 ? '+' : ''}{roi.toFixed(0)}%
                          </div>
                          <div className="text-sm font-medium text-emerald-600">
                            Annual ROI
                          </div>
                          <div className="text-xs text-emerald-500 mt-1">
                            Return on Investment
                          </div>
                        </div>

                        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                          <div className="text-3xl font-bold text-indigo-700 mb-2">
                            {Math.round(timeSaved)}h
                          </div>
                          <div className="text-sm font-medium text-indigo-600">
                            Weekly Time Saved
                          </div>
                          <div className="text-xs text-indigo-500 mt-1">
                            Per teacher productivity gain
                          </div>
                        </div>
                      </div>
                
                      <div className="border-t border-gray-200 pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-sm font-medium text-gray-600 mb-2">Monthly Savings</div>
                            <div className="text-2xl font-bold text-gray-900">
                              ${monthlySavings.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-600 mb-2">Annual Savings</div>
                            <div className="text-2xl font-bold text-gray-900">
                              ${yearlySavings.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Break-even Analysis */}
                      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-5 h-5 text-amber-600" />
                          <div className="font-semibold text-amber-900">Break-even Analysis</div>
                        </div>
                        <div className="text-sm text-amber-700">
                          With software costs of <strong>${softwareCost.toLocaleString()}/year</strong>, 
                          you'll break even in <strong>{Math.ceil(softwareCost / monthlySavings)} months</strong> 
                          and save <strong>${netSavings.toLocaleString()}</strong> annually thereafter.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center space-y-4">
                    <motion.button
                      className="btn-primary group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Enterprise Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                    
                    <p className="text-sm text-gray-500">
                      See these results in action with a personalized demo
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="card-elevated p-8 text-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto">
                      <Calculator className="w-8 h-8 text-gray-400" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Calculate Your Potential Savings
                      </h3>
                      <p className="text-gray-600">
                        Enter your institution details to see the financial impact of implementing Remarkably.
                      </p>
                    </div>

                    {/* Preview Benefits */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="text-center space-y-2">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto text-white`}>
                            {benefit.icon}
                          </div>
                          <div className="text-sm font-medium text-gray-900">{benefit.title}</div>
                          <div className="text-xs text-gray-500">{benefit.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>
              )}
            </motion.div>
          </div>

          {/* Additional Value Props */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                2,000+ teachers already experiencing 85% time savings and improved work-life balance.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality Maintained</h3>
              <p className="text-gray-600">
                AI learns your grading style to maintain consistency while providing detailed, personalized feedback.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Easy Implementation</h3>
              <p className="text-gray-600">
                Setup in minutes, not months. Full training and support included with enterprise plans.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(79, 70, 229, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </section>
  );
};

export default ROICalculatorSection;
