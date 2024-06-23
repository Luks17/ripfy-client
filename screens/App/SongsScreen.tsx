import { FlatList, type ListRenderItemInfo, StyleSheet, View } from "react-native";
import { colors } from "../../lib/constants/colors";
import Track from "../../components/core/Track";
import { useGetSongsQuery } from "../../lib/hooks/queries/songs/useGetSongsQuery";
import LoadingIndicator from "../../components/feedback/LoadingIndicator";
import type { Song } from "../../lib/constants/responses/song";
import SearchBar from "../../components/core/SearchBar";
import { useState } from "react";
import TrackOptions from "../../components/core/TrackOptions";

function SongsScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [longPressTargetTrack, setLongPressTargetTrack] = useState("");

  const { data, isPending } = useGetSongsQuery();

  const openModal = (id: string) => {
    setLongPressTargetTrack(id);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  function renderTrack({ item }: ListRenderItemInfo<Song>) {
    return <Track song={item} longPressHandler={openModal} />;
  }

  if (isPending) return <LoadingIndicator />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={SearchBar}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.songsContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderTrack}
      />
      <TrackOptions
        showModal={isModalOpen}
        closeModalHandler={closeModal}
        targetTrackId={longPressTargetTrack}
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
