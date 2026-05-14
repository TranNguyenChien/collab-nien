import { createFileRoute } from "@tanstack/react-router";
import { AddAccessoriesPage } from "@/app/routes/collabration/accessories/accessories-add";

export const Route = createFileRoute("/collabration/accessories/add")({
	component: AddAccessoriesPage,
});
