import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppTabs } from "../lib/navigation/appTabs";
import SongsScreen from "../screens/App/SongsScreen";
import AddSong from "../components/core/AddSong";
import { useContext, useEffect } from "react";
import { tryRefreshSession } from "../lib/network/session";
import { AuthContext } from "../store/auth-context";
import Config from "../lib/network/config";
import { colors } from "../lib/constants/colors";
import PlaylistsNavigator from "./App/PlaylistNavigator";
import SongsNavigator from "./App/SongsNavigator";

function AppNavigator() {
  const { authenticate, clearSession } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => {
      tryRefreshSession(authenticate, clearSession);
    }, 1000 * Config.apiTokenExpirationTime);

    return () => clearInterval(timer);
  }, [authenticate, clearSession]);

  return (
    <AppTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.base100 },
      }}
    >
      <AppTabs.Screen
        name="SongsNavigator"
        component={SongsNavigator}
        options={{
          tabBarLabel: "Songs",
          tabBarIcon: () => {
            return (
              <FontAwesome6 name="music" size={22} color={colors.baseContent} />
            );
          },
        }}
      />
      <AppTabs.Screen
        name="PlaylistNavigator"
        component={PlaylistsNavigator}
        options={{
          tabBarLabel: "Playlists",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="playlist-music"
                size={30}
                color={colors.baseContent}
              />
            );
          },
        }}
      />
    </AppTabs.Navigator>
  );
}

export default AppNavigator;
