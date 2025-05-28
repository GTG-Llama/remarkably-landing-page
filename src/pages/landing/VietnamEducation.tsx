import React from "react";
import LandingPageTemplate from "./LandingPageTemplate";

const VietnamEducation: React.FC = () => {
  const pageContent = {
    pageTitle: "Remarkably | Giải pháp chấm điểm bài luận tiếng Anh bằng AI cho Giáo dục Việt Nam",
    metaDescription: "Nâng cao hiệu quả giảng dạy tiếng Anh với nền tảng chấm điểm bài luận bằng AI của Remarkably. Hỗ trợ chương trình giáo dục Việt Nam và tiết kiệm thời gian cho giáo viên.",
    
    heroTitle: "Cách mạng hóa việc chấm điểm bài luận tiếng Anh tại Việt Nam",
    heroSubtitle: "Tiết kiệm 80% thời gian chấm bài và cung cấp phản hồi chất lượng cao cho học sinh. Chuyên biệt cho việc đánh giá bài luận tiếng Anh trong giáo dục Việt Nam.",
    
    keyFeatures: [
      {
        title: "Tập trung vào tiếng Anh",
        description: "AI của chúng tôi chuyên đánh giá bài luận tiếng Anh, cung cấp việc đánh giá chính xác cho các yêu cầu giáo dục của Việt Nam.",
      },
      {
        title: "Phù hợp với chương trình GDPT Việt Nam",
        description: "Được thiết kế để đáp ứng các yêu cầu của tiêu chuẩn chương trình giáo dục phổ thông và tiêu chí đánh giá tiếng Anh quốc gia.",
      },
      {
        title: "Chuẩn bị cho kỳ thi THPT Quốc gia",
        description: "Lý tưởng để giúp học sinh chuẩn bị cho các kỳ thi tiếng Anh quan trọng với phản hồi theo đúng phương án chấm điểm chính thức.",
      },
      {
        title: "Chấm điểm hiệu quả về thời gian",
        description: "Giảm thời gian chấm bài từ 15 phút xuống chỉ còn 3 phút mỗi bài luận, tiết kiệm hàng trăm giờ mỗi năm học.",
      },
      {
        title: "Phân tích toàn diện",
        description: "Theo dõi tiến độ học sinh theo thời gian, xác định điểm mạnh và điểm yếu trong việc viết tiếng Anh, và tạo báo cáo cho phụ huynh và ban lãnh đạo nhà trường.",
      },
      {
        title: "Hỗ trợ bài luận viết tay",
        description: "Hệ thống của chúng tôi có thể xử lý cả bài luận kỹ thuật số và viết tay bằng tiếng Anh, phù hợp với các điều kiện đánh giá khác nhau.",
      },
    ],
    
    benefits: [
      {
        title: "Xuất sắc về ngôn ngữ tiếng Anh",
        description: "Giúp các trường học Việt Nam duy trì danh tiếng về tiêu chuẩn tiếng Anh cao trong khi áp dụng công nghệ giáo dục.",
      },
      {
        title: "Phụ Có Khỏe Mạnh cho Giáo viên",
        description: "Giảm tình trạng kiệt sức của giáo viên và cải thiện sự cân bằng giữa công việc và cuộc sống bằng cách tự động hóa các nhiệm vụ chấm bài luận tiếng Anh tốn thời gian.",
      },
      {
        title: "Giáo dục dựa trên dữ liệu",
        description: "Hỗ trợ các mục tiêu của Chương trình Giáo dục Việt Nam cho việc giảng dạy và học tập dựa trên bằng chứng với phân tích chi tiết cho việc phát triển ngôn ngữ tiếng Anh.",
      },
      {
        title: "Nâng cao kết quả học tập của học sinh",
        description: "Cung cấp phản hồi nhất quán, chi tiết giúp học sinh cải thiện kỹ năng viết tiếng Anh và thành tích học tập.",
      },
    ],
    
    ctaTitle: "Biến trường học của bạn thành ",
    ctaSubtitle: "Tham gia cùng các trường học tiến bộ ở Việt Nam đã sử dụng Remarkably để chuyển đổi phương pháp đánh giá bài luận tiếng Anh.",
    ctaButtonText: "Đặt lịch Demo miễn phí",
    
    ctaFeatures: [
      "Chuyên môn đánh giá ngôn ngữ tiếng Anh",
      "Tiêu chí đánh giá tiếng Anh phù hợp với BGD&ĐT",
      "Đào tạo giáo viên và triển khai",
      "Bảng điều khiển phân tích tiếng Anh toàn trường",
      "Tùy chỉnh theo nhu cầu trường học của bạn"
    ],
    
    curriculumSection: {
      title: "Hỗ trợ chương trình giáo dục tiếng Anh của Việt Nam",
      items: [
        "Tiếng Anh THCS",
        "Tiếng Anh THPT",
        "Thi THPT Quốc gia môn Anh",
        "Chương trình tiếng Anh chuyên",
        "Trường quốc tế - tiếng Anh",
        "Cambridge First Certificate",
        "Cambridge Advanced",
        "IELTS",
        "TOEFL",
        "Chứng chỉ tiếng Anh Cambridge"
      ]
    }
  };

  return <LandingPageTemplate {...pageContent} />;
};

export default VietnamEducation; 