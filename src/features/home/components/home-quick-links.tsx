import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const QUICK_LINKS = [
	{ label: "QUÊN MẬT KHẨU?", active: false, link: "/forgot-password" },
	{ label: "ĐĂNG KÝ", active: false, link: "/sign-up" },
	{ label: "VỀ TRANG CHỦ", active: true, link: "/" },
] as const;

export function HomeQuickLinks() {
	return (
		<section className="bg-background py-6">
			<div className="flex items-center justify-center flex-wrap">
				{QUICK_LINKS.map((item, index) => (
					<span key={item.label} className="flex items-center gap-3">
						{index > 0 && (
							<span className="text-on-surface-variant text-2xl mx-12">•</span>
						)}
						<Link
							to={item.link}
							className={cn(
								"text-label-sm text-on-surface-variant hover:text-on-surface transition-colors",
								item.active && "border-b border-on-surface font-bold",
							)}
						>
							{item.label}
						</Link>
					</span>
				))}
			</div>
		</section>
	);
}
