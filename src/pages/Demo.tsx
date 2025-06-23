import React from 'react';
import { Helmet } from 'react-helmet-async';

const Demo: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Live Demo - Remarkably AI Essay Grading</title>
        <meta 
          name="description" 
          content="See Remarkably in action. Watch how we grade a real handwritten essay in under 2 minutes with AI-powered feedback." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Live Demo</h1>
          <p className="text-xl text-gray-600 mb-8">
            Want to see Remarkably in action? Watch how we grade a real handwritten essay in under 2 minutes.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Interactive Demo</h2>
            <p className="text-blue-800 mb-4">
              Experience the power of AI-powered essay grading with our live demonstration.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Start Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Handwritten Essays</h3>
              <p className="text-gray-600">
                See how our OCR technology reads and analyzes handwritten student work, 
                providing detailed feedback on grammar, structure, and content.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Typed Documents</h3>
              <p className="text-gray-600">
                Experience lightning-fast grading of digital submissions with 
                personalized feedback that matches your teaching style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo; 