import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const TuitionCenter: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI Essay Grading for Tuition Centers",
    metaDescription: "Scale your tuition center with Remarkably's AI essay grading solution. Provide premium feedback, save tutor time, and differentiate your services from competitors.",
    
    heroTitle: "Transform Your Tuition Center with AI-Powered Essay Assessment",
    heroSubtitle: "Stand out from competitors by offering detailed, consistent feedback while saving your tutors hours of marking time.",
    
    keyFeatures: [
      {
        title: "Tutor Time Optimization",
        description: "Reduce essay marking time by 80%, allowing tutors to focus on direct student engagement and personalized instruction.",
      },
      {
        title: "Premium Student Feedback",
        description: "Provide detailed, actionable feedback that helps students improve faster—a key differentiator for your tuition center.",
      },
      {
        title: "Multi-curriculum Support",
        description: "Adaptable to various curricula including MOE, IB, Cambridge, and entrance exam requirements that your students are preparing for.",
      },
      {
        title: "Progress Tracking",
        description: "Show parents tangible results with detailed analytics and progress reports, helping retain students and justify premium fees.",
      },
      {
        title: "Scalable Solution",
        description: "Handle more students without compromising quality, enabling your tuition center to grow without proportionally increasing staff.",
      },
      {
        title: "White-Labeled Reports",
        description: "Customize feedback reports with your tuition center's branding to enhance your professional image and marketing materials.",
      },
    ],
    
    benefits: [
      {
        title: "Business Growth",
        description: "Increase capacity and profitability by serving more students effectively without sacrificing quality or increasing staff costs proportionally.",
      },
      {
        title: "Competitive Advantage",
        description: "Stand out in the crowded tuition market by offering AI-enhanced learning experiences that traditional centers cannot match.",
      },
      {
        title: "Parent Satisfaction",
        description: "Demonstrate exceptional value to parents through detailed progress reports and consistent, high-quality feedback.",
      },
      {
        title: "Tutor Retention",
        description: "Keep your best tutors by eliminating mundane marking tasks and allowing them to focus on impactful teaching activities.",
      },
    ],
    
    ctaTitle: "Make Your Tuition Center ",
    ctaSubtitle: "Join successful tuition centers using Remarkably to deliver exceptional results and grow their business.",
    ctaButtonText: "Get a Tuition Center Demo",
    
    ctaFeatures: [
      "Branding customization for your center",
      "Parent-friendly reporting interface",
      "Tutor training and support",
      "Integration with your existing systems",
      "Flexible pricing based on student volume"
    ],
    
    curriculumSection: {
      title: "Supporting Diverse Student Needs",
      items: [
        "PSLE English",
        "O-Level English Language",
        "A-Level General Paper",
        "IP English",
        "IB English A & B",
        "IGCSE First & Second Language",
        "SAT/ACT Preparation",
        "IELTS/TOEFL",
        "Creative Writing",
        "Primary/Secondary Composition"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default TuitionCenter; 