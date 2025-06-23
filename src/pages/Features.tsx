import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      title: 'AI-Powered Grading Engine',
      description: 'Our advanced AI analyzes essays using multiple criteria including grammar, structure, content quality, and creativity.',
      icon: '🤖',
      benefits: [
        'Consistent grading across all submissions',
        'Detailed breakdown of assessment criteria',
        'Customizable rubrics and scoring methods',
        'Multi-language support for diverse classrooms'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Instant Feedback Generation',
      description: 'Provide students with detailed, constructive feedback that helps them improve their writing skills.',
      icon: '💬',
      benefits: [
        'Personalized feedback for each student',
        'Specific suggestions for improvement',
        'Positive reinforcement highlighting strengths',
        'Clear action items for next steps'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Track student progress over time with comprehensive analytics and reporting tools.',
      icon: '📊',
      benefits: [
        'Individual student progress tracking',
        'Class-wide performance insights',
        'Trend analysis and improvement patterns',
        'Export capabilities for reporting'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Seamless Integration',
      description: 'Works with your existing tools and platforms for a smooth workflow integration.',
      icon: '🔗',
      benefits: [
        'Google Classroom integration',
        'Canvas and Blackboard compatibility',
        'Bulk import and export features',
        'API access for custom integrations'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const additionalFeatures = [
    {
      category: 'Assessment Tools',
      features: [
        { name: 'Custom Rubrics', description: 'Create and save custom grading rubrics for different assignment types' },
        { name: 'Plagiarism Detection', description: 'Built-in plagiarism checking with detailed similarity reports' },
        { name: 'Writing Style Analysis', description: 'Analyze writing style, tone, and complexity levels' },
        { name: 'Multimedia Support', description: 'Grade essays with embedded images, charts, and multimedia content' }
      ]
    },
    {
      category: 'Workflow Management',
      features: [
        { name: 'Batch Processing', description: 'Grade multiple essays simultaneously for efficient workflow' },
        { name: 'Queue Management', description: 'Organize and prioritize grading tasks with smart queuing' },
        { name: 'Collaborative Grading', description: 'Enable multiple teachers to grade and review submissions' },
        { name: 'Deadline Tracking', description: 'Automated reminders and deadline management tools' }
      ]
    },
    {
      category: 'Student Experience',
      features: [
        { name: 'Student Portal', description: 'Dedicated portal for students to view grades and feedback' },
        { name: 'Revision Tracking', description: 'Track essay revisions and improvement over time' },
        { name: 'Peer Review Tools', description: 'Enable structured peer review and collaboration' },
        { name: 'Writing Assistance', description: 'Real-time writing suggestions and grammar checking' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Features - Remarkably AI Essay Grading Platform</title>
        <meta name="description" content="Discover powerful features of Remarkably's AI essay grading platform. From instant feedback to advanced analytics, see how we transform the grading experience." />
        <meta name="keywords" content="AI grading features, essay feedback, automated grading tools, teacher dashboard, student analytics" />
      </Helmet>

      <div className="page-container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Educators
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how Remarkably's advanced AI technology transforms essay grading with intelligent automation, 
            detailed analytics, and seamless workflow integration.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Try Features Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Main Features Interactive Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Navigation */}
            <div className="space-y-4">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeFeature === index
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                    <svg 
                      className={`w-6 h-6 text-blue-500 transition-transform ${activeFeature === index ? 'rotate-90' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Details */}
            <div className="content-card">
              <div className={`w-16 h-16 bg-gradient-to-r ${mainFeatures[activeFeature].gradient} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {mainFeatures[activeFeature].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {mainFeatures[activeFeature].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {mainFeatures[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {mainFeatures[activeFeature].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Feature Set</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="content-card hover-lift">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="group">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:bg-blue-600 transition-colors"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {feature.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
          
          <div className="content-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-500">Manual Grading</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">Remarkably AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Grading Speed', manual: '2-5 mins per essay', remarkably: '< 30 seconds per essay' },
                  { feature: 'Consistency', manual: 'Variable', remarkably: '100% Consistent' },
                  { feature: 'Detailed Feedback', manual: 'Time consuming', remarkably: 'Instant & Comprehensive' },
                  { feature: 'Progress Tracking', manual: 'Manual records', remarkably: 'Automated Analytics' },
                  { feature: 'Plagiarism Check', manual: 'Additional tools needed', remarkably: 'Built-in Detection' },
                  { feature: 'Bulk Processing', manual: 'Not feasible', remarkably: 'Unlimited Capacity' }
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.manual}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {row.remarkably}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="mb-16">
          <div className="content-card bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔒
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your data security is our top priority. Remarkably meets the highest standards for educational technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'FERPA Compliant', description: 'Full compliance with Family Educational Rights and Privacy Act' },
                { title: 'SOC 2 Certified', description: 'Independently audited security controls and procedures' },
                { title: 'GDPR Ready', description: 'European data protection regulation compliance' },
                { title: 'SSL Encrypted', description: 'End-to-end encryption for all data transmission' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    ✓
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of educators who have transformed their grading workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Demo
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features; 