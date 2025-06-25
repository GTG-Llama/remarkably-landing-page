import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Demo from "../pages/Demo";
import Features from "../pages/Features";
import Benefits from "../pages/Benefits";
import Testimonials from "../pages/Testimonials";
import Pricing from "../pages/Pricing";
import QnA from "../pages/QnA";
import AboutUs from "../pages/AboutUs";
import Achievements from "../pages/Achievements";
import RubricGuide from "../pages/RubricGuide";
import StressReduction from "../pages/StressReduction";
import CaseStudy from "../pages/CaseStudy";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import LocalSchoolSG from "../pages/landing/LocalSchoolSG";
import InternationalSchool from "../pages/landing/InternationalSchool";
import VietnamEducation from "../pages/landing/VietnamEducation";
import IndonesiaEducation from "../pages/landing/IndonesiaEducation";
import MalaysiaEducation from "../pages/landing/MalaysiaEducation";
import TuitionCenter from "../pages/landing/TuitionCenter";

const BetaApp = () => (
  <Layout>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="demo" element={<Demo />} />
      <Route path="features" element={<Features />} />
      <Route path="benefits" element={<Benefits />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="qna" element={<QnA />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="rubric-guide" element={<RubricGuide />} />
      <Route path="stress-reduction" element={<StressReduction />} />
      <Route path="case-study" element={<CaseStudy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="local-school" element={<LocalSchoolSG />} />
      <Route path="international-school" element={<InternationalSchool />} />
      <Route path="vietnam" element={<VietnamEducation />} />
      <Route path="indonesia" element={<IndonesiaEducation />} />
      <Route path="malaysia" element={<MalaysiaEducation />} />
      <Route path="tuition" element={<TuitionCenter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default BetaApp; 