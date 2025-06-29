import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Play, 
  FileText, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Target,
  BookOpen,
  Clock,
  Sparkles,
  Monitor,
  Brain,
  Users,
  Award,
  Pause,
  Volume2,
  Maximize
} from 'lucide-react';

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('essay-analysis');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Demo features that users can select
  const demoFeatures = [
    {
      id: 'essay-analysis',
      title: 'AI Essay Analysis',
      description: 'Watch how our AI analyzes essay structure, grammar, and content quality in real-time',
      icon: <Brain className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Real-time grammar detection',
        'Content structure analysis', 
        'Writing style evaluation',
        'Plagiarism checking'
      ]
    },
    {
      id: 'grading-process',
      title: 'Automated Grading',
      description: 'See our AI grade a complete essay using your custom rubric in under 60 seconds',
      icon: <Target className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Custom rubric application',
        'Detailed scoring breakdown',
        'Consistent grading standards',
        'Instant feedback generation'
      ]
    },
    {
      id: 'feedback-generation',
      title: 'Personalized Feedback',
      description: 'Experience how we generate detailed, constructive feedback that matches your teaching style',
      icon: <FileText className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Teacher-style mimicking',
        'Constructive suggestions',
        'Specific improvement areas',
        'Encouraging tone adaptation'
      ]
    },
    {
      id: 'batch-processing',
      title: 'Batch Processing',
      description: 'See how to grade an entire class of essays simultaneously with consistent quality',
      icon: <Users className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Multi-essay processing',
        'Class-wide analytics',
        'Comparative insights',
        'Export capabilities'
      ]
    },
    {
      id: 'handwriting-recognition',
      title: 'Handwriting Recognition',
      description: 'Watch our AI convert and analyze handwritten essays with impressive accuracy',
      icon: <Upload className="h-5 w-5" />,
      videoSrc: '/remarkably.mp4',
      highlights: [
        'Advanced OCR technology',
        'Multiple handwriting styles',
        'Image preprocessing',
        'Text extraction accuracy'
      ]
    }
  ];

  const currentFeature = demoFeatures.find(feature => feature.id === activeDemo) || demoFeatures[0];

  const stats = [
    { icon: Clock, value: "7×", label: "Faster Grading" },
    { icon: Award, value: "95Thi%", label: "Accuracy Rate" },
    { icon: Users, value: "2,000+", label: "Active Teachers" }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('demo')} pageKey="demo" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-8">
              <Monitor className="h-4 w-4 mr-2" />
              Interactive Demo Experience
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See Remarkably
              <span className="text-indigo-600 block">in Action</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience firsthand how our AI transforms essay grading. Select any feature below to watch 
              real demonstrations of Remarkably's capabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-center mb-2 text-indigo-600">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section - Inspired by Krisp's design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Demo Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Left Side - Feature Selection Tabs */}
              <div className="lg:col-span-2 space-y-3">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Explore Key Features
                  </h2>
                  <p className="text-gray-600">
                    Click on any feature to see it in action
                  </p>
                </div>

                {demoFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      setActiveDemo(feature.id);
                      setIsVideoPlaying(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border-2 ${
                      activeDemo === feature.id
                        ? 'bg-indigo-50 border-indigo-200 shadow-md'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg transition-colors ${
                        activeDemo === feature.id
                          ? 'bg-indigo-100 text-indigo-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold mb-1 transition-colors ${
                          activeDemo === feature.id ? 'text-indigo-900' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Feature highlights */}
                        <div className="mt-3 space-y-1">
                          {feature.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-500">
                              <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Side - Video Player */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Video Header */}
                    <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-white font-medium">
                            {currentFeature.title} Demo
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Volume2 className="w-4 h-4" />
                          <Maximize className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Video Content */}
                    <div className="relative bg-gray-900">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        {isVideoPlaying ? (
                          <video
                            className="w-full h-full object-cover"
                            src={currentFeature.videoSrc}
                            autoPlay
                            muted
                            onEnded={() => setIsVideoPlaying(false)}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <>
                            <div className="text-center">
                              <button
                                onClick={() => setIsVideoPlaying(true)}
                                className="w-16 h-16 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white transition-colors mb-4 mx-auto"
                              >
                                <Play className="w-6 h-6 ml-1" />
                              </button>
                              <h3 className="text-white text-lg font-semibold mb-2">
                                {currentFeature.title}
                              </h3>
                              <p className="text-gray-400 text-sm max-w-md mx-auto px-4">
                                {currentFeature.description}
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Video Controls Overlay */}
                      {isVideoPlaying && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between text-white">
                            <button
                              onClick={() => setIsVideoPlaying(false)}
                              className="flex items-center space-x-2 hover:text-indigo-300 transition-colors"
                            >
                              <Pause className="w-4 h-4" />
                              <span className="text-sm">Pause</span>
                            </button>
                            <div className="text-sm text-gray-300">
                              Live Demo - {currentFeature.title}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Feature Details Panel */}
                    <div className="bg-gray-800 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-semibold">Key Capabilities</h4>
                        <span className="text-indigo-400 text-sm">
                          {activeDemo.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {currentFeature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Call to Action Below Video */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 mb-4">
                      Ready to try it yourself?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="https://app.remarkably.ink"
                        className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                      <Link
                        to="/beta/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
                      >
                        Book Personal Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Teachers Choose Remarkably
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join thousands of educators who've transformed their workflow
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Save 6-7 Hours Weekly</h3>
                <p className="text-gray-600 text-sm">
                  Reduce grading time from hours to minutes while maintaining quality feedback
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Consistent Standards</h3>
                <p className="text-gray-600 text-sm">
                  Apply the same grading criteria across all essays with AI precision
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Better Student Outcomes</h3>
                <p className="text-gray-600 text-sm">
                  Provide detailed, constructive feedback that helps students improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Grading?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Start your free trial today and join thousands of educators saving time with AI-powered grading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.remarkably.ink"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/beta/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;