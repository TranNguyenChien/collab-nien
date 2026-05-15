import { createFileRoute } from "@tanstack/react-router";
import { CollabManufacturingPage } from "@/app/routes/collabration/manufacturing";

export const Route = createFileRoute("/collabration/manufacturing/")({
	component: CollabManufacturingPage,
});
