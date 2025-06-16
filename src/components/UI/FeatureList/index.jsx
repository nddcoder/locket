import React from "react";
import {
  Camera,
  Video,
  Upload,
  Paintbrush,
  Palette,
  Sparkles,
  Rocket,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Camera className="w-8 h-8 text-blue-500" />,
    title: "Chụp ảnh nhanh",
    description: "Chỉ với một click, ghi lại khoảnh khắc đáng nhớ.",
  },
  {
    icon: <Video className="w-8 h-8 text-red-500" />,
    title: "Quay video - Truy cập sớm",
    description: "Giữ nút để quay video tối đa 10 giây.",
  },
  {
    icon: <Upload className="w-8 h-8 text-green-600" />,
    title: "Đăng ảnh & video",
    description: "Tải ảnh hoặc video từ máy lên tường nhà bạn.",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-purple-600" />,
    title: "Đổi màu caption",
    description: "Tuỳ chỉnh màu sắc caption cho thật nổi bật.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: "Forums cộng đồng",
    description: "Chia sẻ và khám phá màu sắc caption độc đáo từ mọi người.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-600" />,
    title: "Tính năng mới - Sắp ra mắt",
    description: "Tralalero Tralala.",
  },
];

const FeatureList = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-lovehouse font-bold text-center mb-2">
        ✨Locket Dio Feature
      </h2>
      <div className="grid sm:grid-cols-2 gap-2">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center gap-4 p-5 bg-base-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-base-content">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
