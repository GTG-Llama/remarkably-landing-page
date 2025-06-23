import React from 'react';
import { Helmet } from 'react-helmet-async';

const QnA: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Q&A - Frequently Asked Questions | Remarkably</title>
        <meta 
          name="description" 
          content="Get answers to frequently asked questions about Remarkably's AI-powered essay grading platform for educators." 
        />
      </Helmet>
      <div className="page-container">
        <div className="content-card">
          <h1>Q&A</h1>
          <p className="text-xl mb-8">
            Frequently asked questions about Remarkably's AI-powered essay grading platform.
          </p>
        </div>

        <div className="content-card">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "Can it actually grade handwritten essays? My students have messy writing."
              </h3>
              <p className="text-gray-700">
                Yes. Our system handles real, messy student handwriting. If it's unsure, it flags it for review — so you only check what matters.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "How does it know how I would grade? I don't want generic AI feedback."
              </h3>
              <p className="text-gray-700">
                Upload a few marked essays — Remarkably learns your tone, style, and feedback habits. It writes like you, not like ChatGPT.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "How do we know it's accurate? Can we trust the grades?"
              </h3>
              <p className="text-gray-700">
                Yes. You can upload your own rubrics, and Remarkably will grade based on them — not a generic AI standard. You control the criteria.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "How long does it take to grade a full class?"
              </h3>
              <p className="text-gray-700">
                Usually under an hour for 30–40 essays. Most teachers save 20+ hours per round compared to manual marking.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "Does it work for narrative, discursive, and argumentative essays?"
              </h3>
              <p className="text-gray-700">
                Yes. It handles all common essay types and adjusts feedback based on the structure expected.
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Still Have Questions?</h2>
            <p className="text-blue-800 mb-6">
              Our team is here to help you understand how Remarkably can transform your grading experience.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Contact Support
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QnA; 