import React from 'react';

const MainLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Remarkably
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered essay grading platform that saves teachers time while maintaining quality feedback.
        </p>
        <div className="space-y-4">
          <a
            href="https://app.remarkably.ink"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try Remarkably
          </a>
          <div className="text-sm text-gray-500">
            <a href="/beta" className="text-indigo-600 hover:text-indigo-800">
              Preview our new site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLanding; 