import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const MalaysiaEducation: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI-Powered Essay Grading for Malaysian Education",
    metaDescription: "Transform essay assessment in Malaysian schools with Remarkably's AI platform. Support for KSSM, SPM, and STPM curricula while saving teachers valuable time.",
    
    heroTitle: "Revolutionize Essay Assessment for Malaysian Schools",
    heroSubtitle: "Reduce marking time by 80% while providing quality feedback to students. Supports Bahasa Malaysia, English, and Chinese language essays.",
    
    keyFeatures: [
      {
        title: "Multilingual Support",
        description: "Our AI understands and evaluates essays in Bahasa Malaysia, English, and Chinese, perfect for Malaysia's multicultural education system.",
      },
      {
        title: "KSSM & KBSM Aligned",
        description: "Designed to meet the requirements of Malaysia's national curriculum standards and assessment criteria.",
      },
      {
        title: "SPM & STPM Preparation",
        description: "Ideal for helping students prepare for crucial national examinations with feedback that follows official marking schemes.",
      },
      {
        title: "Time-Efficient Grading",
        description: "Reduce marking time from 15 minutes to just 3 minutes per essay, saving teachers hundreds of hours each academic year.",
      },
      {
        title: "Comprehensive Analytics",
        description: "Track student progress across time, identify strengths and weaknesses, and generate reports for parents and school leadership.",
      },
      {
        title: "Handwritten Essay Support",
        description: "Our system can process both digital and handwritten essays, accommodating various assessment conditions.",
      },
    ],
    
    benefits: [
      {
        title: "Educational Excellence",
        description: "Help Malaysian schools maintain their reputation for high educational standards while embracing educational technology.",
      },
      {
        title: "Teacher Wellbeing",
        description: "Reduce teacher burnout and improve work-life balance by automating time-consuming marking tasks.",
      },
      {
        title: "Data-Driven Education",
        description: "Support Malaysia's Education Blueprint goals for evidence-based teaching and learning with detailed analytics.",
      },
      {
        title: "Enhanced Student Outcomes",
        description: "Provide consistent, detailed feedback that helps students improve their writing skills and academic performance.",
      },
    ],
    
    ctaTitle: "Make Your School ",
    ctaSubtitle: "Join forward-thinking Malaysian schools that are already using Remarkably to transform their approach to essay assessment.",
    ctaButtonText: "Book a Free Demo",
    
    ctaFeatures: [
      "Multilingual user interface and support",
      "MOE-aligned assessment criteria",
      "Teacher training and implementation",
      "School-wide analytics dashboard",
      "Customization for your school's needs"
    ],
    
    curriculumSection: {
      title: "Supporting Malaysian Curricula",
      items: [
        "KSSM Bahasa Malaysia",
        "KSSM English Language",
        "SPM Bahasa Malaysia",
        "SPM English",
        "STPM Pengajian Am",
        "STPM Literature",
        "Chinese Independent Schools",
        "IGCSE in Malaysian Schools",
        "International Baccalaureate",
        "MUET Preparation"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default MalaysiaEducation; 