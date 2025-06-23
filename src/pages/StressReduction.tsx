import React from 'react';
import { Helmet } from 'react-helmet-async';

const StressReduction: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Stress Reduction - 5 Effective Strategies for Teachers | Remarkably</title>
        <meta 
          name="description" 
          content="5 Effective Strategies to Reduce Teacher Stress. Managing stress helps teachers stay energized, focused, and present in the classroom." 
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Stress Reduction</h1>
          <p className="text-xl text-gray-600 mb-8">
            <strong>5 Effective Strategies to Reduce Teacher Stress</strong><br />
            Managing stress helps teachers stay energized, focused, and present in the classroom. 
            Implement these evidence-based techniques to protect your well-being and improve job satisfaction.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Mindful Breathing & Meditation</h2>
              <p className="text-blue-800 mb-4">
                Spend 5–10 minutes daily on simple mindfulness exercises:
              </p>
              <ul className="text-blue-700 space-y-2">
                <li><strong>Deep breathing:</strong> Inhale for 4 seconds, hold 4 seconds, exhale 4 seconds (the "4×4" technique).</li>
                <li><strong>Guided meditation:</strong> Use an app or audio guide to center your thoughts and lower cortisol levels.</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-900 mb-4">2. Progressive Muscle Relaxation (PMR)</h2>
              <p className="text-green-800 mb-4">
                Systematically tense and release major muscle groups to release physical tension:
              </p>
              <ol className="text-green-700 space-y-2 list-decimal list-inside">
                <li>Find a quiet space and sit or lie down.</li>
                <li>Tense one muscle group (e.g., shoulders) for 5 seconds, then relax for 10 seconds.</li>
                <li>Move through arms, legs, torso, and face.</li>
              </ol>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">3. Prioritize & Set Boundaries</h2>
              <p className="text-purple-800 mb-4">
                Avoid overload by clearly defining work-life limits:
              </p>
              <ul className="text-purple-700 space-y-2">
                <li><strong>List daily tasks</strong> and rank by urgency—focus on top priorities first.</li>
                <li><strong>Learn to say "no"</strong> to non-essential requests.</li>
                <li><strong>Block "no-meeting" times</strong> for planning and self-care.</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-orange-900 mb-4">4. Physical Activity Breaks</h2>
              <p className="text-orange-800 mb-4">
                Short bursts of movement boost mood and energy:
              </p>
              <ul className="text-orange-700 space-y-2">
                <li>Take a <strong>5-minute walk</strong> around campus between classes.</li>
                <li>Do <strong>desk stretches</strong> or light yoga poses at your desk.</li>
                <li>Encourage <strong>laughter breaks</strong> with colleagues.</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-900 mb-4">5. Peer Support & Reflection</h2>
              <p className="text-red-800 mb-4">
                Build a supportive network and practice self-compassion:
              </p>
              <ul className="text-red-700 space-y-2">
                <li><strong>Debrief</strong> weekly with a colleague or mentor—share wins and challenges.</li>
                <li>Keep a <strong>"gratitude journal":</strong> note one positive teaching moment each day.</li>
                <li>Treat mistakes as learning opportunities—avoid dwelling on imperfection.</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Reduce Stress with Smart Technology</h2>
            <p className="text-indigo-800 mb-6">
              Remarkably can help reduce grading stress by automating essay feedback, giving you more time for self-care and what matters most.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
              <button className="bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StressReduction; 