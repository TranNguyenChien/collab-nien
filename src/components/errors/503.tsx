import { TimerIcon } from "lucide-react";
import type { FC } from "react";
import { Marquee } from "@/components/ui/marquee";

const Maintenance: FC = () => {
	return (
		<div className="grow flex flex-col items-center justify-center px-6 pt-32 pb-16">
			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				<div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-medium text-xs tracking-widest uppercase">
							<TimerIcon className="size-4" />
							Dự kiến trở lại: 08:00 | 24.05.2024
						</div>
						<h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1]">
							Không gian đang được{" "}
							<span className="text-primary italic">tinh chỉnh.</span>
						</h1>
					</div>
					<p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-xl font-body">
						Cảm ơn bạn đã ghé thăm. Hiện tại, chúng tôi đang tạm dừng hoạt động
						để bảo trì và nâng cấp trải nghiệm kỹ thuật số. Dịch vụ sẽ sớm trở
						lại với một diện mạo hoàn mỹ hơn.
					</p>
					<div className="flex flex-wrap gap-4 pt-4">
						<a
							className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-lg font-semibold transition-all hover:opacity-90 shadow-sm"
							href="/"
						>
							Theo dõi cập nhật
						</a>
						<a
							className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant text-primary rounded-lg font-semibold hover:bg-surface-container-low transition-colors"
							href="/"
						>
							Liên hệ tư vấn
						</a>
					</div>
					<Marquee
						repeat={4}
						className="font-headline font-bold text-4xl tracking-widest uppercase text-on-surface-variant opacity-40"
					>
						<span>Thủ công &amp; Nghệ thuật</span>
						<span className="mx-8 opacity-20">/</span>
						<span>Tinh hoa Á Đông</span>
						<span className="mx-8 opacity-20">/</span>
						<span>Sáng tạo bền vững</span>
						<span className="mx-8 opacity-20">/</span>
						<span>Cảm hứng vô tận</span>
					</Marquee>
				</div>
				<div className="lg:col-span-5 order-1 lg:order-2">
					<div className="relative group">
						<div className="absolute -top-4 -right-4 w-full h-full bg-surface-container-highest rounded-lg -z-10 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500"></div>
						<div className="aspect-4/5 overflow-hidden rounded-lg bg-surface-container-low shadow-xl">
							<img
								className="w-full h-full object-cover grayscale-20 sepia-10 brightness-95"
								data-alt="A serene, high-end editorial photograph of a quiet artisan workshop bathed in soft morning sunlight filtering through linen curtains. In the foreground, rolls of raw organic silk in warm ivory and sand tones are neatly stacked on a weathered walnut table. The atmosphere is peaceful and contemplative, capturing a moment of stillness and preparation. The aesthetic is minimalist yet tactile, perfectly matching the organic and earthy palette of a premium boutique atelier."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwsKFIKNfzPbpKCdV-4zLms4X_JZNjrlR9SkoIVucXtyf1cASRSlVHQ3r_NzA5fF8aT1iFWfGwykQP1gH23-5Fdg-c5P78v0gPojGb4ZEYDjNcXT3O_Rr4hmq9nSbzdiB_bAJ9gCT6c7iCaOeo5T0otRQ57VUtCSKtWwlwSNvRGo977kJwhsd_6b_7EWI2b2dELs3ypupcxD3VQmi0Pw2EOLeL-n-KE54hZuOCgIX1PmyJBPmuojH8g3yVXCK6qEHibHmyiAXA1DI"
								alt=""
							/>
						</div>
						<div className="absolute bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-60">
							<span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">
								Trạng thái hệ thống
							</span>
							<div className="flex items-center gap-2 mb-1">
								<div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
								<span className="text-sm font-semibold text-on-surface">
									Đang tối ưu hóa 92%
								</span>
							</div>
							<p className="text-xs text-on-surface-variant font-body">
								Cơ sở dữ liệu hình ảnh đang được đồng bộ hóa lại.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Maintenance;
