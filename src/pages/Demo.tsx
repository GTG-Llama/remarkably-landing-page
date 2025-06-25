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
  Monitor
} from 'lucide-react';

const Demo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('upload');

  const demoSteps = [
    {
      id: 'upload',
      title: 'Upload Essay',
      description: 'Simply upload your essay files or paste text directly',
      icon: <Upload className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#667EEA] transition-colors">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drop your essay files here or click to browse</p>
            <p className="text-sm text-gray-500">Supports PDF, DOC, DOCX, and handwritten essays</p>
            <button className="btn btn-primary btn-md mt-4">
              Choose Files
            </button>
          </div>
          <div className="text-center">
            <span className="text-gray-500">or</span>
          </div>
          <textarea
            className="form-textarea"
            placeholder="Paste your essay text here..."
            rows={8}
          />
        </div>
      )
    },
    {
      id: 'analyze',
      title: 'AI Analysis',
      description: 'Our AI analyzes the essay for grammar, structure, and content',
      icon: <Zap className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-[#EBF4FF] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#667EEA] rounded-full flex items-center justify-center mr-3">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">AI Analysis in Progress...</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#4FD1C7] mr-2" />
                <span className="text-sm">Grammar and spelling check complete</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#4FD1C7] mr-2" />
                <span className="text-sm">Sentence structure analysis complete</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#4FD1C7] mr-2" />
                <span className="text-sm">Content coherence evaluation complete</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-[#667EEA] border-t-transparent rounded-full animate-spin mr-2"></div>
                <span className="text-sm">Generating detailed feedback...</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'feedback',
      title: 'Detailed Feedback',
      description: 'Receive comprehensive feedback and suggestions for improvement',
      icon: <Target className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="card p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">Overall Score</h4>
              <span className="text-2xl font-bold text-[#667EEA]">85/100</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Grammar & Spelling</span>
                <span className="text-[#4FD1C7]">92/100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Structure & Organization</span>
                <span className="text-[#4FD1C7]">88/100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Content & Ideas</span>
                <span className="text-[#667EEA]">80/100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Style & Voice</span>
                <span className="text-[#667EEA]">82/100</span>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <h4 className="font-semibold mb-3">Key Feedback Points</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-[#4FD1C7] mr-2 mt-0.5 flex-shrink-0" />
                <span>Strong thesis statement and clear argument structure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-[#4FD1C7] mr-2 mt-0.5 flex-shrink-0" />
                <span>Good use of supporting evidence and examples</span>
              </li>
              <li className="flex items-start">
                <Target className="h-4 w-4 text-[#667EEA] mr-2 mt-0.5 flex-shrink-0" />
                <span>Consider varying sentence length for better flow</span>
              </li>
              <li className="flex items-start">
                <Target className="h-4 w-4 text-[#667EEA] mr-2 mt-0.5 flex-shrink-0" />
                <span>Conclusion could be strengthened with a call to action</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const videoFeatures = [
    {
      title: "Live Demo Video",
      description: "Watch our AI grade a real essay in real-time",
      thumbnail: "/remarkably logo black.png",
      duration: "3:45",
      url: "https://www.youtube.com/watch?v=cf7o8uxp8LM"
    },
    {
      title: "Feature Walkthrough",
      description: "Complete tour of all Remarkably features",
      thumbnail: "/remarkably logo black.png",
      duration: "8:20",
      url: "https://www.youtube.com/watch?v=cf7o8uxp8LM"
    },
    {
      title: "Teacher Testimonials",
      description: "Hear from educators using Remarkably",
      thumbnail: "/remarkably logo black.png",
      duration: "5:15",
      url: "https://www.youtube.com/watch?v=cf7o8uxp8LM"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5-7x Faster Grading",
      description: "Complete essay grading in minutes, not hours"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Consistent Standards",
      description: "Maintain uniform grading criteria across all essays"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Detailed Insights",
      description: "Comprehensive feedback helps students improve"
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('demo')} pageKey="demo" />

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <Monitor className="h-4 w-4 mr-2" />
              Interactive Demo
            </div>
            
            <h1 className="mb-6">
              Experience AI-Powered
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> Essay Grading</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Try our interactive demo to see how Remarkably can transform your grading workflow. 
              No signup required - start exploring immediately.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn btn-primary btn-lg">
                Start Interactive Demo
                <Play className="ml-2 h-5 w-5" />
              </button>
              <a
                href="https://www.youtube.com/watch?v=cf7o8uxp8LM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Watch Video Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Interactive Demo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these steps to see how easy it is to grade essays with AI
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Demo Steps Navigation */}
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveDemo(step.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeDemo === step.id
                        ? 'bg-[#EBF4FF] border-2 border-[#667EEA]'
                        : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`icon-container ${
                        activeDemo === step.id ? 'icon-container-primary' : ''
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-gray-500">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Demo Content */}
              <div className="lg:col-span-2">
                <div className="card card-padding">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {demoSteps.find(step => step.id === activeDemo)?.title}
                    </h3>
                    <p className="text-gray-600">
                      {demoSteps.find(step => step.id === activeDemo)?.description}
                    </p>
                  </div>
                  
                  {demoSteps.find(step => step.id === activeDemo)?.content}
                  
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => {
                        const currentIndex = demoSteps.findIndex(step => step.id === activeDemo);
                        if (currentIndex > 0) {
                          setActiveDemo(demoSteps[currentIndex - 1].id);
                        }
                      }}
                      className="btn btn-secondary btn-md"
                      disabled={activeDemo === demoSteps[0].id}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        const currentIndex = demoSteps.findIndex(step => step.id === activeDemo);
                        if (currentIndex < demoSteps.length - 1) {
                          setActiveDemo(demoSteps[currentIndex + 1].id);
                        }
                      }}
                      className="btn btn-primary btn-md"
                      disabled={activeDemo === demoSteps[demoSteps.length - 1].id}
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demos */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Video Demonstrations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch real demonstrations of Remarkably in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoFeatures.map((video, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-16 w-auto opacity-60"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent btn-md"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Play
                    </a>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Try Our Demo?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See firsthand how Remarkably can transform your grading experience
            </p>
          </div>

          <div className="feature-grid max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="icon-container icon-container-primary mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Essay Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Try with a Sample Essay</h2>
              <p className="text-xl text-gray-600">
                Use our sample essay to see the AI grading process in action
              </p>
            </div>

            <div className="card card-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#667EEA]" />
                    Sample Essay: "The Impact of Technology on Education"
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 mb-4 max-h-64 overflow-y-auto">
                    <p className="mb-3">
                      Technology has revolutionized many aspects of our daily lives, and education is no exception. 
                      In recent years, the integration of digital tools and platforms in classrooms has transformed 
                      how students learn and teachers instruct. This essay examines both the positive impacts and 
                      challenges that technology brings to modern education.
                    </p>
                    <p className="mb-3">
                      One of the most significant benefits of technology in education is increased accessibility. 
                      Online learning platforms have made education available to students regardless of their 
                      geographical location or physical limitations. Students can now access high-quality courses 
                      from prestigious institutions around the world, breaking down traditional barriers to education.
                    </p>
                    <p>
                      However, the rapid adoption of technology also presents challenges. The digital divide means 
                      that not all students have equal access to technological resources, potentially widening 
                      educational inequalities. Additionally, the over-reliance on technology may diminish critical 
                      thinking skills and face-to-face social interactions that are crucial for holistic development.
                    </p>
                  </div>
                  <button className="btn btn-primary btn-md w-full">
                    Grade This Essay
                    <Sparkles className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-[#4FD1C7]" />
                    AI Grading Results
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-[#EBF4FF] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Overall Score</span>
                        <span className="text-2xl font-bold text-[#667EEA]">78/100</span>
                      </div>
                      <div className="text-sm text-gray-600">Grade: B</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Structure & Organization</span>
                        <span className="text-sm font-medium text-[#4FD1C7]">85/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Content & Ideas</span>
                        <span className="text-sm font-medium text-[#667EEA]">75/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Grammar & Style</span>
                        <span className="text-sm font-medium text-[#4FD1C7]">82/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Evidence & Support</span>
                        <span className="text-sm font-medium text-[#667EEA]">70/100</span>
                      </div>
                    </div>

                    <div className="bg-[#E6FFFA] rounded-lg p-4">
                      <h4 className="font-medium mb-2">Key Feedback</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Strong thesis and clear structure</li>
                        <li>• Good use of examples</li>
                        <li>• Consider adding more evidence</li>
                        <li>• Conclusion could be stronger</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
              Start your free trial today and experience the future of essay grading. 
              No credit card required, full access to all features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-accent btn-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-lg">
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