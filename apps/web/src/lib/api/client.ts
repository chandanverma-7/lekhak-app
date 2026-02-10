import { API_BASE_URL } from "./config";
import { buildApiError } from "./errors";
import { getCsrfToken } from "./csrf";
import { withRetry } from "./retry";
import { refreshAuthToken } from "./auth-refresh";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

async function doFetch<TResponse, TBody>(
  path: string,
  options: RequestOptions<TBody>,
  allowRefresh = true
): Promise<TResponse> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: options.method ?? "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": getCsrfToken() ?? "",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    signal: options.signal,
  });

  // 🔁 auto refresh on 401
  if (res.status === 401 && allowRefresh) {
    await refreshAuthToken();
    return doFetch<TResponse, TBody>(path, options, false);
  }

  if (!res.ok) {
    throw await buildApiError(res);
  }

  return res.json() as Promise<TResponse>;
}

export async function apiRequest<TResponse, TBody = unknown>(
  path: string,
  options: RequestOptions<TBody> = {}
): Promise<TResponse> {
  // 🔁 retry wrapper
  return withRetry(() => doFetch<TResponse, TBody>(path, options), 3);
}
