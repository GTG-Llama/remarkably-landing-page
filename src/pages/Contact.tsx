import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { emailjsConfig } from "@/lib/emailjs-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Contact form validation schema using Zod
 * Only first name, last name, and email are required
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
 * Contact page component with form submission and email integration
 */
const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
   * @param data - Form data containing user contact information
   */
  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setIsSubmitting(true);

    try {
      console.log("🚀 Starting email send process...");
      console.log("📧 EmailJS Config:", {
        publicKey: emailjsConfig.publicKey ? "✅ Set" : "❌ Missing",
        serviceId: emailjsConfig.serviceId ? "✅ Set" : "❌ Missing", 
        templateId: emailjsConfig.templateId ? "✅ Set" : "❌ Missing",
      });
      console.log("📝 Form data:", data);

      // Initialize EmailJS with config
      await emailjs.init(emailjsConfig.publicKey);
      console.log("✅ EmailJS initialized successfully");

      // Send welcome email to the user
      const emailParams = {
        to_email: data.email,
        to_name: `${data.firstName} ${data.lastName}`,
        from_name: "Remarkably Team",
        first_name: data.firstName,
        last_name: data.lastName,
        company: data.company || "",
        role: data.role || "",
        message: data.message || "No specific message provided",
      };

      console.log("📨 Email params:", emailParams);

      // Send the email using config values
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailParams
      );

      console.log("✅ Email sent successfully:", result);

      // Show success state
      setIsSubmitted(true);
      reset();

      toast({
        title: "Message sent successfully! 📧",
        description: "We've sent you a welcome email and will be in touch soon.",
      });
    } catch (error) {
      console.error("❌ Full error details:", error);
      console.error("❌ Error message:", error.message);
      console.error("❌ Error text:", error.text);
      console.error("❌ Error status:", error.status);
      
      // More specific error messages
      let errorMessage = "Please try again or contact us directly.";
      
      if (error.status === 404) {
        errorMessage = "EmailJS service not found. Please check your Service ID.";
      } else if (error.status === 401) {
        errorMessage = "Authentication failed. Please check your Public Key.";
      } else if (error.text?.includes("template")) {
        errorMessage = "Email template error. Please check your Template ID.";
      } else if (error.text?.includes("service")) {
        errorMessage = "Email service error. Please check your Service ID.";
      }

      toast({
        title: "Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for form elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <Header />
        <div className="flex items-center justify-center p-4 pt-32">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h1>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              We've received your message and sent you a welcome email. Our team will be in touch soon.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                Send Another Message
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Book Your <span className="bg-yellow-300 px-3 py-1 transform rotate-1 inline-block border-4 border-black shadow-lg">Free Demo</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Ready to transform your marking process? Let's chat about how Remarkably can help your school save time and money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-1 space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <CardHeader>
                    <CardTitle className="text-2xl font-black">Contact Info</CardTitle>
                    <CardDescription>Get in touch with our team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-300 border-2 border-black rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">Email</p>
                        <p className="text-gray-600">contact@lenorai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-300 border-2 border-black rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">Phone</p>
                        <p className="text-gray-600">+65 8260 8445</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-300 border-2 border-black rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">Location</p>
                        <p className="text-gray-600">Singapore</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-yellow-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Quick Response Guarantee</h3>
                    <p className="text-sm text-gray-700">
                      We respond to all inquiries as soon as possible. For urgent matters, please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a personalized demo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Fields */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-bold">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          className="border-2 border-black focus:border-blue-500"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-sm font-medium">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-bold">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          className="border-2 border-black focus:border-blue-500"
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-sm font-medium">{errors.lastName.message}</p>
                        )}
                      </div>
                    </motion.div>

                    {/* Email Field - Full Width */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="email" className="font-bold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="border-2 border-black focus:border-blue-500"
                        placeholder="john@school.edu"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm font-medium">{errors.email.message}</p>
                      )}
                    </motion.div>

                    {/* Company and Role - Optional */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-bold">
                          School/Organization
                        </Label>
                        <Input
                          id="company"
                          {...register("company")}
                          className="border-2 border-black focus:border-blue-500"
                          placeholder="ABC International School"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role" className="font-bold">
                          Your Role
                        </Label>
                        <Input
                          id="role"
                          {...register("role")}
                          className="border-2 border-black focus:border-blue-500"
                          placeholder="Head of Department"
                        />
                      </div>
                    </motion.div>

                    {/* Message - Optional */}
                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="message" className="font-bold">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="border-2 border-black focus:border-blue-500 min-h-[120px]"
                        placeholder="Tell us about your school's marking challenges and how we can help... (optional)"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors text-lg font-bold py-6"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message & Get Welcome Email
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact; 