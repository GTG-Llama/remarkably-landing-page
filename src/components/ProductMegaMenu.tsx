import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  MessageSquare,
  Upload,
  CreditCard,
  Settings,
  Building,
  Palette,
  Cog,
  ArrowRight 
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const teacherFeatures = [
    {
      name: 'Handwriting Recognition',
      description: 'AI that reads and grades handwritten essays with 95%+ accuracy',
      icon: <Brain className="w-5 h-5" />,
      path: '/beta/features/handwriting-recognition',
      badge: 'Popular'
    },
    {
      name: 'Personalized Feedback',
      description: 'Generate detailed feedback that matches your teaching style',
      icon: <MessageSquare className="w-5 h-5" />,
      path: '/beta/features/feedback-generation'
    },
    {
      name: 'Instant Grading',
      description: 'Grade entire classes in minutes instead of hours',
      icon: <Zap className="w-5 h-5" />,
      path: '/beta/features/instant-grading',
      badge: 'New'
    },
    {
      name: 'Custom Rubric Upload',
      description: 'Upload your rubrics and let AI grade to your exact standards',
      icon: <Upload className="w-5 h-5" />,
      path: '/beta/contact',
      badge: 'Coming Soon'
    }
  ];

  const schoolFeatures = [
    {
      name: 'Teacher Style Learning',
      description: 'AI adapts to each teacher\'s grading style and feedback preferences',
      icon: <Target className="w-5 h-5" />,
      path: '/beta/features/teacher-style-learning',
      badge: 'Enterprise'
    },
    {
      name: 'Analytics & Progress Tracking',
      description: 'Track class performance, student improvement, and generate reports',
      icon: <BarChart3 className="w-5 h-5" />,
      path: '/beta/features/analytics-dashboard'
    },
    {
      name: 'Batch Processing',
      description: 'Grade entire classes simultaneously with consistent quality',
      icon: <Users className="w-5 h-5" />,
      path: '/beta/features/instant-grading'
    },
    {
      name: 'Enterprise Solutions',
      description: 'Custom deployment, training, and white-label implementation services',
      icon: <Building className="w-5 h-5" />,
      path: '/beta/contact',
      badge: 'Custom'
    }
  ];

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Popular': return 'bg-blue-100 text-blue-700';
      case 'New': return 'bg-green-100 text-green-700';
      case 'Enterprise': return 'bg-purple-100 text-purple-700';
      case 'Custom': return 'bg-orange-100 text-orange-700';
      case 'Coming Soon': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50"
    >
      <div className="container mx-auto px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* For Teachers Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">For Teachers</h3>
                <p className="text-gray-600 font-medium">Individual educator solutions</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {teacherFeatures.map((feature, index) => (
                <motion.div key={feature.name} variants={itemVariants}>
                  <Link
                    to={feature.path}
                    onClick={onClose}
                    className="group flex items-start gap-5 p-5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-transparent hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {feature.name}
                        </h4>
                        {feature.badge && (
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getBadgeColor(feature.badge)} shadow-sm`}>
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Schools Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">For Schools</h3>
                <p className="text-gray-600 font-medium">Enterprise & institutional solutions</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {schoolFeatures.map((feature, index) => (
                <motion.div key={feature.name} variants={itemVariants}>
                  <Link
                    to={feature.path}
                    onClick={onClose}
                    className="group flex items-start gap-5 p-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 transition-all duration-300 border border-transparent hover:border-purple-200 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {feature.name}
                        </h4>
                        {feature.badge && (
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getBadgeColor(feature.badge)} shadow-sm`}>
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Not sure which solution fits your needs?</h4>
              <p className="text-gray-600 font-medium">Our team can help you choose the right plan for your specific requirements.</p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/beta/demo"
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Demo
              </Link>
              <Link
                to="/beta/contact"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductMegaMenu;