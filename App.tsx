import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStack } from "./lib/navigation/root";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AppScreen from "./screens/AppScreen";
import AuthContextProvider from "./store/auth-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="SignUp" component={SignupScreen} />
            <RootStack.Screen name="App" component={AppScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
