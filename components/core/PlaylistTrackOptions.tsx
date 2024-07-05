import { Image, StyleSheet, Text, View } from "react-native";
import MiddleOverlayModal from "../modals/MiddleOverlayModal";
import { colors } from "../../lib/constants/colors";
import type { Song } from "../../lib/constants/responses/song";
import MenuBtn from "../buttons/MenuBtn";
import { useEffect } from "react";
import { useDeletePlaylistSongQuery } from "../../lib/hooks/queries/playlists/useDeletePlaylistSongQuery";
import type { Playlist } from "../../lib/constants/responses/playlist";

interface Props {
  showModal: boolean;
  closeModalHandler: () => void;
  targetTrack: Song | null;
  playlist: Playlist;
}

function PlaylistTrackOptions({
  showModal,
  closeModalHandler,
  targetTrack,
  playlist,
}: Props) {
  const { mutate, isSuccess, isPending } = useDeletePlaylistSongQuery();

  useEffect(() => {
    if (isSuccess) closeModalHandler();
  }, [isSuccess]);

  function deleteTrackBtnPressHandler(track: Song) {
    mutate({ song: track, playlist_id: playlist.id });
  }

  if (!targetTrack) return null;

  return (
    <MiddleOverlayModal
      isModalVisible={showModal}
      closeModalHandler={closeModalHandler}
    >
      <View style={styles.trackContainer}>
        <Image
          source={require("../../assets/unknown_artist.png")}
          resizeMode="contain"
          style={styles.imageContainer}
        />
        <Text style={styles.title}>{targetTrack.title}</Text>
      </View>
      <MenuBtn
        onPress={() => deleteTrackBtnPressHandler(targetTrack)}
        text="Remover música"
        icon="squared-minus"
        isPending={isPending}
      />
    </MiddleOverlayModal>
  );
}

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    columnGap: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.base300,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  title: {
    width: 200,
    color: colors.baseContent,
  },
});

export default PlaylistTrackOptions;
