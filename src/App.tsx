import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Features from "./pages/Features";
import Benefits from "./pages/Benefits";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import QnA from "./pages/QnA";
import AboutUs from "./pages/AboutUs";
import Achievements from "./pages/Achievements";
import RubricGuide from "./pages/RubricGuide";
import StressReduction from "./pages/StressReduction";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import LocalSchoolSG from "./pages/landing/LocalSchoolSG";
import InternationalSchool from "./pages/landing/InternationalSchool";
import VietnamEducation from "./pages/landing/VietnamEducation";
import IndonesiaEducation from "./pages/landing/IndonesiaEducation";
import MalaysiaEducation from "./pages/landing/MalaysiaEducation";
import TuitionCenter from "./pages/landing/TuitionCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/features" element={<Features />} />
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
              <Route path="/local-school" element={<LocalSchoolSG />} />
              <Route path="/international-school" element={<InternationalSchool />} />
              <Route path="/vietnam" element={<VietnamEducation />} />
              <Route path="/indonesia" element={<IndonesiaEducation />} />
              <Route path="/malaysia" element={<MalaysiaEducation />} />
              <Route path="/tuition" element={<TuitionCenter />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
