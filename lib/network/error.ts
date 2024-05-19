export enum ErrorTypes {
  LOGIN_FAIL = "Usuário ou senha inválido(s)...",
}

export class ClientError extends Error {
  constructor(error: string) {
    const errorType = ErrorTypes[error as keyof typeof ErrorTypes];
    super(errorType);
  }
}
