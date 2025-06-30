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
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* For Teachers Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">For Teachers</h3>
                <p className="text-sm text-gray-600">Individual educator solutions</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {teacherFeatures.map((feature, index) => (
                <motion.div key={feature.name} variants={itemVariants}>
                  <Link
                    to={feature.path}
                    onClick={onClose}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {feature.name}
                        </h4>
                        {feature.badge && (
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getBadgeColor(feature.badge)}`}>
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Schools Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">For Schools</h3>
                <p className="text-sm text-gray-600">Enterprise & institutional solutions</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {schoolFeatures.map((feature, index) => (
                <motion.div key={feature.name} variants={itemVariants}>
                  <Link
                    to={feature.path}
                    onClick={onClose}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-100 transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {feature.name}
                        </h4>
                        {feature.badge && (
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getBadgeColor(feature.badge)}`}>
                            {feature.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-gray-900 mb-1">Not sure which solution fits your needs?</h4>
              <p className="text-sm text-gray-600">Our team can help you choose the right plan for your specific requirements.</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/beta/demo"
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Book Demo
              </Link>
              <Link
                to="/beta/contact"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
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