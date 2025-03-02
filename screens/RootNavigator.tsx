import { colors } from "../lib/constants/colors";
import { RootStack } from "../lib/navigation/root";
import HomeScreen from "./Root//HomeScreen";
import LoginScreen from "./Root/LoginScreen";
import SignupScreen from "./Root/SignupScreen";

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
