import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocalSchoolSG from "./pages/landing/LocalSchoolSG";
import InternationalSchool from "./pages/landing/InternationalSchool";
import VietnamEducation from "./pages/landing/VietnamEducation";
import IndonesiaEducation from "./pages/landing/IndonesiaEducation";
import MalaysiaEducation from "./pages/landing/MalaysiaEducation";
import TuitionCenter from "./pages/landing/TuitionCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/local-school" element={<LocalSchoolSG />} />
          <Route path="/international-school" element={<InternationalSchool />} />
          <Route path="/vietnam" element={<VietnamEducation />} />
          <Route path="/indonesia" element={<IndonesiaEducation />} />
          <Route path="/malaysia" element={<MalaysiaEducation />} />
          <Route path="/tuition" element={<TuitionCenter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
