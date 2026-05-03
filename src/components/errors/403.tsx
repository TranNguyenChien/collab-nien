import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import type { FC } from "react";

const Forbidden: FC = () => {
	return (
		<main className="grow flex flex-row items-stretch">
			<section className="relative w-full md:w-1/2 min-h-100 md:h-auto overflow-hidden">
				<div className="absolute inset-0 bg-surface-container-low">
					<img
						alt="Exclusive Entrance"
						className="w-full h-full object-cover"
						data-alt="A sophisticated close-up of a heavy walnut door with brass details in a minimalist art gallery setting. The lighting is soft and dramatic, highlighting the natural grain of the wood and the warm cream-colored limestone walls. The aesthetic is extremely high-end and editorial, following an organic color palette of deep browns and warm off-whites. The scene evokes a feeling of exclusivity and quiet authority."
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9s29YaB8YY-4Ge89p6MVIeKBaXqbtNvXDJ5hBmWNJJyfg8iPgXPt6jY9Id3zhwxuV3_qgi5BTyc8o_NqWhjGKX6H3fDvGdiuvxvp-V-_XhHwj4fdCTu3M4bSN2TDX2ZsSWhor8Yn6EZIQTAplSjthl3f_HwETv7rtyBjnyX6MSrwVF6TT8wL8U1S4p1lzlbG9DLhKhJyHmKV9FI6to2KChL5Yire63SkwOC0VzYxqGDUi11Ux9q6qCt0dX4rxzwUb01fO6pUh4Kg"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-background/20 to-transparent"></div>
				</div>
				<div className="absolute bottom-12 left-12 p-8 bg-surface/40 backdrop-blur-xl rounded-lg max-w-xs hidden lg:block">
					<span className="text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2 block">
						Cấp bậc giới hạn
					</span>
					<p className="text-sm text-on-surface leading-relaxed">
						Không gian này được bảo mật để duy trì tính toàn vẹn của các tác
						phẩm nghệ thuật kỹ thuật số đang được lưu trữ.
					</p>
				</div>
			</section>
			<section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-surface">
				<div className="max-w-xl w-full">
					<div className="mb-12">
						<span className="inline-block px-3 py-1 bg-primary-container/10 text-primary rounded-full text-[0.6875rem] font-bold tracking-widest uppercase mb-6">
							403 - Quyền truy cập
						</span>
						<h1 className="text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-[0.9] mb-8">
							Không gian <br /> dành riêng.
						</h1>
						<div className="w-16 h-1 bg-primary mb-8"></div>
					</div>
					<p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12 font-body font-light">
						Rất tiếc, tài khoản của bạn hiện không có quyền truy cập vào khu vực
						này. Đây là không gian giới hạn dành cho các cấp bậc thành viên cụ
						thể của{" "}
						<span className="font-bold text-primary italic">
							SEN NGHỆ THUẬT
						</span>
						.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-6">
						<a
							className="group relative px-8 py-4 bg-primary text-on-primary rounded-lg font-bold transition-all duration-300 hover:scale-[0.98] active:scale-95 flex items-center justify-center w-full sm:w-auto overflow-hidden"
							href="/"
						>
							<span className="relative z-10">Quay lại Bảng điều khiển</span>
							<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
						</a>
						<Link
							className="px-8 py-4 text-primary font-bold transition-all duration-300 hover:underline underline-offset-8 flex items-center justify-center w-full sm:w-auto gap-2"
							to="/"
						>
							Yêu cầu nâng cấp quyền
							<MoveRight />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Forbidden;
