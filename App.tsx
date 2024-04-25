import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootStack } from "./lib/navigation/root";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AppScreen from "./screens/AppScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="SignUp" component={SignupScreen} />
          <RootStack.Screen name="App" component={AppScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
