import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: '📝',
      title: 'Grade Handwritten & Typed Submissions',
      description: 'Remarkably accepts scanned handwritten essays and digital files. No need for manual transcription.',
      highlight: 'Advanced OCR Technology',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🤖',
      title: 'Advanced OCR + AI Feedback',
      description: 'Automatically detects grammar, sentence structure, clarity, and coherence using intelligent models.',
      highlight: 'AI-Powered Analysis',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎯',
      title: 'Mimics Your Grading Style',
      description: 'Remarkably learns your tone and feedback preferences, so comments feel like they came from you.',
      highlight: 'Personalized Feedback',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '⚡',
      title: 'Fast, Real-Time Feedback',
      description: 'Instantly grades hundreds of essays in minutes. Teachers save up to 6× the time.',
      highlight: '5-7× Faster Grading',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '📄',
      title: 'PDF Splitter',
      description: 'Automatically separates multi-essay PDFs so each student\'s work is graded individually.',
      highlight: 'Bulk Processing',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '📊',
      title: '3 Unique Dashboards',
      description: 'Class, Assignment, and Student dashboards give teachers a complete view of progress, performance, and feedback.',
      highlight: 'Comprehensive Analytics',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const supportedFormats = [
    { format: 'Handwritten Essays', description: 'Scanned PDFs, photos, and documents' },
    { format: 'Word Documents', description: '.docx, .doc files from any source' },
    { format: 'PDF Files', description: 'Multi-page documents with automatic splitting' },
    { format: 'Google Drive', description: 'Direct integration with cloud storage' },
    { format: 'LMS Integration', description: 'Works with your existing learning management system' },
    { format: 'Bulk Upload', description: 'Process entire classes at once' }
  ];

  const essayTypes = [
    { type: 'Narrative Essays', description: 'Personal stories and creative writing pieces' },
    { type: 'Discursive Essays', description: 'Balanced arguments and analytical discussions' },
    { type: 'Argumentative Essays', description: 'Persuasive writing with evidence-based claims' },
    { type: 'Expository Essays', description: 'Informational and explanatory texts' },
    { type: 'Descriptive Essays', description: 'Detailed descriptions and observations' },
    { type: 'Comparative Essays', description: 'Analysis comparing multiple subjects' }
  ];

  const keyStats = [
    { number: '6×', label: 'Faster Grading', description: 'From 15-20 min to 3-5 min per essay' },
    { number: '95%', label: 'Accuracy Rate', description: 'Consistent, reliable grading results' },
    { number: '50+', label: 'Schools', description: 'MOE and international schools trust us' },
    { number: '20+', label: 'Hours Saved', description: 'Per marking round vs manual grading' }
  ];

  return (
    <>
      <Helmet>
        <title>Features - AI Essay Grading for Handwritten & Typed Work | Remarkably</title>
        <meta name="description" content="Discover Remarkably's AI-powered essay grading features: OCR for handwritten essays, personalized feedback, 6× faster grading, PDF splitting, and comprehensive dashboards." />
        <meta name="keywords" content="AI essay grading features, handwritten essay OCR, automated feedback, PDF splitter, teacher dashboard, grading analytics" />
      </Helmet>

      <div className="page-container">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/remarkably logo black.png" 
                alt="Remarkably Logo" 
                className="h-16 w-auto mr-4"
              />
            </div>
            <h1 className="text-6xl font-black mb-8">
              <span className="block text-gray-900 mb-4">AI Powered Essay</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Grading Features
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              For <strong>Handwritten and Typed Work</strong> - Built for real classrooms with advanced OCR and AI feedback
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://www.youtube.com/watch?v=cf7o8uxp8LM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Live Demo
              </a>
              <Link to="/demo" className="btn-secondary">
                Try Interactive Demo
              </Link>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="stats-grid mb-20">
            {keyStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number text-blue-600">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-2">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Core Features */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Core Features
            </h2>
            <div className="grid-auto-fit">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className={`feature-icon bg-gradient-to-r ${feature.color}`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {feature.highlight}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Formats */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Upload Any Essay Format
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Teachers can upload handwritten essays, typed Word documents, or PDFs from Google Drive or their LMS. 
              Bulk upload supported for class sets.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportedFormats.map((format, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{format.format}</h3>
                  <p className="text-gray-600">{format.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Essay Types */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Supports All Essay Types
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Remarkably handles all common essay types and adjusts feedback based on the structure expected. 
              Works for Primary, Secondary, JC, and International School formats.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {essayTypes.map((essay, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{essay.type}</h3>
                  <p className="text-gray-600">{essay.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Process */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How Remarkably Works
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Upload Any Format',
                    description: 'Handwritten essays, Word docs, PDFs from Google Drive or LMS. Bulk upload supported.',
                    icon: '📤'
                  },
                  {
                    step: '02',
                    title: 'OCR + AI Transcription',
                    description: 'Reads messy handwriting, recognizes names, maintains formatting across multiple styles.',
                    icon: '🔍'
                  },
                  {
                    step: '03',
                    title: 'Analyze & Evaluate',
                    description: 'Grammar, structure, clarity - thesis clarity, paragraph cohesion, logical flow.',
                    icon: '🧠'
                  },
                  {
                    step: '04',
                    title: 'Personalized Feedback',
                    description: 'Learns your tone and depth, customizes to rubrics and marking schemes.',
                    icon: '🎯'
                  },
                  {
                    step: '05',
                    title: 'Real-Time Annotation',
                    description: 'Comments appear directly on essays with suggested changes and improvements.',
                    icon: '📝'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl mb-4 mx-auto shadow-2xl hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-lg border-2 border-blue-100">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Time-Saved Calculator Preview */}
          <div className="content-card mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Interactive Time-Saved Calculator
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">How much time can you save?</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">15-20</div>
                  <div className="text-lg opacity-90">Minutes per essay</div>
                  <div className="text-sm opacity-75">Traditional grading</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-2">→</div>
                  <div className="text-lg opacity-90">Becomes</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">3-5</div>
                  <div className="text-lg opacity-90">Minutes per essay</div>
                  <div className="text-sm opacity-75">With Remarkably</div>
                </div>
              </div>
              <p className="text-xl mb-8 opacity-90">
                For a class of 30 students, save up to <strong>7.5 hours</strong> per assignment!
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Try Full Calculator
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join 50+ schools and 200+ teachers who are already saving hours every week with Remarkably's AI-powered grading features.
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
                Watch Demo Video
              </a>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-800 hover:text-blue-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Schedule Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features; 