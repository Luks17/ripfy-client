import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStack } from "./lib/navigation/root";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AppScreen from "./screens/AppScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { colors } from "./lib/ui/colors";

const queryClient = new QueryClient();

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <StatusBar style="inverted" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
