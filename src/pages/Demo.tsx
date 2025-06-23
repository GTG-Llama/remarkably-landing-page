import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Demo: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo - See Remarkably AI in Action | Essay Grading Platform</title>
        <meta name="description" content="Experience Remarkably's AI-powered essay grading platform with our interactive demo. See how our technology transforms the grading process in real-time." />
        <meta name="keywords" content="AI grading demo, essay grading demo, live demo, AI teacher tools" />
      </Helmet>

      <div className="page-container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            See Remarkably
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of essay grading with our interactive demo. Upload a sample essay 
            and watch our AI provide detailed feedback in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Request Live Demo
            </Link>
            <Link
              to="/pricing"
              className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full text-lg border-2 border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Upload & Grade',
              description: 'Upload handwritten or typed essays and get instant AI-powered grades',
              icon: '📤',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Detailed Feedback',
              description: 'Receive comprehensive feedback on grammar, structure, and content',
              icon: '💬',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Analytics Dashboard',
              description: 'View student progress and class performance analytics',
              icon: '📊',
              color: 'from-green-500 to-teal-500'
            }
          ].map((feature, index) => (
            <div key={index} className="content-card hover-lift">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Video Demo Section */}
        <div className="content-card mb-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Watch Our AI in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how Remarkably grades a real handwritten essay in under 2 minutes, 
              providing detailed feedback and scoring.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1M9 16h6" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Demo Video Coming Soon</p>
                <p className="text-sm text-gray-500">Interactive demo in development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Try It Yourself</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Sample Essay',
                description: 'Select from our library of sample essays or upload your own',
                action: 'Browse Samples'
              },
              {
                step: '2',
                title: 'Watch AI Analysis',
                description: 'See our AI analyze grammar, structure, content, and creativity in real-time',
                action: 'Start Analysis'
              },
              {
                step: '3',
                title: 'Review Results',
                description: 'Get detailed feedback, scores, and suggestions for improvement',
                action: 'View Report'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-xl">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                <button className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 font-medium py-2 px-6 rounded-full transition-all duration-300">
                  {step.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="content-card bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Teachers Love Our Demo</h2>
            <p className="text-xl opacity-90">
              Experience the benefits that thousands of educators have discovered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10x', label: 'Faster Grading' },
              { number: '98%', label: 'Accuracy Rate' },
              { number: '75%', label: 'Time Saved' },
              { number: '500+', label: 'Teachers Trust Us' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our team and see how Remarkably 
            can transform your grading workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule Live Demo
            </Link>
            <Link
              to="/pricing"
              className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full text-lg border-2 border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo; 