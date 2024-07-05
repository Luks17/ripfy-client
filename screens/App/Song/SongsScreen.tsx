import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../../lib/constants/colors";
import Track from "../../../components/core/Track";
import { useGetSongsQuery } from "../../../lib/hooks/queries/songs/useGetSongsQuery";
import LoadingIndicator from "../../../components/feedback/LoadingIndicator";
import type { Song } from "../../../lib/constants/responses/song";
import SearchBar from "../../../components/core/SearchBar";
import { useCallback, useState } from "react";
import TrackOptions from "../../../components/options-menus/TrackOptions";

function SongsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [longPressTargetTrack, setLongPressTargetTrack] = useState<null | Song>(
    null
  );

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

export default SongsScreen;
