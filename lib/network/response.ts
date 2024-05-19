import { ClientError } from "./error";

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
