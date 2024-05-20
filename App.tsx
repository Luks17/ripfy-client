import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./screens/AppNavigator";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./screens/RootNavigator";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) return <AppNavigator />;
  else return <RootNavigator />;
}

export function AppSetup() {
  const [isAppReady, setIsAppReady] = useState(false);
  const { authenticate } = useContext(AuthContext);

  async function fetchToken() {
    const token = await AsyncStorage.getItem("auth-token");

    authenticate(token);
  }

  useEffect(() => {
    fetchToken()
      .then(() => setIsAppReady(true))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (isAppReady) SplashScreen.hideAsync();
  }, [isAppReady]);

  if (!isAppReady) return null;

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <StatusBar style="inverted" />
        <AppSetup />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
