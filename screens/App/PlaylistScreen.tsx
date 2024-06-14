import { StyleSheet, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import SearchBar from "../../components/core/SearchBar";
import Playlist from "../../components/core/Playlist";

function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.playlistsContainer}>
        <Playlist title="Gym" nTracks={57} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base300,
  },
  playlistsContainer: {
    paddingVertical: 30,
  },
});

export default PlaylistScreen;
