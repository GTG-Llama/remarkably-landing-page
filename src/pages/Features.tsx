import React from 'react';
import { Helmet } from 'react-helmet-async';

const Features: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Features - AI Powered Essay Grading | Remarkably</title>
        <meta 
          name="description" 
          content="AI powered essay grading features for Handwritten and Typed Work. Remarkably is an AI grading platform built for real classrooms." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600 mb-8">
            <strong>AI powered essay grading features for Handwritten and Typed Work</strong><br />
            Remarkably is an AI grading platform built for real classrooms. It grades handwritten and typed essays,
            mirrors your personal marking style, and provides instant, high quality feedback. Saving teachers hours
            every week.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              <a href="#" className="text-blue-600 hover:text-blue-800 underline">SEE A LIVE DEMO</a> – Want to see Remarkably in action? OR Watch how we grade a real handwritten essay in under 2 minutes.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grade Handwritten & Typed Submissions</h3>
              <p className="text-gray-600">
                Remarkably accepts scanned handwritten essays and digital files. No need for manual transcription.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced OCR + AI Feedback</h3>
              <p className="text-gray-600">
                Automatically detects grammar, sentence structure, clarity, and coherence using intelligent models.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mimics Your Grading Style</h3>
              <p className="text-gray-600">
                Remarkably learns your tone and feedback preferences, so comments feel like they came from you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast, Real-Time Feedback</h3>
              <p className="text-gray-600">
                Instantly grades hundreds of essays in minutes. Teachers save up to <strong>6×</strong> the time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PDF Splitter</h3>
              <p className="text-gray-600">
                Automatically separates multi-essay PDFs so each student's work is graded individually.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3 Unique Dashboards</h3>
              <p className="text-gray-600">
                Class, Assignment, and Student dashboards give teachers a complete view of progress, performance, and feedback.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Interactive Time-Saved Calculator</h3>
            <p className="text-green-800 mb-4">
              Widget: "How much time can you save?" → Enter number of students → Show total hours saved
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Calculate Your Time Savings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features; 