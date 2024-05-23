import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppTabs } from "../lib/navigation/appTabs";
import SongsScreen from "../screens/App/SongsScreen";
import PlaylistScreen from "./App/PlaylistScreen";

function AppNavigator() {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen
        name="Songs"
        component={SongsScreen}
        options={{
          tabBarIcon: () => {
            return <FontAwesome6 name="music" size={22} color="black" />;
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
                color="black"
              />
            );
          },
        }}
      />
    </AppTabs.Navigator>
  );
}

export default AppNavigator;
