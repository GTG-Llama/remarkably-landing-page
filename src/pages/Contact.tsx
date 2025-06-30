import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare,
  Clock,
  Shield,
  Sparkles,
  Users,
  Calendar,
  Zap,
  Globe,
  Video,
  HeadphonesIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { emailjsConfig, emailjsValidation } from "@/lib/emailjs-config";
import ComponentErrorBoundary from "@/components/ComponentErrorBoundary";
import SEOHead from "@/components/SEOHead";
import { getPageSEO } from "../utils/seo-config";

/**
 * Contact form validation schema using Zod
 */
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  role: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact page component with side-by-side layout
 */
const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  /**
   * Handles form submission and sends welcome email using EmailJS
   */
  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);

    // Pre-validate EmailJS configuration
    if (!emailjsValidation.isValid) {
      console.error("[Contact Form] EmailJS configuration is invalid:", emailjsValidation.errors);
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please check console for details.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("[Contact Form] Environment variables:", {
        VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "✅ Set" : "❌ Not set",
        VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID ? "✅ Set" : "❌ Not set",
        VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? "✅ Set" : "❌ Not set"
      });
      
      console.log("[Contact Form] Initializing EmailJS with config:", {
        publicKey: emailjsConfig.publicKey.substring(0, 6) + "...",
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKeyFull: emailjsConfig.publicKey,
        isProduction: !import.meta.env.DEV
      });

      await emailjs.init(emailjsConfig.publicKey);

      const emailParams = {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        to_name: `${data.firstName} ${data.lastName}`,
        from_name: "Remarkably Team", 
        first_name: data.firstName,
        last_name: data.lastName,
        company: data.company || "",
        role: data.role || "",
        message: data.message || "No specific message provided",
      };

      console.log("[Contact Form] Sending email with params:", {
        ...emailParams,
        email: emailParams.email.substring(0, 3) + "***"
      });

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailParams
      );

      console.log("[Contact Form] Email sent successfully");
      setIsSubmitted(true);
      reset();

      toast({
        title: "Message sent successfully! 📧",
        description: "We've sent you a welcome email and will be in touch soon.",
      });
    } catch (error: any) {
      console.error("[Contact Form] Error sending email:", error);
      
      let errorMessage = "Please try again or contact us directly.";
      let debugInfo = "";
      
      if (error?.status) {
        switch (error.status) {
          case 404:
            errorMessage = "EmailJS service not found. Please check your Service ID.";
            debugInfo = `Service ID: ${emailjsConfig.serviceId}`;
            break;
          case 401:
            errorMessage = "Authentication failed. Please check your Public Key.";
            debugInfo = `Public Key: ${emailjsConfig.publicKey.substring(0, 6)}...`;
            break;
          case 400:
            errorMessage = "Invalid request. Please check your template configuration.";
            debugInfo = `Template ID: ${emailjsConfig.templateId}`;
            break;
          default:
            errorMessage = `Service error (${error.status}). Please try again.`;
        }
      } else if (error?.text) {
        errorMessage = error.text;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      // Enhanced error logging
      console.error("[Contact Form] Detailed error info:", {
        error,
        config: {
          publicKey: emailjsConfig.publicKey.substring(0, 6) + "...",
          serviceId: emailjsConfig.serviceId,
          templateId: emailjsConfig.templateId
        },
        debugInfo
      });

      toast({
        title: "Something went wrong",
        description: import.meta.env.DEV 
          ? `${errorMessage} (Debug: ${debugInfo})` 
          : errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      contact: "hello@remarkably.ink",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      contact: "+65 8854 0297",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Book Demo",
      contact: "Schedule a call",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const responsePromises = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick Response",
      description: "We respond as soon as we can"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure & Private",
      description: "Your information is protected and never shared"
    },
    {
      icon: <HeadphonesIcon className="h-5 w-5" />,
      title: "Expert Support",
      description: "Get answers from our education specialists"
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <SEOHead 
          config={{
            ...getPageSEO('contact'),
            title: "Message Sent Successfully – Remarkably",
            description: "Thank you for contacting Remarkably. We'll be in touch soon to schedule your personalized demo.",
            canonical: "https://www.remarkably.ink/beta/contact"
          }} 
          pageKey="contact" 
        />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center max-w-lg mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Message Sent Successfully!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                Thank you for reaching out! We've received your message and will get back to you as soon as we can. Check your email for a welcome message with next steps.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <Button
                  onClick={() => window.location.href = '/beta'}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Back to Home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        config={{
          ...getPageSEO('contact'),
          canonical: "https://www.remarkably.ink/beta/contact"
        }} 
        pageKey="contact" 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto min-h-[80vh] items-center"
          >
            
            {/* Left Side - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Hero Content */}
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started Today
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Let's Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">Essay Grading</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Ready to save 5-7x time on grading while providing better feedback? Get a personalized demo and see how Remarkably can revolutionize your teaching workflow.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                {contactMethods.map((method, index) => (
                  <div key={method.title} className="flex items-center space-x-4 p-4 bg-white/70 rounded-xl border border-gray-100">
                    <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{method.title}</div>
                      <div className="text-blue-600 font-medium">{method.contact}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
                {responsePromises.map((promise, index) => (
                  <div key={promise.title} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mt-1">
                      {promise.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{promise.title}</div>
                      <div className="text-sm text-gray-600">{promise.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo CTA */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Ready for Immediate Results?
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      See Remarkably in action with your own essays in our live demo
                    </p>
                    <Button
                      onClick={() => window.location.href = '/beta/demo'}
                      variant="outline"
                      className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300"
                    >
                      Try Live Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Get Your Personalized Demo
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you with a customized demonstration.
                  </p>
                </div>

                <ComponentErrorBoundary 
                  componentName="Contact Form"
                  fallback={
                    <div className="p-6 text-center bg-red-50 rounded-2xl border border-red-200">
                      <p className="text-red-800 font-medium">Contact form temporarily unavailable</p>
                      <p className="text-red-600 text-sm mt-2">Please contact us directly at contact@lenorai.com</p>
                    </div>
                  }
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField(null)}
                          className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                            focusedField === "firstName" 
                              ? "border-blue-400 shadow-lg shadow-blue-100" 
                              : "border-gray-200 hover:border-gray-300"
                          } ${errors.firstName ? "border-red-400" : ""}`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm font-medium">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField(null)}
                          className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                            focusedField === "lastName" 
                              ? "border-blue-400 shadow-lg shadow-blue-100" 
                              : "border-gray-200 hover:border-gray-300"
                          } ${errors.lastName ? "border-red-400" : ""}`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm font-medium">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "email" 
                            ? "border-blue-400 shadow-lg shadow-blue-100" 
                            : "border-gray-200 hover:border-gray-300"
                        } ${errors.email ? "border-red-400" : ""}`}
                        placeholder="john@school.edu"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm font-medium">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Company and Role */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          School/Institution
                        </Label>
                        <Input
                          id="company"
                          {...register("company")}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                            focusedField === "company" 
                              ? "border-blue-400 shadow-lg shadow-blue-100" 
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="ABC International School"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                          Your Role
                        </Label>
                        <Input
                          id="role"
                          {...register("role")}
                          onFocus={() => setFocusedField("role")}
                          onBlur={() => setFocusedField(null)}
                          className={`h-12 border-2 rounded-xl transition-all duration-300 ${
                            focusedField === "role" 
                              ? "border-blue-400 shadow-lg shadow-blue-100" 
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="English Teacher"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Tell us about your needs (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`min-h-[100px] border-2 rounded-xl transition-all duration-300 resize-none ${
                          focusedField === "message" 
                            ? "border-blue-400 shadow-lg shadow-blue-100" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="What specific challenges are you facing with essay grading?"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-5 h-5 mr-3" />
                            Send Message & Get Demo
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </ComponentErrorBoundary>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact; 