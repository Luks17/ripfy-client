import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { PlaylistStackParamList } from "../../../lib/navigation/playlistStack";
import { useCallback, useLayoutEffect, useState } from "react";
import { useGetSongsQuery } from "../../../lib/hooks/queries/songs/useGetSongsQuery";
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
import TrackOptions from "../../../components/core/TrackOptions";
import { colors } from "../../../lib/constants/colors";

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
    navigation.setOptions({ title: route.params.title });
  }, []);

  const { data, isPending } = useGetSongsQuery(searchQuery);

  const searchUpdateHandler = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const openModal = (song: Song) => {
    setLongPressTargetTrack(song);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  function renderTrack({ item }: ListRenderItemInfo<Song>) {
    if (isPending) return <LoadingIndicator />;
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.songsContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderTrack}
      />
      <TrackOptions
        showModal={isModalOpen}
        closeModalHandler={closeModal}
        targetTrack={longPressTargetTrack}
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
