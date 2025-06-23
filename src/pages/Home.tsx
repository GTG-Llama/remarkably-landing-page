import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Award, Zap, BookOpen, Target } from 'lucide-react';

const Home: React.FC = () => {
  const [counters, setCounters] = useState({
    grading: 0,
    students: 0,
    words: 0
  });

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
      const startTime = performance.now();
      const startValue = 0;
      
      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setCounters(prev => ({ ...prev, [key]: currentValue }));
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    };

    const timer = setTimeout(() => {
      animateCounter(7, 'grading', 2000);
      animateCounter(50000, 'students', 2500);
      animateCounter(1000000, 'words', 3000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Grade essays 5-7x faster than traditional methods"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precise Accuracy",
      description: "AI-powered analysis ensures consistent, fair grading"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Detailed Feedback",
      description: "Comprehensive insights help students improve"
    }
  ];

  const benefits = [
    "Reduce grading time by 80%",
    "Maintain consistent standards",
    "Provide detailed feedback",
    "Track student progress",
    "Integrate with existing systems",
    "Support multiple languages"
  ];

  return (
    <>
      <Helmet>
        <title>Remarkably - AI-Powered Essay Grading Platform</title>
        <meta name="description" content="Transform your essay grading with AI. Grade 5-7x faster while maintaining quality. Trusted by educators worldwide." />
        <meta name="keywords" content="AI essay grading, automated grading, education technology, teacher tools, essay assessment" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <Award className="h-4 w-4 mr-2" />
              Trusted by 50+ Schools Worldwide
            </div>
            
            <h1 className="mb-6 fade-in">
              Grade Essays
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> 5-7x Faster</span>
              <br />with AI Precision
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed slide-up">
              Transform your essay grading workflow with our AI-powered platform. 
              Maintain quality while saving hours of time, and provide students with 
              detailed, consistent feedback.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/demo" className="btn btn-primary btn-lg">
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Schedule Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <img src="/nus.png" alt="NUS" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="/google.png" alt="Google" className="h-6 grayscale hover:grayscale-0 transition-all" />
              <img src="/nvidia-inception.png" alt="NVIDIA" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="/mongodb.png" alt="MongoDB" className="h-6 grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="stats-grid">
            <div className="text-center">
              <div className="icon-container icon-container-primary mx-auto">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-[#667EEA] mb-2">
                {counters.grading}x
              </div>
              <p className="text-gray-600 font-medium">Faster Grading</p>
              <p className="text-sm text-gray-500 mt-1">From 15-20 minutes to 3-5 minutes per essay</p>
            </div>

            <div className="text-center">
              <div className="icon-container icon-container-accent mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-[#4FD1C7] mb-2">
                {counters.students.toLocaleString()}+
              </div>
              <p className="text-gray-600 font-medium">Students & Teachers</p>
              <p className="text-sm text-gray-500 mt-1">Supported across Singapore and internationally</p>
            </div>

            <div className="text-center">
              <div className="icon-container icon-container-primary mx-auto">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-[#667EEA] mb-2">
                {counters.words.toLocaleString()}+
              </div>
              <p className="text-gray-600 font-medium">Words Graded</p>
              <p className="text-sm text-gray-500 mt-1">Millions of words processed with precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Remarkably?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform combines speed, accuracy, and detailed feedback 
              to revolutionize essay grading for educators.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="icon-container icon-container-primary mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Everything You Need for Efficient Grading</h2>
              <p className="text-lg text-gray-600 mb-8">
                Remarkably provides comprehensive tools to streamline your grading process 
                while maintaining the highest standards of assessment quality.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4FD1C7] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/features" className="btn btn-primary btn-md">
                  Explore All Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="card card-padding bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white">
                <h3 className="text-white mb-4">Ready to Transform Your Grading?</h3>
                <p className="text-blue-100 mb-6">
                  Join thousands of educators who have already revolutionized their 
                  grading process with Remarkably.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/demo" className="btn btn-accent btn-md">
                    Start Free Trial
                  </Link>
                  <Link to="/contact" className="btn btn-secondary btn-md">
                    Contact Sales
                  </Link>
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
              Ready to Grade Essays 5-7x Faster?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join educators worldwide who trust Remarkably for efficient, 
              accurate essay grading. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn btn-accent btn-lg">
                Try Free Demo
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

export default Home; 