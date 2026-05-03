import axios, {
	AxiosError,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "@/stores/auth-store";

const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "https://nien-cms.dhnson.vn/api/v1";
const REFRESH_ENDPOINT = "/auth/refresh";
const REQUEST_TIMEOUT = 30_000;
const UNAUTHORIZED_STATUS = 401;

type RetirableRequestConfig = InternalAxiosRequestConfig & {
	_retry?: boolean;
	_skipAuth?: boolean;
};

interface RefreshTokenResponse {
	accessToken: string;
}

const refreshClient = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
	timeout: REQUEST_TIMEOUT,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export const httpClient = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
	timeout: REQUEST_TIMEOUT,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

let refreshPromise: Promise<string> | null = null;

function setAuthorizationHeader(config: RetirableRequestConfig, token: string) {
	if (!config.headers) {
		return;
	}

	config.headers.set("Authorization", `Bearer ${token}`);
}

async function refreshAccessToken() {
	if (refreshPromise) {
		return refreshPromise;
	}
	const refreshToken = useAuthStore.getState().auth.user?.refreshToken;
	// Share a single refresh request between concurrent 401 responses.
	refreshPromise = refreshClient
		.post<RefreshTokenResponse>(REFRESH_ENDPOINT, {
			refreshToken,
		})
		.then((response) => {
			const newAccessToken = response.data?.accessToken;

			if (!newAccessToken) {
				throw new Error("Refresh endpoint did not return accessToken");
			}

			useAuthStore.getState().auth.setAccessToken(newAccessToken);
			return newAccessToken;
		})
		.catch((error) => {
			useAuthStore.getState().auth.reset();
			throw error;
		})
		.finally(() => {
			refreshPromise = null;
		});

	return refreshPromise;
}

httpClient.interceptors.request.use(
	(config) => {
		const requestConfig = config as RetirableRequestConfig;

		if (requestConfig._skipAuth || requestConfig.url === REFRESH_ENDPOINT) {
			return requestConfig;
		}

		const accessToken = useAuthStore.getState().auth.accessToken;
		if (accessToken) {
			setAuthorizationHeader(requestConfig, accessToken);
		}

		return requestConfig;
	},
	(error: AxiosError) => Promise.reject(error),
);

httpClient.interceptors.response.use(
	(response: AxiosResponse) => response.data,
	async (error: AxiosError) => {
		const originalRequest = error.config as RetirableRequestConfig | undefined;
		const statusCode = error.response?.status;
		const isRefreshCall = originalRequest?.url === REFRESH_ENDPOINT;

		if (
			!originalRequest ||
			statusCode !== UNAUTHORIZED_STATUS ||
			originalRequest._retry ||
			isRefreshCall
		) {
			return Promise.reject(error);
		}

		originalRequest._retry = true;

		try {
			const newAccessToken = await refreshAccessToken();
			setAuthorizationHeader(originalRequest, newAccessToken);

			return httpClient(originalRequest);
		} catch (refreshError) {
			return Promise.reject(refreshError);
		}
	},
);

export const httpsClient = httpClient;

export { API_BASE_URL };

export default httpClient;

export type ResData<T> = {
	status: number;
	message: string | null;
	data: T;
};
