import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const InternationalSchool: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI Essay Grading for International Schools",
    metaDescription: "Elevate your international school's academic excellence with Remarkably's AI-powered English essay assessment platform. Supporting IB, Cambridge, AP and other international curricula.",
    
    heroTitle: "World-Class AI English Essay Assessment for Global Educational Leaders",
    heroSubtitle: "Join forward-thinking international schools using AI to deliver exceptional educational experiences while reducing teacher workload by up to 80%.",
    
    keyFeatures: [
      {
        title: "International Curriculum Support",
        description: "Designed to work with English language components of IB, Cambridge A-Levels, AP, American, British, Australian and other international curricula.",
      },
      {
        title: "English Essay Excellence",
        description: "Specialized in assessing English essays with the accuracy and nuance needed for international academic standards.",
      },
      {
        title: "Global Academic Standards",
        description: "Our AI understands global educational benchmarks for English writing while adapting to your school's specific assessment criteria.",
      },
      {
        title: "Advanced Analytics",
        description: "Comprehensive data visualization and insights to track student progress across diverse academic programs.",
      },
      {
        title: "Customizable Rubrics",
        description: "Tailor English assessment criteria to match your specific program requirements and educational philosophy.",
      },
      {
        title: "Plagiarism Detection",
        description: "Built-in academic integrity tools to uphold the rigorous standards expected in international education.",
      },
    ],
    
    benefits: [
      {
        title: "Academic Excellence",
        description: "Support your reputation for educational distinction with cutting-edge assessment technology that delivers consistent, high-quality feedback on English writing.",
      },
      {
        title: "Teacher Retention",
        description: "Improve faculty satisfaction and retention by reducing administrative workload and allowing teachers to focus on innovative instruction.",
      },
      {
        title: "Competitive Advantage",
        description: "Differentiate your school as a technology-forward institution that embraces AI to enhance educational outcomes.",
      },
      {
        title: "Parent Satisfaction",
        description: "Provide detailed, timely feedback to meet the high expectations of international parents investing in premium education.",
      },
    ],
    
    ctaTitle: "Elevate Your School to ",
    ctaSubtitle: "Join prestigious international schools worldwide using Remarkably to transform English essay assessment and instruction.",
    ctaButtonText: "Request International School Demo",
    
    ctaFeatures: [
      "Customized onboarding for international schools",
      "Multiple English curriculum framework support",
      "English language assessment expertise",
      "Global implementation expertise",
      "Priority technical support"
    ],
    
    curriculumSection: {
      title: "Supporting English in Global Curriculum Frameworks",
      items: [
        "International Baccalaureate (IB) English A & B",
        "Cambridge IGCSE English",
        "Cambridge A & AS Levels English",
        "Advanced Placement (AP) English",
        "American Curriculum English",
        "British Curriculum English",
        "Australian Curriculum English",
        "International Primary Curriculum English",
        "CBSE/ICSE English",
        "IB Extended Essay",
        "Theory of Knowledge (English responses)"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default InternationalSchool; 