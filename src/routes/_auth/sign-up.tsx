import { createFileRoute } from "@tanstack/react-router";
import SignUp from "@/app/routes/auth/sign-up";

export const Route = createFileRoute("/_auth/sign-up")({
	component: SignUp,
});
