import { QueryCache, QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { handleServerError } from "@/lib/handle-server-error";
import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: (failureCount, error) => {
				if (import.meta.env.DEV) console.log({ failureCount, error });

				if (failureCount >= 0 && import.meta.env.DEV) return false;
				if (failureCount > 3 && import.meta.env.PROD) return false;

				return !(
					error instanceof AxiosError &&
					[401, 403].includes(error.response?.status ?? 0)
				);
			},
			refetchOnWindowFocus: import.meta.env.PROD,
			staleTime: 10 * 1000, // 10s
		},
		mutations: {
			onError: (error) => {
				handleServerError(error);

				if (error instanceof AxiosError) {
					if (error.response?.status === 304) {
						toast.error("Content not modified!");
					}
				}
			},
		},
	},
	queryCache: new QueryCache({
		onError: (error) => {
			if (error instanceof AxiosError) {
				if (error.response?.status === 401) {
					toast.error("Session expired!");
					// useAuthStore.getState().auth.reset();
					// const redirect = `${router.history.location.href}`;
					// router.navigate({ to: "/sign-in", search: { redirect } });
				}
				if (error.response?.status === 500) {
					toast.error("Internal Server Error!");
					// Only navigate to error page in production to avoid disrupting HMR in development
					if (import.meta.env.PROD) {
						// router.navigate({ to: "/500" });
					}
				}
				if (error.response?.status === 403) {
					// router.navigate("/forbidden", { replace: true });
				}
			}
		},
	}),
});

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		context: {
			queryClient,
		},
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
