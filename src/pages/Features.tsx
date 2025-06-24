import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning-Fast Grading",
      description: "Grade essays 5-7x faster than traditional methods",
      details: "Our AI processes essays in seconds, reducing grading time from 15-20 minutes to just 3-5 minutes per essay. Spend more time teaching, less time grading.",
      benefits: [
        "Instant essay analysis",
        "Batch processing capabilities",
        "Real-time feedback generation",
        "Automated scoring with explanations"
      ]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Accuracy",
      description: "AI-powered analysis ensures consistent, fair grading",
      details: "Advanced natural language processing and machine learning algorithms provide accurate, unbiased assessment that maintains consistency across all essays.",
      benefits: [
        "95%+ accuracy rate",
        "Consistent grading standards",
        "Bias-free assessment",
        "Customizable rubrics"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Detailed Feedback",
      description: "Comprehensive insights help students improve",
      details: "Generate detailed, constructive feedback that helps students understand their strengths and areas for improvement, promoting better learning outcomes.",
      benefits: [
        "Personalized feedback",
        "Improvement suggestions",
        "Writing style analysis",
        "Grammar and structure insights"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Track progress and identify trends",
      details: "Comprehensive analytics help educators understand class performance, identify struggling students, and track improvement over time.",
      benefits: [
        "Class performance overview",
        "Individual student tracking",
        "Progress visualization",
        "Trend analysis"
      ]
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
      <Helmet>
        <title>Features - AI-Powered Essay Grading | Remarkably</title>
        <meta name="description" content="Discover Remarkably's powerful features: lightning-fast grading, precision accuracy, detailed feedback, and comprehensive analytics. Transform your grading workflow today." />
        <meta name="keywords" content="AI essay grading features, automated grading tools, essay assessment, education technology features" />
      </Helmet>

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

      {/* Interactive Features Section */}
<section className="py-8 md:py-12 px-4 md:px-8 lg:px-16 relative bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our main features that make essay grading faster, more accurate, and more insightful.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feature Navigation */}
            <div className="space-y-4">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`card p-6 cursor-pointer transition-all ${
                    activeFeature === index 
                      ? 'border-[#667EEA] bg-[#EBF4FF]' 
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`icon-container ${
                      activeFeature === index 
                        ? 'icon-container-primary' 
                        : ''
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Details */}
            <div className="card card-padding">
              <div className="icon-container icon-container-primary mb-6">
                {mainFeatures[activeFeature].icon}
              </div>
              
              <h3 className="mb-4">{mainFeatures[activeFeature].title}</h3>
              <p className="text-gray-600 mb-6 text-lg">
                {mainFeatures[activeFeature].details}
              </p>

              <div className="space-y-3">
                {mainFeatures[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4FD1C7] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
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