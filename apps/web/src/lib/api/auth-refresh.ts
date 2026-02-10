let refreshPromise: Promise<void> | null = null;

async function refreshAuthToken() {
  if (!refreshPromise) {
    refreshPromise = fetch("/auth/refresh", {
      method: "POST",
      credentials: "include",
    }).then(res => {
      if (!res.ok) throw new Error("Refresh failed");
    }).finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}
