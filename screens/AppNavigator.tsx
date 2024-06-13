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
        headerRight: () => <AddSong />,
        headerRightContainerStyle: { paddingHorizontal: 16 },
        headerStyle: { backgroundColor: colors.base300 },
        tabBarStyle: { backgroundColor: colors.base300 },
        headerTintColor: colors.baseContent,
      }}
    >
      <AppTabs.Screen
        name="Songs"
        component={SongsScreen}
        options={{
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
