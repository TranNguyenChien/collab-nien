import { ManufacturingCapacityDetail } from "@/features/collabration/manufacturing/components/manufacturing-capacity-detail";
import { ManufacturingEquipment } from "@/features/collabration/manufacturing/components/manufacturing-equipment";
import { ManufacturingPageHeader } from "@/features/collabration/manufacturing/components/manufacturing-page-header";
import { ManufacturingPriorityOrders } from "@/features/collabration/manufacturing/components/manufacturing-priority-orders";
import { ManufacturingStatCards } from "@/features/collabration/manufacturing/components/manufacturing-stat-cards";

export function CollabManufacturingPage() {
	return (
		<div className="flex flex-col bg-background">
			<main className="flex-1">
				<div className="page-wrap py-8">
					<ManufacturingPageHeader />
					<ManufacturingStatCards />
					<ManufacturingPriorityOrders />
					<ManufacturingCapacityDetail />
					<ManufacturingEquipment />
				</div>
			</main>
		</div>
	);
}
