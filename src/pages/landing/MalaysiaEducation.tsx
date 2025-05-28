import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const MalaysiaEducation: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | AI-Powered English Essay Grading for Malaysian Education",
    metaDescription: "Transform English essay assessment in Malaysian schools with Remarkably's AI platform. Support for KSSM, SPM, and STPM English curricula while saving teachers valuable time.",
    
    heroTitle: "Revolusi penilaian karangan bahasa Inggeris untuk sekolah Malaysia",
    heroSubtitle: "Kurangkan masa menanda hingga 80% sambil memberikan maklum balas berkualiti kepada pelajar. Khusus untuk karangan bahasa Inggeris dalam pendidikan Malaysia.",
    
    keyFeatures: [
      {
        title: "Fokus bahasa Inggeris",
        description: "AI kami mengkhusus dalam menilai karangan bahasa Inggeris, memberikan penilaian yang tepat untuk keperluan pendidikan Malaysia.",
      },
      {
        title: "Selaras dengan KSSM & KBSM",
        description: "Direka untuk memenuhi keperluan standard kurikulum kebangsaan Malaysia dan kriteria penilaian bahasa Inggeris.",
      },
      {
        title: "Persediaan SPM & STPM Bahasa Inggeris",
        description: "Sesuai untuk membantu pelajar bersedia untuk peperiksaan bahasa Inggeris penting dengan maklum balas yang mengikut skim pemarkahan rasmi.",
      },
      {
        title: "Penilaian yang cekap masa",
        description: "Kurangkan masa menanda dari 15 minit kepada hanya 3 minit setiap karangan, menjimatkan beratus jam setiap tahun akademik.",
      },
      {
        title: "Analitik komprehensif",
        description: "Jejaki kemajuan pelajar dari masa ke masa, kenal pasti kekuatan dan kelemahan dalam penulisan bahasa Inggeris, dan jana laporan untuk ibu bapa dan kepimpinan sekolah.",
      },
      {
        title: "Sokongan karangan tulisan tangan",
        description: "Sistem kami boleh memproses karangan bahasa Inggeris digital mahupun tulisan tangan, menampung pelbagai keadaan penilaian.",
      },
    ],
    
    benefits: [
      {
        title: "Kecemerlangan bahasa Inggeris",
        description: "Bantu sekolah Malaysia mengekalkan reputasi untuk standard bahasa Inggeris yang tinggi sambil menerima teknologi pendidikan.",
      },
      {
        title: "Kesejahteraan guru",
        description: "Kurangkan keletihan guru dan tingkatkan keseimbangan kerja-hidup dengan mengautomasikan tugas menanda karangan bahasa Inggeris yang memakan masa.",
      },
      {
        title: "Pendidikan berasaskan data",
        description: "Sokong matlamat Pelan Pembangunan Pendidikan Malaysia untuk pengajaran dan pembelajaran berasaskan bukti dengan analitik terperinci untuk pembangunan bahasa Inggeris.",
      },
      {
        title: "Peningkatan hasil pelajar",
        description: "Berikan maklum balas yang konsisten dan terperinci yang membantu pelajar meningkatkan kemahiran menulis bahasa Inggeris dan prestasi akademik.",
      },
    ],
    
    ctaTitle: "Jadikan sekolah anda ",
    ctaSubtitle: "Sertai sekolah-sekolah progresif di Malaysia yang sudah menggunakan Remarkably untuk mentransformasi pendekatan penilaian karangan bahasa Inggeris mereka.",
    ctaButtonText: "Tempah Demo Percuma",
    
    ctaFeatures: [
      "Kepakaran penilaian bahasa Inggeris",
      "Kriteria penilaian bahasa Inggeris selaras KPM",
      "Latihan guru dan pelaksanaan",
      "Dashboard analitik bahasa Inggeris se-sekolah",
      "Penyesuaian mengikut keperluan sekolah anda"
    ],
    
    curriculumSection: {
      title: "Menyokong kurikulum bahasa Inggeris Malaysia",
      items: [
        "KSSM Bahasa Inggeris",
        "SPM Bahasa Inggeris",
        "STPM Kesusasteraan Inggeris",
        "STPM Kertas Am",
        "Sekolah antarabangsa - Bahasa Inggeris",
        "IGCSE Bahasa Inggeris Bahasa Pertama",
        "IGCSE Bahasa Inggeris Bahasa Kedua",
        "IB Bahasa Inggeris A & B",
        "Persediaan MUET",
        "Kelayakan Bahasa Inggeris Cambridge"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default MalaysiaEducation; 