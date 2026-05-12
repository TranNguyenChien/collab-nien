import { createFileRoute } from "@tanstack/react-router";
import { CollabDashboardPage } from "@/app/routes/collabration";

export const Route = createFileRoute("/collabration/")({
	component: CollabDashboardPage,
});
