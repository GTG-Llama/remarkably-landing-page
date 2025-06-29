import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Achievements: React.FC = () => {
  const supportedInstitutions = [
      { name: 'Google for Startups', logo: '/google.png?cb=1', description: 'Cloud credits and startup support program' },
  { name: 'NVIDIA Inception Program', logo: '/nvidia-inception.png?cb=1', description: 'AI acceleration and technology partnership' },
  { name: 'MongoDB for Startups', logo: '/mongodb.png?cb=1', description: 'Database infrastructure and support' },
  { name: 'NUS Enterprise', logo: '/nus-enterprise.png?cb=1', description: 'University incubation and mentorship' },
  { name: 'BLOCK71', logo: '/block71.png?cb=1', description: 'Singapore\'s leading startup ecosystem' },
  { name: 'The HANGAR', logo: '/hangar.png?cb=1', description: 'Aerospace and deep tech incubator' },
  { name: 'NUS Computing', logo: '/nus-soc.png?cb=1', description: 'School of Computing partnership' },
  { name: 'NUS', logo: '/nus.png?cb=1', description: 'National University of Singapore' }
  ];

  const awards = [
    {
      title: 'Best Pitch — NUS Ground Zero',
      years: '2024 & 2025',
      description: 'Top startup pitch competition at National University of Singapore',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Best Pitch — NUS Social Ignition',
      years: '2024',
      description: 'Social impact startup competition winner',
      icon: '🌟',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'People\'s Choice — N House Pitch Night',
      years: 'Multiple',
      description: 'Audience favorite at entrepreneurship events',
      icon: '👥',
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'Audience Favorite — Social Ignition',
      years: '2024',
      description: 'Most popular startup among audience',
      icon: '❤️',
      color: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Runner-Up — N House Pitch Night',
      years: '2024 & 2025',
      description: 'Consistent top performance in pitch competitions',
      icon: '🥈',
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Top 3 — NUS Student Innovation Carnival',
      years: '2024',
      description: 'University-wide innovation showcase finalist',
      icon: '🎯',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      title: 'Regional Finalist — Hult Prize',
      years: '2024',
      description: 'Global student social entrepreneurship competition',
      icon: '🌍',
      color: 'from-emerald-400 to-green-500'
    },
    {
      title: 'NUS Venture Ignition Grant Recipient',
      years: '2024',
      description: 'University funding for promising startups',
      icon: '💰',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const keyMetrics = [
    {
      number: '50+',
      label: 'Schools',
      description: 'MOE and International Schools',
      icon: '🏫'
    },
    {
      number: '200+',
      label: 'Teachers',
      description: 'Across Singapore',
      icon: '👩‍🏫'
    },
    {
      number: '400+',
      label: 'Essays/Month',
      description: 'Graded by pilot schools',
      icon: '📝'
    },
    {
      number: '6×',
      label: 'Faster Grading',
      description: '15-20 min → 3-5 min per essay',
      icon: '⚡'
    },
    {
      number: '20+',
      label: 'Hours Saved',
      description: 'Per marking round',
      icon: '⏰'
    },
    {
      number: '95%',
      label: 'Accuracy Rate',
      description: 'Consistent grading quality',
      icon: '🎯'
    }
  ];

  const recognitionTimeline = [
    {
      year: '2024',
      title: 'Major Breakthrough Year',
      events: [
        'Pilot deployment in MOE schools',
        'Google for Startups acceptance',
        'NVIDIA Inception Program',
        'Multiple pitch competition wins'
      ]
    },
    {
      year: '2025',
      title: 'Scaling and Recognition',
      events: [
        'Expanded to 50+ schools',
        'Best Pitch NUS Ground Zero',
        'International school partnerships',
        'Southeast Asia expansion'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Achievements - Awards & Recognition | Remarkably</title>
        <meta name="description" content="Remarkably's achievements: backed by Google, NVIDIA, MongoDB, NUS Enterprise. Winner of multiple pitch competitions and serving 50+ schools across Singapore." />
        <meta name="keywords" content="AI startup awards, education technology recognition, NUS Enterprise, Google for Startups, NVIDIA Inception, Singapore MOE schools" />
      </Helmet>

      <div className="page-container">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/remarkably logo black.png?cb=1" 
                alt="Remarkably Logo" 
                className="h-16 w-auto mr-4"
              />
            </div>
            <h1 className="text-6xl font-black mb-8">
              <span className="block text-gray-900 mb-4">Backed by Global Leaders</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Recognized by Institutions
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Built for educators. Supported by world-class accelerators and technology partners. 
              <span className="block mt-2 font-semibold text-blue-700">
                Serving 50+ schools across Singapore and expanding internationally.
              </span>
            </p>
          </div>

          {/* Key Metrics */}
          <div className="stats-grid mb-20">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="stat-item hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="stat-number text-blue-600">{metric.number}</div>
                <div className="stat-label">{metric.label}</div>
                <div className="text-sm text-gray-500 mt-2">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Supported Institutions */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Backed by Global Leaders & National Institutions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Remarkably (under parent brand Lenor) is supported by top programs and institutions
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportedInstitutions.map((institution, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img 
                      src={institution.logo} 
                      alt={institution.name}
                      className="max-h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                      title={institution.name}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{institution.name}</h3>
                  <p className="text-sm text-gray-600">{institution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${award.color} rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                    {award.icon}
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {award.years}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Recognition Timeline
            </h2>
            <div className="space-y-12">
              {recognitionTimeline.map((period, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                      {period.year}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900">{period.title}</h3>
                    </div>
                  </div>
                  <div className="ml-10 pl-10 border-l-4 border-blue-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      {period.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Highlight */}
          <div className="content-card mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <div className="flex items-center justify-center mb-8">
                <img 
                  src="/lianhua-primary.png?cb=1" 
                  alt="Lianhua Primary School" 
                  className="h-16 w-auto mr-4 bg-white rounded-lg p-2"
                />
                <h2 className="text-4xl font-bold">Lianhua Primary School Success</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">5-7×</div>
                  <div className="text-lg opacity-90">Faster Grading</div>
                  <div className="text-sm opacity-75">15 min → 3-5 min per essay</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">400+</div>
                  <div className="text-lg opacity-90">Essays/Month</div>
                  <div className="text-sm opacity-75">Graded with detailed feedback</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">1000+</div>
                  <div className="text-lg opacity-90">Students</div>
                  <div className="text-sm opacity-75">Benefiting from faster feedback</div>
                </div>
              </div>
              
              <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
                "Founded in 1946 under Singapore's MOE, Lianhua Primary achieved 
                dramatic improvements in grading efficiency while maintaining quality and teacher satisfaction."
              </p>
              
              <Link
                to="/case-study"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Read Full Case Study
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Growth Metrics */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Growth & Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Reach</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <span className="font-semibold text-gray-900">MOE Schools</span>
                    <span className="text-blue-600 font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                    <span className="font-semibold text-gray-900">International Schools</span>
                    <span className="text-purple-600 font-bold">Growing</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                    <span className="font-semibold text-gray-900">Teachers Using Platform</span>
                    <span className="text-green-600 font-bold">200+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                    <span className="font-semibold text-gray-900">Essays Graded Monthly</span>
                    <span className="text-orange-600 font-bold">400+</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Expansion Plans</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Southeast Asia</h4>
                    <p className="text-gray-600">Expanding to Malaysia, Vietnam, and Indonesia</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Language Support</h4>
                    <p className="text-gray-600">Multi-language OCR and feedback capabilities</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Advanced Features</h4>
                    <p className="text-gray-600">Enhanced AI models and analytics dashboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of the education technology revolution. Join 50+ schools and 200+ teachers 
              who are already transforming their grading experience with Remarkably.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://www.youtube.com/watch?v=cf7o8uxp8LM"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Success Stories
              </a>
              <Link
                to="/beta/contact"
                className="bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-800 hover:text-blue-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Schedule Partnership Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements; 