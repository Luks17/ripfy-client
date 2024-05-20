import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStack } from "./lib/navigation/root";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AppScreen from "./screens/AppScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { colors } from "./lib/ui/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <AppScreen />;
  } else {
    return (
      <RootStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.base300 },
          headerTintColor: colors.baseContent,
        }}
      >
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="SignUp" component={SignupScreen} />
      </RootStack.Navigator>
    );
  }
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
