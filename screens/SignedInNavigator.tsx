import { useContext, useEffect } from "react";
import { tryRefreshSession } from "../lib/network/session";
import { AuthContext } from "../store/auth-context";
import Config from "../lib/network/config";
import { SignedInStack } from "../lib/navigation/signedInStack";
import AppTabsNavigator from "./SignedIn/AppTabsNavigator";
import AppTrackPlayerScreen from "./SignedIn/AppTrackPlayerScreen";
import {
  CardStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";

function SignedInNavigator() {
  const { authenticate, clearSession } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => {
      tryRefreshSession(authenticate, clearSession);
    }, 1000 * Config.apiTokenExpirationTime);

    return () => clearInterval(timer);
  }, [authenticate, clearSession]);

  return (
    <SignedInStack.Navigator screenOptions={{ headerShown: false }}>
      <SignedInStack.Screen name="AppTabs" component={AppTabsNavigator} />
      <SignedInStack.Screen
        name="AppTrackPlayer"
        options={{
          presentation: "modal",
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          gestureEnabled: true,
          gestureDirection: "vertical",
        }}
        component={AppTrackPlayerScreen}
      />
    </SignedInStack.Navigator>
  );
}

export default SignedInNavigator;
