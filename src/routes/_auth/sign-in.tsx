import { createFileRoute, useSearch } from "@tanstack/react-router";
import z from "zod";
import SignInCollabrationPage from "@/app/routes/collabration/sign-in";

const validateSearch = z.object({
	tenant: z.enum(["vendor", "membership"]),
});

const RouteComponent = () => {
	const { tenant } = useSearch({ from: "/_auth/sign-in" });
	const OTPComponent = {
		vendor: SignInCollabrationPage,
		membership: SignInCollabrationPage,
	}[tenant];

	return <OTPComponent />;
};

export const Route = createFileRoute("/_auth/sign-in")({
	validateSearch,
	component: RouteComponent,
});
