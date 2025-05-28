import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const IndonesiaEducation: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | Solusi Penilaian Esai Bahasa Inggris dengan AI untuk Pendidikan Indonesia",
    metaDescription: "Tingkatkan kualitas pendidikan bahasa Inggris dengan platform penilaian esai berbasis AI dari Remarkably. Mendukung Kurikulum Merdeka dan membantu guru menghemat waktu.",
    
    heroTitle: "Revolusikan penilaian esai bahasa Inggris untuk sekolah Indonesia",
    heroSubtitle: "Kurangi waktu mengoreksi hingga 80% sambil memberikan umpan balik berkualitas kepada siswa. Khusus untuk esai bahasa Inggris dalam pendidikan Indonesia.",
    
    keyFeatures: [
      {
        title: "Fokus bahasa Inggris",
        description: "AI kami mengkhususkan diri dalam mengevaluasi esai bahasa Inggris, memberikan penilaian yang akurat untuk kebutuhan pendidikan Indonesia.",
      },
      {
        title: "Selaras dengan Kurikulum Merdeka",
        description: "Dirancang untuk memenuhi persyaratan standar kurikulum nasional Indonesia dan kriteria penilaian bahasa Inggris.",
      },
      {
        title: "Persiapan UN & ANBK Bahasa Inggris",
        description: "Ideal untuk membantu siswa mempersiapkan ujian bahasa Inggris penting dengan umpan balik yang mengikuti skema penilaian resmi.",
      },
      {
        title: "Penilaian yang efisien waktu",
        description: "Kurangi waktu mengoreksi dari 15 menit menjadi hanya 3 menit per esai, menghemat ratusan jam setiap tahun akademik.",
      },
      {
        title: "Analitik komprehensif",
        description: "Lacak kemajuan siswa dari waktu ke waktu, identifikasi kekuatan dan kelemahan dalam penulisan bahasa Inggris, dan buat laporan untuk orang tua dan pimpinan sekolah.",
      },
      {
        title: "Dukungan esai tulisan tangan",
        description: "Sistem kami dapat memproses esai bahasa Inggris digital maupun tulisan tangan, mengakomodasi berbagai kondisi penilaian.",
      },
    ],
    
    benefits: [
      {
        title: "Keunggulan bahasa Inggris",
        description: "Bantu sekolah Indonesia mempertahankan reputasi standar bahasa Inggris yang tinggi sambil mengadopsi teknologi pendidikan.",
      },
      {
        title: "Kesejahteraan guru",
        description: "Kurangi kelelahan guru dan tingkatkan keseimbangan kerja-hidup dengan mengotomatisasi tugas mengoreksi esai bahasa Inggris yang memakan waktu.",
      },
      {
        title: "Pendidikan berbasis data",
        description: "Dukung tujuan Kurikulum Merdeka Indonesia untuk pengajaran dan pembelajaran berbasis bukti dengan analitik terperinci untuk pengembangan bahasa Inggris.",
      },
      {
        title: "Peningkatan hasil belajar siswa",
        description: "Berikan umpan balik yang konsisten dan terperinci yang membantu siswa meningkatkan kemampuan menulis bahasa Inggris dan prestasi akademik.",
      },
    ],
    
    ctaTitle: "Jadikan sekolah Anda ",
    ctaSubtitle: "Bergabunglah dengan sekolah-sekolah maju di Indonesia yang sudah menggunakan Remarkably untuk mentransformasi pendekatan penilaian esai bahasa Inggris mereka.",
    ctaButtonText: "Jadwalkan Demo Gratis",
    
    ctaFeatures: [
      "Keahlian penilaian bahasa Inggris",
      "Kriteria penilaian bahasa Inggris selaras Kemendikbudristek",
      "Pelatihan guru dan implementasi",
      "Dashboard analitik bahasa Inggris se-sekolah",
      "Kustomisasi sesuai kebutuhan sekolah Anda"
    ],
    
    curriculumSection: {
      title: "Mendukung kurikulum bahasa Inggris Indonesia",
      items: [
        "Bahasa Inggris Kurikulum Merdeka",
        "Bahasa Inggris SMP",
        "Bahasa Inggris SMA",
        "Persiapan ANBK Bahasa Inggris",
        "Sekolah internasional - Bahasa Inggris",
        "Cambridge First Certificate",
        "Cambridge Advanced",
        "IELTS",
        "TOEFL",
        "Kualifikasi Bahasa Inggris Cambridge"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default IndonesiaEducation; 