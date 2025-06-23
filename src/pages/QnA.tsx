import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ArrowRight,
  MessageCircle,
  Search,
  Sparkles
} from 'lucide-react';

const QnA: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does Remarkably's AI essay grading work?",
          answer: "Remarkably uses advanced natural language processing and machine learning algorithms to analyze essays for grammar, structure, content quality, and coherence. Our AI has been trained on thousands of essays and continuously learns to provide accurate, consistent feedback that matches human grading standards."
        },
        {
          question: "Can Remarkably grade handwritten essays?",
          answer: "Yes! Remarkably includes advanced OCR (Optical Character Recognition) technology that can accurately read handwritten essays. Simply scan or photograph the handwritten work, and our AI will transcribe and grade it just like typed essays."
        },
        {
          question: "How accurate is the AI grading?",
          answer: "Our AI achieves 95%+ accuracy compared to human graders. The system maintains consistent standards and eliminates human bias factors like fatigue or mood. For complex essays requiring nuanced judgment, we recommend using AI as a first pass with teacher review."
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What types of essays can Remarkably grade?",
          answer: "Remarkably can grade all common essay types including narrative, argumentative, expository, descriptive, comparative, and discursive essays. The AI adapts its feedback based on the essay type and grade level you specify."
        },
        {
          question: "Can I customize the grading rubrics?",
          answer: "Absolutely! Professional and Enterprise plans include a custom rubrics builder. You can create subject-specific rubrics, adjust weighting for different criteria, and align with your institution's grading standards."
        },
        {
          question: "Does Remarkably integrate with my existing LMS?",
          answer: "Yes, Remarkably integrates with popular Learning Management Systems including Google Classroom, Canvas, Blackboard, and Moodle. We also provide API access for custom integrations with Enterprise plans."
        },
        {
          question: "How does the feedback personalization work?",
          answer: "Remarkably learns your grading style over time by analyzing your feedback patterns, tone preferences, and areas of focus. The AI adapts to match your voice and teaching approach, making the feedback feel authentically yours."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can grade up to 50 essays during the trial period to fully experience the platform."
        },
        {
          question: "What's included in each pricing plan?",
          answer: "Our Starter plan ($29/month) includes basic AI grading for up to 100 essays. Professional plan ($99/month) adds custom rubrics, analytics, and team collaboration for up to 500 essays. Enterprise plan ($299/month) offers unlimited essays, dedicated support, and advanced features."
        },
        {
          question: "Can I change plans anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges. There are no long-term contracts or cancellation fees."
        },
        {
          question: "Do you offer educational discounts?",
          answer: "Yes! We provide special pricing for educational institutions, non-profits, and bulk licenses. Contact our sales team for custom pricing based on your needs and student population."
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          question: "Is student data secure and private?",
          answer: "Absolutely. We use enterprise-grade security with AES-256 encryption, secure data centers, and strict privacy policies. We're FERPA compliant and never share student data with third parties. Data is stored securely and can be deleted upon request."
        },
        {
          question: "What file formats does Remarkably support?",
          answer: "Remarkably supports PDF, DOC, DOCX files, and scanned images (JPG, PNG). We also accept direct text input and integrate with Google Docs. Our OCR technology can process handwritten essays from photos or scanned documents."
        },
        {
          question: "Do I need special software or hardware?",
          answer: "No special software needed! Remarkably is entirely web-based and works on any device with an internet browser - computers, tablets, or smartphones. For handwritten essays, you just need a camera or scanner."
        },
        {
          question: "What happens if the AI makes a mistake?",
          answer: "While our AI is highly accurate, you always have full control. You can edit any AI-generated feedback, adjust scores, and provide additional comments. The system learns from your corrections to improve future grading."
        }
      ]
    },
    {
      category: "Support & Training",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We offer email support for all plans, priority support for Professional users, and dedicated account management for Enterprise customers. We also provide comprehensive documentation, video tutorials, and live training sessions."
        },
        {
          question: "How long does it take to learn the system?",
          answer: "Most teachers are up and running within 15 minutes! The interface is intuitive and designed for educators. We provide quick-start guides, video tutorials, and optional onboarding sessions to help you get the most from the platform."
        },
        {
          question: "Can you help with implementation across our school?",
          answer: "Yes! For institutional customers, we provide implementation support including staff training, custom setup assistance, and ongoing support to ensure successful adoption across your organization."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Common Questions About AI Essay Grading | Remarkably</title>
        <meta name="description" content="Find answers to common questions about Remarkably's AI essay grading platform. Learn about features, pricing, security, and implementation." />
        <meta name="keywords" content="AI grading FAQ, essay grading questions, remarkably help, education technology support" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="badge badge-primary mb-8 inline-flex">
              <HelpCircle className="h-4 w-4 mr-2" />
              Frequently Asked Questions
            </div>
            
            <h1 className="mb-6">
              Everything You Need to Know About
              <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] bg-clip-text text-transparent"> Remarkably</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to the most common questions about our AI essay grading platform. 
              Can't find what you're looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-[#667EEA]" />
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openFAQ === globalIndex;
                    
                    return (
                      <div key={questionIndex} className="card overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {filteredFAQs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any questions matching "{searchTerm}". Try different keywords or contact our support team.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn btn-secondary btn-md"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore more resources to get the most out of Remarkably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/demo" className="card card-padding text-center hover:shadow-lg transition-shadow">
              <div className="icon-container icon-container-primary mx-auto">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-3">Try Demo</h3>
              <p className="text-gray-600 mb-4">Experience Remarkably with our interactive demo</p>
              <span className="text-[#667EEA] font-medium">Start Demo →</span>
            </Link>

            <Link to="/features" className="card card-padding text-center hover:shadow-lg transition-shadow">
              <div className="icon-container icon-container-accent mx-auto">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-3">View Features</h3>
              <p className="text-gray-600 mb-4">Learn about all available features and capabilities</p>
              <span className="text-[#4FD1C7] font-medium">Explore Features →</span>
            </Link>

            <Link to="/contact" className="card card-padding text-center hover:shadow-lg transition-shadow">
              <div className="icon-container icon-container-primary mx-auto">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-3">Contact Support</h3>
              <p className="text-gray-600 mb-4">Get personalized help from our support team</p>
              <span className="text-[#667EEA] font-medium">Contact Us →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to help. Get personalized answers to your questions 
              or schedule a demo to see Remarkably in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-accent btn-lg">
                Contact Support
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/demo" className="btn btn-secondary btn-lg">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QnA; 