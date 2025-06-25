import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import { seoConfigs } from '../utils/seo-config';
import { initSEOMonitoring } from '../utils/seo-optimization';
import { useNavigation } from '../contexts/NavigationContext';

const QnA: React.FC = () => {
  const { getPath } = useNavigation();
  
  useEffect(() => {
    initSEOMonitoring();
  }, []);

  const faqData = [
        {
      question: "How accurate is Remarkably's AI essay grading?",
      answer: "Remarkably's AI achieves 95%+ accuracy compared to human graders, with consistent performance across different essay types. Our system is trained on thousands of essays and continuously learns from teacher feedback to improve accuracy."
        },
        {
          question: "Can Remarkably grade handwritten essays?",
      answer: "Yes! Remarkably uses advanced OCR (Optical Character Recognition) technology to convert handwritten text into digital format, then applies AI grading. We support various handwriting styles and can process both scanned documents and photos."
    },
    {
      question: "How much time does Remarkably save teachers?",
      answer: "Teachers report saving 6-7x time on essay grading with Remarkably. What typically takes 15-20 minutes per essay can now be completed in 2-3 minutes, allowing teachers to focus more on instruction and student interaction."
        },
        {
      question: "Is Remarkably suitable for Singapore MOE schools?",
      answer: "Absolutely! Remarkably is specifically designed for Singapore's education system, supporting MOE curriculum standards, PSLE, O-Level, and A-Level essay formats. We're trusted by multiple MOE schools across Singapore."
        },
        {
      question: "What types of essays can Remarkably grade?",
      answer: "Remarkably can grade various essay types including argumentative essays, narrative essays, descriptive essays, expository essays, and creative writing. We support English Language, General Paper, and Social Studies assignments."
        },
        {
      question: "How does Remarkably ensure consistent grading?",
      answer: "Our AI uses standardized rubrics and maintains consistent scoring criteria across all essays. Unlike human graders who may have varying standards, Remarkably applies the same evaluation criteria every time, ensuring fairness and consistency."
        },
        {
      question: "Can teachers customize the grading rubrics?",
      answer: "Yes! Teachers can customize rubrics to match their specific requirements, curriculum standards, or assignment criteria. The AI adapts to your rubric while maintaining consistent application across all student submissions."
    },
        {
      question: "Is student data secure with Remarkably?",
      answer: "Student data security is our top priority. We use enterprise-grade encryption, comply with international data protection standards, and never share student information with third parties. All data is stored securely and can be deleted upon request."
        },
        {
      question: "How much does Remarkably cost?",
      answer: "We offer flexible pricing plans starting from individual teacher licenses to school-wide implementations. Contact us for a personalized quote based on your needs. We also offer free trials for educators to test the platform."
        },
        {
      question: "Do I need special training to use Remarkably?",
      answer: "No special training required! Remarkably is designed to be intuitive and easy to use. We provide comprehensive onboarding, tutorial videos, and ongoing support to ensure teachers can start grading efficiently from day one."
        },
        {
      question: "Can Remarkably integrate with existing school systems?",
      answer: "Yes, Remarkably can integrate with popular Learning Management Systems (LMS) and Student Information Systems (SIS). We support seamless data import/export and can work with your existing workflow."
    },
        {
      question: "What feedback does Remarkably provide to students?",
      answer: "Remarkably provides detailed, personalized feedback covering grammar, structure, content quality, argumentation, and writing style. The feedback is constructive and helps students understand areas for improvement, similar to what a skilled teacher would provide."
    }
  ];

  const seoConfig = {
    ...seoConfigs['home'],
    title: 'Frequently Asked Questions | Remarkably AI Essay Grading',
    description: 'Get answers to common questions about Remarkably\'s AI essay grading platform. Learn about accuracy, features, pricing, security, and how we help teachers save time.',
    keywords: [
      'AI essay grading FAQ',
      'Remarkably questions',
      'automated grading help',
      'teacher grading tool FAQ',
      'Singapore MOE grading',
      'handwritten essay AI',
      'essay grading accuracy'
    ],
    canonical: 'https://www.remarkably.ink/qna'
  };

  return (
    <>
      <SEOHead config={seoConfig} pageKey="qna" />
      <SchemaMarkup type="faq" data={faqData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Remarkably's AI-powered essay grading platform. 
              Can't find what you're looking for? <Link to={getPath('contact')} className="text-blue-600 hover:text-blue-700 underline">Contact us</Link>.
            </p>
        </div>
      </section>

        {/* FAQ Section */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                      {index + 1}
                    </span>
                            {faq.question}
                          </h3>
                  <div className="ml-12">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help you get started with AI-powered essay grading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={getPath('contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Contact Support
              </Link>
              <Link
                to={getPath('demo')}
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors duration-300 border-2 border-blue-400"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
        </div>
    </>
  );
};

export default QnA; 