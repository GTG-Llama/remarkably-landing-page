import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Brain, CheckCircle, MessageCircle } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
  action: string;
}

const AutoDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      id: 'upload',
      title: 'Upload Essay',
      description: 'Teacher uploads a handwritten student essay',
      icon: <Upload className="w-6 h-6" />,
      duration: 2000,
      action: 'Uploading essay...'
    },
    {
      id: 'analyze',
      title: 'AI Analysis',
      description: 'Remarkably analyzes content and structure',
      icon: <Brain className="w-6 h-6" />,
      duration: 3000,
      action: 'Analyzing handwriting and content...'
    },
    {
      id: 'grade',
      title: 'Generate Grade',
      description: 'AI provides grade based on teacher\'s rubric',
      icon: <CheckCircle className="w-6 h-6" />,
      duration: 2000,
      action: 'Generating grade: A-'
    },
    {
      id: 'feedback',
      title: 'Personalized Feedback',
      description: 'Detailed comments in teacher\'s style',
      icon: <MessageCircle className="w-6 h-6" />,
      duration: 3000,
      action: 'Writing personalized feedback...'
    }
  ];

  // Auto-advance through steps
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep, isPlaying, steps]);

  // Simulate cursor movement
  useEffect(() => {
    if (!demoRef.current) return;

    const rect = demoRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Different cursor positions for each step
    const positions = [
      { x: centerX - 100, y: centerY - 50 }, // Upload position
      { x: centerX, y: centerY }, // Analyze center
      { x: centerX + 80, y: centerY - 30 }, // Grade position
      { x: centerX - 50, y: centerY + 50 }, // Feedback position
    ];

    setShowCursor(true);
    setCursorPosition(positions[currentStep] || positions[0]);

    // Hide cursor after movement
    const hideTimer = setTimeout(() => setShowCursor(false), 1000);
    return () => clearTimeout(hideTimer);
  }, [currentStep]);

  const mockEssayPreview = `
    The Great Gatsby
    
    In F. Scott Fitzgerald's masterpiece, 
    the green light represents hope and 
    the American Dream. Gatsby's pursuit
    of Daisy symbolizes the corruption
    of idealistic dreams by reality...
  `;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border-4 border-black shadow-xl rounded-none overflow-hidden">
      {/* Demo Header */}
      <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 font-mono text-sm">remarkably.ink/grade</span>
        </div>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-3 py-1 bg-yellow-300 text-black font-bold text-xs border border-white rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Demo Content */}
      <div ref={demoRef} className="relative p-8 min-h-[400px] bg-gray-50">
        {/* Animated Cursor */}
        <AnimatePresence>
          {showCursor && (
            <motion.div
              className="absolute pointer-events-none z-50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: cursorPosition.x,
                y: cursorPosition.y,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Current Step Indicator */}
            <div className="flex items-center gap-4 p-4 bg-yellow-100 border-2 border-black">
              <div className="w-12 h-12 bg-yellow-300 border-2 border-black flex items-center justify-center">
                {steps[currentStep].icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{steps[currentStep].title}</h3>
                <p className="text-sm text-gray-600">{steps[currentStep].action}</p>
              </div>
            </div>

            {/* Mock Interface Based on Step */}
            {currentStep === 0 && (
              <motion.div 
                className="border-2 border-dashed border-gray-400 p-8 text-center bg-white"
                animate={{ borderColor: ["#9ca3af", "#3b82f6", "#9ca3af"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Drop essay file here or click to upload</p>
                <motion.div 
                  className="mt-4 w-32 h-2 bg-blue-500 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>
            )}

            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-black p-4">
                  <h4 className="font-bold mb-2">Essay Preview</h4>
                  <div className="text-sm font-mono bg-gray-100 p-3 whitespace-pre-line">
                    {mockEssayPreview}
                  </div>
                </div>
                <div className="bg-white border-2 border-black p-4">
                  <h4 className="font-bold mb-2">AI Analysis</h4>
                  <div className="space-y-2">
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Structure: Excellent</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Grammar: Good</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Content: Strong</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white border-2 border-black p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                  className="w-24 h-24 bg-green-500 border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-3xl font-black text-white">A-</span>
                </motion.div>
                <h4 className="text-2xl font-bold mb-2">Grade Generated</h4>
                <p className="text-gray-600">Based on your custom rubric</p>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white border-2 border-black p-6">
                <h4 className="font-bold mb-4">Personalized Feedback</h4>
                <div className="space-y-3">
                  <motion.div 
                    className="bg-green-50 border-l-4 border-green-500 p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm"><strong>Strength:</strong> Excellent thesis statement with clear argument.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-yellow-50 border-l-4 border-yellow-500 p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <p className="text-sm"><strong>Improvement:</strong> Consider adding more textual evidence in paragraph 3.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-blue-50 border-l-4 border-blue-500 p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <p className="text-sm"><strong>Next Steps:</strong> Work on transition sentences between paragraphs.</p>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-center mb-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold ${
                  index <= currentStep ? 'bg-yellow-300' : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-300 h-2 border border-black">
            <motion.div
              className="h-full bg-yellow-300"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoDemo;