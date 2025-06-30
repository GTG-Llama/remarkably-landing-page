import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const Demo = lazy(() => import("./pages/Demo"));
const Features = lazy(() => import("./pages/Features"));
const Benefits = lazy(() => import("./pages/Benefits"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Pricing = lazy(() => import("./pages/Pricing"));
const QnA = lazy(() => import("./pages/QnA"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Achievements = lazy(() => import("./pages/Achievements"));
const RubricGuide = lazy(() => import("./pages/RubricGuide"));
const StressReduction = lazy(() => import("./pages/StressReduction"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Contact = lazy(() => import("./pages/Contact"));
const LocalSchoolSG = lazy(() => import("./pages/landing/LocalSchoolSG"));
const InternationalSchool = lazy(() => import("./pages/landing/InternationalSchool"));
const VietnamEducation = lazy(() => import("./pages/landing/VietnamEducation"));
const IndonesiaEducation = lazy(() => import("./pages/landing/IndonesiaEducation"));
const MalaysiaEducation = lazy(() => import("./pages/landing/MalaysiaEducation"));
const TuitionCenter = lazy(() => import("./pages/landing/TuitionCenter"));
const HandwritingRecognition = lazy(() => import("./pages/features/HandwritingRecognition"));
const TeacherStyleLearning = lazy(() => import("./pages/features/TeacherStyleLearning"));
const InstantGrading = lazy(() => import("./pages/features/InstantGrading"));
const AnalyticsDashboard = lazy(() => import("./pages/features/AnalyticsDashboard"));
const FeedbackGeneration = lazy(() => import("./pages/features/FeedbackGeneration"));
const StudentTracking = lazy(() => import("./pages/features/StudentTracking"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      <p className="text-gray-600 font-medium">Loading Remarkably...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

// Component to handle beta redirects
const BetaRedirect = () => {
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace('/beta', '') || '/';
  return <Navigate to={newPath} replace />;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<LoadingSpinner />}>
              <Layout>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/features/handwriting-recognition" element={<HandwritingRecognition />} />
                  <Route path="/features/teacher-style-learning" element={<TeacherStyleLearning />} />
                  <Route path="/features/instant-grading" element={<InstantGrading />} />
                  <Route path="/features/analytics-dashboard" element={<AnalyticsDashboard />} />
                  <Route path="/features/feedback-generation" element={<FeedbackGeneration />} />
                  <Route path="/features/student-tracking" element={<StudentTracking />} />
                  <Route path="/benefits" element={<Benefits />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/qna" element={<QnA />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/rubric-guide" element={<RubricGuide />} />
                  <Route path="/stress-reduction" element={<StressReduction />} />
                  <Route path="/case-study" element={<CaseStudy />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Landing Pages */}
                  <Route path="/local-school" element={<LocalSchoolSG />} />
                  <Route path="/international-school" element={<InternationalSchool />} />
                  <Route path="/vietnam" element={<VietnamEducation />} />
                  <Route path="/indonesia" element={<IndonesiaEducation />} />
                  <Route path="/malaysia" element={<MalaysiaEducation />} />
                  <Route path="/tuition" element={<TuitionCenter />} />
                  
                  {/* 301 Redirects for Beta URLs - SEO Preservation */}
                  <Route path="/beta/*" element={<BetaRedirect />} />
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;


