import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [stats, setStats] = useState({
    essays: 0,
    teachers: 0,
    accuracy: 0,
    timesSaved: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counter numbers
    const animateStats = () => {
      const duration = 2000;
      const targetStats = { essays: 10000, teachers: 500, accuracy: 98, timesSaved: 75 };
      const startTime = Date.now();

      const updateStats = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setStats({
          essays: Math.floor(targetStats.essays * progress),
          teachers: Math.floor(targetStats.teachers * progress),
          accuracy: Math.floor(targetStats.accuracy * progress),
          timesSaved: Math.floor(targetStats.timesSaved * progress)
        });

        if (progress < 1) {
          requestAnimationFrame(updateStats);
        }
      };

      updateStats();
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Grading',
      description: 'Advanced algorithms provide consistent, accurate essay evaluation with detailed feedback',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Grade entire classes in minutes, not hours. Focus on teaching, not marking',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📊',
      title: 'Detailed Analytics',
      description: 'Track student progress with comprehensive reports and insights',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security ensures student data remains protected',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      quote: "Remarkably has transformed my teaching. I can now focus on helping students improve rather than spending hours on grading.",
      author: "Sarah Johnson",
      role: "High School English Teacher",
      school: "Lincoln High School"
    },
    {
      quote: "The consistency and detailed feedback has helped my students understand their writing better than ever before.",
      author: "Michael Chen",
      role: "College Professor",
      school: "State University"
    },
    {
      quote: "As a department head, I've seen teacher satisfaction increase dramatically since implementing Remarkably.",
      author: "Dr. Emily Rodriguez",
      role: "English Department Head",
      school: "Metro School District"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Remarkably - AI-Powered Essay Grading for Modern Education</title>
        <meta name="description" content="Transform your teaching with AI-powered essay grading. Save time, provide better feedback, and focus on what matters most - your students." />
        <meta name="keywords" content="AI essay grading, automated grading, teacher tools, education technology, essay feedback" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="block text-gray-900 mb-2">Grade Essays with</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                AI Precision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your teaching experience with AI-powered essay grading. 
              <span className="block mt-2 font-medium text-gray-800">
                Save 75% of your grading time while providing better, more consistent feedback.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/demo"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center">
                  Try Free Demo
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/pricing"
                className="group bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full text-lg border-2 border-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stats.essays.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium mt-2">Essays Graded</div>
              </div>
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stats.teachers}+
                </div>
                <div className="text-gray-600 font-medium mt-2">Teachers Trust Us</div>
              </div>
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  {stats.accuracy}%
                </div>
                <div className="text-gray-600 font-medium mt-2">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {stats.timesSaved}%
                </div>
                <div className="text-gray-600 font-medium mt-2">Time Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Teachers Choose Remarkably
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built specifically for educators, by educators. Experience the future of essay grading.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From upload to feedback in minutes. It's that simple.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: '01',
                  title: 'Upload Essays',
                  description: 'Drag and drop student essays or import from your favorite platforms',
                  icon: '📤'
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Our advanced AI analyzes grammar, structure, content, and creativity',
                  icon: '🧠'
                },
                {
                  step: '03',
                  title: 'Get Results',
                  description: 'Receive detailed grades and feedback to share with your students',
                  icon: '📊'
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative inline-block mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto shadow-xl">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/demo"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                See It In Action
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1M9 16h6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Loved by Educators Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of teachers who have transformed their grading experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section relative">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of educators who have already made the switch to smarter grading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 