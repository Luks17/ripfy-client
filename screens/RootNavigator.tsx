import { RootStack } from "../lib/navigation/root";
import { colors } from "../lib/ui/colors";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

function RootNavigator() {
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

export default RootNavigator;
