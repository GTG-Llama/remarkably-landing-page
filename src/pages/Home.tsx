import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [stats, setStats] = useState({
    gradingSpeed: 0,
    studentsTeachers: 0,
    wordsGraded: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counter numbers with realistic statistics from seo-content.md
    const animateStats = () => {
      const duration = 2500;
      const targetStats = { 
        gradingSpeed: 6,
        studentsTeachers: 5000,
        wordsGraded: 1000000
      };
      const startTime = Date.now();

      const updateStats = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setStats({
          gradingSpeed: Math.floor(targetStats.gradingSpeed * progress),
          studentsTeachers: Math.floor(targetStats.studentsTeachers * progress),
          wordsGraded: Math.floor(targetStats.wordsGraded * progress)
        });

        if (progress < 1) {
          requestAnimationFrame(updateStats);
        }
      };

      updateStats();
    };

    const timer = setTimeout(animateStats, 800);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString();
  };

  const keyFeatures = [
    {
      icon: '🤖',
      title: 'AI-Powered OCR + Feedback',
      description: 'Advanced OCR reads messy handwriting, AI analyzes grammar, structure, and clarity with intelligent models',
      highlight: 'Handwritten & Typed Essays',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: '5-7× Faster Grading',
      description: 'Reduces grading time from 15-20 minutes to just 3-5 minutes per essay, saving teachers hours every week',
      highlight: 'Real-Time Feedback',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎯',
      title: 'Mimics Your Grading Style',
      description: 'Learns your tone, phrasing, and feedback depth. AI comments feel authentically yours, not generic',
      highlight: 'Personalized Feedback',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '📊',
      title: '3 Unique Dashboards',
      description: 'Class, Assignment, and Student dashboards give complete view of progress, performance, and feedback',
      highlight: 'Track Student Growth',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    { benefit: 'Standardized Grading', description: 'Consistent, unbiased grading across students and classes' },
    { benefit: 'Handwritten Essay Annotation', description: 'Direct marking on scanned essays with OCR overlay' },
    { benefit: 'PDF Splitter', description: 'Automatically separates multi-essay PDFs for individual grading' },
    { benefit: 'Improved Teacher Well-being', description: 'Reduce burnout and spend more time on what matters most' },
    { benefit: 'Enhanced Understanding', description: 'AI-powered analytics track writing progress over time' }
  ];

  const supportedInstitutions = [
    { name: 'Google for Startups', logo: '/google.png' },
    { name: 'NVIDIA Inception', logo: '/nvidia-inception.png' },
    { name: 'MongoDB for Startups', logo: '/mongodb.png' },
    { name: 'NUS Enterprise', logo: '/nus-enterprise.png' },
    { name: 'BLOCK71', logo: '/block71.png' },
    { name: 'NUS Computing', logo: '/nus-soc.png' }
  ];

  return (
    <>
      <Helmet>
        <title>Remarkably - AI-Powered Essay Grading for Educators</title>
        <meta name="description" content="Transform your grading workflow with Remarkably's AI-powered essay assessment platform. Grade 6x faster with 95% accuracy, trusted by 200+ teachers across Singapore." />
        <meta name="keywords" content="AI essay grading, automated assessment, teacher tools, education technology, Singapore schools, essay marking, grading software" />
      </Helmet>

      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="mb-8">
                Grade Essays 6× Faster with AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Remarkably transforms essay grading with advanced AI technology. Trusted by educators across Singapore 
                to provide consistent, detailed feedback while saving hours of manual work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link to="/demo" className="btn-primary">
                  🚀 Try Free Demo
                </Link>
                <Link to="/features" className="btn-secondary">
                  📋 View Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Statistics Section */}
        <section className="w-full">
          <div className="container">
            <div className="hero-stats-grid">
              <div className="hero-stat-card">
                <div className="hero-stat-icon">
                  ⚡
                </div>
                <div className="hero-stat-number">
                  {stats.gradingSpeed}×
                </div>
                <div className="hero-stat-label">
                  Faster Grading
                </div>
                <div className="hero-stat-description">
                  Reduce grading time from 15-20 minutes to just 3-5 minutes per essay
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-icon">
                  👥
                </div>
                <div className="hero-stat-number">
                  {formatNumber(stats.studentsTeachers)}
                </div>
                <div className="hero-stat-label">
                  Students & Teachers
                </div>
                <div className="hero-stat-description">
                  Supporting educators and students across Singapore's top institutions
                </div>
              </div>

              <div className="hero-stat-card">
                <div className="hero-stat-icon">
                  📝
                </div>
                <div className="hero-stat-number">
                  {formatNumber(stats.wordsGraded)}
                </div>
                <div className="hero-stat-label">
                  Words Graded
                </div>
                <div className="hero-stat-description">
                  Comprehensive analysis of student writing with detailed feedback
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Partners Carousel */}
        <section className="w-full">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Trusted by Global Leaders & National Institutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proudly supported by leading technology companies and prestigious educational institutions
              </p>
            </div>
            
            <div className="partners-carousel-container">
              <div className="partners-carousel-track">
                {/* First set of logos */}
                <div className="partner-logo-item">
                  <img src="/google.png" alt="Google" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nvidia-inception.png" alt="NVIDIA Inception" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/mongodb.png" alt="MongoDB" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nus-enterprise.png" alt="NUS Enterprise" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/block71.png" alt="BLOCK71" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nus-soc.png" alt="NUS School of Computing" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nus.png" alt="National University of Singapore" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/social-impact-catalyst.png" alt="Social Impact Catalyst" className="partner-logo-carousel" />
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="partner-logo-item">
                  <img src="/google.png" alt="Google" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nvidia-inception.png" alt="NVIDIA Inception" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/mongodb.png" alt="MongoDB" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nus-enterprise.png" alt="NUS Enterprise" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/block71.png" alt="BLOCK71" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nus-soc.png" alt="NUS School of Computing" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/nus.png" alt="National University of Singapore" className="partner-logo-carousel" />
                </div>
                <div className="partner-logo-item">
                  <img src="/social-impact-catalyst.png" alt="Social Impact Catalyst" className="partner-logo-carousel" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Overview */}
        <section className="w-full">
          <div className="container">
            <div className="content-card">
              <h2 className="text-center mb-12">Why Choose Remarkably?</h2>
              
              <div className="grid-auto-fit">
                <div className="feature-card">
                  <div className="feature-icon">🤖</div>
                  <h3>Advanced AI Technology</h3>
                  <p>
                    Powered by cutting-edge natural language processing to understand context, 
                    grammar, structure, and content quality with human-level accuracy.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3>Detailed Analytics</h3>
                  <p>
                    Comprehensive rubric-based scoring with specific feedback on grammar, 
                    structure, content relevance, and critical thinking skills.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">⚡</div>
                  <h3>Instant Results</h3>
                  <p>
                    Get detailed feedback and grades in seconds, not hours. Perfect for 
                    formative assessment and real-time student guidance.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3>Secure & Private</h3>
                  <p>
                    Enterprise-grade security ensures student data protection with 
                    PDPA compliance and encrypted data transmission.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📚</div>
                  <h3>Curriculum Aligned</h3>
                  <p>
                    Specifically designed for Singapore's education system, supporting 
                    MOE curriculum standards and assessment criteria.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">👨‍🏫</div>
                  <h3>Teacher-Friendly</h3>
                  <p>
                    Intuitive interface designed by educators, for educators. No technical 
                    expertise required - just upload and grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full">
          <div className="container">
            <div className="cta-section">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Grading?
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of educators who have already saved thousands of hours with Remarkably's AI-powered grading system.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/demo" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                  🚀 Start Free Trial
                </Link>
                <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                  💬 Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 