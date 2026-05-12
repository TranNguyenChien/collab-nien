import { createFileRoute, redirect } from "@tanstack/react-router";
import CollabrationLayout from "@/components/layouts/collabration";
import { getCookie } from "@/lib/cookies";

export const Route = createFileRoute("/collabration")({
	beforeLoad: () => {
		const access = getCookie("collabration");
		if (access) {
			redirect({ to: "/collabration", throw: true });
		}
	},
	component: CollabrationLayout,
});
