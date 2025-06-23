import React from 'react';
import { Helmet } from 'react-helmet-async';

const Achievements: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Achievements - Backed by Global Leaders | Remarkably</title>
        <meta 
          name="description" 
          content="Backed by global leaders. Recognized by national institutions. Built for educators. Learn about Remarkably's achievements and recognition." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Achievements</h1>
          <p className="text-xl text-gray-600 mb-12">
            Backed by global leaders. Recognized by national institutions. Built for educators.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Remarkably (under parent brand Lenor) is supported by top programs and institutions:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">Google for Startups</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">NVIDIA Inception Program</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">MongoDB for Startups</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">NUS Enterprise</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">BLOCK71</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">The HANGAR</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">NUS Overseas Colleges</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm">NUS Computing</h3>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">🏆 Best Pitch</h3>
              <p className="text-yellow-800">NUS Ground Zero (2024 & 2025)</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">🏆 Best Pitch</h3>
              <p className="text-blue-800">NUS Social Ignition 2024</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">👥 People's Choice</h3>
              <p className="text-green-800">N House Pitch Night</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">❤️ Audience Favorite</h3>
              <p className="text-purple-800">Social Ignition 2024</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">🥈 Runner-Up</h3>
              <p className="text-orange-800">N House Pitch Night (2024 & 2025)</p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">🥉 Top 3</h3>
              <p className="text-red-800">NUS Student Innovation Carnival</p>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">🌍 Regional Finalist</h3>
              <p className="text-indigo-800">Hult Prize 2024</p>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-pink-900 mb-2">💰 Grant Recipient</h3>
              <p className="text-pink-800">NUS Venture Ignition Grant</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recognized Excellence</h2>
            <p className="text-gray-600 mb-6">
              Our achievements reflect our commitment to transforming education through innovative AI technology.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Join Our Success Story
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements; 