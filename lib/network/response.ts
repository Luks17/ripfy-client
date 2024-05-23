export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type AuthExpectedData = {
  access_token: string;
  refresh_token: string;
};
