import { createFileRoute } from "@tanstack/react-router";
import { OperationsPage } from "@/app/routes/collabration/manufacturing/operations";

export const Route = createFileRoute("/collabration/manufacturing/operations/")(
	{
		component: OperationsPage,
	},
);
