import { cn } from "@/lib/utils";

export function HomeHero() {
	return (
		<section className="bg-background py-16 text-center">
			<p className="text-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-6">
				PREMIUM ATELIER EXPERIENCE
			</p>
			<h1
				className={cn(
					"text-[96px] font-extrabold text-on-surface uppercase mb-6 leading-24 tracking-[-4.8px] font-heads",
				)}
			>
				COLABB WITH
				<br />
				NIÉN
			</h1>
			<p className="text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
				Khám phá không gian nghệ thuật đương đại, nơi tinh hoa truyền thống hòa
				quyện cùng tư duy sáng tạo mới.
			</p>
		</section>
	);
}
