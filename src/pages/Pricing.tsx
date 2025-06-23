import React from 'react';
import { Helmet } from 'react-helmet-async';

const Pricing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Flexible Plans for Every School | Remarkably</title>
        <meta 
          name="description" 
          content="Explore Remarkably's flexible pricing models built for educators — from single-classroom use to school-wide rollout. Contact us to find the right AI essay grading solution for your needs." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">
            <strong>Flexible Plans for Every School, Teacher, and Institution</strong><br />
            Explore Remarkably's flexible pricing models built for educators — from single-classroom use to
            school-wide rollout. Contact us to find the right AI essay grading solution for your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">📅 Schedule a Live Demo</h3>
              <p className="text-blue-700 text-sm">See Remarkably in action</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-900 mb-2">✉️ Send Us an Email</h3>
              <p className="text-green-700 text-sm">Get personalized assistance</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">📱 WhatsApp Us</h3>
              <p className="text-purple-700 text-sm">Quick and direct support</p>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tier 1</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tier 2</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tier 3</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Max PDF Upload</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">50+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Storage per Student</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">200 MB</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">2 GB</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">50 GB</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AI Chatbot</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PDF Splitter</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Custom Branding</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Reports</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Concierge Support</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Early Access</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Custom Feature Discounts</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">❌</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
            <p className="text-blue-800 mb-6">
              Contact us today to discuss which plan is right for your institution.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule Demo
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing; 