import { useMutation } from "@tanstack/react-query";
import { handleServerError } from "@/lib/handle-server-error";
// import httpClient from "@/lib/httpsClient";

// async function requestForgotPassword(
// 	payload: ForgotPasswordPayload,
// ): Promise<ForgotPasswordResponse> {
// 	return httpClient.post("/auth/forgot-password", payload);
// }

export function useForgotPassword() {
	return useMutation({
		onError: handleServerError,
	});
}
