import AddSong from "../../../components/core/AddSong";
import { colors } from "../../../lib/constants/colors";
import { SongsStack } from "../../../lib/navigation/songsStack";
import AddSongToPlaylistScreen from "./Song/AddSongToPlaylistScreen";
import SongsScreen from "./Song/SongsScreen";

function SongsNavigator() {
  return (
    <SongsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.base100 },
        headerTintColor: colors.baseContent,
      }}
    >
      <SongsStack.Screen
        name="Songs"
        component={SongsScreen}
        options={{
          headerRight: () => <AddSong />,
        }}
      />
      <SongsStack.Screen
        name="AddSongToPlaylist"
        component={AddSongToPlaylistScreen}
      />
    </SongsStack.Navigator>
  );
}

export default SongsNavigator;
