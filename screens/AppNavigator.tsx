import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppTabs } from "../lib/navigation/appTabs";
import SongsScreen from "../screens/App/SongsScreen";
import PlaylistScreen from "./App/PlaylistScreen";
import AddSong from "../components/core/AddSong";
import { useContext, useEffect } from "react";
import { tryRefreshSession } from "../lib/network/session";
import { AuthContext } from "../store/auth-context";
import Config from "../lib/network/config";
import { colors } from "../lib/constants/colors";
import AddPlaylist from "../components/core/AddPlaylist";

function AppNavigator() {
  const { authenticate, clearSession } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => {
      tryRefreshSession(authenticate, clearSession);
    }, 1000 * Config.apiTokenExpirationTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AppTabs.Navigator
      screenOptions={{
        headerRightContainerStyle: { paddingHorizontal: 16 },
        headerStyle: { backgroundColor: colors.base100 },
        tabBarStyle: { backgroundColor: colors.base100 },
        headerTintColor: colors.baseContent,
      }}
    >
      <AppTabs.Screen
        name="Songs"
        component={SongsScreen}
        options={{
          headerRight: () => <AddSong />,
          tabBarIcon: () => {
            return (
              <FontAwesome6 name="music" size={22} color={colors.baseContent} />
            );
          },
        }}
      />
      <AppTabs.Screen
        name="Playlists"
        component={PlaylistScreen}
        options={{
          headerRight: () => <AddPlaylist />,
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
