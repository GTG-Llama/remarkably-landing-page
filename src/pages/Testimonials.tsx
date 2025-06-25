import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  Users, 
  Award, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Remarkably has completely transformed my grading workflow. What used to take me entire weekends now takes just a few hours. The AI feedback is incredibly detailed and helps my students improve their writing significantly.",
      author: "Dr. Sarah Chen",
      role: "English Department Head",
      school: "Singapore International School",
      rating: 5,
      image: "SC"
    },
    {
      quote: "I was initially skeptical about AI grading, but Remarkably's accuracy and consistency have won me over. It maintains the same high standards across all essays, something I struggled with during long grading sessions.",
      author: "Michael Rodriguez",
      role: "Literature Teacher",
      school: "Victoria Junior College",
      rating: 5,
      image: "MR"
    },
    {
      quote: "The time savings are incredible. I can now provide detailed feedback to all 150 of my students without sacrificing quality. My work-life balance has improved dramatically.",
      author: "Dr. Emily Watson",
      role: "Professor of English",
      school: "National University of Singapore",
      rating: 5,
      image: "EW"
    },
    {
      quote: "Remarkably's OCR technology is amazing. It reads my students' handwriting better than I can sometimes! The feedback quality is exceptional and really helps students understand their mistakes.",
      author: "James Liu",
      role: "Secondary School Teacher",
      school: "Raffles Institution",
      rating: 5,
      image: "JL"
    },
    {
      quote: "As a department coordinator, I love how Remarkably ensures consistency across all our teachers' grading. The analytics help us identify students who need extra support.",
      author: "Dr. Priya Sharma",
      role: "English Department Coordinator",
      school: "Anglo-Chinese School",
      rating: 5,
      image: "PS"
    },
    {
      quote: "The student progress tracking is invaluable. I can see exactly how each student is improving over time and adjust my teaching accordingly. It's like having a teaching assistant that never sleeps.",
      author: "Robert Kim",
      role: "IB English Teacher",
      school: "United World College",
      rating: 5,
      image: "RK"
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "Hundreds",
      label: "Teachers and Students",
      description: "Across Singapore and internationally"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "50+",
      label: "Schools",
      description: "MOE and international institutions"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9/5",
      label: "Rating",
      description: "Average user satisfaction score"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save 5-7 Hours Weekly",
      description: "Teachers report saving significant time on grading"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Improve Student Outcomes",
      description: "Detailed feedback leads to better writing skills"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Maintain Quality",
      description: "Consistent standards across all essays"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials - What Educators Say About Remarkably | AI Essay Grading</title>
        <meta name="description" content="Read testimonials from 500+ teachers and 50+ schools using Remarkably's AI essay grading platform. See how educators save time and improve student outcomes." />
        <meta name="keywords" content="AI grading testimonials, teacher reviews, education technology testimonials, remarkably reviews" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <Quote className="h-4 w-4 mr-2" />
              Teacher Testimonials
            </div>
            
            <h1 className="mb-6">
              Trusted by Educators
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> Worldwide</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how teachers and institutions are transforming their grading 
              experience with Remarkably's AI-powered platform.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center">
                <div className="flex space-x-1 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 rating</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-600">500+ teachers</div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-600">50+ schools</div>
            </div>

            <Link to="/demo" className="btn btn-primary btn-lg">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="stats-grid max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="icon-container icon-container-primary mx-auto">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#667EEA] mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Educators Are Saying</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from teachers who have transformed their grading with Remarkably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-[#667EEA] opacity-20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.image}
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

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Teachers Choose Remarkably</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The key benefits that make educators love our platform
            </p>
          </div>

          <div className="feature-grid max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
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

      {/* Featured Testimonial */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="card card-padding bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white text-center">
              <Quote className="h-16 w-16 text-white opacity-20 mx-auto mb-6" />
              <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                "Remarkably has revolutionized our English department. We've seen a 40% improvement 
                in student writing quality and our teachers are happier than ever. It's the best 
                investment we've made in education technology."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">
                  AM
                </div>
                <div className="text-left">
                  <div className="font-semibold text-xl">Dr. Amanda Martinez</div>
                  <div className="text-blue-100">Principal</div>
                  <div className="text-blue-100">International School of Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of educators who have already transformed their grading experience. 
              Start your free trial today and see why teachers love Remarkably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn btn-primary btn-lg">
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

export default Testimonials; 