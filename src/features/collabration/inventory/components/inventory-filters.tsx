import { Download, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MATERIAL_CATEGORY_TABS } from "@/features/collabration/inventory/constant";
import { cn } from "@/lib/utils";

interface InventoryFiltersProps {
	activeTab: string;
	onTabChange: (tab: string) => void;
}

export function InventoryFilters({
	activeTab,
	onTabChange,
}: InventoryFiltersProps) {
	return (
		<div className="flex items-center justify-between mb-4">
			<div className="flex items-center gap-2">
				{MATERIAL_CATEGORY_TABS.map((tab) => (
					<button
						key={tab.value}
						type="button"
						onClick={() => onTabChange(tab.value)}
						className={cn(
							"px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
							activeTab === tab.value
								? "bg-primary text-on-primary"
								: "bg-surface-container text-on-surface-variant hover:bg-surface-container-high",
						)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className="flex items-center gap-2">
				<Button variant="ghost" size="sm" className="gap-2">
					<SlidersHorizontal className="size-4" />
					Bộ lọc
				</Button>
				<Button variant="ghost" size="sm" className="gap-2">
					<Download className="size-4" />
					Xuất Excel
				</Button>
			</div>
		</div>
	);
}
