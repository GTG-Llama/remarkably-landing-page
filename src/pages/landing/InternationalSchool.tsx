import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const InternationalSchool: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI Essay Grading for International Schools",
    metaDescription: "Elevate your international school's academic excellence with Remarkably's AI-powered essay assessment platform. Supporting IB, Cambridge, AP and other international curricula.",
    
    heroTitle: "World-Class AI Essay Assessment for Global Educational Leaders",
    heroSubtitle: "Join forward-thinking international schools using AI to deliver exceptional educational experiences while reducing teacher workload by up to 80%.",
    
    keyFeatures: [
      {
        title: "International Curriculum Support",
        description: "Designed to work with IB, Cambridge A-Levels, AP, American, British, Australian and other international curricula.",
      },
      {
        title: "Multi-Language Assessment",
        description: "Support for essays in multiple languages to serve your diverse international student body.",
      },
      {
        title: "Global Academic Standards",
        description: "Our AI understands global educational benchmarks while adapting to your school's specific assessment criteria.",
      },
      {
        title: "Advanced Analytics",
        description: "Comprehensive data visualization and insights to track student progress across diverse academic programs.",
      },
      {
        title: "Customizable Rubrics",
        description: "Tailor assessment criteria to match your specific program requirements and educational philosophy.",
      },
      {
        title: "Plagiarism Detection",
        description: "Built-in academic integrity tools to uphold the rigorous standards expected in international education.",
      },
    ],
    
    benefits: [
      {
        title: "Academic Excellence",
        description: "Support your reputation for educational distinction with cutting-edge assessment technology that delivers consistent, high-quality feedback.",
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
    ctaSubtitle: "Join prestigious international schools worldwide using Remarkably to transform assessment and instruction.",
    ctaButtonText: "Request International School Demo",
    
    ctaFeatures: [
      "Customized onboarding for international schools",
      "Multiple curriculum framework support",
      "Multilingual assessment capabilities",
      "Global implementation expertise",
      "Priority technical support"
    ],
    
    curriculumSection: {
      title: "Supporting Global Curriculum Frameworks",
      items: [
        "International Baccalaureate (IB)",
        "Cambridge IGCSE",
        "Cambridge A & AS Levels",
        "Advanced Placement (AP)",
        "American Curriculum",
        "British Curriculum",
        "Australian Curriculum",
        "International Primary Curriculum",
        "CBSE/ICSE",
        "Extended Essay",
        "Theory of Knowledge"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default InternationalSchool; 