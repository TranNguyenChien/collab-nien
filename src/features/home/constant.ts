import { Sparkles } from "lucide-react";
import Machine from "@/assets/icons/machine.svg?react";

export const CARDS = [
	{
		Icon: Sparkles,
		title: "HỘI VIÊN",
		description:
			"Tham gia cộng đồng sáng tạo và nhận những ưu đãi đặc quyền dành riêng cho nghệ sĩ và người yêu nghệ thuật.",
		cta: "GIA NHẬP NGAY",
		variant: "default",
		className: "bg-surface-container-lowest",
		pathname: "/",
	},
	{
		Icon: Machine,
		title: "ĐỐI TÁC SẢN XUẤT",
		description:
			"Kết nối và hiện thực hóa những ý tưởng thiết kế độc bản cùng đội ngũ sản xuất chuyên nghiệp từ chúng tôi.",
		cta: "HỢP TÁC SẢN XUẤT",
		variant: "outline",
		className: "bg-surface-container-highest",
		pathname: "/collabration/sign-in",
	},
] as const;
