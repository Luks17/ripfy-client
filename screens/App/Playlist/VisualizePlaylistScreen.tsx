import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { PlaylistStackParamList } from "../../../lib/navigation/playlistStack";
import { useCallback, useLayoutEffect, useState } from "react";
import type { Song } from "../../../lib/constants/responses/song";
import {
  type ListRenderItemInfo,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import LoadingIndicator from "../../../components/feedback/LoadingIndicator";
import Track from "../../../components/core/Track";
import SearchBar from "../../../components/core/SearchBar";
import { colors } from "../../../lib/constants/colors";
import { useGetPlaylistSongsQuery } from "../../../lib/hooks/queries/playlists/useGetPlaylistSongsQuery";
import PlaylistTrackOptions from "../../../components/options-menus/PlaylistTrackOptions";

type Props = NativeStackScreenProps<
  PlaylistStackParamList,
  "VisualizePlaylist"
>;

function VisualizePlaylistScreen({ navigation, route }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [longPressTargetTrack, setLongPressTargetTrack] = useState<null | Song>(
    null
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.playlist.title,
    });
  }, []);

  const { data, isPending } = useGetPlaylistSongsQuery(
    route.params.playlist.id,
    searchQuery
  );

  const searchUpdateHandler = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const openModal = (song: Song) => {
    setLongPressTargetTrack(song);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  function renderTrack({ item }: ListRenderItemInfo<Song>) {
    return <Track song={item} longPressHandler={openModal} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={
          <SearchBar
            initialSearch={searchQuery}
            onChange={searchUpdateHandler}
          />
        }
        ListEmptyComponent={isPending ? <LoadingIndicator /> : null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.songsContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderTrack}
      />
      <PlaylistTrackOptions
        showModal={isModalOpen}
        closeModalHandler={closeModal}
        targetTrack={longPressTargetTrack}
        playlist={route.params.playlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base300,
  },
  songsContainer: {
    paddingVertical: 10,
    alignSelf: "center",
  },
});

export default VisualizePlaylistScreen;
