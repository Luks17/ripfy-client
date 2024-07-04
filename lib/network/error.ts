export enum ErrorTypes {
  LOGIN_FAIL = "Usuário ou senha inválido(s)...",
  USERNAME_ALREADY_USED = "Um usuário com esse nome já existe no banco de dados!",
  RESOURCE_ALREADY_EXISTS = "Este item já existe no banco de dados!",
  SERVICE_ERROR = "Houve um problema no servidor, tente novamente mais tarde!",
}

export class ClientError extends Error {
  constructor(error: string) {
    const errorType = ErrorTypes[error as keyof typeof ErrorTypes];
    super(errorType);
  }
}
