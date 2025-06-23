import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Our Mission to Help Educators | Remarkably</title>
        <meta 
          name="description" 
          content="Help educators grade faster, give better feedback, and focus more on teaching. Learn about Remarkably's mission and the team behind the AI-powered essay grading platform." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-xl text-blue-800">
              Help educators grade faster, give better feedback, and focus more on teaching.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Remarkably is an AI-powered essay grading solution developed by a group of young entrepreneurs from the National University of Singapore (NUS). 
            With backgrounds in education, machine learning, and business, we created Remarkably to solve a real problem: grading hundreds of essays by hand 
            is exhausting, slow, and unsustainable.
          </p>

          <p className="text-lg text-gray-700 mb-12">
            Our tool brings AI directly into the teacher workflow, especially for handwritten compositions, which most other platforms ignore.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Founder</h2>
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-700 font-bold text-2xl">HW</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Harry Wu, Co-Founder & CEO</h3>
                <p className="text-gray-700">
                  Harry Wu is a Year 2 Business student at NUS with a minor in AI. As CEO and co-founder, he leads product strategy and growth at Lenor AI Pte. Ltd. 
                  Harry has incubated Remarkably at BLOCK71 under NUS Enterprise, secured grants from Google Cloud and NUS, and guided pilot deployments in MOE schools. 
                  His experience spans edtech, AI research, and startup acceleration, driving Remarkably's mission to empower teachers with smart grading solutions.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">Grade handwritten and typed essays <strong>5–7× faster</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">Generate feedback aligned to each teacher's style and school's rubric</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">Reduce teacher workload without compromising on quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">Track student growth over time with smart reports</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">Save hours of repetitive marking every week</span>
            </li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-green-800 font-medium text-center">
              Our solution is currently used in <strong>MOE schools</strong>, <strong>international classrooms</strong>, 
              and is expanding across Southeast Asia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs; 