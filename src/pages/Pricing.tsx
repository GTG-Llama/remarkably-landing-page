import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Calculator, 
  Clock, 
  DollarSign,
  Users,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [essaysPerMonth, setEssaysPerMonth] = useState(100);
  const [timePerEssay, setTimePerEssay] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(50);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individual teachers',
      price: { monthly: 29, yearly: 290 },
      features: [
        'Up to 100 essays per month',
        'Basic AI grading',
        'Standard feedback',
        'Email support',
        'Basic analytics',
        'PDF export'
      ],
      limitations: [
        'No custom rubrics',
        'No team collaboration',
        'No API access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for departments and schools',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 500 essays per month',
        'Advanced AI grading',
        'Detailed feedback',
        'Priority support',
        'Advanced analytics',
        'Custom rubrics',
        'Team collaboration',
        'Bulk processing',
        'LMS integration'
      ],
      limitations: [
        'No white-label options',
        'Limited API calls'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'For large institutions',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Unlimited essays',
        'Premium AI grading',
        'Custom feedback templates',
        'Dedicated support',
        'Full analytics suite',
        'Custom rubrics',
        'Team collaboration',
        'Bulk processing',
        'Full LMS integration',
        'API access',
        'White-label options',
        'Custom training',
        'SLA guarantee'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const calculateROI = () => {
    const timeSavedPerEssay = timePerEssay * 0.8; // 80% time savings
    const totalTimeSaved = (essaysPerMonth * timeSavedPerEssay) / 60; // in hours
    const monthlySavings = totalTimeSaved * hourlyRate;
    const yearlyROI = (monthlySavings * 12) - (plans[1].price.yearly); // Using Professional plan
    
    return {
      timeSavedPerMonth: totalTimeSaved,
      monthlySavings,
      yearlyROI
    };
  };

  const roi = calculateROI();

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and can arrange invoicing for enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We believe in transparent, straightforward pricing."
    },
    {
      question: "Do you offer discounts for educational institutions?",
      answer: "Yes! We offer special pricing for schools and educational institutions. Contact us for details."
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('pricing')} pageKey="pricing" />

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <DollarSign className="h-4 w-4 mr-2" />
              Transparent Pricing
            </div>
            
            <h1 className="mb-6">
              Simple Pricing for
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> Every Educator</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI grading features 
              with a 14-day free trial. No setup fees, no hidden costs.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-[#667EEA]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 badge badge-accent">Save 17%</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? 'pricing-card-featured' : ''}`}
              >
                <div className="p-8">
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="badge badge-primary">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-gray-500 mt-1">
                        ${Math.round(plan.price.yearly / 12)}/month billed annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-[#4FD1C7] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-center">
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.cta === 'Contact Sales' ? '/contact' : '/demo'}
                    className={`btn w-full ${
                      plan.popular ? 'btn-primary' : 'btn-secondary'
                    } btn-lg`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Calculate Your ROI</h2>
              <p className="text-xl text-gray-600">
                See how much time and money you can save with Remarkably
              </p>
            </div>

            <div className="card card-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="mb-6 flex items-center">
                    <Calculator className="h-6 w-6 mr-2 text-[#667EEA]" />
                    Your Current Situation
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Essays graded per month
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        value={essaysPerMonth}
                        onChange={(e) => setEssaysPerMonth(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>10</span>
                        <span className="font-medium text-[#667EEA]">{essaysPerMonth}</span>
                        <span>500</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minutes per essay (current)
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={timePerEssay}
                        onChange={(e) => setTimePerEssay(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>5</span>
                        <span className="font-medium text-[#667EEA]">{timePerEssay}</span>
                        <span>30</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your hourly rate ($)
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$20</span>
                        <span className="font-medium text-[#667EEA]">${hourlyRate}</span>
                        <span>$100</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="mb-6 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-[#4FD1C7]" />
                    Your Savings with Remarkably
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-[#EBF4FF] rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-[#667EEA] mr-2" />
                        <span className="font-medium text-gray-700">Time Saved</span>
                      </div>
                      <div className="text-2xl font-bold text-[#667EEA]">
                        {roi.timeSavedPerMonth.toFixed(1)} hours/month
                      </div>
                      <div className="text-sm text-gray-600">
                        80% reduction in grading time
                      </div>
                    </div>

                    <div className="bg-[#E6FFFA] rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-[#4FD1C7] mr-2" />
                        <span className="font-medium text-gray-700">Monthly Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-[#4FD1C7]">
                        ${roi.monthlySavings.toFixed(0)}
                      </div>
                      <div className="text-sm text-gray-600">
                        Value of time saved
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-lg p-4 text-white">
                      <div className="flex items-center mb-2">
                        <Zap className="h-5 w-5 mr-2" />
                        <span className="font-medium">Annual ROI</span>
                      </div>
                      <div className="text-2xl font-bold">
                        ${roi.yearlyROI.toFixed(0)}
                      </div>
                      <div className="text-sm opacity-90">
                        Net savings after Professional plan cost
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link to="/demo" className="btn btn-primary btn-lg w-full">
                      Start Saving Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Remarkably?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare our features with traditional grading methods
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="icon-container icon-container-primary mx-auto">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="mb-3">5-7x Faster</h3>
                <p className="text-gray-600">
                  Reduce grading time from 15-20 minutes to just 3-5 minutes per essay
                </p>
              </div>
              
              <div className="text-center">
                <div className="icon-container icon-container-accent mx-auto">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="mb-3">Consistent Quality</h3>
                <p className="text-gray-600">
                  AI ensures consistent grading standards across all essays
                </p>
              </div>
              
              <div className="text-center">
                <div className="icon-container icon-container-primary mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-3">Trusted by 50+ Schools</h3>
                <p className="text-gray-600">
                  Join educators worldwide who trust Remarkably for efficient grading
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card card-padding">
                  <h3 className="mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Ready to Transform Your Grading?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today. No credit card required, 
              no setup fees, and full access to all features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn btn-accent btn-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing; 