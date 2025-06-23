import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [studentCount, setStudentCount] = useState(100);
  const [calculatedSavings, setCalculatedSavings] = useState({ time: 0, money: 0 });

  useEffect(() => {
    // Calculate time and money savings
    const minutesPerEssay = 3; // Average time to grade an essay manually
    const essaysPerMonth = studentCount * 2; // Assume 2 essays per student per month
    const timeSavedMinutes = essaysPerMonth * minutesPerEssay * 0.75; // 75% time savings
    const timeSavedHours = Math.round(timeSavedMinutes / 60);
    
    // Assuming teacher makes $30/hour
    const moneySaved = Math.round(timeSavedHours * 30);
    
    setCalculatedSavings({ time: timeSavedHours, money: moneySaved });
  }, [studentCount]);

  const pricingPlans = [
    {
      name: 'Teacher',
      description: 'Perfect for individual educators',
      monthlyPrice: 29,
      yearlyPrice: 290,
      students: 'Up to 150',
      features: [
        'AI-powered essay grading',
        'Instant detailed feedback',
        'Basic analytics dashboard',
        'Email support',
        'Standard rubrics',
        'Google Classroom integration'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'School',
      description: 'Ideal for departments and small schools',
      monthlyPrice: 99,
      yearlyPrice: 990,
      students: 'Up to 500',
      features: [
        'Everything in Teacher plan',
        'Advanced analytics & reporting',
        'Custom rubrics builder',
        'Priority support',
        'LMS integrations (Canvas, Blackboard)',
        'Bulk import/export',
        'Plagiarism detection',
        'Multi-teacher collaboration'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'District',
      description: 'For large institutions and districts',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      students: 'Unlimited',
      features: [
        'Everything in School plan',
        'Dedicated account manager',
        'Custom AI model training',
        'Advanced security features',
        'API access',
        'White-label options',
        'Professional development training',
        'SLA guarantee'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is the AI grading?',
      answer: 'Our AI achieves 98% consistency with human graders and continuously improves through machine learning. It provides detailed feedback on grammar, structure, content, and creativity.'
    },
    {
      question: 'Can I customize the grading rubrics?',
      answer: 'Yes! School and District plans include a custom rubrics builder. You can create subject-specific rubrics and adjust weighting for different criteria.'
    },
    {
      question: 'What file formats do you support?',
      answer: 'We support PDF, DOC, DOCX files, and scanned handwritten essays. Our OCR technology can read handwriting with high accuracy.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.'
    },
    {
      question: 'How does billing work?',
      answer: 'Billing is based on your plan tier and student count. You can upgrade or downgrade anytime, and we prorate the charges accordingly.'
    }
  ];

  const getPrice = (plan: typeof pricingPlans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavingsPercentage = () => {
    return Math.round(((pricingPlans[1].monthlyPrice * 12 - pricingPlans[1].yearlyPrice) / (pricingPlans[1].monthlyPrice * 12)) * 100);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Remarkably AI Essay Grading Platform</title>
        <meta name="description" content="Choose the perfect plan for your needs. Transparent pricing for AI-powered essay grading. Start with a free trial and save up to 75% of your grading time." />
        <meta name="keywords" content="AI grading pricing, essay grading cost, teacher pricing plans, school subscriptions" />
      </Helmet>

      <div className="page-container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI grading features 
            with a 14-day free trial and no setup fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save {getSavingsPercentage()}%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'featured' : ''} hover-lift`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    ${getPrice(plan)}
                  </span>
                  <span className="text-gray-600">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                
                <div className="text-sm text-gray-500 mb-6">
                  {plan.students} students
                </div>
                
                <Link
                  to="/demo"
                  className={`w-full inline-block py-3 px-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mb-20">
          <div className="content-card bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Savings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how much time and money you can save with Remarkably's AI-powered grading
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Students
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={studentCount}
                    onChange={(e) => setStudentCount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>50</span>
                    <span className="font-bold text-blue-600">{studentCount}</span>
                    <span>1000+</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {calculatedSavings.time}h
                    </div>
                    <div className="text-sm text-gray-600">Time Saved Monthly</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${calculatedSavings.money}
                    </div>
                    <div className="text-sm text-gray-600">Value Saved Monthly</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  With {studentCount} students, you could save <strong>{calculatedSavings.time} hours</strong> per month
                </p>
                <Link
                  to="/demo"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Start Saving Time Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          
          <div className="content-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">Teacher</th>
                  <th className="text-center py-4 px-6 font-bold text-purple-600 bg-purple-50">School</th>
                  <th className="text-center py-4 px-6 font-bold text-green-600">District</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'AI Essay Grading', teacher: true, school: true, district: true },
                  { feature: 'Student Limit', teacher: '150', school: '500', district: 'Unlimited' },
                  { feature: 'Basic Analytics', teacher: true, school: true, district: true },
                  { feature: 'Advanced Reporting', teacher: false, school: true, district: true },
                  { feature: 'Custom Rubrics', teacher: false, school: true, district: true },
                  { feature: 'Plagiarism Detection', teacher: false, school: true, district: true },
                  { feature: 'API Access', teacher: false, school: false, district: true },
                  { feature: 'White-label Options', teacher: false, school: false, district: true },
                  { feature: 'Support Level', teacher: 'Email', school: 'Priority', district: 'Dedicated Manager' }
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.teacher === 'boolean' ? (
                        row.teacher ? (
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )
                      ) : (
                        <span className="text-gray-600">{row.teacher}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-purple-25">
                      {typeof row.school === 'boolean' ? (
                        row.school ? (
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )
                      ) : (
                        <span className="text-gray-600">{row.school}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.district === 'boolean' ? (
                        row.district ? (
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )
                      ) : (
                        <span className="text-gray-600">{row.district}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="content-card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of educators who have transformed their grading experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start 14-Day Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing; 