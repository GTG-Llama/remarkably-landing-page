import React from 'react';
import { Helmet } from 'react-helmet-async';

const RubricGuide: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rubric Guide - How to Create an Effective Rubric | Remarkably</title>
        <meta 
          name="description" 
          content="A well-crafted rubric sets clear expectations for students and guides teachers to grade fairly. Use this practical, educator-friendly guide whether you're starting from scratch or refining an existing rubric." 
        />
      </Helmet>
      <div className="page-container">
        <div className="content-card">
          <h1>Rubric Guide</h1>
          <p className="text-xl mb-8">
            <strong>How to Create an Effective Rubric for Essay Grading</strong><br />
            A well-crafted rubric sets clear expectations for students and guides teachers to grade fairly. 
            Use this practical, educator-friendly guide whether you're starting from scratch or refining an existing rubric.
          </p>
        </div>

        <div className="content-card">
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Start with Your Learning Goals</h2>
              <p className="text-blue-800 mb-3">
                Ask: "What am I trying to assess?"
              </p>
              <p className="text-blue-700">
                Identify key learning points: argumentation, clarity of thought, evidence-based reasoning.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-900 mb-4">2. Define Clear Criteria</h2>
              <p className="text-green-700">
                Break down each goal into measurable components (e.g., thesis clarity, paragraph cohesion, grammar).
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">3. Set Performance Levels</h2>
              <p className="text-purple-700">
                Create tiers (e.g., Excellent, Good, Fair, Poor) with specific descriptions for each criterion.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4">4. Align with Standards</h2>
              <p className="text-orange-700">
                Ensure your rubric reflects school or district standards (e.g., MOE requirements).
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-900 mb-4">5. Test & Refine</h2>
              <p className="text-red-700">
                Pilot your rubric on sample essays, gather feedback, and adjust descriptions for clarity.
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sample Rubric Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="font-semibold text-gray-900">Criteria</div>
              <div className="font-semibold text-gray-900">Excellent (4)</div>
              <div className="font-semibold text-gray-900">Good (3)</div>
              <div className="font-semibold text-gray-900">Needs Work (2)</div>
              
              <div className="font-medium text-gray-800">Thesis Clarity</div>
              <div className="text-gray-700">Clear, compelling thesis</div>
              <div className="text-gray-700">Clear thesis statement</div>
              <div className="text-gray-700">Unclear or weak thesis</div>
              
              <div className="font-medium text-gray-800">Evidence</div>
              <div className="text-gray-700">Strong, relevant evidence</div>
              <div className="text-gray-700">Adequate evidence</div>
              <div className="text-gray-700">Limited evidence</div>
              
              <div className="font-medium text-gray-800">Organization</div>
              <div className="text-gray-700">Logical, clear structure</div>
              <div className="text-gray-700">Generally organized</div>
              <div className="text-gray-700">Poor organization</div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Streamline Your Grading?</h2>
            <p className="text-blue-800 mb-6">
              Use Remarkably to apply your custom rubrics automatically with AI-powered grading.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Try Remarkably Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RubricGuide; 