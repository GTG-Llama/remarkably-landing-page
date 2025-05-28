import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const IndonesiaEducation: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | Solusi Penilaian Esai dengan AI untuk Pendidikan Indonesia",
    metaDescription: "Tingkatkan kualitas pendidikan dengan platform penilaian esai berbasis AI dari Remarkably. Mendukung Kurikulum Merdeka dan membantu guru menghemat waktu.",
    
    heroTitle: "Revolusi Penilaian Esai untuk Pendidikan Indonesia",
    heroSubtitle: "Kurangi waktu penilaian hingga 80% dan berikan umpan balik yang lebih bermakna. Mendukung Bahasa Indonesia dan Bahasa Inggris.",
    
    keyFeatures: [
      {
        title: "Mendukung Bahasa Indonesia",
        description: "AI kami memahami struktur dan gaya bahasa Indonesia, memberikan penilaian yang akurat sesuai standar nasional.",
      },
      {
        title: "Selaras dengan Kurikulum Merdeka",
        description: "Dirancang untuk mendukung pendekatan pembelajaran berbasis proyek dan penilaian formatif Kurikulum Merdeka.",
      },
      {
        title: "Efisiensi Waktu Guru",
        description: "Kurangi waktu penilaian dari 15 menit menjadi hanya 3 menit per esai, menghemat ratusan jam per tahun ajaran.",
      },
      {
        title: "Analisis Perkembangan Siswa",
        description: "Pantau kemajuan siswa dari waktu ke waktu, identifikasi kekuatan dan kelemahan untuk meningkatkan hasil belajar.",
      },
      {
        title: "Persiapan Ujian Nasional",
        description: "Bantu siswa mempersiapkan diri untuk Asesmen Nasional dengan umpan balik yang sesuai dengan standar penilaian Kemendikbudristek.",
      },
      {
        title: "Dukungan Tulisan Tangan",
        description: "Mampu menilai esai tulisan tangan, ideal untuk kondisi ujian di sekolah-sekolah Indonesia.",
      },
    ],
    
    benefits: [
      {
        title: "Implementasi Teknologi Modern",
        description: "Bantu sekolah Indonesia mengadopsi teknologi canggih dalam pendidikan, mendukung visi Indonesia Emas 2045.",
      },
      {
        title: "Kesejahteraan Guru",
        description: "Kurangi beban administrasi guru dan tingkatkan fokus pada pengajaran berkualitas, sesuai dengan program kesejahteraan pendidik nasional.",
      },
      {
        title: "Akreditasi Sekolah",
        description: "Dukung peningkatan kualitas sekolah dengan metode pengajaran inovatif yang dapat meningkatkan nilai akreditasi.",
      },
      {
        title: "Pendidikan Berkualitas untuk Semua",
        description: "Bantu mewujudkan pemerataan pendidikan berkualitas dengan menyediakan umpan balik konsisten bagi semua siswa di berbagai daerah.",
      },
    ],
    
    ctaTitle: "Wujudkan Sekolah yang ",
    ctaSubtitle: "Bergabunglah dengan sekolah-sekolah terkemuka di Indonesia yang telah menggunakan Remarkably untuk meningkatkan kualitas pendidikan.",
    ctaButtonText: "Jadwalkan Demo Gratis",
    
    ctaFeatures: [
      "Panduan pengguna dalam Bahasa Indonesia",
      "Dukungan teknis lokal",
      "Pelatihan guru",
      "Kustomisasi sesuai kebutuhan sekolah",
      "Dashboard analitik seluruh sekolah"
    ],
    
    curriculumSection: {
      title: "Mendukung Kurikulum Indonesia",
      items: [
        "Kurikulum Merdeka",
        "Bahasa Indonesia SMP",
        "Bahasa Indonesia SMA",
        "Bahasa Inggris SMP",
        "Bahasa Inggris SMA",
        "Persiapan Asesmen Nasional",
        "Program IPS",
        "Program IPA",
        "Program Bahasa",
        "Sekolah Menengah Kejuruan"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default IndonesiaEducation; 