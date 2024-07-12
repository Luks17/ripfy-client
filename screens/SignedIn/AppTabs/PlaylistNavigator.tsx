import AddPlaylist from "../../../components/core/AddPlaylist";
import { colors } from "../../../lib/constants/colors";
import { PlaylistStack } from "../../../lib/navigation/playlistStack";
import PlaylistsScreen from "./Playlist/PlaylistsScreen";
import VisualizePlaylistScreen from "./Playlist/VisualizePlaylistScreen";

function PlaylistsNavigator() {
  return (
    <PlaylistStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.base100 },
        headerTintColor: colors.baseContent,
      }}
    >
      <PlaylistStack.Screen
        name="Playlists"
        component={PlaylistsScreen}
        options={{
          headerRight: () => <AddPlaylist />,
        }}
      />
      <PlaylistStack.Screen
        name="VisualizePlaylist"
        component={VisualizePlaylistScreen}
      />
    </PlaylistStack.Navigator>
  );
}

export default PlaylistsNavigator;
