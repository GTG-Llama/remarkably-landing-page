import React from 'react';
import { Helmet } from 'react-helmet-async';

const Benefits: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Benefits - Empowering Teachers with AI Grading | Remarkably</title>
        <meta 
          name="description" 
          content="Remarkably helps educators save time, personalize feedback, reduce grading stress, and improve student outcomes — all through the power of AI." 
        />
      </Helmet>
      <div className="page-container">
        <div className="content-card">
          <h1>Benefits</h1>
          <p className="text-xl mb-8">
            <strong>Empowering Teachers with AI Grading: Remarkably Benefits</strong><br />
            Remarkably helps educators save time, personalize feedback, reduce grading stress, and improve student
            outcomes — all through the power of AI.
          </p>
        </div>

        <div className="content-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">5× Faster Grading</h3>
              <p className="text-blue-800">
                Remarkably reduces grading time from 15–20 minutes to just 3–5 minutes per essay, helping teachers focus on teaching and student engagement.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Personalized Feedback</h3>
              <p className="text-green-800">
                Adapts to your unique grading style — tone, phrasing, and feedback depth. Provide AI-powered comments that feel truly yours.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Handwritten Essay Annotation</h3>
              <p className="text-purple-800">
                Directly mark on scanned handwritten essays. Our OCR overlays comments right on the student's paper.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Standardized Grading</h3>
              <p className="text-orange-800">
                Ensure consistent, unbiased grading across students and classes with rubric-based AI models.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Improved Teacher Well-being</h3>
              <p className="text-red-800">
                Automate tedious marking tasks to reduce burnout and spend more time on what matters most.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">Enhanced Understanding</h3>
              <p className="text-indigo-800">
                Track student strengths, weaknesses, and writing progress over time with AI-powered analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Grading?</h2>
            <p className="text-gray-600 mb-6">
              Join hundreds of teachers who are already saving time and improving student outcomes with Remarkably.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits; 