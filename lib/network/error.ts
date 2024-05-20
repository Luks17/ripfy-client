export enum ErrorTypes {
  LOGIN_FAIL = "Usuário ou senha inválido(s)...",
  USERNAME_ALREADY_USED = "Um usuário com esse nome já existe no banco de dados!",
}

export class ClientError extends Error {
  constructor(error: string) {
    const errorType = ErrorTypes[error as keyof typeof ErrorTypes];
    super(errorType);
  }
}
