import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NotFound from "@/components/errors/404";
import ServerError from "@/components/errors/500";
import { Toaster } from "@/components/ui/sonner";
import { queryClient } from "@/router";
// Styles
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Collab With NIEN" },
		],
		links: [
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
		],
	}),
	component: RootComponent,
	notFoundComponent: () => <NotFound />,
	errorComponent: () => <ServerError />,
});

function RootComponent() {
	return (
		<html lang="vi" suppressHydrationWarning>
			<head suppressHydrationWarning>
				<HeadContent />
			</head>
			<body suppressHydrationWarning>
				<QueryClientProvider client={queryClient}>
					<Outlet />
					<Toaster duration={4000} />
					{import.meta.env.MODE === "development" && (
						<>
							<ReactQueryDevtools buttonPosition="bottom-left" />
							<TanStackRouterDevtools position="bottom-right" />
						</>
					)}
				</QueryClientProvider>
				<Scripts />
			</body>
		</html>
	);
}
