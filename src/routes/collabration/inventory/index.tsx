import { createFileRoute } from "@tanstack/react-router";
import { CollabInventoryPage } from "@/app/routes/collabration/inventory";

export const Route = createFileRoute("/collabration/inventory/")({
	component: CollabInventoryPage,
});
