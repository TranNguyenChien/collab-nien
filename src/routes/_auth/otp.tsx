import { createFileRoute, useSearch } from "@tanstack/react-router";
import z from "zod";
import OTPCollabrationPage from "@/app/routes/collabration/otp";

const validateSearch = z.object({
	email: z.email(),
	tenant: z.enum(["vendor", "membership"]),
});

const RouteComponent = () => {
	const { tenant } = useSearch({ from: "/_auth/otp" });
	const OTPComponent = {
		vendor: OTPCollabrationPage,
		membership: OTPCollabrationPage,
	}[tenant];

	return <OTPComponent />;
};

export const Route = createFileRoute("/_auth/otp")({
	validateSearch,
	component: RouteComponent,
});
