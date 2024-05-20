import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

type Value = {
  token: string | null;
  isLoggedIn: boolean;
  authenticate: (token: string | null) => void;
};

export const AuthContext = createContext<Value>({
  token: null,
  isLoggedIn: false,
  authenticate: () => { },
});

export default function AuthContextProvider({ children }: ProviderProps) {
  const [authToken, setAuthToken] = useState<null | string>(null);

  function authenticate(token: string | null) {
    setAuthToken(token);

    if (token) AsyncStorage.setItem("auth-token", token);
  }

  const value: Value = {
    token: authToken,
    isLoggedIn: !!authToken,
    authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
