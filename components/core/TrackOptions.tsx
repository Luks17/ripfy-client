import { Image, StyleSheet, Text, View } from "react-native";
import MiddleOverlayModal from "../modals/MiddleOverlayModal";
import { colors } from "../../lib/constants/colors";
import type { Song } from "../../lib/constants/responses/song";
import MenuBtn from "../buttons/MenuBtn";
import { useDeleteSongQuery } from "../../lib/hooks/queries/songs/useDeleteSongQuery";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { SongsStackParamList } from "../../lib/navigation/songsStack";

interface Props {
  showModal: boolean;
  closeModalHandler: () => void;
  targetTrack: Song | null;
}

type SongsStackNavigationProps = NativeStackNavigationProp<
  SongsStackParamList,
  "Songs"
>;

function TrackOptions({ showModal, closeModalHandler, targetTrack }: Props) {
  const { navigate } = useNavigation<SongsStackNavigationProps>();

  const delTrackMutation = useDeleteSongQuery();

  useEffect(() => {
    if (delTrackMutation.isSuccess) closeModalHandler();
  }, [delTrackMutation.isSuccess]);

  function openPlaylistSelectionScreen(track: Song) {
    closeModalHandler();
    navigate("AddSongToPlaylist", track);
  }

  function deleteTrackBtnPressHandler(track_id: string) {
    delTrackMutation.mutate(track_id);
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
        onPress={() => openPlaylistSelectionScreen(targetTrack)}
        text="Adicionar a playlist"
        icon="playlist-add"
      />
      <MenuBtn
        onPress={() => deleteTrackBtnPressHandler(targetTrack.id)}
        text="Deletar música"
        icon="squared-minus"
        isPending={delTrackMutation.isPending}
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

export default TrackOptions;
