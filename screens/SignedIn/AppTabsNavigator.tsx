import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AppTabs } from "../../lib/navigation/appTabs";
import { colors } from "../../lib/constants/colors";
import PlaylistsNavigator from "./AppTabs/PlaylistNavigator";
import SongsNavigator from "./AppTabs/SongsNavigator";
import { addOpacity } from "../../lib/ui/utils";
import MiniPlayer from "../../components/core/MiniPlayer";

function AppTabsNavigator() {
  return (
    <>
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
      <MiniPlayer />
    </>
  );
}

export default AppTabsNavigator;
