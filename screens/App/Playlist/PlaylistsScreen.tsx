import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../../lib/constants/colors";
import SearchBar from "../../../components/core/SearchBar";
import PlaylistComponent from "../../../components/core/Playlist";
import { useGetPlaylistsQuery } from "../../../lib/hooks/queries/playlists/useGetPlaylistsQuery";
import LoadingIndicator from "../../../components/feedback/LoadingIndicator";
import type { Playlist } from "../../../lib/constants/responses/playlist";
import { useCallback, useState } from "react";

function PlaylistsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isPending } = useGetPlaylistsQuery(searchQuery);

  const searchUpdateHandler = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  function renderPlaylist({ item }: ListRenderItemInfo<Playlist>) {
    return <PlaylistComponent playlist={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <SearchBar
            initialSearch={searchQuery}
            onChange={searchUpdateHandler}
          />
        }
        ListEmptyComponent={isPending ? <LoadingIndicator /> : null}
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
    paddingHorizontal: 20,
  },
});

export default PlaylistsScreen;
