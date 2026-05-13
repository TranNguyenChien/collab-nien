import { createFileRoute } from "@tanstack/react-router";
import { AddInventoryPage } from "@/app/routes/collabration/inventory/inventory-add";

export const Route = createFileRoute("/collabration/inventory/add")({
	component: AddInventoryPage,
});
