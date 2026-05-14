import { createFileRoute } from "@tanstack/react-router";
import { CollabAccessoriesPage } from "@/app/routes/collabration/accessories";

export const Route = createFileRoute("/collabration/accessories/")({
	component: CollabAccessoriesPage,
});
