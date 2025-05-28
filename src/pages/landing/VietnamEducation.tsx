import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const VietnamEducation: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | Giải pháp chấm điểm bằng AI cho Giáo dục Việt Nam",
    metaDescription: "Nâng cao hiệu quả giảng dạy với nền tảng chấm điểm bài luận bằng AI của Remarkably. Hỗ trợ chương trình giáo dục Việt Nam và tiết kiệm thời gian cho giáo viên.",
    
    heroTitle: "Giải Pháp AI Hiện Đại Cho Giáo Dục Việt Nam",
    heroSubtitle: "Tiết kiệm 80% thời gian chấm bài, giúp giáo viên tập trung vào giảng dạy chất lượng. Hỗ trợ cả tiếng Việt và tiếng Anh.",
    
    keyFeatures: [
      {
        title: "Hỗ Trợ Tiếng Việt",
        description: "Công nghệ AI hiểu và đánh giá bài viết tiếng Việt với độ chính xác cao, phù hợp với văn phong và ngữ pháp Việt Nam.",
      },
      {
        title: "Tuân Thủ Chương Trình Bộ GD&ĐT",
        description: "Thiết kế phù hợp với khung chương trình và tiêu chí đánh giá của Bộ Giáo dục và Đào tạo Việt Nam.",
      },
      {
        title: "Tự Động Hóa Chấm Điểm",
        description: "Giảm thời gian chấm từ 15 phút xuống chỉ còn 3 phút mỗi bài, giúp giáo viên tiết kiệm hàng trăm giờ mỗi năm học.",
      },
      {
        title: "Phân Tích Dữ Liệu Chi Tiết",
        description: "Theo dõi tiến bộ của học sinh qua thời gian, xác định điểm mạnh và điểm yếu để cải thiện kết quả học tập.",
      },
      {
        title: "Hỗ Trợ Thi THPT Quốc Gia",
        description: "Công cụ lý tưởng để chuẩn bị cho kỳ thi quan trọng với phản hồi chi tiết theo tiêu chí chấm điểm chính thức.",
      },
      {
        title: "Chấm Bài Viết Tay",
        description: "Hỗ trợ cả bài viết tay, phù hợp với điều kiện thi cử và làm bài tập tại Việt Nam.",
      },
    ],
    
    benefits: [
      {
        title: "Nâng Cao Chất Lượng Giáo Dục",
        description: "Giúp các trường học Việt Nam áp dụng công nghệ tiên tiến vào giảng dạy, đáp ứng mục tiêu đổi mới giáo dục quốc gia.",
      },
      {
        title: "Giảm Áp Lực Cho Giáo Viên",
        description: "Cải thiện điều kiện làm việc và sức khỏe tinh thần của giáo viên bằng cách giảm khối lượng công việc hành chính.",
      },
      {
        title: "Chuẩn Bị Kỹ Năng Thế Kỷ 21",
        description: "Phát triển kỹ năng viết và tư duy phản biện cho học sinh Việt Nam, chuẩn bị cho thành công trong kỷ nguyên số.",
      },
      {
        title: "Dữ Liệu Đáng Tin Cậy",
        description: "Cung cấp đánh giá khách quan, giúp nhà trường và phụ huynh có thông tin chính xác về tiến bộ học tập của học sinh.",
      },
    ],
    
    ctaTitle: "Đưa Trường Học Của Bạn Trở Nên ",
    ctaSubtitle: "Tham gia cùng các trường tiên phong tại Việt Nam đang sử dụng Remarkably để nâng cao chất lượng dạy và học.",
    ctaButtonText: "Đăng Ký Demo Miễn Phí",
    
    ctaFeatures: [
      "Hướng dẫn sử dụng bằng tiếng Việt",
      "Hỗ trợ kỹ thuật 24/7",
      "Đào tạo giáo viên",
      "Tùy chỉnh theo yêu cầu trường học",
      "Phân tích dữ liệu toàn trường"
    ],
    
    curriculumSection: {
      title: "Hỗ Trợ Chương Trình Giáo Dục Việt Nam",
      items: [
        "Ngữ Văn THCS",
        "Ngữ Văn THPT",
        "Tiếng Anh THCS",
        "Tiếng Anh THPT",
        "Luyện thi THPT Quốc Gia",
        "Chương trình tích hợp",
        "Chương trình nâng cao",
        "Tiếng Anh chuyên",
        "IELTS/TOEFL",
        "Các môn xã hội"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default VietnamEducation; 