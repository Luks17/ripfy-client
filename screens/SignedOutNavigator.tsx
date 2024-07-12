import { colors } from "../lib/constants/colors";
import { SignedOutStack } from "../lib/navigation/signedOutStack";
import HomeScreen from "./SignedOut//HomeScreen";
import LoginScreen from "./SignedOut/LoginScreen";
import SignupScreen from "./SignedOut/SignupScreen";

function SignedOutNavigator() {
  return (
    <SignedOutStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.base300 },
        headerTintColor: colors.baseContent,
      }}
    >
      <SignedOutStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <SignedOutStack.Screen name="Login" component={LoginScreen} />
      <SignedOutStack.Screen name="SignUp" component={SignupScreen} />
    </SignedOutStack.Navigator>
  );
}

export default SignedOutNavigator;
