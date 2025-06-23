import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Study - Lianhua Primary School Pilot | Remarkably</title>
        <meta 
          name="description" 
          content="Lianhua Primary School partnered with Lenor's AI grading tool, Remarkably, to tackle time-intensive English essay marking. See the results." 
        />
      </Helmet>
      <div className="page-container">
        <div className="content-card">
          <h1>Case Study</h1>
          <h2 className="text-3xl font-semibold text-blue-900 mb-8">Lianhua Primary School Pilot</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Overview</h3>
            <p className="text-blue-800">
              Lianhua Primary School partnered with Lenor's AI grading tool, Remarkably, to tackle time-intensive English essay marking. 
              Teachers spent up to 15 minutes per script, resulting in delayed feedback and heavy workloads.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">About the School</h3>
            <p className="text-green-800">
              Founded in 1946 under Singapore's MOE, Lianhua has 1,000+ students and a strong focus on academic and character development.
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Challenges</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Manual grading took ~15 minutes per essay</li>
                <li>• Feedback delays hindered student progress</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Goals</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Reduce grading time without compromising quality</li>
                <li>• Maintain teacher's unique grading style aligned with MOE rubrics</li>
                <li>• Improve feedback turnaround</li>
                <li>• Relieve teacher workload</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-900 mb-3">Approach</h3>
            <ol className="text-orange-800 space-y-2 list-decimal list-inside">
              <li>Analyzed sample handwritten essays to calibrate Remarkably's OCR and AI models.</li>
              <li>Piloted with a small group of English teachers for feedback and refinement.</li>
              <li>Rolled out school-wide with streamlined onboarding.</li>
            </ol>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5-7×</div>
                <p className="text-gray-700">Grading time reduction<br />(15 min → 3–5 min per essay)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">400+</div>
                <p className="text-gray-700">Essays graded monthly</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-center">
              <div className="bg-white bg-opacity-70 rounded-lg p-4">
                <p className="text-gray-800">✓ Detailed, actionable feedback at sentence and idea levels</p>
              </div>
              <div className="bg-white bg-opacity-70 rounded-lg p-4">
                <p className="text-gray-800">✓ Less teacher stress and more time for lesson prep</p>
              </div>
              <div className="bg-white bg-opacity-70 rounded-lg p-4">
                <p className="text-gray-800">✓ Continuous progress tracking via teacher dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-gray-600 mb-6">
              See how Remarkably can transform your school's grading process and improve teacher satisfaction.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule Your Pilot
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy; 