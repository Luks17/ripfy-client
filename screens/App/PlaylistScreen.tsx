import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../lib/constants/colors";
import SearchBar from "../../components/core/SearchBar";
import PlaylistComponent from "../../components/core/Playlist";
import { useGetPlaylistsQuery } from "../../lib/hooks/queries/playlists/useGetPlaylistsQuery";
import LoadingIndicator from "../../components/feedback/LoadingIndicator";
import type { Playlist } from "../../lib/constants/responses/playlist";

function PlaylistScreen() {
  const { data, isPending } = useGetPlaylistsQuery();

  function renderPlaylist({ item }: ListRenderItemInfo<Playlist>) {
    return <PlaylistComponent title={item.title} nTracks={57} />;
  }

  if (isPending) return <LoadingIndicator />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={SearchBar}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.playlistsContainer}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaylist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base300,
  },
  playlistsContainer: {
    paddingVertical: 10,
  },
});

export default PlaylistScreen;
