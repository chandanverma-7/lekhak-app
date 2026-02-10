export interface ApiSuccess<T> {
  data: T;
  requestId: string;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  email: string;
}
export interface UserDto {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}
export interface CreateJobRequest {
  title: string;
  description: string;
  language: string;
}

export interface JobDto {
  id: string;
  title: string;
  description: string;
  language: string;
  status: "queued" | "processing" | "completed" | "failed";
  createdAt: string;
}
export interface AuditLogDto {
  id: string;
  jobId: string;
  model: string;
  inputHash: string;
  outputHash: string;
  createdAt: string;
}
