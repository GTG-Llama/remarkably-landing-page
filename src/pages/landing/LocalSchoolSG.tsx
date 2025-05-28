import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const LocalSchoolSG: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI-Powered Essay Grading for Singapore Schools",
    metaDescription: "Transform essay grading in your school with Remarkably. Our AI-powered platform supports MOE curriculum for English essays, saving teachers time while providing accurate, detailed feedback for students.",
    
    heroTitle: "Empower Your Teachers with AI-Powered English Essay Grading for Singapore Schools",
    heroSubtitle: "Reduce marking workload by 80% while maintaining the high standards Singapore education is known for. Perfect for English Language, General Paper, and Social Studies.",
    
    keyFeatures: [
      {
        title: "MOE-Aligned English Grading",
        description: "Our AI understands Singapore's MOE marking rubrics and grading standards for accurate, curriculum-aligned assessment of English essays.",
      },
      {
        title: "English Language Focus",
        description: "Specialized in grading English language essays to serve Singapore's educational priorities with maximum accuracy and relevance.",
      },
      {
        title: "Time-Saving Automation",
        description: "Reduce marking time from 15 minutes to just 3 minutes per essay, freeing teachers for meaningful instruction.",
      },
      {
        title: "Detailed Analytics",
        description: "Track student progress across classes and cohorts with insights aligned to MOE achievement bands.",
      },
      {
        title: "Standardized Feedback",
        description: "Ensure consistent grading across different teachers and departments throughout the academic year.",
      },
      {
        title: "Handwritten Essay Support",
        description: "Our system can process both digital and handwritten English essays, ideal for exam conditions in Singapore schools.",
      },
    ],
    
    benefits: [
      {
        title: "Teacher Wellness",
        description: "Reduce burnout and improve work-life balance by automating time-consuming essay marking, particularly during peak periods like mid-year and final exams.",
      },
      {
        title: "Enhanced Learning Outcomes",
        description: "Provide more timely and comprehensive feedback to help students improve their English writing skills and academic performance.",
      },
      {
        title: "Data-Driven Instruction",
        description: "Identify trends and gaps in student learning to inform teaching strategies and interventions aligned with MOE's emphasis on evidence-based pedagogy.",
      },
      {
        title: "Improved School Rankings",
        description: "Support better academic performance that can positively impact your school's standing in Singapore's education landscape.",
      },
    ],
    
    ctaTitle: "Ready to Make Your School ",
    ctaSubtitle: "Join forward-thinking Singapore schools already using Remarkably to transform their approach to English essay assessment.",
    ctaButtonText: "Book a School Demo",
    
    ctaFeatures: [
      "Free personalized onboarding for your school",
      "MOE curriculum-aligned AI essay grading for English",
      "Teacher training and support",
      "School-wide analytics dashboard",
      "Customized implementation plan"
    ],
    
    curriculumSection: {
      title: "Supporting English Subjects in Singapore's Curriculum",
      items: [
        "PSLE English",
        "O-Level English Language",
        "O-Level Literature in English",
        "A-Level General Paper",
        "A-Level Knowledge & Inquiry",
        "Secondary English",
        "Normal (Academic) English",
        "Normal (Technical) English",
        "IP Programme English",
        "Social Studies (English responses)"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default LocalSchoolSG; 