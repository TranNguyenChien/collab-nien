import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/app/routes/home";

export const Route = createFileRoute("/")({ component: HomePage });
