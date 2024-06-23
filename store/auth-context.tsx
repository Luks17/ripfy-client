import AsyncStorage from "@react-native-async-storage/async-storage";
import { type ReactNode, createContext, useState } from "react";
import { REFRESH_TOKEN } from "../lib/constants/tokens";
import type { AuthExpectedData } from "../lib/constants/responses/auth";

interface ProviderProps {
  children: ReactNode;
}

export type AuthenticateFunction = (authData: AuthExpectedData) => void;
export type ClearSessionFunction = () => void;

type Value = {
  token: string | null;
  isLoggedIn: boolean;
  authenticate: AuthenticateFunction;
  clearSession: ClearSessionFunction;
};

export const AuthContext = createContext<Value>({} as Value);

export default function AuthContextProvider({ children }: ProviderProps) {
  const [authToken, setAuthToken] = useState<null | string>(null);

  function authenticate(authData: AuthExpectedData) {
    setAuthToken(authData.access_token);
    AsyncStorage.setItem(REFRESH_TOKEN, authData.refresh_token);
  }

  function clearSession() {
    setAuthToken(null);
    AsyncStorage.removeItem(REFRESH_TOKEN);
  }

  const value: Value = {
    token: authToken,
    isLoggedIn: !!authToken,
    authenticate,
    clearSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
