import { AlertTriangle, Banknote, TrendingUp, Users } from "lucide-react";
import { MATERIAL_STATS } from "@/features/collabration/inventory/constant";

const STAT_CARDS = [
	{
		label: "TỔNG TỒN KHO",
		value: MATERIAL_STATS.totalStock.toLocaleString("vi-VN"),
		badge: MATERIAL_STATS.stockGrowth,
		badgeClass: "text-green-700 bg-green-50",
		icon: TrendingUp,
	},
	{
		label: "CẦN NHẬP THÊM",
		value: String(MATERIAL_STATS.needRestock),
		badge: "Khẩn cấp",
		badgeClass: "text-error bg-error-container",
		icon: AlertTriangle,
	},
	{
		label: "NHÀ CUNG CẤP",
		value: String(MATERIAL_STATS.suppliers),
		badge: "Đối tác",
		badgeClass: "text-on-surface-variant bg-surface-container",
		icon: Users,
	},
	{
		label: "GIÁ TRỊ KHO",
		value: `${MATERIAL_STATS.warehouseValue}`,
		badge: "VND",
		badgeClass: "text-on-surface-variant bg-surface-container",
		icon: Banknote,
	},
] as const;

export function InventoryStats() {
	return (
		<div className="grid grid-cols-4 gap-4 mb-6">
			{STAT_CARDS.map((card) => {
				const Icon = card.icon;
				return (
					<div
						key={card.label}
						className="bg-surface-container-lowest rounded-lg p-5 shadow"
					>
						<p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-3">
							{card.label}
						</p>
						<div className="flex items-end gap-2">
							<p className="text-headline-md font-extrabold text-on-surface">
								{card.value}
							</p>
							<span
								className={`text-label-sm font-semibold px-2 py-0.5 rounded-full mb-1 ${card.badgeClass}`}
							>
								{card.badge}
							</span>
						</div>
						<Icon className="w-4 h-4 text-on-surface-variant mt-2 opacity-50" />
					</div>
				);
			})}
		</div>
	);
}
