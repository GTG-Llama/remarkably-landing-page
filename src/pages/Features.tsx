import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { getPageSEO } from '../utils/seo-config';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  BookOpen, 
  Clock, 
  Shield, 
  BarChart3, 
  Globe, 
  Users, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  FileText
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Handwriting Recognition",
      description: "Upload any handwritten essay and watch our AI read even the messiest handwriting with 95%+ accuracy.",
      link: "features/handwriting-recognition",
      userTypes: ["teachers", "schools"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Teacher Style Learning",
      description: "Our AI learns your unique feedback style and replicates it perfectly across all essays.",
      link: "features/teacher-style-learning", 
      userTypes: ["teachers", "schools"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Grading",
      description: "Grade essays 5-7× faster with immediate results and detailed explanations in under 60 seconds.",
      link: "features/instant-grading",
      userTypes: ["teachers", "schools"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Track class performance, student progress, and identify learning gaps with comprehensive insights.",
      link: "features/analytics-dashboard",
      userTypes: ["teachers", "schools"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Feedback Generation",
      description: "Generate personalized, constructive feedback that helps students improve their writing skills.",
      link: "features/feedback-generation",
      userTypes: ["teachers", "schools"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Tracking",
      description: "Monitor individual student progress and writing improvement over time with detailed analytics.",
      link: "features/student-tracking",
      userTypes: ["teachers", "schools"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Enterprise-grade security protects student data"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Language Support",
      description: "Support for English, Mandarin, and other languages"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Tools",
      description: "Share feedback and collaborate with colleagues"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Grade anytime, anywhere with cloud access"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Smart Learning",
      description: "AI adapts to your grading preferences over time"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Support for various essay types and formats"
    }
  ];

  const comparisonData = [
    {
      feature: "Grading Speed",
      traditional: "15-20 min per essay",
      remarkably: "3-5 min per essay",
      improvement: "5-7x faster"
    },
    {
      feature: "Consistency",
      traditional: "Variable based on mood/fatigue",
      remarkably: "100% consistent standards",
      improvement: "Perfect consistency"
    },
    {
      feature: "Feedback Quality",
      traditional: "Limited by time constraints",
      remarkably: "Detailed, personalized feedback",
      improvement: "Comprehensive insights"
    },
    {
      feature: "Scalability",
      traditional: "Limited by human capacity",
      remarkably: "Unlimited processing power",
      improvement: "Infinite scalability"
    }
  ];

  return (
    <>
      <SEOHead config={getPageSEO('features')} pageKey="features" />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <Sparkles className="h-4 w-4 mr-2" />
              Powerful AI Features
            </div>
            
            <h1 className="mb-6">
              Everything You Need for
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> Efficient Grading</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how Remarkably's advanced AI features transform essay grading 
              from a time-consuming task into an efficient, insightful process.
            </p>

            <Link to="/demo" className="btn btn-primary btn-lg">
              Try All Features Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI-Powered Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core Features That Transform
              <span className="text-indigo-600 block">Essay Grading</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how each feature works to save time, improve accuracy, and enhance student learning outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16 relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Additional Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More powerful tools to enhance your grading experience and improve educational outcomes.
            </p>
          </div>

          <div className="feature-grid">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="icon-container icon-container-accent mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16 relative bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Traditional vs. AI-Powered Grading</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how Remarkably compares to traditional grading methods across key metrics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Traditional Grading</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Remarkably AI</th>
                      <th className="px-6 py-4 text-left font-semibold text-[#667EEA]">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                        <td className="px-6 py-4 text-gray-900">{row.remarkably}</td>
                        <td className="px-6 py-4">
                          <span className="badge badge-primary">{row.improvement}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-16 relative gradient-bg">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Experience All Features Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Try Remarkably's complete feature set with our free demo. 
              See how AI can transform your grading workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn btn-accent btn-lg">
                Start Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features; 