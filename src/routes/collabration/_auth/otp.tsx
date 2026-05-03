import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import OTPCollabrationPage from "@/app/routes/collabration/otp";

const validateSearch = z.object({
	email: z.email(),
});

export const Route = createFileRoute("/collabration/_auth/otp")({
	validateSearch,
	component: OTPCollabrationPage,
});
