import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AppTabs } from "../lib/navigation/appTabs";
import { useContext, useEffect } from "react";
import { tryRefreshSession } from "../lib/network/session";
import { AuthContext } from "../store/auth-context";
import Config from "../lib/network/config";
import { colors } from "../lib/constants/colors";
import PlaylistsNavigator from "./App/PlaylistNavigator";
import SongsNavigator from "./App/SongsNavigator";
import { addOpacity } from "../lib/ui/utils";

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
        tabBarStyle: {
          backgroundColor: colors.base100,
          borderTopWidth: 0,
          height: 54,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarInactiveTintColor: addOpacity(colors.secondaryContent, "99"),
        tabBarActiveTintColor: colors.secondary,
      }}
    >
      <AppTabs.Screen
        name="SongsNavigator"
        component={SongsNavigator}
        options={{
          tabBarLabel: "Songs",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="music-circle"
                size={25}
                color={color}
              />
            );
          },
        }}
      />
      <AppTabs.Screen
        name="PlaylistNavigator"
        component={PlaylistsNavigator}
        options={{
          tabBarLabel: "Playlists",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name="library-music" size={25} color={color} />
            );
          },
        }}
      />
    </AppTabs.Navigator>
  );
}

export default AppNavigator;
