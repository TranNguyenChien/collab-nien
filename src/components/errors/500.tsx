import { useNavigate } from "@tanstack/react-router";
import { FlagIcon, RefreshCwIcon } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";

const ServerError: FC = () => {
	const navigate = useNavigate();

	const handleReloadPage = () => {
		window.location.reload();
	};

	const handleReportIssue = () => {
		navigate({ to: "/" });
	};

	return (
		<main className="grow pt-32 pb-20 px-8 max-w-screen-2xl mx-auto w-full">
			<div className="grid min-h-153.5 items-center">
				<div className="col-span-12 lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1">
					<div className="space-y-4">
						<span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant text-[0.6875rem] font-bold tracking-[0.2em] uppercase rounded-full">
							Lỗi hệ thống 500
						</span>
						<h1 className="font-display text-5xl md:text-7xl font-bold text-on-background leading-[1.1] tracking-tight">
							Điều gì đó đã đi chệch quỹ đạo.
						</h1>
						<p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
							Chúng tôi vô cùng xin lỗi vì sự gián đoạn này. Máy chủ đang gặp
							phải một lỗi kỹ thuật không mong muốn trong khi xử lý yêu cầu của
							bạn.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
						<Button size="lg" className="px-8 py-4" onClick={handleReloadPage}>
							<RefreshCwIcon />
							Thử tải lại trang
						</Button>
						<Button
							size="lg"
							className="px-8 py-4 bg-primary-container text-primary"
							onClick={handleReportIssue}
						>
							<FlagIcon />
							Báo cáo sự cố
						</Button>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6 lg:col-start-8 order-1 lg:order-2">
					<div className="relative group">
						<div className="absolute -top-6 -right-6 w-full h-full bg-surface-container-low rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
						<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-container/30 rounded-full blur-2xl -z-10"></div>
						<div className="aspect-4/5 overflow-hidden rounded-lg bg-surface-container shadow-sm">
							<img
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] contrast-[1.05]"
								data-alt="A macro abstract photograph focusing on the intricate textures of raw linen and polished walnut wood being carefully aligned. The lighting is soft, warm, and sun-drenched, creating an organic atelier atmosphere typical of a high-end design studio. Subtle earthy tones of merino brown and cream dominate the palette, with sharp focus on a single frayed edge being smoothed by a blurred hand. The mood is calm, sophisticated, and reflects a moment of precise adjustment in a complex creative process."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmHOQ8KzCQyydPWkF3SBzNQZMqBIs2gBiJb50uO0vIPO3JTA53Abf-yGxfnCFCrPQQn1OUxF3kjk0IR_LQiE-vp1HWmuLXRwNxWkShmEsWOFMy92OapvzRt3rX6rCt7SPNy84fTcgZwjM6eUBxmYvtx_duVk7SxeBOh9eS7cFK1TRtBanZ-NKvv1g9z7su7bg9pZEonKf3FFMJknsrcMzc6-eurx3a8qbddFfDe6guu1nXeLwUIEcHnke-eizwmZGl6oGqEo1gzo"
								alt=""
							/>
						</div>
						<div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-6 rounded-lg shadow-[0_32px_64px_-12px_rgba(40,24,13,0.04)] max-w-60 hidden md:block">
							<p className="font-headline font-bold text-on-surface leading-tight">
								Sự tỉ mỉ nằm ở từng chi tiết nhỏ nhất.
							</p>
							<p className="text-xs text-on-surface-variant mt-2">
								Chúng tôi đang tinh chỉnh lại hệ thống để mang lại trải nghiệm
								hoàn hảo cho bạn.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ServerError;
