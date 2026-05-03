import { Link } from "@tanstack/react-router";
import { BrushIcon, MoveLeft, MoveRight } from "lucide-react";
import type { FC } from "react";
import { Marquee } from "@/components/ui/marquee";

const NotFound: FC = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-12">
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
				<h1 className="font-headline font-black text-[30vw] leading-none opacity-[0.06] text-on-surface">
					404
				</h1>
			</div>
			<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
				<div className="col-span-5 order-1 flex justify-center">
					<div className="relative group">
						<div className="absolute -inset-4 bg-surface-container-low rounded-lg transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
						<div className="relative aspect-3/4 w-full max-w-sm overflow-hidden rounded-lg shadow-sm">
							<img
								className="w-full h-full object-cover filter sepia-[0.15] contrast-[1.05]"
								data-alt="A minimalist architectural detail of a curved limestone staircase in a sun-drenched gallery. The lighting is soft and high-key, casting gentle shadows that emphasize the organic, sculptural form of the stone. The color palette is composed of warm merino, cream, and subtle earthen browns, echoing a modern atelier aesthetic. The composition is clean and editorial, focusing on the intersection of light and material texture."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4v1ssmnyr40Y34Hit_xUf2fHmWv2OI6urO3aRwbGe6MTkkPbZLx1CzVn_NN_ZGoZbxaLpOIWWPMoNumbeR1jAP3oXMx2rW5s_UhUsTCVmMb8UGEc8dTR9qVfsSoIX4s2USkb0BEd-n5cl5lUDJoNoHMgRY5okRhTn1uvC3CGkB_HclnZXE7m4Jr-0qC3R7bU6D5bp-PTqXL0VNTRQ8JHbzbq8vwEmjq-7aYiaaqJhShNAlrdTAfzEUQfCJQPlVY2IAk35p-4kv8"
								alt=""
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 h-32 w-32 bg-surface-container-highest/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-outline-variant/10">
							<BrushIcon />
						</div>
					</div>
				</div>
				<div className="col-span-7 order-1  flex flex-col items-start space-y-8">
					<div className="space-y-4">
						<span className="font-label text-label-sm tracking-[0.2em] uppercase text-primary font-semibold block">
							SEN NGHỆ THUẬT
						</span>
						<h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
							Lạc lối giữa <br className="block" />
							không gian.
						</h2>
					</div>
					<p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
						Có vẻ như địa chỉ bạn đang tìm kiếm đã được di dời hoặc không còn
						tồn tại trong kho lưu trữ của chúng tôi.
					</p>
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
						<Link
							className="group relative px-8 py-4 bg-primary text-on-primary rounded-lg font-semibold tracking-wide shadow-sm hover:bg-secondary transition-all duration-300 flex items-center gap-3"
							to="/"
						>
							<MoveLeft />
							Quay lại Trang chủ
							<div className="absolute inset-x-0 top-0 h-px bg-white/10 rounded-t-lg"></div>
						</Link>
						<a
							className="font-body text-primary font-semibold flex items-center gap-2 group hover:gap-3 transition-all duration-300 underline-offset-8 hover:underline"
							href="/support"
						>
							Liên hệ hỗ trợ
							<span
								className="material-symbols-outlined text-lg"
								data-icon="east"
							>
								<MoveRight />
							</span>
						</a>
					</div>
					<div className="pt-12 flex items-center gap-4 text-outline">
						<div className="h-px w-12 bg-outline-variant"></div>
						<span className="text-xs font-label tracking-widest uppercase">
							Curation &amp; Design
						</span>
					</div>
				</div>
			</div>
			<Marquee
				repeat={4}
				className="absolute bottom-0 left-0 w-full uppercase text-on-surface-variant tracking-[0.4em] pointer-events-none px-6 py-6 text-sm"
			>
				Lạc lối giữa không gian — Art • Soul • Curation • Essence — Lost in
				Space
			</Marquee>
		</div>
	);
};

export default NotFound;
