import { AlertTriangle, Boxes, ClipboardList } from "lucide-react";
import { FABRIC_STATS } from "@/features/collabration/accessories/constant";

const STAT_CARDS = [
	{
		label: "TỔNG CHỦNG LOẠI",
		value: String(FABRIC_STATS.totalTypes),
		icon: Boxes,
	},
	{
		label: "CHỜ NHẬP KHO",
		value: String(FABRIC_STATS.waitingImport),
		icon: ClipboardList,
	},
	{
		label: "DƯỚI ĐỊNH MỨC",
		value: String(FABRIC_STATS.belowMinimum).padStart(2, "0"),
		icon: AlertTriangle,
	},
] as const;

export function FabricsStats() {
	return (
		<div className="grid grid-cols-3 gap-4">
			{STAT_CARDS.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.label}
						className="bg-surface-container-lowest rounded-lg p-5 shadow flex items-center gap-4"
					>
						<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
							<Icon className="w-5 h-5 text-on-surface-variant" />
						</div>
						<div>
							<p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
								{card.label}
							</p>
							<p className="text-headline-md font-extrabold text-on-surface">
								{card.value}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
