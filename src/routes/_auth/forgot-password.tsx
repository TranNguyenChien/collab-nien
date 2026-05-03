import { createFileRoute } from "@tanstack/react-router";
import ForgotPassword from "@/app/routes/auth/forgot-password";

export const Route = createFileRoute("/_auth/forgot-password")({
	component: ForgotPassword,
});
