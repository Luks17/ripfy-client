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

const queryClient = new QueryClient();

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <AppScreen />;
  } else {
    return (
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
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
        <StatusBar style="auto" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
