import { createFileRoute } from "@tanstack/react-router";
import { EquipmentPage } from "@/app/routes/collabration/manufacturing/equipment";

export const Route = createFileRoute("/collabration/manufacturing/equipment/")({
	component: EquipmentPage,
});
