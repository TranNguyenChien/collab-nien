import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getCookie } from "@/lib/cookies";

export const Route = createFileRoute("/collabration")({
	beforeLoad: () => {
		const access = getCookie("collabration");
		if (access) {
			redirect({ to: "/collabration", throw: true });
		}
	},
	component: () => <Outlet />,
});
