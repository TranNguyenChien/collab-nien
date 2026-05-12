import { Gauge, ShieldCheck } from "lucide-react";

export function CollabInsightCards() {
	return (
		<div className="grid grid-cols-3 gap-6">
			<div className="bg-surface-container-lowest rounded-lg p-6 flex items-center gap-4 shadow">
				<div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shrink-0 ">
					<ShieldCheck className="w-7 h-7 text-primary" />
				</div>
				<div>
					<p className="text-label-sm text-on-surface-variant uppercase tracking-widest">
						Đánh giá tin nhiệm
					</p>
					<p className="text-headline-md font-extrabold text-on-surface">
						4.8
						<span className="text-body-lg text-on-surface-variant font-normal">
							/5.0
						</span>
					</p>
				</div>
			</div>

			<div className="bg-surface-container-lowest rounded-lg p-6 flex items-center gap-4 shadow">
				<div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shrink-0 ">
					<Gauge className="w-7 h-7 text-primary" />
				</div>
				<div>
					<p className="text-label-sm text-on-surface-variant uppercase tracking-widest">
						Năng suất hiện tại
					</p>
					<p className="text-headline-md font-extrabold text-on-surface">82%</p>
				</div>
			</div>

			<div className="bg-inverse-surface rounded-lg p-6 flex flex-col gap-3 shadow">
				<p className="text-label-sm text-surface uppercase tracking-[0.2em]">
					Latest Insights
				</p>
				<p className="text-inverse-on-surface font-bold italic leading-relaxed text-body-lg">
					"Sự tỉ mỉ trong từng đường kim mũi chỉ định nghĩa đẳng cấp của một
					xưởng may nghệ thuật."
				</p>
			</div>
		</div>
	);
}
