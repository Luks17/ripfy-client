import { useContext, useEffect } from "react";
import { tryRefreshSession } from "../lib/network/session";
import { AuthContext } from "../store/auth-context";
import Config from "../lib/network/config";
import { SignedInStack } from "../lib/navigation/signedInStack";
import AppTabsNavigator from "./SignedIn/AppTabsNavigator";

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
    </SignedInStack.Navigator>
  );
}

export default SignedInNavigator;
