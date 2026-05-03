import { createFileRoute } from "@tanstack/react-router";
import SignInCollabrationPage from "@/app/routes/collabration/sign-in";

export const Route = createFileRoute("/collabration/_auth/sign-in")({
	component: SignInCollabrationPage,
});
