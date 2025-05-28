import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const TuitionCenter: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI English Essay Grading for Tuition Centers",
    metaDescription: "Scale your tuition center with Remarkably's AI English essay grading solution. Provide premium feedback, save tutor time, and differentiate your services from competitors.",
    
    heroTitle: "Transform Your Tuition Center with AI-Powered English Essay Assessment",
    heroSubtitle: "Stand out from competitors by offering detailed, consistent feedback for English essays while saving your tutors hours of marking time.",
    
    keyFeatures: [
      {
        title: "Tutor Time Optimization",
        description: "Reduce English essay marking time by 80%, allowing tutors to focus on direct student engagement and personalized instruction.",
      },
      {
        title: "Premium English Feedback",
        description: "Provide detailed, actionable feedback that helps students improve their English writing skills faster—a key differentiator for your tuition center.",
      },
      {
        title: "English Curriculum Support",
        description: "Adaptable to various English curricula including MOE, IB, Cambridge, and entrance exam requirements that your students are preparing for.",
      },
      {
        title: "English Progress Tracking",
        description: "Show parents tangible results with detailed analytics and progress reports on English writing skills, helping retain students and justify premium fees.",
      },
      {
        title: "Scalable Solution",
        description: "Handle more English essay assignments without compromising quality, enabling your tuition center to grow without proportionally increasing staff.",
      },
      {
        title: "White-Labeled Reports",
        description: "Customize English essay feedback reports with your tuition center's branding to enhance your professional image and marketing materials.",
      },
    ],
    
    benefits: [
      {
        title: "Business Growth",
        description: "Increase capacity and profitability by serving more English students effectively without sacrificing quality or increasing staff costs proportionally.",
      },
      {
        title: "Competitive Advantage",
        description: "Stand out in the crowded tuition market by offering AI-enhanced English learning experiences that traditional centers cannot match.",
      },
      {
        title: "Parent Satisfaction",
        description: "Demonstrate exceptional value to parents through detailed English progress reports and consistent, high-quality feedback.",
      },
      {
        title: "Tutor Retention",
        description: "Keep your best English tutors by eliminating mundane marking tasks and allowing them to focus on impactful teaching activities.",
      },
    ],
    
    ctaTitle: "Make Your Tuition Center ",
    ctaSubtitle: "Join successful tuition centers using Remarkably to deliver exceptional results in English instruction and grow their business.",
    ctaButtonText: "Get a Tuition Center Demo",
    
    ctaFeatures: [
      "Branding customization for your center",
      "English-focused parent reporting interface",
      "Tutor training and support",
      "Integration with your existing systems",
      "Flexible pricing based on student volume"
    ],
    
    curriculumSection: {
      title: "Supporting English Language Learning",
      items: [
        "PSLE English",
        "O-Level English Language",
        "A-Level General Paper",
        "IP English",
        "IB English A & B",
        "IGCSE First & Second Language English",
        "SAT/ACT English Preparation",
        "IELTS/TOEFL",
        "Creative Writing in English",
        "Primary/Secondary English Composition"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default TuitionCenter; 