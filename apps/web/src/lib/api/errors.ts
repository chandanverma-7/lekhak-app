export class ApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function buildApiError(res: Response) {
  try {
    const data = await res.json();
    return new ApiError(
      data.message ?? "API Error",
      res.status,
      data.code
    );
  } catch {
    return new ApiError("Unknown API Error", res.status);
  }
}
