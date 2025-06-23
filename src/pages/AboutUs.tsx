import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight,
  Heart,
  Globe,
  Lightbulb,
  Shield,
  BookOpen,
  Sparkles
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Harry Wu",
      role: "Founder & CEO",
      bio: "Former educator with 10+ years in AI research. PhD in Computer Science from NUS, passionate about transforming education through technology.",
      image: "HW"
    },
    {
      name: "Dr. Sarah Lim",
      role: "Head of AI Research",
      bio: "Leading AI researcher specializing in natural language processing. Former researcher at Google AI, focused on educational applications.",
      image: "SL"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      bio: "Former teacher turned product manager. Brings deep understanding of educator needs and classroom challenges to product development.",
      image: "MC"
    },
    {
      name: "Dr. Priya Patel",
      role: "Education Consultant",
      bio: "Former MOE curriculum specialist with 15+ years experience. Ensures our platform aligns with educational standards and best practices.",
      image: "PP"
    }
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education First",
      description: "Every decision we make is guided by what's best for students and teachers."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Privacy",
      description: "We protect student data with enterprise-grade security and transparent practices."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Teacher Empowerment",
      description: "We build tools that enhance teaching, not replace the human connection."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "We constantly improve our AI to better serve the education community."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started by educators frustrated with grading workload"
    },
    {
      year: "2021",
      title: "First AI Model",
      description: "Launched initial essay grading prototype"
    },
    {
      year: "2022",
      title: "Singapore Launch",
      description: "Partnered with first 10 schools in Singapore"
    },
    {
      year: "2023",
      title: "Major Expansion",
      description: "Reached 50+ schools and 500+ teachers"
    },
    {
      year: "2024",
      title: "Global Growth",
      description: "Expanding internationally with advanced AI features"
    }
  ];

  const partners = [
    "Google for Education",
    "NVIDIA AI",
    "MongoDB",
    "NUS Enterprise",
    "BLOCK71",
    "NUS Computing"
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Meet the Team Behind Remarkably | AI Essay Grading</title>
        <meta name="description" content="Learn about Remarkably's mission to transform education through AI. Meet our team of educators and technologists dedicated to helping teachers save time." />
        <meta name="keywords" content="about remarkably, education technology company, AI grading team, singapore edtech" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <Users className="h-4 w-4 mr-2" />
              About Remarkably
            </div>
            
            <h1 className="mb-6">
              Transforming Education Through
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> AI Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're on a mission to give teachers their time back while improving student outcomes. 
              Founded by educators, built for educators.
            </p>

            <Link to="/demo" className="btn btn-primary btn-lg">
              Experience Our Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="icon-container icon-container-primary mb-6 inline-flex">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower educators worldwide by automating tedious grading tasks, 
                allowing them to focus on what matters most: teaching and connecting with students.
              </p>
              <p className="text-gray-700">
                We believe technology should enhance human potential, not replace it. 
                Our AI handles the repetitive work so teachers can spend more time inspiring, 
                mentoring, and making a real difference in their students' lives.
              </p>
            </div>
            
            <div className="card card-padding bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white">
              <div className="text-center">
                <Globe className="h-16 w-16 text-white opacity-20 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 text-lg">
                  A world where every teacher has the time and tools to provide 
                  personalized, high-quality education to every student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Born from the frustration of spending countless hours grading essays instead of teaching
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card card-padding">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Remarkably was founded in 2020 by Harry Wu, a former teacher who was spending 
                20+ hours every weekend grading essays. Despite his passion for teaching, 
                he found himself burned out from the endless cycle of marking papers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "I became a teacher to inspire students, not to spend my entire weekend 
                correcting grammar," Harry recalls. "There had to be a better way."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Combining his background in AI research with deep understanding of educational needs, 
                Harry assembled a team of educators and technologists to build the grading assistant 
                he wished he'd had in the classroom. Today, Remarkably serves over 500 teachers 
                across 50+ schools, giving educators their weekends back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      <span className="badge badge-primary">{milestone.year}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Educators and technologists working together to transform education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#667EEA] to-[#764BA2] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#667EEA] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="feature-grid">
            {values.map((value, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="icon-container icon-container-accent mx-auto">
                  {value.icon}
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Trusted Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supported by leading technology companies and educational institutions
            </p>
          </div>

          <div className="partner-carousel">
            <div className="flex items-center justify-center space-x-12 animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="text-gray-400 font-medium text-lg whitespace-nowrap">
                    {partner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Recognition</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Awards and recognition for our impact in education technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card card-padding text-center">
              <div className="icon-container icon-container-primary mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-3">EdTech Innovation Award</h3>
              <p className="text-gray-600">Singapore Education Technology Association 2023</p>
            </div>

            <div className="card card-padding text-center">
              <div className="icon-container icon-container-accent mx-auto">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mb-3">AI Excellence Award</h3>
              <p className="text-gray-600">NVIDIA AI Launchpad Program 2023</p>
            </div>

            <div className="card card-padding text-center">
              <div className="icon-container icon-container-primary mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-3">Teacher's Choice</h3>
              <p className="text-gray-600">Voted #1 Grading Tool by Singapore Teachers 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of the education revolution. Experience how Remarkably can 
              transform your teaching and give you more time for what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn btn-accent btn-lg">
                Try Remarkably
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs; 