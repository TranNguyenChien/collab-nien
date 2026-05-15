import { createFileRoute } from "@tanstack/react-router";
import { CapacityPage } from "@/app/routes/collabration/capacity";

export const Route = createFileRoute("/collabration/capacity/")({
	component: CapacityPage,
});
