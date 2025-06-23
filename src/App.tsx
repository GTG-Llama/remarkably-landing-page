import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import LocalSchoolSG from "./pages/landing/LocalSchoolSG";
import InternationalSchool from "./pages/landing/InternationalSchool";
import VietnamEducation from "./pages/landing/VietnamEducation";
import IndonesiaEducation from "./pages/landing/IndonesiaEducation";
import MalaysiaEducation from "./pages/landing/MalaysiaEducation";
import TuitionCenter from "./pages/landing/TuitionCenter";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Achievements from "./pages/Achievements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/local-school" element={<LocalSchoolSG />} />
          <Route path="/international-school" element={<InternationalSchool />} />
          <Route path="/vietnam" element={<VietnamEducation />} />
          <Route path="/indonesia" element={<IndonesiaEducation />} />
          <Route path="/malaysia" element={<MalaysiaEducation />} />
          <Route path="/tuition" element={<TuitionCenter />} />
          
          {/* New Routes */}
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
