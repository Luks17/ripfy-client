import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./screens/AppNavigator";
import { AuthContext } from "./store/auth-context";
import { useCallback, useContext, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./screens/RootNavigator";
import { tryRefreshSession } from "./lib/network/session";
import ProvidersTree from "./components/ProvidersTree";
import { setupTrackPlayer } from "./lib/track-player/setup";
import TrackPlayer from "react-native-track-player";
import { playbackService } from "./lib/track-player/playbackService";

SplashScreen.preventAutoHideAsync();
TrackPlayer.registerPlaybackService(() => playbackService);

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) return <AppNavigator />;
  else return <RootNavigator />;
}

function AppSetup() {
  const [isAppReady, setIsAppReady] = useState(false);
  const { authenticate, clearSession } = useContext(AuthContext);

  const setup = useCallback(async () => {
    await tryRefreshSession(authenticate, clearSession);
    await setupTrackPlayer();
  }, []);

  useEffect(() => {
    setup().then(() => setIsAppReady(true));
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
    <ProvidersTree>
      <StatusBar style="light" />
      <AppSetup />
    </ProvidersTree>
  );
}
