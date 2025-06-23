import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  BookOpen,
  BarChart3,
  Award,
  Sparkles
} from 'lucide-react';

const Benefits: React.FC = () => {
  const primaryBenefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 80% of Grading Time",
      description: "Reduce grading time from 15-20 minutes to just 3-5 minutes per essay",
      details: "Our AI processes essays instantly, allowing you to focus on teaching rather than repetitive grading tasks. Spend more time with students and less time at your desk.",
      stats: "15-20 min → 3-5 min per essay"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Consistent Grading Standards",
      description: "Eliminate bias and maintain uniform assessment criteria across all essays",
      details: "AI ensures every essay is graded with the same standards, removing human inconsistencies caused by fatigue, mood, or unconscious bias.",
      stats: "100% consistent standards"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Enhanced Student Learning",
      description: "Provide detailed, constructive feedback that helps students improve",
      details: "Students receive comprehensive feedback on grammar, structure, content, and style, enabling them to understand their strengths and areas for improvement.",
      stats: "Detailed feedback on every essay"
    }
  ];

  const additionalBenefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Scale Effortlessly",
      description: "Handle any class size without increasing workload"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reduce Teacher Burnout",
      description: "Eliminate the stress of overwhelming grading loads"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Track Progress",
      description: "Monitor student improvement over time with analytics"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Improve Outcomes",
      description: "Better feedback leads to better student performance"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Professional Growth",
      description: "Spend saved time on curriculum development"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Results",
      description: "Get feedback immediately, not days later"
    }
  ];

  const testimonials = [
    {
      quote: "Remarkably has transformed how I approach essay grading. I can now provide detailed feedback to all my students without spending entire weekends grading.",
      author: "Sarah Chen",
      role: "English Teacher",
      school: "Singapore International School"
    },
    {
      quote: "The consistency in grading has been remarkable. My students know exactly what to expect, and I can focus on helping them improve rather than just marking papers.",
      author: "Michael Rodriguez",
      role: "Head of English Department",
      school: "Victoria Junior College"
    },
    {
      quote: "I was skeptical about AI grading, but Remarkably's feedback quality is exceptional. It catches things I might miss and provides insights I wouldn't have thought of.",
      author: "Dr. Emily Watson",
      role: "Literature Professor",
      school: "National University of Singapore"
    }
  ];

  const comparisonData = [
    {
      aspect: "Time per Essay",
      traditional: "15-20 minutes",
      remarkably: "3-5 minutes",
      improvement: "80% faster"
    },
    {
      aspect: "Consistency",
      traditional: "Variable",
      remarkably: "100% consistent",
      improvement: "Perfect standards"
    },
    {
      aspect: "Feedback Quality",
      traditional: "Limited by time",
      remarkably: "Comprehensive",
      improvement: "Detailed insights"
    },
    {
      aspect: "Scalability",
      traditional: "Limited capacity",
      remarkably: "Unlimited",
      improvement: "No limits"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Benefits - Transform Your Teaching with AI Grading | Remarkably</title>
        <meta name="description" content="Discover the benefits of AI-powered essay grading: save 80% of grading time, maintain consistent standards, and provide better feedback to students." />
        <meta name="keywords" content="AI grading benefits, teacher benefits, essay grading advantages, education technology benefits" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <Award className="h-4 w-4 mr-2" />
              Proven Benefits
            </div>
            
            <h1 className="mb-6">
              Transform Your Teaching with
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> AI-Powered Grading</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how Remarkably's AI grading platform can revolutionize your teaching 
              experience, save time, and improve student outcomes.
            </p>

            <Link to="/demo" className="btn btn-primary btn-lg">
              Experience the Benefits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Benefits */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Core Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The three main ways Remarkably transforms your grading experience
            </p>
          </div>

          <div className="space-y-16">
            {primaryBenefits.map((benefit, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="icon-container icon-container-primary mb-6 inline-flex">
                    {benefit.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{benefit.description}</p>
                  <p className="text-gray-700 mb-6">{benefit.details}</p>
                  <div className="bg-[#EBF4FF] rounded-lg p-4 inline-block">
                    <span className="text-[#667EEA] font-semibold">{benefit.stats}</span>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="card card-padding bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {benefit.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Real Impact</h4>
                      <div className="text-3xl font-bold mb-2">{benefit.stats.split(' ')[0]}</div>
                      <p className="text-blue-100">{benefit.stats.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits Grid */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Additional Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More ways Remarkably enhances your teaching experience
            </p>
          </div>

          <div className="feature-grid">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="icon-container icon-container-accent mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Traditional vs. AI Grading</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the clear advantages of AI-powered essay grading
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Traditional Grading</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Remarkably AI</th>
                      <th className="px-6 py-4 text-left font-semibold text-[#667EEA]">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.aspect}</td>
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

      {/* Testimonials */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Educators Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from teachers using Remarkably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real data from educators using Remarkably
            </p>
          </div>

          <div className="stats-grid max-w-4xl mx-auto">
            <div className="text-center">
              <div className="icon-container icon-container-primary mx-auto">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-[#667EEA] mb-2">80%</div>
              <p className="text-gray-600 font-medium">Time Saved</p>
              <p className="text-sm text-gray-500 mt-1">Average reduction in grading time</p>
            </div>

            <div className="text-center">
              <div className="icon-container icon-container-accent mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-[#4FD1C7] mb-2">95%</div>
              <p className="text-gray-600 font-medium">Teacher Satisfaction</p>
              <p className="text-sm text-gray-500 mt-1">Would recommend to colleagues</p>
            </div>

            <div className="text-center">
              <div className="icon-container icon-container-primary mx-auto">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-[#667EEA] mb-2">25%</div>
              <p className="text-gray-600 font-medium">Student Improvement</p>
              <p className="text-sm text-gray-500 mt-1">Average grade improvement with detailed feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Ready to Experience These Benefits?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of educators who have transformed their grading experience. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn btn-accent btn-lg">
                Start Free Trial
                <Sparkles className="ml-2 h-5 w-5" />
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

export default Benefits; 