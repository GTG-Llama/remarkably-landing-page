import React from 'react';
import { Helmet } from 'react-helmet-async';

const Testimonials: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials - What Teachers Say About Remarkably</title>
        <meta 
          name="description" 
          content="Read what teachers and educators are saying about Remarkably's AI-powered essay grading platform." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Testimonials</h1>
          <p className="text-xl text-gray-600 mb-12">
            Hear from educators who are transforming their grading experience with Remarkably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold text-lg">MS</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Ms. Sarah Chen</h3>
                  <p className="text-gray-600 text-sm">English Teacher, Lianhua Primary</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Remarkably has saved me hours every week. The feedback quality is incredible, and it actually learns my grading style. My students get their essays back faster than ever."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-semibold text-lg">JL</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Mr. James Liu</h3>
                  <p className="text-gray-600 text-sm">Head of English Department</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The handwritten essay grading is a game-changer. Our OCR technology accurately reads even messy handwriting, and the AI feedback is consistently high quality."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-semibold text-lg">AT</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Ms. Amy Tan</h3>
                  <p className="text-gray-600 text-sm">Secondary School Teacher</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I was skeptical about AI grading, but Remarkably proved me wrong. It maintains consistency while adapting to my personal feedback style. My workload has never been more manageable."
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-700 font-semibold text-lg">DW</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Dr. David Wong</h3>
                  <p className="text-gray-600 text-sm">International School Principal</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Implementing Remarkably across our school has improved teacher satisfaction and student outcomes. The time savings allow our educators to focus on what they do best - teaching."
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Join Our Community of Satisfied Educators</h2>
            <p className="text-blue-800 mb-6">
              Ready to experience the benefits of AI-powered essay grading for yourself?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials; 